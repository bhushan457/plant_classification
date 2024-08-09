import React, { useState } from 'react';
import style from '@/styles/Login.module.css';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Ensure the path to your firebase.js is correct

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mail, showMail] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      router.push('/dashboard'); // Redirect to a dashboard page or any other route
    } catch (error) {
      setError(error.message);
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert('Password reset email sent successfully!');
      showMail(false); // Hide the email input field after sending the reset email
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Failed to send password reset email.');
    }
  };

  return (
    <>
      <div className={style.main}>
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
        </div>
        <div className={style.container}>
          <div>
            <div className={style.title}>
              <p>Login Here</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className={style.userDetails} id="loginform">
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
              </div>
              {error && <p className={style.error}>{error}</p>}
              <div className={style.regDiv}>
                <button className={style.regBtn} type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Submit'}
                </button>
              </div>
            </form>
            <div className={style.line}></div>
            <div className={style.forgetPass}>
              <p>Forget Password?</p>
              <button
                onClick={() => {
                  showMail(!mail);
                }}
              >
                Click here..
              </button>
              {mail ? (
                <div className={style.inputBox}>
                  <label htmlFor="resetEmail">Email</label>
                  <input
                    type="email"
                    id="resetEmail"
                    placeholder="Enter your email to reset password"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                  <button onClick={handlePasswordReset}>Send Reset Email</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .error {
          color: red;
          text-align: center;
          margin: 10px 0;
        }
      `}</style>
    </>
  );
};

export default Login;
