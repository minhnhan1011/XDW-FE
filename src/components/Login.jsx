import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function Login() {
    const [values, setValues] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.email || !values.password) {
            setError("Vui lòng nhập đầy đủ Email và Mật khẩu");
            return;
        }

        axios.post(`https://xdw-be.onrender.com/login`, values)
            .then(res => {
                if (res.data.Status === "Đăng nhập thành công") {
                    navigate("/");
                } else {
                    setError(res.data.Message);
                    setTimeout(() => window.location.reload(), 3000);
                }
            })
            .catch(err => {
                console.error(err);
                setError("Có lỗi xảy ra. Vui lòng thử lại.");
            });
    };

    const handleGoogleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);

        console.log(decoded); // Debug Google data

        axios.post('https://xdw-be.onrender.com/google-login', {
            email: decoded.email,
            name: decoded.name,
            googleId: decoded.sub
        })
            .then(res => {
                if (res.data.Status === "Đăng nhập thành công") {
                    navigate("/");
                } else {
                    setError(res.data.Message);
                }
            })
            .catch(err => {
                console.error(err);
                setError("Đăng nhập Google thất bại. Vui lòng thử lại.");
            });
    };

    const handleGoogleLoginError = () => {
        setError("Đăng nhập Google thất bại. Vui lòng thử lại.");
    };

    return (
        <>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <p style={{ textAlign: "center", fontSize: "20px" }}>ĐĂNG NHẬP</p>

                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={e => setValues({ ...values, email: e.target.value })}
                    />

                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={e => setValues({ ...values, password: e.target.value })}
                    />

                    <button type="submit">Đăng nhập</button>

                    {error && <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>{error}</p>}

                    <p style={{ fontSize: "12px", textAlign: "center" }}>
                        Bạn chưa có tài khoản? <Link to={"/signup"}>Đăng ký ngay</Link>
                    </p>

                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginError}
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
