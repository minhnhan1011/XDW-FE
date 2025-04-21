import React, { useState } from 'react';
import Header from './Header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin gửi đi:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', color: '#008DDA', marginBottom: '20px' }}>Liên Hệ Với Chúng Tôi</h1>
        <p style={{ marginBottom: '30px', color: '#555' }}>
          Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào, vui lòng điền vào form dưới đây. Chúng tôi sẽ phản hồi sớm nhất có thể!
        </p>

        {submitted && (
          <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px' }}>
            Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi bạn sớm nhất.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Họ và tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Nội dung:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 20px',
              backgroundColor: '#008DDA',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
