#pragma strict

var x:float;
var y:float;

//theme for menu
var theme:GUISkin;

// name input variable
var nameInput:boolean = false;

function Start () {
	GameController.playerName = "";
}

function Update () {

}

function OnGUI()
{
	if (!nameInput) {
		x = Screen.width/2;
		y = Screen.height/2;

		//to customize the style of the label
		GUI.skin = theme;
		GUI.Label(Rect(x-80,y-10,300,25), "Welcome to Space Invaders");

		if(GUI.Button(Rect(x-50,y+18,100,25),"New Game")) //100,25 width of button
		{
			nameInput = true;
		}
		if(GUI.Button(Rect(x-50,y+50,100,25),"Quit"))
		{
			Application.Quit();
		}
	} else {
		GUI.Label(Rect(x-80,y-10,300,25), "Please input your name");
		
		GameController.playerName = GUI.TextField(Rect(x-80, y+18, 100, 25), GameController.playerName);
		
		if (GUI.Button(Rect(x-50,y+56,100,25), "Back")) {
			nameInput = false;
		}
		
		if (GUI.Button(Rect(x+50,y+56,100,25), "OK")) {
			if (!String.IsNullOrEmpty(GameController.playerName)) {
				Application.LoadLevel(1);
			}
		}
	}
}