class Ground{
    constructor(x,y,width,height)
    {
        var options={isStatic: true}                                                                                                                                            
   
        
    
  this.width=width
  this.height=height

    this.body=Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)
    }
    display(){
    push()
    var gpos=this.body.position
    rectMode(CENTER)
    fill(255,50,0)     
    rect(gpos.x,gpos.y,this.width,this.height)
    pop()
    }
    }