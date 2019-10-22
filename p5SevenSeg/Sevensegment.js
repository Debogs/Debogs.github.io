class Digit{
  constructor(offset_x_, offset_y_, value_){
    this.offset_x = offset_x_;
    this.offset_y = offset_y_;
    this.value = value_;
    this.digit_ls = [0,0,0,0,0,0,0];
    this.partA = new Rectangle(0+this.offset_x, 0+this.offset_y, 50, 10);
    this.partB = new Rectangle(50+this.offset_x, 10+this.offset_y, 10, 50);
    this.partC = new Rectangle(50+this.offset_x, 70+this.offset_y, 10, 50);
    this.partD = new Rectangle(0+this.offset_x, 120+this.offset_y, 50, 10);
    this.partE = new Rectangle(0+this.offset_x-10, 70+this.offset_y, 10, 50);
    this.partF = new Rectangle(0+this.offset_x-10, 10+this.offset_y, 10, 50);
    this.partG = new Rectangle(0+this.offset_x, 60+this.offset_y, 50, 10);
    this.part_list = [this.partA, this.partB, this.partC, this.partD, this.partE, this.partF, this.partG];
  }
  draw(){
    if(this.value == 0){
      this.digit_ls = [1,1,1,1,1,1,0];
    }
    else if(this.value == 1){
      this.digit_ls = [0,1,1,0,0,0,0];
    }
    else if(this.value == 2){
      this.digit_ls = [1,1,0,1,1,0,1];
    }
    else if(this.value == 3){
      this.digit_ls = [1,1,1,1,0,0,1];
    }
    else if(this.value == 4){
      this.digit_ls = [0,1,1,0,0,1,1];
    }
    else if(this.value == 5){
      this.digit_ls = [1,0,1,1,0,1,1];
    }
    else if(this.value == 6){
      this.digit_ls = [1,0,1,1,1,1,1];
    }
    else if(this.value == 7){
      this.digit_ls = [1,1,1,0,0,0,0];
    }
    else if(this.value == 8){
      this.digit_ls = [1,1,1,1,1,1,1];
    }
    else if(this.value == 9){
      this.digit_ls = [1,1,1,1,0,1,1];
    }
    for(let i=0;i<7;i++){
      if(this.digit_ls[i] == 1){
        this.part_list[i].draw();
      }
    }
  }
}
class Rectangle{
  constructor( x_, y_, w_, h_){
      this.x = x_;
      this.y = y_;
      this.w = w_;
      this.h = h_;
    }
  draw(){
    rect(this.x, this.y, this.w, this.h, 20);
  }
}


let digit_arr = [];
let input;
let button;
let greeting;
let redraw;
let offset_x = 60;
let offset_y = 125;

function setup() {
  createCanvas(600, 400);
  input = createInput();
  input.position(75, 300);
  
  button = createButton('submit');
  button.position(input.x + input.width, input.y);
  
  Title = createElement('h1', 'Seven Segment Display');
  Title.position(15, 5);
  
  Label = createElement('h3', 'Input A Number:');
  Label.position(input.x, input.y-45);
  
  
  button.mousePressed(greet);
  
  textAlign(CENTER);
}

function greet() {
  digit_arr = [];
  const name = input.value();
  //console.log('Value: '+name);
  for (let i=0; i<name.length;i++){
    digit_arr.push(new_digit = new Digit(i*offset_x+i*30+25, offset_y, int(name[i])));
  }
  input.value('');
}


function draw() {
  background((210, 115, 212));
  fill(0)
  for(let i=0; i<digit_arr.length; i++){
    digit_arr[i].draw();
  }  
}
