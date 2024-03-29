const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

let movieSearchHistory=[{"Title":"Toy Story","Year":"1995","Rated":"G","Released":"22 Nov 1995","Runtime":"81 min","Genre":"Animation, Adventure, Comedy, Family, Fantasy","Director":"John Lasseter","Writer":"John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)","Actors":"Tom Hanks, Tim Allen, Don Rickles, Jim Varney","Plot":"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.","Language":"English","Country":"USA","Awards":"Nominated for 3 Oscars. Another 27 wins & 20 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"95/100"}],"Metascore":"95","imdbRating":"8.3","imdbVotes":"864,385","imdbID":"tt0114709","Type":"movie","DVD":"20 Mar 2001","BoxOffice":"N/A","Production":"Buena Vista","Website":"N/A","Response":"True"},
{"Title":"Jumanji","Year":"1995","Rated":"PG","Released":"15 Dec 1995","Runtime":"104 min","Genre":"Adventure, Comedy, Family, Fantasy","Director":"Joe Johnston","Writer":"Jonathan Hensleigh (screenplay by), Greg Taylor (screenplay by), Jim Strain (screenplay by), Greg Taylor (screen story by), Jim Strain (screen story by), Chris Van Allsburg (screen story by), Chris Van Allsburg (based on the book by)","Actors":"Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce","Plot":"When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.","Language":"English, French","Country":"USA","Awards":"4 wins & 11 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"54%"},{"Source":"Metacritic","Value":"39/100"}],"Metascore":"39","imdbRating":"7.0","imdbVotes":"297,463","imdbID":"tt0113497","Type":"movie","DVD":"25 Jan 2000","BoxOffice":"N/A","Production":"Sony Pictures Home Entertainment","Website":"N/A","Response":"True"},{"Title":"Grumpier Old Men","Year":"1995","Rated":"PG-13","Released":"22 Dec 1995","Runtime":"101 min","Genre":"Comedy, Romance","Director":"Howard Deutch","Writer":"Mark Steven Johnson (characters), Mark Steven Johnson","Actors":"Walter Matthau, Jack Lemmon, Sophia Loren, Ann-Margret","Plot":"John and Max resolve to save their beloved bait shop from turning into an Italian restaurant, just as its new female owner catches Max's attention.","Language":"English, Italian, German","Country":"USA","Awards":"2 wins & 2 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjQxM2YyNjMtZjUxYy00OGYyLTg0MmQtNGE2YzNjYmUyZTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"17%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"6.7","imdbVotes":"23,736","imdbID":"tt0113228","Type":"movie","DVD":"18 Nov 1997","BoxOffice":"N/A","Production":"Warner Home Video","Website":"N/A","Response":"True"},{"Title":"Waiting to Exhale","Year":"1995","Rated":"R","Released":"22 Dec 1995","Runtime":"124 min","Genre":"Comedy, Drama, Romance","Director":"Forest Whitaker","Writer":"Terry McMillan (novel), Terry McMillan (screenplay), Ronald Bass (screenplay)","Actors":"Whitney Houston, Angela Bassett, Loretta Devine, Lela Rochon","Plot":"Based on Terry McMillan's novel, this film follows four very different African-American women and their relationships with the male gender.","Language":"English","Country":"USA","Awards":"9 wins & 10 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYzcyMDY2YWQtYWJhYy00OGQ2LTk4NzktYWJkNDYwZWJmY2RjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"56%"}],"Metascore":"N/A","imdbRating":"5.9","imdbVotes":"9,272","imdbID":"tt0114885","Type":"movie","DVD":"06 Mar 2001","BoxOffice":"N/A","Production":"Twentieth Century Fox Home Entertainment","Website":"N/A","Response":"True"},{"Title":"Father of the Bride Part II","Year":"1995","Rated":"PG","Released":"08 Dec 1995","Runtime":"106 min","Genre":"Comedy, Family, Romance","Director":"Charles Shyer","Writer":"Albert Hackett (screenplay \"Father's Little Dividend\"), Frances Goodrich (screenplay \"Father's Little Dividend\"), Nancy Meyers (screenplay), Charles Shyer (screenplay)","Actors":"Steve Martin, Diane Keaton, Martin Short, Kimberly Williams-Paisley","Plot":"George Banks must deal not only with the pregnancy of his daughter, but also with the unexpected pregnancy of his wife.","Language":"English","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 1 win & 1 nomination.","Poster":"https://m.media-amazon.com/images/M/MV5BOTEyNzg5NjYtNDU4OS00MWYxLWJhMTItYWU4NTkyNDBmM2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.0/10"},{"Source":"Rotten Tomatoes","Value":"48%"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"6.0","imdbVotes":"33,337","imdbID":"tt0113041","Type":"movie","DVD":"09 May 2000","BoxOffice":"N/A","Production":"Disney","Website":"N/A","Response":"True"},{"Title":"Heat","Year":"1995","Rated":"R","Released":"15 Dec 1995","Runtime":"170 min","Genre":"Crime, Drama, Thriller","Director":"Michael Mann","Writer":"Michael Mann","Actors":"Al Pacino, Robert De Niro, Val Kilmer, Jon Voight","Plot":"A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.","Language":"English, Spanish","Country":"USA","Awards":"14 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDJjNWE5MTEtMDk2Mi00ZjczLWIwYjAtNzM2ZTdhNzcwOGZjXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"8.2","imdbVotes":"560,172","imdbID":"tt0113277","Type":"movie","DVD":"27 Jul 1999","BoxOffice":"N/A","Production":"Warner Bros.","Website":"N/A","Response":"True"},{"Title":"Sabrina","Year":"1995","Rated":"PG","Released":"15 Dec 1995","Runtime":"127 min","Genre":"Comedy, Drama, Romance","Director":"Sydney Pollack","Writer":"Samuel A. Taylor (play), Billy Wilder (earlier screenplay), Samuel A. Taylor (earlier screenplay), Ernest Lehman (earlier screenplay), Barbara Benedek (screenplay), David Rayfiel (screenplay)","Actors":"Harrison Ford, Julia Ormond, Greg Kinnear, Nancy Marchand","Plot":"An ugly duckling having undergone a remarkable change, still harbors feelings for her crush: a carefree playboy, but not before his business-focused brother has something to say about it.","Language":"English, French","Country":"Germany, USA","Awards":"Nominated for 2 Oscars. Another 2 wins & 4 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYjQ5ZjQ0YzQtOGY3My00MWVhLTgzNWItOTYwMTE5N2ZiMDUyXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"65%"},{"Source":"Metacritic","Value":"56/100"}],"Metascore":"56","imdbRating":"6.3","imdbVotes":"35,527","imdbID":"tt0114319","Type":"movie","DVD":"15 Jan 2002","BoxOffice":"N/A","Production":"Paramount","Website":"N/A","Response":"True"},{"Title":"Tom and Huck","Year":"1995","Rated":"PG","Released":"22 Dec 1995","Runtime":"97 min","Genre":"Adventure, Comedy, Drama, Family, Romance, Western","Director":"Peter Hewitt","Writer":"Mark Twain (novel), Stephen Sommers (screenplay), David Loughery (screenplay)","Actors":"Jonathan Taylor Thomas, Brad Renfro, Eric Schweig, Charles Rocket","Plot":"Two best friends witness a murder and embark on a series of adventures in order to prove the innocence of the man wrongly accused of the crime.","Language":"English","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BN2ZkZTMxOTAtMzg1Mi00M2U0LWE2NWItZDg4YmQyZjVkMDdhXkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.5/10"},{"Source":"Rotten Tomatoes","Value":"25%"}],"Metascore":"N/A","imdbRating":"5.5","imdbVotes":"9,621","imdbID":"tt0112302","Type":"movie","DVD":"06 May 2003","BoxOffice":"N/A","Production":"Buena Vista","Website":"N/A","Response":"True"},{"Title":"Sudden Death","Year":"1995","Rated":"R","Released":"22 Dec 1995","Runtime":"111 min","Genre":"Action, Crime, Thriller","Director":"Peter Hyams","Writer":"Karen Elise Baldwin (story), Gene Quintano (screenplay)","Actors":"Jean-Claude Van Damme, Powers Boothe, Raymond J. Barry, Whittni Wright","Plot":"A former fireman takes on a group of terrorists holding the Vice President and others hostage during the seventh game of the NHL Stanley Cup finals.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BN2NjYWE5NjMtODlmZC00MjJhLWFkZTktYTJlZTI4YjVkMGNmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"51%"}],"Metascore":"N/A","imdbRating":"5.8","imdbVotes":"31,424","imdbID":"tt0114576","Type":"movie","DVD":"01 Nov 1998","BoxOffice":"N/A","Production":"MCA Universal Home Video","Website":"N/A","Response":"True"},{"Title":"GoldenEye","Year":"1995","Rated":"PG-13","Released":"17 Nov 1995","Runtime":"130 min","Genre":"Action, Adventure, Thriller","Director":"Martin Campbell","Writer":"Ian Fleming (characters), Michael France (story), Jeffrey Caine (screenplay), Bruce Feirstein (screenplay)","Actors":"Pierce Brosnan, Sean Bean, Izabella Scorupco, Famke Janssen","Plot":"Years after a friend and fellow 00 agent is killed on a joint mission, a secret space based weapons program known as \"GoldenEye\" is stolen. James Bond sets out to stop a Russian crime syndicate from using the weapon.","Language":"English, Russian, Spanish","Country":"UK, USA","Awards":"Nominated for 2 BAFTA Film Awards. Another 2 wins & 6 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMzk2OTg4MTk1NF5BMl5BanBnXkFtZTcwNjExNTgzNA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"7.2","imdbVotes":"233,822","imdbID":"tt0113189","Type":"movie","DVD":"19 Oct 1999","BoxOffice":"N/A","Production":"MGM/UA","Website":"N/A","Response":"True"}];
const users = require("../functions/users");
const movies = require("../../db/movie-data.json");

const User = require("../../db/schema/userSchema");
const Review = require("../../db/schema/reviewSchema");
const peopleModel = require("../../db/schema/schemaPeople");
const Movie = require("../../db/schema/movieSchema");

const admin = require("../functions/auth");

router.post("/", (req, res) => {
    
    const userObject = req.body.user; 
    const createdUser = users.registerUser(userObject);
    
    if (createdUser !== null) {
        
        //Checking unique usernames and ensuring user does not already exist in database
        User.findOne({userName: createdUser.userName})
        .then(data => {

            //User already exists in the database
            console.log(data);
            if (data) {
                
                res.status(400).send("User already exists");
                return;
            } else {

                //Salt and Hash Password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(createdUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err; 
                        }  

                        createdUser.password = hash;
                        createdUser.save(function(err, result) {

                            if (err) {
                            throw err; 
                            }
                            res.status(200).json({createdUser});
                            return;
                        
                        });
                    })
                });
            }
        });
    } else {
        
        res.status(400).send("Invalid Input: Please enter all fields");
        return;
    }
});

