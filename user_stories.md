# BusMall for Sound Transit

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.


### The top level client

### Todos
- See Above
-


### The marketing research team,

### Todos
- market analysis
- display potential products to individuals in focus groups (three products at a time, side-by-side-by-side,
-  interested in the total number of clicks,
-  also the percentage of times that an item was clicked when it was shown.



### The focus group participant (user)

### Todos
- have the group members choose which product, of the three displayed images, that they would be most likely to purchase,
- make 25 selections.
- review survey when done




### The developer, (me)

### Todos
- displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side,
- and then store, calculate, and visually display the resulting data.
- you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.
- need to keep track of how many times each image is displayed and do the calculations.
- manage the size and the aspect ratio of the images and perhaps edit them a bit;there are lots of online tools.
- the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.
- Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a img/ directory.
- Retrieve the assets from the assets/ directory in the week-03 directory of our class repo and place them in your image directory.
- The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- you'll want to be able to receive clicks on those displayed images,
- track those clicks for each image.
- track how many times each image is displayed, for statistical purposes.
- Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should    -           - contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
-  you'll want a constructor function that creates an object associated with each image, and has (at a minimum)
- properties for the name of the image (to be used for display purposes),
- its filepath,
- the number of times it has been shown,
- the number of times it has been clicked.
- create a property that contains a text string you can use as an ID in HTML.
- After 25 selections have been made, turn off the event listeners on the images (to prevent additional voting)
- and also display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer"
- need random image audio_video_tracker
- need random number generator
- truthy - previouslyShown=true
- allstuff.length
-




-
