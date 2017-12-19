'use strict';

//var getPics = document.getElementsByClassName('pics');
var pictures = [];
var allcounter = 0;
var allStuff = ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

//stuff.allStuff = [];
// need to figure out how to get name and filepath from allStuff above.
// how do I tie allStuff to the functions below.

function Stuff(name,filepath){
  this.name = name;
  this.filepath = filepath;
  this.name = filepath.split('/')[1].split('.')[0];
  this.numClicks = 0;
  this.numShown = false;
  Stuff.allStuff.push(this);
}

var newStuff (){
  for(var i = 0, i < allStuff.length, i++){
  new Stuff(allStuff[i]);
  }
}

var pick6img = function() {
  var counter = 0;
  var images = [];
  while (counter < 6){
    var index = [Math.floor(Math.random() * allStuff.length)];
    var imageRun = pictures[index];
    //console.log(imagerun)
    if (imageRun.shown === false){
      imageRun.numShown++;
      counter++;
      imageRun.shown = true;
      images.push(imageRun);
      console.log(images);
    }
  }

  for (var i = 0; i < pictures.length, i++);
    if (i !== index){
      pictures[i].shown = false;
    }
  }
  return images;
}


function begining(){
  Stuff();
  placeOne = document.getElementById('placeOne').innerHTML = "img src=\"img/" + pictures[0];
  placeTwo = document.getElementById('placeTwo').innerHTML = "img src=\"img/" + pictures[1];
  placeThree = document.getElementById('placeThree').innerHTML = "img src=\"img/" + pictures[2];
}


function render (){
  var images = pick6img();
  document.getElementById('placeOne').innerHTML = "<"img src=\"img/" + images[0]>;"
  document.getElementById('placeTwo').innerHTML = "<"img src=\"img/" + images[1]>;"
  document.getElementById('placeThree').innerHTML = "<"img src=\"img/" + images[2]>;"
}
placeOne.addEventListner('click',render);
placeTwo.addEventListener('click',render);
placeThree.addEventListener('click',render);

function times({
  while (gcounter<25){
    render()
    }
}
beginning();
times();
