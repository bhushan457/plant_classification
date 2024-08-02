import Navbar from "@/Components/Navbar";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
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

export default index;
