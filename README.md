# infinite_scroller

Infinite scroller for a meteor collection, this example show how to create an infinite scroll 

Git repo url: https://github.com/lfergon/infinite_scroller.git

Serving at: http://infinite_scroller.meteor.com

For running in localhost:

1. Install meteor: $>curl https://install.meteor.com/ | sh
2. Clone https url: https://github.com/lfergon/infinite_scroller.git
3. In folder run: $> meteor
4. Go to localhost:3000

Code documentation:

1. main.html contains the head and body. In the body is possible to find two calls to two components, navbar and list_scroll. list_scroll calls list_scroll.html and list_scroll.js these two files contain the logic for manage the content on the list.
2. main.js contains the logic that populates with content the list
3. server folder contains the logic related to the mongodb collection that will provide fake content for the frontend application.
4. lib is the common folder for server and client side, here the collection is defined and the configuration object where to define the number of new items to show on the list every time the user scrolls down. 
