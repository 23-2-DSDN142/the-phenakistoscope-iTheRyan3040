const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false)
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(4) );
  layer1.set_boundary(200, 1400 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}



function faces(x, y, animation, pScope){

scale(animation.frame*2);
background(0,0,0)

}









function squares(x, y, animation, pScope){


  

  

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 0
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;






  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  
 
 

  const StartColour = color(38,233,240)
  const endColour = color(66,14,117)
  let animatingColour = lerpColor(StartColour, endColour, animation.frame)
  stroke(animatingColour)


strokeWeight(12);

line(620,530,550,600) // outer lines
line(550,600,470,600)
line(470,600,380,660)
line(380,660,280,710)
line(420,630,460,530)
line(460,530,510,490)
line(380,660,490,660)
line(490,660,380,720)

line(200,180,180,200)
line(180,200,150,190)
line(200,180,190,150)
line(110,220,150,190)


strokeWeight(8)

const StartColour_two = color(194,3,252,100)
const endColour_two = color(252,3,132,100)
let animatingColour_two = lerpColor(StartColour_two, endColour_two, animation.frame*2)
fill(animatingColour_two)
stroke(animatingColour_two)



beginShape();
vertex(310,280-animation.frame*150) // Jumping arrows
vertex(310,360-animation.frame*150)
vertex(220,350-animation.frame*150)
vertex(280,330-animation.frame*150)
vertex(310,280-animation.frame*150)
endShape();

beginShape();
vertex(350,450-animation.frame*50)
vertex(230,430-animation.frame*50)
vertex(190,540-animation.frame*50)
vertex(260,480-animation.frame*50)
vertex(350,450-animation.frame*50)
endShape();













const StartColour_three = color(252,3,78)
const endColour_three = color(73,3,252)
let animatingColour_three = lerpColor(StartColour_three, endColour_three, animation.frame)
stroke(animatingColour_three)


strokeWeight(10)

scale(animation.frame*1.4); 

const StartColour_four = color(73,3,252)
const endColour_four = color(200,3,252)
let animatingColour_four = lerpColor(StartColour_four, endColour_four, animation.frame)
fill(animatingColour_four)

beginShape();
vertex(280,300)  // lightning
vertex(310,370)
vertex(350,400)
vertex(360,480)
vertex(320,420)
vertex(280,390)
endShape(CLOSE);





}