import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // import đúng nè

function Signup() {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.password) {
            setError("Vui lòng điền đầy đủ thông tin");
            return;
        }

        axios.post(`http://localhost:8081/signup`, values)
            .then(res => {
                alert("Đăng ký thành công");
                navigate("/");
            })
            .catch(err => {
                console.error("Lỗi đăng ký:", err);
                setError("Tài khoản đã tồn tại. Vui lòng thử lại.");
            });
    };

    const handleGoogleSuccess = (credentialResponse) => {
        try {
           const decoded = jwtDecode(credentialResponse.credential);
            console.log("Thông tin Google:", decoded);

            const googleUser = {
                name: decoded.name,
                phone: "",
                email: decoded.email,
                password: decoded.sub // Dùng sub làm mật khẩu tạm
            };

            axios.post(`http://localhost:8081/signup`, googleUser)
                .then(res => {
                    alert("Đăng ký bằng Google thành công");
                    navigate("/");
                })
                .catch(err => {
                    console.error("Lỗi đăng ký Google:", err);
                    setError("Đăng ký bằng Google thất bại. Vui lòng thử lại.");
                });

        } catch (error) {
            console.error("Lỗi giải mã token Google:", error);
            setError("Đăng ký bằng Google thất bại.");
        }
    };

    const handleGoogleError = () => {
        setError("Đăng ký Google thất bại. Vui lòng thử lại.");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <p style={{ textAlign: "center", fontSize: "20px", marginBottom: "10px" }}>ĐĂNG KÝ</p>

                <label>Họ và Tên: </label>
                <input type="text" placeholder="Nguyễn Minh Triều" name="name" onChange={e => setValues({ ...values, name: e.target.value })} />

                <label>Số điện thoại: </label>
                <input type="text" placeholder="0899459421" name="phone" onChange={e => setValues({ ...values, phone: e.target.value })} />

                <label>Email: </label>
                <input type="email" placeholder="trieunm2002@gmail.com" name="email" onChange={e => setValues({ ...values, email: e.target.value })} />

                <label>Mật khẩu: </label>
                <input type="password" placeholder="*********" name="password" onChange={e => setValues({ ...values, password: e.target.value })} />

                <button type="submit">Đăng ký</button>

                {error && <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>{error}</p>}

                <p style={{ fontSize: "12px", textAlign: "center" }}>
                    Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
                </p>

                <hr style={{ margin: "15px 0" }} />
                <p style={{ textAlign: "center", fontSize: "14px" }}>Hoặc đăng ký bằng Google</p>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                    />
                </div>
            </form>
        </div>
    );
}

export default Signup;
