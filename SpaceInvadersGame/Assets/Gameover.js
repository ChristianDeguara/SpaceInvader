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
 GUI.Label(Rect(x-90,y-10,300,25), "Sorry you got hit.. Game Over.");
 
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