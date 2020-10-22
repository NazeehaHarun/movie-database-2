COURSE AND SECTION: COMP 2406 A
PROJECT: MOVIE DATABASE
PAIR PROJECT
NAME: DAVID CHEN, STUDENT NUMBER: 101142225
NAME: NAZEEHA HARUN, STUDENT NUMBER: 101139836

*Note:
We have used react.js and react bootstrap and therefore did not have to do DOM manipulation explicitly. Using react.js and react bootstrap are two extra steps we have taken which was not required for the second check in. 
There are NO HTML files. But once you start react (instructions below, the pages will automatically open up in browser). 

We have used Express as our server which is also an additional step we took that was not required for the second check-in.

The README file also includes detailes about REST API which is also an additional expectation.


Files:
src, public, .gitgnore, package.json, package-lock.json, README.md, README.txt, api, db
Inside “src” folder :"pages" folder,App.css, App.js, index.js ,index.css, "assets" folder, "components" folder
Inside api folder:
	movies.js file
Inside db folder:
	movie-data.json
	movie-data-short.json
	server.js file
Inside “pages” folder:
	“Actor” folder: Actor.js, Actor.css, images(.jpg, .png files)
	“AddMovie” folder: AddMovie.js, AddMovie.css
	“Director” folder: Director.js, Director.css, images(.jpg, .png files)
	“Writer” folder: Writer.js, Writer.css, images(.jpg, .png files)
	“MovieView” folder: MovieView.js, MovieView.css
	“OtherUser” folder: OtherUser.js, OtherUser.css
	“Profile” folder: Profile.js, Profile.css, images(.jpg, .png files)
	“Register” folder: Register.js, Register.css


TO RUN THE FILES:

Once you download and extract the zip file, open the "movie-database" folder from visual studio code.
In the terminal of visual studio code in App.js (inside src folder), type:

	npm install 

This may take some time to install since it will install all the node modules without which you will NOT be able to see our pages. Therefore, please install node modules using the command: npm install 
After installing react, in the terminal of visual studio code, type:

	npm install bootstrap

This may take some time to install.

Once the installation is complete, in the terminal of visual studio code type:

	npm start

Again, this might take some time. This should automatically open a browser from where you will be able to navigate to each of our pages individually using the navigation bar at the top. There are no HTML files.

To run the server of the web-application, in the terminal of visual studio code type:

	npm run server

This will run the server on PORT 5000, which will process requests to search for movie-data can then be retrieved from the movie-data.json file. This was necessary to implement, since the browser cannot access local files. 

To run both the client and the server, in the terminal of visual studio code type:

	npm run app

This will run both the client and the server concurrently.


Base expectations we have completed and the files you can look at to evaluate our busineess logic:

1. server.js (movie-database->db->server.js):
	•This essentially represents the server side of our project. 
	•We have used Express as our server capable of serving static resources created within project check-in #1.	
	• searchMovie will start an Express server on PORT 5000 which will process requests to search for movies from movie-data.json.

2.movies.js (movie-database->api->movies.js):
	•Uses express as the server
	•Uses movie-data.json to generate movie details
	•To return movies to user they search for:
		oFor browsing movie in the database, we used the business logic of returning movies based on a match between the movie titles. There is a router.post (/getMovie) that returns a json movie object depending on the movie title being searched by the user. 
	•To recommend similar movies:
		oThere is a hard-coded “movieSearchHistory” array of objects that represents the storage of movie objects being searched by the user. This essentially represents the database we will use in check-in 3 when we learn MongoDB.
		oTo recommend similar movies to user, we decided to recommend movies based on the most common genre of all the movies the user has searched for. In our example the most common genre is comedy, therefore the getSimilarMovies in this file will return 3 movies of the comedy genre. 

3. MovieModal.js: (movie-database ->src->pages->MovieView->MovieModal.js) and findMovie.js(movie-database ->src->pages->MovieView->findMovie.js)
	•The user can search for a movie, which will be sent as a request to the Express server, and will be returned as a response. 
	•The request is sent from the client by the findMovie function, which uses Axios to make the request and returns a Promise 
Note for this component, while the client doesn't update in response to the new object, the client's state object does store the movie object the user searched for, which can be verified by checking the console in Chrome

4. Profile.js: (movie-database ->src->pages->Profile->Profile.js):
•	Links have been added to the drop down menu items for the actor, writer and director pages, under the drop down menu heading “celebrities you follow”


Dynamic behaviour we have added with JavaScript:

1) The FollowButton component produces a dynamic message that notifies the user who they are following 
2) The Notification component produces a dynamic message that notifies the user which movie they have searched for 
3) Search Feature - searchMovies.js will response to client requests to search for a particular movie and return that movie as a JSON object, which will be stored in MovieModal. Note, that while the object is successfully returned as a response from the server, dynamic pages has yet to be implemented, and the Modal currently shows a hardcoded example.

Additional Expectations: Details regarding some of our planned RESTFUL API:
	•We will be interlinking and facilitating navigation and manipulation for the system’s state and for that:
		oWe would have to store user information including name, password, email address, people and other users they follow, their movie search history, their type of user, reviews they have made. 
		oFor the actors, directors and writers, we would have to store their work history and their most frequent collaborator.
		oWe would store the reviews which would involve the movie details, review text, ratings and further comments.
		oWe would have to use many GET and POST requests and API would help us specify the request and response format.


