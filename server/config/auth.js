module.exports = {

    'twitterAuth' : {
        'consumerKey'       : 'On1VUVPNnS89RvKOrrmn8ft9O',
        'consumerSecret'    : 'elLoHWSiX9x7olRD17ILSNUIzP4dKoBnlKgzI87ufEmbpHazax',
        'callbackURL'       : 'http://127.0.0.1:4200/auth/twitter/callback'
    },
    'facebookAuth' : {
        'clientID'      : '141495919793335', // your App ID
        'clientSecret'  : 'c5bc5bcafbb6a31801bd80398a50908a', // your App Secret
        'callbackURL'   : '/api/auth/facebook/callback'
        // 'callbackURL'   : 'http://localhost:3000/api/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};