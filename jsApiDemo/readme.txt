https://github.com/google/google-api-javascript-client

https://developers.google.com/api-client-library/javascript/samples/samples
https://developers.google.com/api-client-library/javascript/start/start-js
https://developers.google.com/api-client-library/javascript/dev/dev_jscript

https://developers.google.com/api-client-library/javascript/features/cors
http://www.html5rocks.com/en/tutorials/cors/

https://github.com/googledrive/cors-upload-samples


AIzaSyDhhFYhrna8h06HC3O9n1R02rRb0P9Lyfs

//=== js cache clear
 use Ctrl+F5. Its like a force refresh. This refreshes the page including re-downloading any referenced JS files or CSS files even if they were cached.
 
 Starting with Chrome 15, open the Developer Tools, click on the cogwheel at bottom left of the screen, and select the checkbox Disable cache.
 
 
 timestamp attached to js url
 The best solution here is to add the timestamp at the end of the .js/.css filenames, or add the svn version which is a great idea too.

<script src="js/myfile.js?t=<?=time()?>" type="text/javascript"></script>


In Chrome (don't know what particular version you're using, as I use the dev builds), go to

Wrench Icon (Tools) » Options » Personal Stuff tab » Clear browsing data...
Again, make sure only "Empty the cache" is checked.


wrench / cogwheel / gear icon


//=== https://developers.google.com/api-client-library/javascript/features/cors

How to use CORS to access Google APIs

Google APIs support requests and responses using Cross-origin Resource Sharing (CORS). 


http://www.html5rocks.com/en/tutorials/cors/
http://www.html5rocks.com/en/tutorials/cors/

