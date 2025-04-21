import React, { useState } from 'react';
import Header from './Header';
import blogImage from '../assets/blog1.jpg';
import blogImage1 from '../assets/blog2.jpg';
import blogImage2 from '../assets/blog3.webp';
import blogImage3 from '../assets/blog4.webp';
import blogImage4 from '../assets/blog5.webp';
import blogImage5 from '../assets/blog6.webp';
import blogImage6 from '../assets/blog7.webp';
import blogImage7 from '../assets/blog8.webp';

function BlogPage() {
  const posts = [
    {
      id: '1',
      title: 'Bí quyết săn vé máy bay giá rẻ',
      date: '20/04/2025',
      excerpt: 'Bạn muốn đi du lịch mà vẫn tiết kiệm chi phí? Hãy khám phá những mẹo nhỏ giúp bạn săn vé máy bay giá rẻ hiệu quả.',
      content: (
        <>
          <p>
            Một sự thật mà không phải ai cũng biết khi đặt vé máy bay đó chính là đặt vé sớm sẽ có giá rẻ hơn khi đặt vé cận ngày. 
            Đầu tiên, khi đặt vé sớm, bạn sẽ có nhiều lựa chọn về hạng ghế hơn như hạng thương gia hoặc hạng phổ thông...
          </p>
          <img src={blogImage} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            Tiếp theo, nếu bạn đang có kế hoạch du lịch cùng hội nhóm với số lượng thành viên đông, đặt vé sớm sẽ là sự lựa chọn hoàn hảo...
            Một mẹo khác để săn vé rẻ là chọn các khung giờ bay ít phổ biến như sáng sớm hoặc tối muộn. Những chuyến bay vào các khung giờ này thường có giá rẻ hơn do ít người lựa chọn.
             Ngoài ra, hãy chú ý đến các ngày bay giữa tuần như thứ 3, thứ 4 vì giá vé thường thấp hơn so với cuối tuần.
          </p>
          <p>
          Điều quan trọng nhất khi đặt vé máy bay giá rẻ là hãy luôn kiểm tra kỹ các khoản thuế, phí và phụ thu đi kèm. Nhiều trường hợp, giá vé hiển thị ban đầu có thể rất rẻ, 
          nhưng khi cộng thêm các khoản phụ thu như phí thanh toán thẻ, phí hành lý, phí chỗ ngồi… giá vé tổng cộng có thể không còn rẻ như ban đầu.
          Để tránh trường hợp lỡ mua phải vé có mức giá không mong muốn, bạn hãy đọc kỹ các điều khoản trước khi thanh toán để tránh những khoản phí ẩn.
          Trước khi đặt vé, hãy tìm kiếm các mã giảm giá hoặc coupon trên nhiều nền tảng như website hãng hoặc các ngân hàng liên kết với hãng hàng không. 
          Nhiều website hãng hàng không sẽ có chương trình cung cấp mã giảm giá cho các khách hàng mới hoặc cho các chuyến bay vào thời điểm nhất định. 
          Đồng thời, nhiều ngân hàng hiện nay áp dụng chương trình ưu đãi hoặc “đặc quyền” dành cho chủ thẻ khi mua vé hoặc khi đi máy bay. Tận dụng tốt những yếu tố này có thể giúp bạn mua được vé với giá rẻ hơn.
          </p>
          <img src={blogImage1} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
          Một số hãng hàng không và trang web đặt vé cung cấp mức giá khác nhau dựa trên hình thức thanh toán. Ví dụ, thanh toán bằng thẻ tín dụng có thể có phí bổ sung, 
          trong khi thanh toán qua chuyển khoản, VNpay có thể được giảm giá từ chương trình ưu đãi của ngân hàng.
          Nếu bạn thường xuyên bay với một hãng hàng không cụ thể, hãy tham gia chương trình khách hàng thân thiết của hãng. Tích điểm từ các chuyến bay và sử dụng điểm 
          này để giảm giá cho các chuyến bay trong tương lai hoặc nhận các ưu đãi đặc biệt.
          Tạm kết: Việc săn vé máy bay giá rẻ đòi hỏi sự kiên nhẫn và tìm hiểu kỹ lưỡng. Bằng cách áp dụng những mẹo trên, bạn sẽ tăng cơ hội tìm được vé giá tốt và tối ưu hóa chi phí cho chuyến đi của mình. 
          </p>
          
        </>
      )
    },
    {
      id: '2',
      title: 'Top 5 điểm đến hot nhất mùa hè 2025',
      date: '15/04/2025',
      excerpt: 'Mùa hè này, bạn không thể bỏ lỡ những điểm đến tuyệt đẹp, từ bãi biển thơ mộng đến thành phố nhộn nhịp đang được giới trẻ săn đón.',
      content: (
        <>
          <p>
          Người chơi hệ đến hè là thấy bủn rủn tay chân, mỏi mờ con mắt phải đi du lịch mới có thể nạp nên năng 
          lượng thì nhanh đọc bài viết này.
           Ở đây có sẵn 14 địa điểm du lịch hè 2025 trong nước và nước ngoài cực hot kèm theo bật mí cách đi du lịch 
           cực êm với túi tiền. Nhanh đọc thôi!
          </p>
          <img src={blogImage2} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            <strong>
            1. Vịnh Hạ Long
            </strong>
          </p>
          <p>
          Được không chỉ khách nội địa mà cả bạn bè thế giới đều rất yêu thích, Vịnh Hạ Long luôn cuốn hút khách du lịch với vẻ
           đẹp hữu tình. Hàng nghìn đảo đá vôi sừng sững trên mặt nước trong xanh đã tạo nên một trong những kỳ quan thiên nhiên 
           hiếm có.Để đến Hạ Long, bạn có thể đặt vé máy bay đi Vân Đồn và từ đó di chuyển đi Hạ Long. Chuyến đi của bạn sẽ càng 
           thêm tuyệt vời nếu bổ sung tour du thuyền Hạ Long vào lịch trình. Vẻ đẹp Hạ Long cùng những giờ phút thư giãn, 
           đắm mình trong làn nước trong xanh ở Bãi Cháy sẽ giúp bạn gột rửa mọi muộn phiền, tái tạo năng lượng và chữa lành hiệu 
           quả.
          </p>
          <img src={blogImage3} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            <strong>
            2. Phú Quốc
            </strong>
          </p>
          <p>
          Muốn nạp vitamin sea thì Đảo Ngọc Phú Quốc chính là địa điểm du lịch hè lý tưởng không gì bằng. 
          Tại Phú Quốc có rất nhiều hòn đảo nhỏ và mỗi đảo lại có vẻ đẹp riêng. Vậy nên để tối đa trải nghiệm trong chuyến đi, 
          bạn có thể đặt tour du lịch Phú Quốc trên Traveloka để khám phá. Nhớ thưởng thức thật nhiều hải sản tươi ngon ở đây 
          nữa nhé!
          </p>
          <img src={blogImage4} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            <strong>
            3. Phú Yên
            </strong>
          </p>
          <p>
          Cho những ai thích vẻ đẹp nên thơ và bình dị, du lịch Phú Yên dịp hè là một ý tưởng thú vị. Nếu bạn chỉ có thời gian 
          ngắn để du ngoạn, hãy đặt tour Phú Yên để có thể ghé thăm trọn vẹn những địa điểm nổi tiếng nhất nơi đây như nhà thơ 
          phong cách Gothic Mằng Lăng, Hồ Quan Âm chùa Thanh Lương với tượng phật bằng gỗ nổi tiếng linh thiêng, thư giãn tại
           Gành Ông và Bãi xếp - chính là địa điểm đã được đạo diễn Victor Vũ đưa vào phim "Tôi thấy hoa vàng trên cỏ xanh"...

          </p>
          <img src={blogImage5} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            <strong>
            4. Côn đảo
            </strong>
          </p>
          <p>
          Có lẽ đây là một nơi du lịch hè đặc biệt nhất trong danh sách này vì khi đến Côn Đảo, bên cạnh việc được tận hưởng 
          những bãi biển hoang sơ, xinh đẹp, bạn còn được tham quan di tích lịch sử. Với một số người, đây còn địa điểm du lịch 
          tâm linh nổi tiếng. Nếu bạn cũng như thế thì hãy tham gia tour tour du lịch Côn Đảo đang có giá cực tốt trên Traveloka 
          nhé!
          </p>
          <img src={blogImage6} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          <p>
            <strong>
            5. Quy Nhơn
            </strong>
          </p>
          <p>
          Các bãi biển miền Trung luôn có sức hút riêng với làn nước trong xanh hơn những nơi khác trên đất nước. Quy Nhơn cũng 
          là nơi du lịch với những bãi biển đẹp đến ngất ngây. Ẩm thực Quy Nhơn cũng đã làm bao du khách lưu luyến. Và nếu ngoài
           du lịch biển, bạn còn muốn tìm hiểu về vùng đất xưa hào hùng, tour du lịch Quy Nhơn chính là dành cho bạn. Đặt ngay 
           trên Traveloka nha!
          </p>
          <img src={blogImage7} alt="Hình ảnh minh họa" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '20px 0' }}/>
          </>
          )
        },
        {
          id: '3',
          title: '5 mẹo du lịch tiết kiệm mà vẫn "xịn sò"',
          date: '22/04/2025',
          excerpt: 'Du lịch không cần tốn kém nếu bạn biết cách! Cùng khám phá những bí quyết vừa tiết kiệm vừa tận hưởng trọn vẹn chuyến đi.',
          content: (
            <>
              <p>
                Ai bảo du lịch phải tốn kém? Với một số mẹo nhỏ như săn khuyến mãi, chọn homestay thay vì khách sạn 5 sao, hoặc dùng các app hoàn tiền, bạn hoàn toàn có thể tiết kiệm hàng triệu đồng mỗi chuyến đi.
              </p>
              <p>
                <strong>Đặt phòng và vé sớm</strong> không chỉ giúp bạn có giá tốt mà còn nhiều lựa chọn đẹp. Hơn nữa, hãy lên kế hoạch sớm để tránh những chi phí phát sinh vào phút cuối.
              </p>
              <p>
                Một bí quyết khác là <strong>ưu tiên trải nghiệm miễn phí</strong> như đi bộ tham quan, tham gia sự kiện địa phương, thay vì những tour du lịch đắt đỏ.
              </p>
            </>
          )
        },
        {
          id: '4',
          title: 'Top 3 bãi biển đẹp nhất Việt Nam bạn phải ghé',
          date: '25/04/2025',
          excerpt: 'Nếu yêu biển xanh, cát trắng và nắng vàng, đừng bỏ lỡ 3 bãi biển tuyệt đẹp này trong chuyến hành trình của bạn!',
          content: (
            <>
              <p>
                Việt Nam sở hữu nhiều bãi biển đẹp mê hồn. Trong đó, <strong>Biển Mỹ Khê (Đà Nẵng)</strong> được mệnh danh là một trong những bãi biển quyến rũ nhất hành tinh.
              </p>
              <p>
                <strong>Biển Sao (Phú Quốc)</strong> lại nổi tiếng với làn nước trong xanh như ngọc và bãi cát mịn như kem.
              </p>
              <p>
                Cuối cùng, <strong>Biển Cửa Đại (Hội An)</strong> mang vẻ đẹp hoang sơ, yên bình, rất thích hợp để nghỉ dưỡng tránh xa sự ồn ào.
              </p>
            </>
          )
        },
        {
          id: '5',
          title: 'Checklist cần chuẩn bị trước mỗi chuyến đi',
          date: '28/04/2025',
          excerpt: 'Bạn sắp có một chuyến đi xa? Đừng quên những thứ quan trọng dưới đây để chuyến đi suôn sẻ và hoàn hảo nhé!',
          content: (
            <>
              <p>
                Trước khi lên đường, hãy đảm bảo bạn đã chuẩn bị đầy đủ các giấy tờ quan trọng như <strong>CMND/CCCD, hộ chiếu, vé máy bay, booking khách sạn</strong>.
              </p>
              <p>
                Đừng quên <strong>thuốc men cơ bản</strong> như thuốc cảm, đau bụng, băng cá nhân, và các vật dụng cá nhân như kem chống nắng, sạc điện thoại, đồ vệ sinh cá nhân.
              </p>
              <p>
                Một mẹo nhỏ: hãy lập checklist ít nhất 3 ngày trước ngày đi để kiểm tra kỹ càng và tránh quên những vật dụng quan trọng!
              </p>
            </>
          )
        },
        
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '30px', color: '#008DDA' }}>Blog Du Lịch</h1>

        {selectedPost ? (
          <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '10px' }}>
            <h3>{selectedPost.title}</h3>
            <p><em>{selectedPost.date}</em></p>
            <div style={{ marginTop: '10px', lineHeight: '1.6', fontSize: '18px', wordWrap: 'break-word', textAlign: 'justify',overflowY: 'auto' }}>
              {selectedPost.content}
            </div>
            <button
              style={{
                marginTop: '20px',
                padding: '8px 12px',
                borderRadius: '5px',
                backgroundColor: '#aaa',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={handleBack}
            >
              ← Quay lại danh sách
            </button>
          </div>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{post.title}</h2>
              <p style={{ color: '#777', fontSize: '14px', marginBottom: '10px' }}>{post.date}</p>
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>{post.excerpt}</p>
              <button
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#008DDA',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                onClick={() => handleReadMore(post)}
              >
                Đọc tiếp
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogPage;
