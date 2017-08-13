const { Twitter } = require('node-social-api');
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
    const twitter = new Twitter({
        consumerKey: 'On1VUVPNnS89RvKOrrmn8ft9O',
        consumerSecret: 'elLoHWSiX9x7olRD17ILSNUIzP4dKoBnlKgzI87ufEmbpHazax',
        accessToken: '313549659-FkyaSbpfEGUx2kbEOflOW5B7riiKJVmIfncyJCf8',
        accessTokenSecret: 'gcb9b9sGcsFE0JgG3iAnQYEsqgq4o5ip7ziGrFuLI47bo',
    });

    console.log(twitter, 'twitter');

    // Some get query
    // twitter.get('medfia/recent').then((data) => {
    twitter.get('statuses/user_timeline').then(
        (data) => {
            console.log(data);
            res.status(200).json(data);

        },
        err => {
            console.error('oh sheet')
            res.status(500).json(err);

        }
    );
});

module.exports = router;