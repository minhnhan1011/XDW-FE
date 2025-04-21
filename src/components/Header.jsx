import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.jpg';
import Usericon from '../assets/iconuser.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuButtonStyle = {
    padding: '10px 20px',
    width: '100%',
    background: 'white',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease'
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await axios.get('http://localhost:8081/auth', { withCredentials: true });
        if (res.data.Status === 'Success') {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkToken();
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:8081/logout', { withCredentials: true })
      .then(() => {
        setAuth(false);
        setName('');
        toast.success("Đăng xuất thành công ✅");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch(() => {
        toast.error("Đăng xuất thất bại ❌");
      });
  };

  return (
    <div className="header">
      <div className="header-top">
        <img src={Logo} alt="logo" /> Flight Báo
      </div>

      <div className="header-mid">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><p>Trang chủ</p></Link>
        <Link to="/blog" style={{ textDecoration: 'none', color: 'black' }}><p>Blog</p></Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><p>Liên hệ</p></Link>
      </div>

      <div className="header-bot" style={{ position: 'relative' }}>
        {
          auth ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '20px' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  backgroundColor: 'white', 
                  padding: '8px 12px', 
                  borderRadius: '20px',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>
                  Hi, {name}
                </span>
                <FaChevronDown style={{ marginLeft: '5px', fontSize: '12px', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </div>

              {menuOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: '20px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  marginTop: '5px',
                  zIndex: '999',
                  overflow: 'hidden',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <button
                    style={menuButtonStyle}
                    onClick={() => navigate('/profile')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f2f2f2'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    Thông tin tài khoản
                  </button>
                  <button
                    style={menuButtonStyle}
                    onClick={handleLogout}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f2f2f2'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "10px",
                  border: '1px solid #008DDA',
                  padding: "8px 12px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}>
                  <img style={{ width: "15px", height: "15px" }} src={Usericon} alt="icon-user" />Đăng nhập
                </button>
              </Link>
            </div>
          )
        }
      </div>

      <ToastContainer />
    </div>
  );
}

export default Header;
