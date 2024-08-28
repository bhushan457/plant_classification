import React, { useState } from 'react';
import style from '@/styles/Registerpage.module.css';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Adjust the path as needed
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Registerpage = () => {

  const registerPage = useRef();

  useGSAP(()=>{
    gsap.from(registerPage.current,{
      opacity:0,
      scale:0,
      duration:0.5
    })  
  })

  const router = useRouter();

  // State for form inputs
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form validation
  const validateForm = () => {
    if (!name || !username || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    setSuccess(false);
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user's profile with additional details
      await updateProfile(user, {
        displayName: name,
        phoneNumber: phone,
      });

      console.log('User registered:', user);
      setSuccess(true);

      // Optional: Redirect to another page or show a success message
      router.push('/welcome'); // Redirect to a welcome page after registration
    } catch (error) {
      setError(error.message);
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div ref={registerPage} className={style.main}>
        <div className={style.routeBtn}>
          <div className={style.homeIcon}>
            <button
              onClick={() => {
                router.push('/');
              }}
              className={style.regBtn}
            >
              Home
            </button>
          </div>
          <div className={style.loginIcon}>
            <button
              onClick={() => {
                router.push('/login');
              }}
              className={style.regBtn}
            >
              Login
            </button>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.plantImg}>
            <img src="/img/planting.png" alt="Description of image" width="350" height="300" />
          </div>
          <div>
            <div className={style.title}>
              <p>Registration</p>
            </div>
            <form onSubmit={handleRegistration}>
              <div className={style.userDetails}>
                <div className={style.inputBox}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inputBox}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inputBox}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inputBox}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="Enter your number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inputBox}>
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    id="pass"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inputBox}>
                  <label htmlFor="confirmPass">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPass"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {error && <p className={style.error}>{error}</p>}
              {success && <p className={style.success}>Registration successful!</p>}
              <div className={style.regDiv}>
                <button className={style.regBtn} type="submit" disabled={loading}>
                  {loading ? 'Registering...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .error {
          color: red;
          text-align: center;
          margin: 10px 0;
        }
        .success {
          color: green;
          text-align: center;
          margin: 10px 0;
        }
      `}</style>
    </>
  );
};

export default Registerpage;
