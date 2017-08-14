const { Twitter } = require('node-social-api');
const socialLoginClass = require("social-login");
const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
    console.log('called /posts');
    // Twitter
    // const twitter = new Twitter({
    //     consumerKey: 'On1VUVPNnS89RvKOrrmn8ft9O',
    //     consumerSecret: 'elLoHWSiX9x7olRD17ILSNUIzP4dKoBnlKgzI87ufEmbpHazax',
    //     accessToken: '313549659-FkyaSbpfEGUx2kbEOflOW5B7riiKJVmIfncyJCf8',
    //     accessTokenSecret: 'gcb9b9sGcsFE0JgG3iAnQYEsqgq4o5ip7ziGrFuLI47bo',
    // });

    // console.log(twitter, 'twitter');

    // twitter.get('statuses/user_timeline').then(
    //     (data) => {
    //         console.log(data);
    //         res.status(200).json(data);

    //     },
    //     err => {
    //         console.error('oh sheet')
    //         res.status(500).json(err);

    //     }
    // );

    // Init
    var socialLogin = new socialLoginClass({
        returnRaw:  true,
        app: app,    					// ExpressJS instance
        url: 'http://127.0.0.1:5000',	// Your root url
        onAuth: function(req, type, uniqueProperty, accessToken, refreshToken, profile, done) {
            // This is the centralized method that is called when the user is logged in using any of the supported social site.
            // Setup once and you're done.
            
            findOrCreate({
            profile: profile,			// Profile is the user's profile, already filtered to return only the parts that matter (no HTTP response code and that kind of useless data)
            property: uniqueProperty,	// What property in the data is unique: id, ID, name, ...
            type: type					// What type of login that is: facebook, foursquare, google, ...
            }, function(user) {
                done(null, user);		// Return the user and continue
            });
        }
    });

    // Setup the various services:
    socialLogin.use({
        twitter:	{
            settings:	{
                clientID: 		"On1VUVPNnS89RvKOrrmn8ft9O",
                clientSecret: 	"elLoHWSiX9x7olRD17ILSNUIzP4dKoBnlKgzI87ufEmbpHazax"
            },
            url:	{
                auth:		"/auth/twitter",
                callback: 	"/auth/twitter/callback",
                success:	'/',
                fail:		'/auth/twitter/fail'
            }
        }
    });
});




module.exports = router;