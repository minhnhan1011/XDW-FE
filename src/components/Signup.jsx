import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { auth, googleProvider } from './firebase'; // Tên file đúng là Firebase.jsx
import { signInWithCredential } from 'firebase/auth';
import jwtDecode from 'jwt-decode'; // ✅ đúng cách import jwt-decode

function Signup() {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault();
        axios.post(`http://localhost:8081/signup`, values)
            .then(() => {
                alert("Đăng ký thành công");
                navigate("/");
            });
    }

    const handleGoogleSuccess = async (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential); // ✅ dùng jwtDecode
        const googleUser = {
            name: decoded.name,
            email: decoded.email,
            password: decoded.sub, // Dùng Google ID làm mật khẩu
            phone: ""
        };

        try {
            const credential = googleProvider.credential(credentialResponse.credential);
            await signInWithCredential(auth, credential);

            await axios.post(`http://localhost:8081/signup`, googleUser);
            alert("Đăng ký bằng Google thành công");
            navigate("/");
        } catch (error) {
            console.error("Lỗi khi đăng ký với Google:", error);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={HandleSubmit}>
                <p style={{ textAlign: "center", fontSize: "20px", marginBottom: "10px" }}>ĐĂNG KÝ</p>

                <label>Họ và Tên: </label>
                <input type="text" placeholder="Nguyễn Minh Triều" name="name" onChange={e => setValues({ ...values, name: e.target.value })} />

                <label>Số điện thoại: </label>
                <input type="text" placeholder="0899459421" name="phone" onChange={e => setValues({ ...values, phone: e.target.value })} />

                <label>Email: </label>
                <input type="email" placeholder="trieunm2002@gmail.com" name="email" onChange={e => setValues({ ...values, email: e.target.value })} />

                <label>Mật khẩu: </label>
                <input type="password" placeholder="*********" name="password" onChange={e => setValues({ ...values, password: e.target.value })} />

                <button>Đăng ký</button>

                <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </p>

                <hr style={{ margin: "15px 0" }} />
                <p style={{ textAlign: "center", fontSize: "14px" }}>Hoặc đăng ký bằng Google</p>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => console.log("Đăng ký Google thất bại")}
                    />
                </div>
            </form>
        </div>
    );
}

export default Signup;
