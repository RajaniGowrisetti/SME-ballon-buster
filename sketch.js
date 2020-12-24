var balloon1, balloon2, balloon3;

function setup() {
  createCanvas(500,500);
  balloon1 = new Bubble();
  balloon2 = new Bubble();
  balloon3 = new Bubble();
  
}

function draw() {
  background('yellow');
  
  //random(200,400);
  balloon1.move();
  balloon1.radius= 5;
  balloon1.width = 75;
  balloon1.height = 90;
  balloon1.color=('red');
  balloon1.display();
  
  //random(400,200);
  balloon2.move();
  balloon2.width = 65;
  balloon2.height = 80;
  balloon2.color=('pink');
  balloon2.display();
  
  //random(10,200);
  balloon3.move();
  balloon3.width = 55;
  balloon3.height = 70;
  balloon3.color=('purple');
  balloon3.display();
  
}