import Link from "next/link";
import style from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <h1 className={style.title}>Welcome to plant world..</h1>
      <div className={style.mainNav}>
        <div className={style.logo}>
            <h1>Plant Classification</h1>
        </div>
        <div className={style.navList}>
        <Link href="/" legacyBehavior>
            <a>Home</a>
        </Link>
        <Link href="./MenuList/About" legacyBehavior>
            <a>About</a>
        </Link>
        <Link href="./MenuList/Contact" legacyBehavior>
            <a>Contact</a>
        </Link>
        <Link href="./MenuList/Information" legacyBehavior>
            <a>Information</a>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
