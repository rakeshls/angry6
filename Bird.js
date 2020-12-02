class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage =loadImage("sprites/smoke.png");
    this.trajectory = []
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos);
      //console.log(this.trajectory);
    }
    for(var i=0;i<this.trajectory.length;i++){
      image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}


 //  (x1,y1), (x2,y2),(x3,y3),(x4,y4)

//[[0][0],[0][1],[1][0],[1][1],[2][0],[2][1],[3][0],[3][1]];
//push(x1,y1)
//push(x2,y2)
//image(this.smokeimage,this.trajectory[1][0],this.trajectory[1][1])
//image(this.smokeimage,this.trajectory[2][0],this.trajectory[2][1])