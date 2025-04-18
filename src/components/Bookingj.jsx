import React, { useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';

function TicketInfo({ ticket }) {
    if (!ticket) return null;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">✅ Đặt vé thành công!</h2>
            <div className="space-y-2 text-base">
                <p><strong>Họ tên:</strong> {ticket.ho} {ticket.ten}</p>
                <p><strong>Email:</strong> {ticket.email}</p>
                <p><strong>SĐT:</strong> {ticket.sdt}</p>
                <p><strong>Địa chỉ:</strong> {ticket.dc}</p>
                <p><strong>Mã máy bay:</strong> {ticket.mamaybay}</p>
                <p><strong>Điểm đi:</strong> {ticket.diemdi}</p>
                <p><strong>Điểm đến:</strong> {ticket.diemden}</p>
                <p><strong>Ngày đi:</strong> {new Date(ticket.ngaydi).toLocaleString()}</p>
                <p><strong>Ngày đến:</strong> {new Date(ticket.ngayden).toLocaleString()}</p>
                <p><strong>Hãng hàng không:</strong> {ticket.hanghangkhong}</p>
                <p><strong>Giá vé:</strong> {ticket.gia.toLocaleString()} VND</p>
            </div>
        </div>
    );
}

function Booking() {
    const [selectedFlight, setselectedFlight] = useState(
        JSON.parse(localStorage.getItem('chonve')) || { itineraries: [], price: { total: 0 } }
    );

    const [ho, setho] = useState("");
    const [ten, setten] = useState("");
    const [email, setmail] = useState("");
    const [sdt, setsdt] = useState("");
    const [dc, setdc] = useState("");

    const [mamaybay, setmamaybay] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.aircraft?.code || ""
    );
    const [diemdi, setdiemdi] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.departure?.iataCode || ""
    );
    const [diemden, setdiemden] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.arrival?.iataCode || ""
    );
    const [ngaydi, setngaydi] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.departure?.at || ""
    );
    const [ngayden, setngayden] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.arrival?.at || ""
    );
    const [hanghangkhong, sethanghangkhong] = useState(
        selectedFlight?.itineraries?.[0]?.segments?.[0]?.carrierCode || ""
    );
    const [gia, setgia] = useState((selectedFlight?.price?.total || 0) * 26000);

    const [isBooked, setIsBooked] = useState(false);
    const [ticketInfo, setTicketInfo] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            mamaybay,
            diemdi,
            diemden,
            ngaydi,
            ngayden,
            hanghangkhong,
            gia,
            ho,
            ten,
            email,
            sdt,
            dc
        };

        axios.post("http://localhost:8081/datve", data)
            .then(res => {
                setTicketInfo(data);
                setIsBooked(true);
            })
            .catch(err => {
                console.error("Lỗi đặt vé:", err);
                alert("Đặt vé thất bại. Vui lòng thử lại!");
            });
    }

    return (
        <>
            <Header />
            <hr />
            <div className="booking-background">
                <div className="booking">
                    <h1 style={{ textAlign: "center" }}>Booking Flight</h1>

                    {!isBooked ? (
                        <div className="booking-box">
                            <div className="booking-box-info">
                                {selectedFlight.itineraries?.length > 0 ? (
                                    selectedFlight.itineraries.map((data, index) => (
                                        <div key={index}>
                                            {data.segments?.length > 0 ? (
                                                data.segments.map((data1, index1) => (
                                                    <div key={index1} className="booking-infoFlight">
                                                        <h3>Chuyến bay</h3>
                                                        <p>Mã máy bay: {data1.aircraft?.code || "N/A"}</p>
                                                        <p>Điểm đi: {data1.departure?.iataCode || "N/A"}</p>
                                                        <p>Ngày đi: {data1.departure?.at || "N/A"}</p>
                                                        <p>Điểm đến: {data1.arrival?.iataCode || "N/A"}</p>
                                                        <p>Ngày đến: {data1.arrival?.at || "N/A"}</p>
                                                        <p>Hãng hàng không: {data1.carrierCode || "N/A"}</p>
                                                        <p>Giá vé: {(selectedFlight.price.total * 26000).toLocaleString()} VND</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>Không có thông tin chuyến bay</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p>Không có chuyến bay nào được chọn</p>
                                )}
                            </div>

                            <div className="booking-box-traveler">
                                <form className="booking-box-traveler-form" onSubmit={handleSubmit}>
                                    <h2 style={{ textAlign: "center" }}>Thông tin hành khách</h2>
                                    <div className="booking-box-traveler-form-input">
                                        <div className="booking-box-traveler-form-input-name">
                                            <div style={{ flexBasis: "50%" }}>
                                                <p>Họ</p>
                                                <input
                                                    type="text"
                                                    style={{ width: "97%" }}
                                                    onChange={(e) => setho(e.target.value)}
                                                />
                                            </div>
                                            <div style={{ flexBasis: "50%" }}>
                                                <p>Tên</p>
                                                <input
                                                    type="text"
                                                    style={{ width: "97%" }}
                                                    onChange={(e) => setten(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p>Email</p>
                                        <input type="text" onChange={(e) => setmail(e.target.value)} />
                                        <p>Số điện thoại</p>
                                        <input type="text" onChange={(e) => setsdt(e.target.value)} />
                                        <p>Địa chỉ</p>
                                        <input type="text" onChange={(e) => setdc(e.target.value)} />
                                        <button
                                            style={{
                                                cursor: "pointer",
                                                marginTop: "10px",
                                                width: "100%",
                                                borderRadius: "5px",
                                                border: "1px solid white",
                                                backgroundColor: "#008DDA",
                                                color: "white",
                                                padding: "15px",
                                            }}
                                        >
                                            Đặt vé
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <TicketInfo ticket={ticketInfo} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Booking;