router.put("/:id/follow", admin.auth, (req, res) => {
    
    const userObject = req.session.user;
    const userToFollowObjectId = req.params.id;
    
    let newFollowingUpdate = {followingUsers: userToFollowObjectId};
   
    User.findByIdAndUpdate(userObject._id, {$push: newFollowingUpdate}, function(err, result) {
        if (err) {
            throw err;
        } else {
            
            const update = {followers: userObject._id}

            User.findByIdAndUpdate(userToFollowObjectId, {$push: update}, function(err, result) {
                if (err) {
                    throw err;
                } else {
                    
                    res.status(200).send(result);
                    return;
                }
            });
        }

    });

});


router.delete("/:id/follow", admin.auth, (req, res) => {
    
    const userObject = req.session.user;
    const userToFollowObjectId = req.params.id;
    
    let newFollowingUpdate = {followingUsers: userToFollowObjectId};
   
    User.findByIdAndUpdate(userObject._id, {$pull: newFollowingUpdate}, function(err, result) {
        if (err) {
            throw err;
        } else {
            
            const update = {followers: userObject._id}

            User.findByIdAndUpdate(userToFollowObjectId, {$pull: update}, function(err, result) {
                if (err) {
                    throw err;
                } else {
                    
                    res.status(200).send(result);
                    return;
                }
            });
        }

    });

});

