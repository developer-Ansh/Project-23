class box
{
//PROPERTIES
constructor(x,y,width,height)
{

    this.body = Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    World.add(world,this.body);
    

}



//FUNCTIONS
display()
{ 
    
 fill(255,0,0);   
 rectMode(CENTER);
 rect(this.x,this.y,this.width,this.height);

}



}