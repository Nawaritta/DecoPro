using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuScene : MonoBehaviour
{
    public void gotoScene(string scene)
    {
        SceneManager.LoadScene(scene);
    }

    public void exitApp()
    {
        Application.Quit();
    }

    public void openLink(string link)
    {
        Application.OpenURL(link);
    }
}
