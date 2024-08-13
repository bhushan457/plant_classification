// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Firebase Auth State Listener
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is already signed in. Redirect to the home page.
            redirectToHomePage();
        }
    });

    // Login form submission
    const loginForm = document.getElementById("loginform");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("username").value;
            const password = document.getElementById("loginPassword").value;

            // Sign in with Firebase Authentication
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Successfully signed in
                    const user = userCredential.user;
                    alert("Login successful!");

                    // Redirect to the home page
                    redirectToHomePage();
                })
                .catch((error) => {
                    // Handle login errors
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    // Convert to a user-friendly string
                    let userFriendlyMessage = "";

                    switch (errorCode) {
                        case 'auth/user-not-found':
                            userFriendlyMessage = 'No user found with this email.';
                            break;
                        case 'auth/wrong-password':
                            userFriendlyMessage = 'Incorrect password. Please try again.';
                            break;
                        case 'auth/invalid-email':
                            userFriendlyMessage = 'Invalid email format. Please enter a valid email.';
                            break;
                        case 'auth/internal-error':
                            userFriendlyMessage = 'Internal error. Please try again later.';
                            break;
                        default:
                            userFriendlyMessage = 'Something went wrong. Please try again.';
                            break;
                    }

                    // Alert the user-friendly error message
                    alert(userFriendlyMessage);
                });

        });
    }

    // Register form submission
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            // Create a new user with Firebase Authentication
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Successfully registered
                    const user = userCredential.user;
                    alert("Registration successful!");

                    // Optional: Add user details to Firestore
                    db.collection("users").doc(user.uid).set({
                        email: email,
                        createdAt: new Date()
                    });

                    // Redirect to the home page
                    redirectToHomePage();
                })
                .catch((error) => {
                    // Handle registration errors
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    // Convert to a user-friendly string
                    let userFriendlyMessage = "";

                    switch (errorCode) {
                        case 'auth/email-already-in-use':
                            userFriendlyMessage = 'Email is already in use. Please use a different email.';
                            break;
                        case 'auth/invalid-email':
                            userFriendlyMessage = 'Invalid email format. Please enter a valid email.';
                            break;
                        case 'auth/weak-password':
                            userFriendlyMessage = 'Password is too weak. Please choose a stronger password.';
                            break;
                        default:
                            userFriendlyMessage = 'Something went wrong. Please try again.';
                            break;
                    }

                    // Alert the user-friendly error message
                    alert(userFriendlyMessage);
                });
        });
    }

    // Reset form submission
    const resetForm = document.getElementById("resetForm");
    if (resetForm) {
        resetForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("resetEmail").value;

            // Send password reset email using Firebase Authentication
            auth.sendPasswordResetEmail(email)
                .then(() => {
                    // Password reset email sent
                    alert("Password reset email sent!");
                })
                .catch((error) => {
                    // Handle reset errors
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    // Convert to a user-friendly string
                    let userFriendlyMessage = "";

                    switch (errorCode) {
                        case 'auth/user-not-found':
                            userFriendlyMessage = 'No user found with this email.';
                            break;
                        case 'auth/invalid-email':
                            userFriendlyMessage = 'Invalid email format. Please enter a valid email.';
                            break;
                        default:
                            userFriendlyMessage = 'Something went wrong. Please try again.';
                            break;
                    }

                    // Alert the user-friendly error message
                    alert(userFriendlyMessage);
                });
        });
    }

    // Function to redirect to the home page
    function redirectToHomePage() {
        // Replace 'home.html' with the actual URL or path of your home page
        window.location.href = "index.jsx";
    }
});
