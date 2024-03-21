using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MenuControl : MonoBehaviour
{
   
    public void displayMenu()
    {
        bool val = GetComponent<Animator>().GetBool("isDisplay");
        GetComponent<Animator>().SetBool("isDisplay", !val);
    }

    public void hideMenu()
    {
        bool val = GetComponent<Animator>().GetBool("isHide");
        GetComponent<Animator>().SetBool("isHide", !val);
        GetComponent<Animator>().SetBool("isDisplay", false);
    }
}
