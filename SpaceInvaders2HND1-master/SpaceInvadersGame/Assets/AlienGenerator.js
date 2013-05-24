#pragma strict
var alien:Rigidbody;
var rows:int;
var columns:int;




function generateAliens(rows:int,columns:int)
{
	var ypos = transform.position.y;
	
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0;counter<columns;counter++)
		{
			//y position of swarm.  1.5 horizontal spacing.  Can be reduced to 0.
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowscounter*1.5),1),Quaternion.identity);
			//place this object INSIDE the swarm
			tempAlien.transform.parent = this.transform;
	
		}
	}
}



function Start () {
	generateAliens(rows,columns);
}

function Update () {

}