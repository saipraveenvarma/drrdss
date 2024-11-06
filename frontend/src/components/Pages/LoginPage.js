import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome} from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/MenuPage"); 
    } else {
      setError("Invalid email or password!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img src="/view.webp" alt="Emergency Response" style={styles.image} />
        <div style={styles.textOverlay}>
          <h1 style={styles.overlayTitle}>DRRDSS</h1>
          <p style={styles.overlayText}>
            DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM
          </p>
        </div>
      </div>

      <div style={styles.loginSection}>
      <div style={styles.logoContainer}>
      <FaHome
    className="header-icon"
    onClick={() => navigate('/')}
    style={styles.homeIcon}
  />
          <img src="/timor.png" alt="Timor Logo" style={styles.logo} />
          <img src="/rimes-logo.svg" alt="RIMES Logo" style={styles.logo} />
        </div>

        <div style={styles.infoText}>
          <p style={styles.infoTitle}>Democratic Republic of Timor-Leste</p>
          <p style={styles.infoDetails}>
            Palácio do Governo Avenida Presidente <br />
            Nicolau Lobato Dili, Timor-Leste <br />
            Phone: (+670) 331 1243 / 331 0479 <br />
            Email: gabmecae.rdtl@gmail.com
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <FaLock style={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={styles.input}
                required
              />
              <div onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {error && <div style={styles.error}>{error}</div>}
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      height: "100vh",
      display: "flex",
      overflow: "hidden",
      flexDirection: "row",
    },
    imageSection: {
      flex: "0 0 70%",
      position: "relative",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    textOverlay: {
      position: "absolute",
      top: "10rem",
      left: "20px",
      color: "white",
      textShadow: "2px 2px black",
    },
    overlayTitle: {
      fontSize: "70px",
      fontWeight: "bold",
      color: "white",
    },
    overlayText: {
      fontSize: "25px",
      color: "white",
    },
    loginSection: {
      flex: "0 0 30%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(49, 70, 33)",
      padding: "20px",
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap", // Allow wrapping for smaller screens
    },
    logo: {
      height: "100px",
      objectFit: "contain",
    },
    infoText: {
      textAlign: "center",
      color: "white",
      marginBottom: "10px",
    },
    infoTitle: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    infoDetails: {
      fontSize: "13px",
      lineHeight: "1.6",
    },
    card: {
      borderRadius: "8px",
      padding: "20px",
      width: "300px",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "600",
      color: "black",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    inputGroup: {
      position: "relative",
      marginBottom: "20px",
    },
    icon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "black",
    },
    input: {
      width: "70%", // Full width for all screens
      padding: "12px 40px",
      borderRadius: "4px",
      border: "1px solid black",
      outline: "none",
      fontSize: "16px",
    },
    eyeIcon: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    },
    eyeIconStyle: {
      color: "black",
    },
    error: {
      color: "red",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "600",
      marginTop: "10px",
      padding: "12px",
      border: "none",
      transition: "background-color .3s ease",
    },
     guestLogin: {
    marginTop: "15px",
  },
  guestLink: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },

  logoutBox: {
    position: "absolute",
    top: "60px",
    right: "10px",
    backgroundColor: "white",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  homeIcon: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white", // Set icon color to white
    cursor: "pointer",
    fontSize: "24px", // Adjust size if needed
  },
  
    // Media Queries for Responsive Design
    "@media (max-width: 1024px)": {
      overlayTitle: {
        fontSize: "50px", // Adjust title size
      },
      overlayText: {
        fontSize: "20px", // Adjust text size
      },
      logo: {
        height: "80px", // Reduce logo size
      },
    },
    "@media (max-width: 768px)": {
      container: {
        flexDirection: "column", // Stack image and login vertically
      },
      imageSection: {
        flex: "0 0 50%", // Adjust height
      },
      loginSection: {
        flex: "0 0 50%", // Adjust height
        padding: "10px",
      },
      card: {
        width: "90%", // Full width on smaller screens
        maxWidth: "300px", // Maintain max width
      },
    },
    "@media (max-width: 480px)": {
      overlayTitle: {
        fontSize: "30px", // Smaller title for mobile
      },
      overlayText: {
        fontSize: "18px",
      },
      logo: {
        height: "60px",
      },
    },
  };

export default LoginPage;