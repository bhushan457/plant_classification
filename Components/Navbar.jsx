import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Navbar = () => {

  const heading = useRef();

  var tl = gsap.timeline();

    useGSAP(()=>{
      tl.from(".logo_f",{
        opacity:0,
        y:-100,
        duration:0.2,
        delay:0.2
      })
    })

    useGSAP(()=>{
      tl.from(".nav",{
        opacity:0,
        y:-100,
      })
    })

    useGSAP(()=>{
      tl.from(heading.current,{
        opacity:0,
        scale:0,
        duration:0.5,
        delay:0.1
      })
    })
  return (
    <>
      <h1 ref={heading} className={style.title}>Welcome to plant world..</h1>
      <div className={style.mainNav}>
        <div className={style.logo}>
            <h1 className="logo_f">Plant Classification</h1>
        </div>
        <div className={style.navList}>
        <Link href="/" legacyBehavior>
            <a className="nav">Home</a>
        </Link>
        <Link href="./MenuList/About" legacyBehavior>
            <a className="nav">About</a>
        </Link>
        <Link href="./MenuList/Contact" legacyBehavior>
            <a className="nav">Contact</a>
        </Link>
        <Link href="./MenuList/Information" legacyBehavior>
            <a className="nav">Information</a>
        </Link>                                                                           
        </div>
      </div>
    </>
  )
}

export default Navbar;
