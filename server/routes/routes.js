module.exports = function (app, passport) {

    app.get('/api/profile', isLoggedIn, function (req, res) {
        console.log('req.user')
        console.log(req.user)
        res.status(200).json(req.user);
    });

    app.post('/api/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (err, user) {
            req.logIn(user, function () {
                res.status(err ? 500 : 200).send(err ? err : user);
            });
        })(req, res, next);
    });

    app.post('/api/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({
                    err: 'user not found'
                });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return res.status(500).json({
                        err: 'Could not log in user'
                    });
                }
                res.status(200).json({
                    status: 'Login successful!'
                });
            });
        })(req, res, next);
    });

    app.get('/api/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

    // handle the callback after facebook has authenticated the user
    app.get('/api/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    app.get('/api/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/api/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        //not sure whether to return this or call it
        return next();
    }

    // if they aren't redirect them to the home page
    // maybe?
    res.sendStatus(401);
    // res.redirect('/');
}