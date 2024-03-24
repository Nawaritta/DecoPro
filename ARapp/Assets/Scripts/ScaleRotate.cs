using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.ARFoundation;

public class ScaleRotate : MonoBehaviour
{
    private Slider scale;
    private Slider rotate;
    private Slider xSlider, ySlider, zSlider;
    private GameObject currentItem;



    public bool scriptEnabled = true;

    void Start()
    {
       
        scale = GameObject.Find("ScaleSlider").GetComponent<Slider>();
        scale.onValueChanged.AddListener(ScaleUpdate);

        rotate = GameObject.Find("RotateSlider").GetComponent<Slider>();
        rotate.onValueChanged.AddListener(RotateUpdate);

        xSlider = GameObject.Find("xSlider").GetComponent<Slider>();
        xSlider.onValueChanged.AddListener(XUpdate);

        ySlider = GameObject.Find("ySlider").GetComponent<Slider>();
        ySlider.onValueChanged.AddListener(YUpdate);

        zSlider = GameObject.Find("zSlider").GetComponent<Slider>();
        zSlider.onValueChanged.AddListener(ZUpdate);

        Button confirmButton = GameObject.Find("ConfirmBtn").GetComponent<Button>();
        confirmButton.onClick.AddListener(ToggleScriptEnabled);
    }

    
    void ToggleScriptEnabled()
    {
        scriptEnabled = !scriptEnabled;
        zSlider.value = (zSlider.minValue + zSlider.maxValue) / 2f;
        ySlider.value = (ySlider.minValue + ySlider.maxValue) / 2f;
        xSlider.value = (xSlider.minValue + xSlider.maxValue) / 2f;

        scale.value = 1; 
        rotate.value = 1;
    }
    
    public void ScaleUpdate(float value)
    {
        //if (!scriptEnabled)
        // return;

        currentItem = FindObjectOfType<FurniturePlacement>().currentItem;
        if (this.gameObject == currentItem)
            transform.localScale = new Vector3(value, value, value);            

    }

    public void RotateUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        currentItem = FindObjectOfType<FurniturePlacement>().currentItem;
        if (this.gameObject == currentItem)
            transform.localEulerAngles = new Vector3(transform.localEulerAngles.x, value, transform.localEulerAngles.z);
    }

    public void XUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        currentItem = FindObjectOfType<FurniturePlacement>().currentItem;
        if (this.gameObject == currentItem)
            transform.position = new Vector3(value, transform.position.y, transform.localPosition.z);
    }

    public void YUpdate(float value)
    {
        if (!scriptEnabled)
            return;

        currentItem = FindObjectOfType<FurniturePlacement>().currentItem;
        if (this.gameObject == currentItem)
            transform.position = new Vector3(transform.position.x, value, transform.localPosition.z);
    }

    public void ZUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        currentItem = FindObjectOfType<FurniturePlacement>().currentItem;
        if (this.gameObject == currentItem)
            transform.position = new Vector3(transform.position.x, transform.position.y, value);
    }
}
