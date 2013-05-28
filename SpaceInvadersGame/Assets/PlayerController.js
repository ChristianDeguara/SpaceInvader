#pragma strict
var laser:Rigidbody;
var health:int;
//default value for score is 0
static var score:int = 0;

var colours:Material[];


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag == "alienlaser")
	{
		//the aliens hit the player
		renderer.sharedMaterial = colours[1];
		health -= 2;
	}
	
	if(health < 0){
	
		health = 0;
		
	if (health == 0){

		Application.LoadLevel(5);
		}
	}

}




function OnTriggerExit()
{
	//reset to green when shot exits
	renderer.sharedMaterial = colours[0];
}

function OnGUI()
{
	GUI.color = Color.green;
	//display health
	GUI.Label(Rect(230,0,100,25),"Health: "+health);
	//display the score in the HUD
	GUI.Label(Rect(150,0,100,25),"Score: "+score);
	//displays totalShots
	GUI.Label(Rect(440,0,100,25),"Total Shots: "+GameController.totalShots);
	//displays totalShots
	GUI.Label(Rect(330,0,100,25),"Killed: "+GameController.killed);
	//displays totalShots
	GUI.Label(Rect(530,0,120,25),"Missed Shots: "+GameController.shots);
	//displays Name
	GUI.Label(Rect(55,0,100,25),"Name: "+GameController.playerName);
}



function Start () {
	renderer.sharedMaterial = colours[0];
	health = 100;
	score = 0;
}

function Update () {
	
	
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laser,transform.position,transform.rotation);
		GameController.totalShots++;
		
		
		
	}
	
	//borders
	var border:float=1.0;
	
	if (transform.position.x < BordersCalculator.leftmost + border)
	{
		transform.position.x = BordersCalculator.leftmost + border;
	}
	
	if (transform.position.x > BordersCalculator.rightmost - border)
	{
		transform.position.x = BordersCalculator.rightmost - border;
	}
	
	//horizontal movement code
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
}