router.get('/', admin.auth, (req, res) => {

    const name = req.query.name;
    const queryObject = users.user({name});
    console.log(queryObject);
    User.find(queryObject, function(err, result) {

        if (err) {
            res.status(400).send("User not found");
            return; 
        } else {
            res.status(200).json({result});
            return; 
        }

    });
    
});

router.get('/:user', admin.auth, (req, res) => {
    const user = req.params.user;
    const search = users.userWithId(user);

    User.findById( user, function(err,result){
        if (err){
            res.status(400).send("user cannot be found");
            console.log(err.message);
            return;

        } else {
            let foundObj = result; 
            let userObj = JSON.parse(JSON.stringify(result));
            const userReviews = result.reviews; 

            //Find all Reviews made by this user
            Review.find({"_id": { $in: userReviews}}, function(err, result) {
                if (err) {
                    throw err;
                    
                } else {
                    
                    const reviews = result;
                    userObj.reviewList = reviews;
                    
                    const followingUsers = foundObj.followingUsers;
                    User.find({"_id": { $in: followingUsers}}, function(err, result) {
                        
                        if (err) {
                            throw err;
                        }

                        const following = result; 
                        userObj.followingUsersList = following;

                        const followingPeople = foundObj.followingPeople;
                        peopleModel.find({"_id": {$in: followingPeople }}, function(err, result) {
                            if (err) {
                                throw err;
                            } else {
                                const peopleFollowing = result;
                                userObj.followingPeopleList = peopleFollowing;
                                res.status(200).json(userObj);
                            }
                        });
                    
                    })
                }
            });
        }
    })
});

router.get('/:user/movies', admin.auth, (req, res) => {
    const user = req.params.user;

    User.findById(user, function(err,result){
        if (err){
           throw err; 
        } else {
            let userReviews = result.reviews; 
            
            //Find all Reviews made by this user
            Review.find({"_id": { $in: userReviews}}, function(err, result) {
                if (err) {
                    throw err;
                    
                } else {
                    
                    const reviews = result;
                    let movieIds = [];

                    for (review of reviews) {
                        movieIds.push(review.movie);
                    }
                    
                    let searchObj = {};
                    searchObj._id = {$in: movieIds};

                    Movie.find(searchObj, function(err, result){
                        if (err) {
                            throw err; 
                        } else {
                            res.status(200).send(result);
                            return; 
                        }
                    });
                }
            });
        }
    })
})

router.put('/status', admin.auth, (req, res) => {
    let user = req.session.user;
    const id = user._id;
    const newUserType = users.changeUserType(user);
    user.Type = newUserType;

    if (user !== null) {

        const update = {Type: newUserType}
        User.findByIdAndUpdate(id, update, function(err, result) {
            if (err) {
                throw err; 
            } else {
                console.log(result);
                res.status(200).send(result);
                return;
            }
        });

    } else{
        res.status(400);
    }

    
});

module.exports = router;