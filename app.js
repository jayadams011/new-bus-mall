'use strict';

// Array of all images
var allStuff = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
// Array of all the objects stored with data
var allPictureObjects = [];

//stuff.allStuff = [];
// need to figure out how to get name and filepath from allStuff above.
// how do I tie allStuff to the functions below.

function ImagesConstructor(filepath){
  this.name = filepath.split('.')[0];
  this.filepath = 'img/' + filepath;
  this.numClicks = 0;
  this.numShown = 0;
  allPictureObjects.push(this);
}


var createPicturesArray = function(){
  for(var i = 0; i < allStuff.length; i++){
    new ImagesConstructor(allStuff[i]);
  }
  console.log('allPictureObjects :: ', allPictureObjects);
};

// Call the ImagesConstructor to create an array of all the objects (stored in allPictureObjects array)
createPicturesArray();

// variables to the images ids (they are now global)
var placeOne = document.getElementById('placeOne');
var placeTwo = document.getElementById('placeTwo');
var placeThree = document.getElementById('placeThree');
var ctx = document.getElementById ('chart').getContext('2d');

var randOne, randTwo, randThree;

// Shows the images on the page
var showImages = function(){
  // Random number between 0-20 for placeOne
  randOne = Math.floor(Math.random() * allStuff.length);
  // Display randome images
  placeOne.src = allPictureObjects[randOne].filepath;
  // Add one to the numShown counter in the allPictureObjects array
  allPictureObjects[randOne].numShown += 1;


  randTwo = Math.floor(Math.random() * allStuff.length);
  while (randOne === randTwo) {
    randTwo = Math.floor(Math.random() * allStuff.length);
  };
  placeTwo.src = allPictureObjects[randTwo].filepath;
  allPictureObjects[randTwo].numShown += 1;


  randThree = Math.floor(Math.random() * allStuff.length);
  while (randOne === randThree || randTwo === randThree) {
    randThree = Math.floor(Math.random() * allStuff.length);
  }
  placeThree.src = allPictureObjects[randThree].filepath;
  allPictureObjects[randThree].numShown += 1;

  console.log([randOne, randTwo, randThree]);
};

// Call showImages function
showImages();


// OLD WAY
// placeOne.addEventListener('click', showImages);

var counter = 0;

// Event Listeners when images are clicked
placeOne.addEventListener('click', function(){
  allPictureObjects[randOne].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart

  }
  showImages();
});

placeTwo.addEventListener('click', function(){
  allPictureObjects[randTwo].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart

  }
  showImages();
});

placeThree.addEventListener('click', function(){
  allPictureObjects[randThree].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    // Remove the images
    document.getElementById('imageHolder').remove();
    // Collect Data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    document.getElementById('chart');
  }
  showImages();
});

var numberOfTimesShown = [];
var numberOfTimesClicked = [];

var collectData = function() {
  for (var i = 0; i < allPictureObjects.length; i++) {
    numberOfTimesShown.push(allPictureObjects[i].numShown);
    numberOfTimesClicked.push(allPictureObjects[i].numClicks);
  };
};


// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');
var showMyChart = new Chart(ctx, {

  type: 'horizontalBar',
  data: {
    labels: ['allPictureObjects[i]'],
    datasets: [{
      label: ['Times Clicked'],
      data: ['numberOfTimesShown[i]'],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  maintainAspectRatio: false,
  options: {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
