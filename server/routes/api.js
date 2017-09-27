const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/test', (req, res) => {
    res.send('api works');
});

// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile', // redirect to the secure profile section
//     failureRedirect: '/signup', // redirect back to the signup page if there is an error
//     failureFlash: true // allow flash messages
// }));

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


});



module.exports = router;