'use strict';

//var getPics = document.getElementsByClassName('pics');

var allStuff = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

//stuff.allStuff = [];
// need to figure out how to get name and filepath from allStuff above.
// how do I tie allStuff to the functions below. 

function Stuff(name,filepath){
  this.name = name;
  this.filepath = filepath;
  this.name = filepath.split('/')[0];
  this.numClicks = 0;
  this.numShown = false;
  Stuff.allStuff.push(this);
}
new Stuff ();


var pick6img = function () {
  var counter = 0;
  var images = [];
  while (counter < 6){
    var imageRun = [Math.floor(Math.random() * allStuff.length)];
    //console.log(imagerun)
    if (imageRun.shown === false){
      imageRun.numShown++;
      counter++;
      imageRun.shown = true;
      images.push(imageRun);
    }
  }
  return images;
};

function render (){
  var images = pick6img();
  for (var i = 0; i < images.length; i++){
    document.getElementById('placeOne');
    pics[i].innerHTML = '<img src = images[i]>';

    document.getElementById('placeTwo');
    pics[i].innerHTML = '<img src = images[i]>';

    document.getElementById('placeThree');
    pic[i].innerHTML = '<img src = images[i]>';

  }
};
render();
div.addEventListener('click', render);
