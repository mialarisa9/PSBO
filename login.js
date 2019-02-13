login();

function login() {
    Parse.User.logIn("my name", "my pass", {
        success: function(user) {
            // Do stuff after successful login, like a redirect.
            console.log('User logged in successful with username: ' + user.get("username") + ' and email: ' + user.get("email"));
        },
        error: function(user, error) {
            console.log("The login failed with error: " + error.code + " " + error.message);
        }
    });
}