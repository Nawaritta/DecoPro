using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.ARFoundation;

public class ClearScreen : MonoBehaviour
{
    private ARRaycastManager raycastManager;
    private Camera arCamera;
    void Start()
    {
        raycastManager = GetComponent<ARRaycastManager>();
        arCamera = GetComponent<Camera>();
    }

    public void ClearScreenOnClick()
    {
        GameObject[] allObjects = GameObject.FindGameObjectsWithTag("Furniture");
        foreach (GameObject obj in allObjects)
        {
            Destroy(obj);
        }
    }
}
