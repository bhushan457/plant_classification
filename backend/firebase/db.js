function fetchProfileData(user) {
    // Show loading indicator
    // showLoading();

    // Get user email
    const userEmail = user.email;
    const userId = user.uid;

    // Display email on the profile page
    document.getElementById("email").textContent = userEmail;

    // Retrieve additional user data from Firestore if needed
    db.collection("users").doc(userId).get()
        .then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                // Display user data on the profile page
                document.getElementById("displayName").textContent = userData.displayName || "No Name";
                document.getElementById("userEmail").textContent = userData.email || "No Email";
                // Add more fields as needed
            } else {
                console.log("No user data found in Firestore.");
            }
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        })
        .finally(() => {
            // Hide loading indicator
            // hideLoading();
        });
}