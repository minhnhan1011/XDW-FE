import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Profile() {
  const [user, setUser] = useState(null);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://xdw-be.onrender.com/auth", {
          withCredentials: true,
        });

        if (res.data.Status === "Success") {
          const name = res.data.name;

          const allUsers = await axios.get("https://xdw-be.onrender.com/users");
          const foundUser = allUsers.data.users.find(u => u.Tenkh === name);

          if (foundUser) {
            setUser({
              name: foundUser.Tenkh,
              email: foundUser.email,
              phone: foundUser.sdt
            });
          }

          // Sau khi lấy thông tin người dùng xong, lấy luôn vé máy bay
          const ticketsRes = await axios.get("https://xdw-be.onrender.com/mytickets", {
            withCredentials: true,
          });

          if (ticketsRes.data.Status === "Success") {
            setTickets(ticketsRes.data.data);
          }

        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />

      <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Thông tin khách hàng</h2>

        <div style={{ marginBottom: '15px' }}>
          <strong>Họ và tên:</strong>
          <p>{user.name}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong>Email:</strong>
          <p>{user.email}</p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong>Số điện thoại:</strong>
          <p>{user.phone || 'Chưa cập nhật'}</p>
        </div>

        <h3 style={{ marginTop: '30px' }}>Danh sách vé đã đặt</h3>

        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
              <p><strong>Mã máy bay:</strong> {ticket.mamaybay}</p>
              <p><strong>Điểm đi:</strong> {ticket.diemdi}</p>
              <p><strong>Điểm đến:</strong> {ticket.diemden}</p>
              <p><strong>Ngày đi:</strong> {new Date(ticket.ngaydi).toLocaleString()}</p>
              <p><strong>Ngày đến:</strong> {new Date(ticket.ngayden).toLocaleString()}</p>
              <p><strong>Hãng hàng không:</strong> {ticket.hanghangkhong}</p>
              <p><strong>Giá:</strong> {ticket.gia.toLocaleString()} VND</p>
            </div>
          ))
        ) : (
          <p>Bạn chưa đặt vé nào.</p>
        )}

        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#008DDA',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}

export default Profile;
