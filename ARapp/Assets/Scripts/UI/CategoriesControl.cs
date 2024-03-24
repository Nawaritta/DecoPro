using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CategoriesControl : MonoBehaviour
{
    public GameObject[] items;
    private bool isDisplay = false;
    public void displayItems()
    {
        isDisplay = !isDisplay;
        foreach (GameObject item in items)
        {
            item.SetActive(isDisplay);
        }
    }
}
