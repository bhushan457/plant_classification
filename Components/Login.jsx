import React, { useState } from 'react'
import style from '@/styles/Login.module.css'
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const[mail , showMail] = useState(false);
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
      </div>
      <div className={style.container}>
        <div>
        <div className={style.title}>
            <p>Login Here</p>
        </div>
            <div className={style.userDetails}>
                <div className={style.inputBox}>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required/>
                </div>
                <div className={style.inputBox}>
                    <label for="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter your password" required/>
                </div>
            </div>
            <div className={style.regDiv}>
                <button className={style.regBtn} type='submit'>Submit</button>
            </div>
            <div className={style.line}></div>
            <div className={style.forgetPass}>
                <p>Forget Password ?</p>
                <button onClick={()=>{
                    showMail(true);
                }}>click here..</button>
                {mail?
                <div className={style.inputBox}>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
            </div>:null
                }
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login;
