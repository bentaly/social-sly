module.exports = {

    twitterAuth : {
        'consumerKey'       : 'On1VUVPNnS89RvKOrrmn8ft9O',
        'consumerSecret'    : 'elLoHWSiX9x7olRD17ILSNUIzP4dKoBnlKgzI87ufEmbpHazax',
        'accessToken': '313549659-FkyaSbpfEGUx2kbEOflOW5B7riiKJVmIfncyJCf8',
        'accessTokenSecret':	'gcb9b9sGcsFE0JgG3iAnQYEsqgq4o5ip7ziGrFuLI47bo',        
        'callbackURL'       : '/api/auth/twitter/callback'
    },
    facebookAuth : {
        'clientID'      : '141495919793335', // your App ID
        'clientSecret'  : 'c5bc5bcafbb6a31801bd80398a50908a', // your App Secret
        'callbackURL'   : '/api/auth/facebook/callback'
        // 'callbackURL'   : 'http://localhost:3000/api/auth/facebook/callback'
    },
    googleAuth : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};