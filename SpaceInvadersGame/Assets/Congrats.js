#pragma strict

var x:float;
var y:float;

//theme for gameover
var theme:GUISkin;


function Start () {

}

function Update () {

}

function OnGUI()
{
 x = Screen.width/2;
 y = Screen.height/2;

 //to customize the style of the label
 GUI.skin = theme;
 GUI.Label(Rect(x-110,y-100,300,25), "Congratulations you finished the game.");
 GUI.Label(Rect(x-110,y-65,300,25), "Shots Missed = " + GameController.shots);
 GUI.Label(Rect(x-110,y-35,300,25), "Killed = " + GameController.killed);
 GUI.Label(Rect(x-110,y-5,300,25), "Total Shots = " + GameController.totalShots);
 
 
 if(GUI.Button(Rect(x-50,y+18,100,25),"Menu")) //100,25 width of button
 {
  //Menu was pressed
  //scene1...the main screen scene
  Application.LoadLevel(0);
 }
 if(GUI.Button(Rect(x-50,y+50,100,25),"Quit"))
 {
  Application.Quit();
 }
}
