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
}
