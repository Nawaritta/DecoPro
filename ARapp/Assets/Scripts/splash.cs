using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class splash : MonoBehaviour
{
    public GameObject intro;
    void Start()
    {
        intro.GetComponent<AudioSource>().Play();
        Invoke("gotoScene", 4.5f);

    }

    private void gotoScene()
    {

        SceneManager.LoadScene("Menu");
    }
}
