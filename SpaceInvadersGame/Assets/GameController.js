#pragma strict

var gameOver:boolean=false;

static var rows:int=2;
static var cols:int=5;
static var playerName:String;

static var shots:int;//missed
static var killed:int;//killed
static var totalShots:int;//totalshots

var levelsPlayed:int=0;

function Start () {
	DontDestroyOnLoad(this);
	if(Application.loadedLevel == 1){
	shots=0;
	killed=0;
	
	}
}

function Update () {
	var numberOfAliens:int;
	
	//total number of aliens in the scene
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;
	
	if (numberOfAliens <=0)
	{
			if (Application.loadedLevel > 0 && Application.loadedLevel < 4) {
				Application.LoadLevel(Application.loadedLevel+1);
			}
	if (totalShots <= 0){
		totalShots = 0;
		}
	}
}

function OnGUI()
{
	if (gameOver)
	{
		
		//remove player
		Destroy(GameObject.FindGameObjectWithTag("player"));
		//display game over
		GUI.Label(Rect(300,300,300,300),"Game Over");
	}
}