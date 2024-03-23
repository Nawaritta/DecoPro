using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ToggleControl : MonoBehaviour
{
    public GameObject slider;
    private void Start()
    {
        this.GetComponent<Toggle>().onValueChanged.AddListener(state =>
        {
            slider.GetComponent<Animator>().SetBool("isShow", state);
        });
    }
}
