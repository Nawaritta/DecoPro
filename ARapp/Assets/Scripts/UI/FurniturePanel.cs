using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FurniturePanel : MonoBehaviour
{
    public void displayPanel(bool val)
    {
        GetComponent<Animator>().SetBool("isDisplay", val);
    }
}
