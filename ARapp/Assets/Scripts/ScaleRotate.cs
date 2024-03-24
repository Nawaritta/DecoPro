using UnityEngine;
using UnityEngine.UI;

public class ScaleRotate : MonoBehaviour
{
    private Slider scale;
    private Slider rotate;
   /*
    public float scaleMin;
    public float scaleMax;
    public float rotateMin;
    public float rotateMax;
   */
    private Slider xSlider, ySlider, zSlider;
    

    public bool scriptEnabled = true;

    void Start()
    {
        scale = GameObject.Find("ScaleSlider").GetComponent<Slider>();
       // scale.maxValue = scaleMax;
        //scale.minValue = scaleMin;
        scale.onValueChanged.AddListener(ScaleUpdate);

        rotate = GameObject.Find("RotateSlider").GetComponent<Slider>();
        //rotate.maxValue = rotateMax;
        //rotate.minValue = rotateMin;
        rotate.onValueChanged.AddListener(RotateUpdate);

        xSlider = GameObject.Find("xSlider").GetComponent<Slider>();
        xSlider.maxValue += transform.position.x;
        xSlider.minValue += transform.position.x;
        xSlider.onValueChanged.AddListener(XUpdate);

        ySlider = GameObject.Find("ySlider").GetComponent<Slider>();
        ySlider.maxValue += transform.position.y;
        ySlider.minValue += transform.position.y;
        ySlider.onValueChanged.AddListener(YUpdate);

        zSlider = GameObject.Find("zSlider").GetComponent<Slider>();
        zSlider.maxValue += transform.position.z;
        zSlider.minValue += transform.position.z;
        zSlider.onValueChanged.AddListener(ZUpdate);

        Button confirmButton = GameObject.Find("ConfirmBtn").GetComponent<Button>();
        confirmButton.onClick.AddListener(ToggleScriptEnabled);
    }

    void ToggleScriptEnabled()
    {
        scriptEnabled = !scriptEnabled;

        zSlider.maxValue += transform.position.z;
        zSlider.minValue += transform.position.z;
        ySlider.maxValue += transform.position.y;
        ySlider.minValue += transform.position.y;
        xSlider.maxValue += transform.position.x;
        xSlider.minValue += transform.position.x;
    }

    public void ScaleUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.localScale = new Vector3(value, value, value);

    }

    public void RotateUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.localEulerAngles = new Vector3(transform.localEulerAngles.x, value, transform.localEulerAngles.z);
    }

    public void XUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.position = new Vector3(value, transform.position.y, transform.localPosition.z);
    }

    public void YUpdate(float value)
    {
        if (!scriptEnabled)
            return;
     
        transform.position = new Vector3(transform.position.x, value, transform.localPosition.z);
    }

    public void ZUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.position = new Vector3(transform.position.x, transform.position.y, value);
    }
}
