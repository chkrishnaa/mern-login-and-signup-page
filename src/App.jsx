import { useState } from "react";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={`container ${isRegistering ? "active" : ""}`}>
      <div className="form-box login">
        <form>
          <h1>Log in</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
          <p>or</p>
          <div className="social-icon">
            <a href="#">
              <i className="bx bxl-google"></i>
              <span>Sign in with Google</span>
            </a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <i className="bx bx-lock-alt"></i>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <p>or</p>
          <div className="social-icon">
            <a href="#">
              <i className="bx bxl-google"></i>
              <span>Register with Google</span>
            </a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button
            className="btn register-btn"
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button
            className="btn login-btn"
            onClick={() => setIsRegistering(false)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
