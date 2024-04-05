using JetBrains.Annotations;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using UnityEngine.EventSystems;
using UnityEngine.UI;


[RequireComponent(typeof(ARRaycastManager))]
public class FurniturePlacement : MonoBehaviour
{
    public GameObject Furniture;
   // public ARSessionOrigin sessionOrigin;
    public ARRaycastManager raycastManager;
    public ARPlaneManager planeManager;
    private bool renderingEnabled = true;
    public GameObject currentItem;
    public GameObject controlPanel;
    public GameObject menuPanel;
    public GameObject categoriesPanel;

    [SerializeField]
    private Camera arCamera;

    private List<ARRaycastHit> raycastHits = new List<ARRaycastHit>();

    private void Start()
    {
        controlPanel.gameObject.SetActive(false);

    }

    public void ToggleRenderingEnabled()
    {
        currentItem = null;
        renderingEnabled = true;
        controlPanel.gameObject.SetActive(false);
        menuPanel.GetComponent<Animator>().SetBool("isHide", false);
    }

    private void Update()
    {
        if (Input.touchCount > 0)
        {

            if (Input.GetTouch(0).phase == TouchPhase.Began)
            {
                //Select item
                Ray ray = arCamera.ScreenPointToRay(Input.GetTouch(0).position);
                RaycastHit hitObject;
                if (Physics.Raycast(ray, out hitObject) && currentItem == null)
                {
                    if (hitObject.transform.tag == "Furniture")
                    {
                        ChangeSelectedObject(hitObject.transform.gameObject);
                    }
                }

                if (currentItem == null && Furniture != null)
                {
                    //place item
                    bool collision = raycastManager.Raycast(Input.GetTouch(0).position, raycastHits, TrackableType.PlaneWithinPolygon);
                    if (collision && isButtonPressed() == false && renderingEnabled)
                    {
                        currentItem = Instantiate(Furniture);
                        Furniture = null;
                        controlPanel.gameObject.SetActive(true);
                        menuPanel.GetComponent<Animator>().SetBool("isHide", true);
                        categoriesPanel.GetComponent<Animator>().SetBool("isDisplay", false);

                        renderingEnabled = false;
                        currentItem.transform.position = raycastHits[0].pose.position;
                        currentItem.transform.rotation = raycastHits[0].pose.rotation;

                    }
                    //hide plans
                    foreach (var planes in planeManager.trackables)
                    {
                        planes.gameObject.SetActive(false);
                    }
                    planeManager.enabled = false;
                }
            }
        }

    }
    public bool isButtonPressed()
    {
        // Check if any button is currently selected

        if (EventSystem.current.currentSelectedGameObject?.GetComponents<Button>() == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    public void SwitchFurniture(GameObject furniture)
    {
        Furniture = furniture;
    }

    void ChangeSelectedObject(GameObject selected)
    {
        currentItem = selected;
        currentItem.GetComponent<ScaleRotate>().scriptEnabled = true; // allow the rotation
        controlPanel.gameObject.SetActive(true); // show the control panel
        menuPanel.GetComponent<Animator>().SetBool("isHide", true); 
        categoriesPanel.GetComponent<Animator>().SetBool("isDisplay", false);
       
    }

    public void ClearCurrent() {

        renderingEnabled = true;
        if (currentItem != null)
        {
            Destroy(currentItem);
            
        }
        currentItem = null;
        controlPanel.gameObject.SetActive(false);
        menuPanel.GetComponent<Animator>().SetBool("isHide", false);
    }

}