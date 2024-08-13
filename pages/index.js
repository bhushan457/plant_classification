import Navbar from "@/Components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Import the Firebase app and analytics
import { app, analytics } from "../lib/firebase"; // Adjust the path as needed

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if Firebase is initialized correctly
    if (app) {
      console.log("Firebase app is connected:", app);
    } else {
      console.error("Firebase app is not connected.");
    }

    // Check if Analytics is initialized
    if (analytics) {
      console.log("Firebase analytics is connected:", analytics);
    } else {
      console.warn("Firebase analytics is not connected or running on the server.");
    }

    // Optional: Send a test event to Firebase Analytics
    if (analytics) {
      // Call any analytics function to test connectivity, e.g., logEvent()
      console.log("Sending test event to Firebase Analytics...");
      // logEvent(analytics, 'test_event', { test_param: 'value' }); // Uncomment when using logEvent
    }

  }, []);

  return (
    <>
      <Navbar />
      <div className="explore-btn">
        <button
          onClick={() => {
            router.push("./register");
          }}
          className="btn"
        >
          Explore Now
        </button>
      </div>
    </>
  );
};

export default Index;
