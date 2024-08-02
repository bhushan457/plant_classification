import React from 'react'
import style from '@/styles/Registerpage.module.css'
import { useRouter } from "next/router";

const Registerpage = () => {
  const router = useRouter();
  return (
    <>
    <div className={style.main}>
    <div className={style.routeBtn}>
        <div className={style.homeIcon}>
          <button 
          onClick={() => {
            router.push("/");
          }}
          className={style.regBtn}>Home</button>
        </div>
        <div className={style.loginIcon}>
          <button 
          onClick={() => {
            router.push("/login");
          }}
          className={style.regBtn}>Login</button>
        </div>
      </div>
      <div className={style.container}>
      <div className={style.plantImg}>
        <img src='/img/planting.png' alt="Description of image" width="350" height="300"/>
        </div>
        <div>
        <div className={style.title}>
            <p>Registration</p>
        </div>
            <div className={style.userDetails}>
                <div className={style.inputBox}>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" placeholder="Enter your number" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter your password" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="confirmPass">Confirm Password</label>
                    <input type="password" id="confirmPass" placeholder="Confirm your password" required/>
                </div>
            </div>
            <div className={style.regDiv}>
                <button className={style.regBtn} type='submit'>Submit</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Registerpage;
