using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScaleRotate : MonoBehaviour
{
    private Slider scale;
    private Slider rotate;
    public float scaleMin;
    public float scaleMax;
    public float rotatMin;
    public float rotatMax;
    private bool scriptEnabled = true;

    void Start()
    {
        scale = GameObject.Find("ScaleSlider").GetComponent<Slider>();
        scale.maxValue = scaleMax;
        scale.minValue = scaleMin;
        scale.onValueChanged.AddListener(ScaleUpdate);

        rotate = GameObject.Find("RotateSlider").GetComponent<Slider>();
        rotate.maxValue = rotatMax;
        rotate.minValue = rotatMin;
        rotate.onValueChanged.AddListener(RotateUpdate);

        Button confirmButton = GameObject.Find("ConfirmBtn").GetComponent<Button>();
        confirmButton.onClick.AddListener(ToggleScriptEnabled);
        // touch object --> scriptEnabled = true

    }

    void ToggleScriptEnabled()
    {
        scriptEnabled = false;
    }

    void ScaleUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.localScale = new Vector3(value, value, value);
    }

    void RotateUpdate(float value)
    {
        if (!scriptEnabled)
            return;
        transform.localEulerAngles = new Vector3(transform.rotation.x, value, transform.rotation.z);
    }
}