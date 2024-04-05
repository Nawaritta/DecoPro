using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.XR.ARFoundation;

public class ClearScreen : MonoBehaviour
{
    public void ClearScreenOnClick()
    {
        GameObject[] allObjects = GameObject.FindGameObjectsWithTag("Furniture");
        foreach (GameObject obj in allObjects)
        {
            Destroy(obj);
        }
    }
}
