class Snowballs {
  constructor() {
  this.x = random(width)
  this.y = random(height)
  this.size = 20
  }

  //Methode initiieren
  show() {
    ellipse(this.x, this.y, this.size)
  } 
  move(){
    this.y += random()
  }
}

let snowballs = []

function setup() {
  createCanvas(400, 400);
// neue Instanz (Snowball) wird hinzugefügt
  for (let i = 0; i < 35; i += 1) {
  snowballs.push(new Snowballs())
}
}

function draw() {
  background(205, 200, 245);
  
  //Methode aufrufen
  for (let i = 0; i < snowballs.length; i += 1) {
  snowballs[i].show()
  snowballs[i].move()
}
}
