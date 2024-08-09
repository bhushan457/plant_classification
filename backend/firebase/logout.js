// Logout button functionality
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {
    auth.signOut()
        .then(() => {
            // Successfully signed out
            alert("Logout successful!");

            // Redirect to the login page
            redirectToLoginPage();
        })
        .catch((error) => {
            // Handle logout errors
            alert(`Error: ${error.message}`);
        });
});

// Function to redirect to the login page
function redirectToLoginPage() {
    // Replace 'index.html' with the actual URL or path of your login page
    window.location.href = "login.html";
}

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (!user) {
        // If user is not logged in, redirect to login page
        redirectToLoginPage();
    }
});