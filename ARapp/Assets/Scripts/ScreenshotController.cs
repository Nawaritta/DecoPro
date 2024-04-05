using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScreenshotController : MonoBehaviour
{
	public void TakeAShot()
	{
		StartCoroutine("CaptureIt");
	}

	IEnumerator CaptureIt()
	{
		string timeStamp = System.DateTime.Now.ToString("dd-MM-yyyy-HH-mm-ss");
		string fileName = "Screenshot" + timeStamp + ".png";

		ScreenCapture.CaptureScreenshot(fileName);
		yield return new WaitForEndOfFrame();
	}

}
