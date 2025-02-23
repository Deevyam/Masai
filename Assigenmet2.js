Q1
Since JavaScript executes synchronous code line by line, the console will print the statements in the exact order they appear.
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

Q2
function simulateLoadingScreen() {
    let count = 0;

    let intervalId = setInterval(() => {
        console.log("Loading...");

        count++;
        if (count === 5) { 
            clearInterval(intervalId);
            console.log("Loaded successfully!");
        }
    }, 1000);
}
simulateLoadingScreen();

Q3
function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}
timer(3000, (message) => {
    console.log(message);
});

Q4
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 1000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks completed");
            });
        });
    });
});

Q5

function registerUser(username, callback) {
    setTimeout(() => {
        if (!username) {
            callback("Registration failed: Username is required", null);
            return;
        }
        console.log("User registered successfully");
        callback(null, username);
    }, 1000);
}

function sendVerification(username, callback) {
    setTimeout(() => {
        if (username !== "validUser") {
            callback("Verification failed: Invalid user", null);
            return;
        }
        console.log("Verification email sent successfully");
        callback(null, username);
    }, 1000);
}

function loginUser(username, callback) {
    setTimeout(() => {
        if (username !== "validUser") {
            callback("Login failed: Incorrect credentials", null);
            return;
        }
        console.log("User logged in successfully");
        callback(null, username);
    }, 1000);
}

function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
        console.log(`Welcome, ${username}!`);
        callback(null);
    }, 1000);
}
registerUser("validUser", (err, user) => {
    if (err) {
        console.log(err);
        return;
    }

    sendVerification(user, (err, verifiedUser) => {
        if (err) {
            console.log(err);
            return;
        }

        loginUser(verifiedUser, (err, loggedInUser) => {
            if (err) {
                console.log(err);
                return;
            }

            displayWelcomeMessage(loggedInUser, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("Workflow completed successfully!");
            });
        });
    });
});

