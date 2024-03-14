using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Home : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Invoke("gotoScene", 3f);
        
    }
    
    private void gotoScene() {

        SceneManager.LoadScene("Menu");
    } 
}
