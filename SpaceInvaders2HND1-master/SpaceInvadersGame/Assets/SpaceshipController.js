#pragma strict

var laserSlot:Rigidbody;
static var score:int;
//health set to 100
static var health:int=100;

var colours:Material[];



function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="enemylaser")
	{
		//player was hit, reduce health and change colour
		this.renderer.material = colours[1];
		health--;
	}
}

function OnTriggerExit(other:Collider)
{
	//when the laser leaves the spaceship, set the colour back to default
	this.renderer.material = colours[0];
}



function OnGUI()
{
	GUI.color = Color.green;
	
	GUI.Label(Rect(0,0,100,25),"Score: "+score);
	GUI.Label(Rect(0,25,100,25),"Health: "+health);
}


function Start () {
	//by default, the spaceship will be green
	this.renderer.material = colours[0];
}

function Update () {
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
	}
	
	if (health <=0)
	{
		//game ends
	}
	
}