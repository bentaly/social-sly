// app/routes.js
module.exports = function (app, passport) {

        // PROBABLY NOT GOING TO USE THIS PAGE 
    
    app.get('/profile', isLoggedIn, function (req, res) {
        console.log('req.user')
        console.log(req.user)
        // res.render('profile.ejs', {
        //     user : req.user // get the user out of session and pass to template
        // });
    });
app.post('/api/test', (req, res) => {
    res.send('api works');
});

    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

      app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}