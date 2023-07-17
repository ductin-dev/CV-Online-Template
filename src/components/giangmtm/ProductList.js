import { Fragment } from "react";

import styles from "./styles.module.css";

const ProductList = () => {

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Personal Creation <span className={styles.text_divide}>|</span><span style={{ marginLeft: 5, fontSize: 14, fontWeight: 400, color: "gray" }}>click each image for more detail</span></div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn`}
          // onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All | Total of 7
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">

          {/* Content 1 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product1" className="has-popup-media">
                  <img className="product-image" src="images/No.01.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product1" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.01.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/baolinhco/posts/pfbid029PERvZYpyGuz56ohVXKEpLnjT9MNScBVnJs59qrhFL8RkWs6zMyLTRqFwh5Dcrv4l' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>Công ty TNHH Đông Nam Dược Bảo Linh</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            Nhìn sang trái, nhìn sang trái…😌
                          </p>
                          <p>
                            🌱 Đông Nam Dược Bảo Linh đã có mặt ở các nhà thuốc tại Tp. Đà Nẵng.
                          </p>
                          <p>
                            🌱Tại đây, mọi người có thể mua trực tiếp Fly@way tại các địa điểm bán
                            mà Đông Nam Dược Bảo Linh đã đồng hành.
                            Khi mua trực tiếp tại điểm bán, mọi người sẽ nhận được 1 phần quà siêu
                            hấp dẫn mang tên “Bay cao cùng Bảo Linh” và đặc biệt mua với giá ưu
                            đãi nhất!
                          </p>
                          <ul className="list-style">
                            Các địa điểm Đông Nam Dược đã ghé thăm:
                            <li>
                              Nhà Thuốc Phước Thiện 6 (14h- 17h 08/12/2021) <br></br>
                              Địa chỉ: 133 Trần Cao Vân, Thanh Khê, Đà Nẵng.</li>
                            <li>
                              Nhà Thuốc Vạn Phước (8h - 11h30 11/12/2021) <br></br>
                              Địa chỉ: 102 Phan Thành, Thanh Khê, Đà Nẵng.
                            </li>
                          </ul>
                          <p>
                            🌱 Các địa điểm tiếp theo sẽ được Bảo Linh cập nhập sớm!! Hãy nhanh
                            tay sở hữu cho mình một bình xịt đuổi muỗi Fly@way để bảo vệ gia đình
                            mình cùng những phần quà hấp dẫn bạn nhé!! Love all các tình yêu của
                            Bảo Linh.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/baolinhco/posts/pfbid029PERvZYpyGuz56ohVXKEpLnjT9MNScBVnJs59qrhFL8RkWs6zMyLTRqFwh5Dcrv4l" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product1" className={`${styles.text_h1} name has-popup-media`}>
                  Công ty TNHH Đông Nam Dược Bảo Linh
                </a>
                <div className="category">Freelancer Job</div>
              </div>
            </div>
          </div>

          {/* Content 2 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product2" className="has-popup-media">
                  <img className="product-image" src="images/No.02.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.02.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/fsoftacademy.dn/posts/pfbid0ik7GYT64KxBGoZpDTMKbagJSVpBy4R88R1wGHnB5E69pj77LSEeHxfdH21UANt14l' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>FPT Software Academy Da Nang</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            GHI DANH KHÓA HỌC AUTOMATION TESTING NGAY - NHẬN ƯU ĐÃI
                            LÊN ĐẾN 30% HỌC PHÍ.
                          </p>
                          <blockquote>
                            <strong style={{ fontFamily: 'Raleway', fontWeight: 700, fontStyle: "normal" }}>🔰Hình thức: Online có tương tác trực tiếp với giảng viên.</strong>
                            <br></br>
                            <strong style={{ fontFamily: 'Raleway', fontWeight: 700, fontStyle: "normal" }}>🔰Lịch học: 18:00 - 21:00 3 buổi/tuần.</strong>
                          </blockquote>
                          <p>
                            ---------------------------
                            <br></br>
                            📍Khóa học phù hợp với:
                            <br></br>
                            - Người đi làm hoặc sinh viên các ngành kỹ thuật có kiến thức cơ bản
                            về CNTT và lập trình.
                            <br></br>
                            - Manual testing đang muốn chuyển sang Automation testing.
                            <br></br>
                            ---------------------------
                            <br></br>
                            📍Khóa học Automation testing tại Fsoft Academy xứng đáng để các
                            bạn lựa chọn:
                            <br></br>
                            - Cơ hội nhận ưu đãi lên đến 30% học phí toàn khóa học.
                            <br></br>
                            - Hỗ trợ giới thiệu việc làm tại các dự án toàn cầu của FPT Software.
                            <br></br>
                            - Nhận chứng chỉ: Automation testing - tấm vé thông hành và chứng
                            minh năng lực vô cùng uy tín trong cộng đồng IT do FPT Software
                            cung cấp.
                            <br></br>
                            - Chỉ sau 3 tháng bạn có thể trang bị đầy đủ kiến thức từ cơ bản đến
                            nâng cao để trở thành Automation tester chuyên nghiệp.
                          </p>
                          <p>
                            👉INBOX để được tư vấn ngay!!!!
                          </p>
                        </div>
                        <a href="https://www.facebook.com/fsoftacademy.dn/posts/pfbid0ik7GYT64KxBGoZpDTMKbagJSVpBy4R88R1wGHnB5E69pj77LSEeHxfdH21UANt14l" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product2" className={`${styles.text_h1} name has-popup-media`}>
                  FPT Software Academy Da Nang
                </a>
                <div className="category">FPT Software Da Nang</div>
              </div>
            </div>
          </div>

          {/* Content 3 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product3" className="has-popup-media">
                  <img className="product-image" src="images/No.03.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product3" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.03.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/FPTSoftware.tuyendung/posts/pfbid02fiH9KhReNzT2xFjMmQWZoFEKP5GpCxfdPdsfsYtFj95f4EohtH36qcBbWxF549nsl' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>FPT Software Academy</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            Ai nói học CNTT mới được đi kiến tập ở công ty công nghệ hàng đầu
                            Việt Nam nhỉ!!!!!
                            <br></br>
                            Mở bát đầu tháng 3, FPT Software Academy chào đón hơn 100 bạn sinh
                            viên “So Cute” Khoa tiếng Hàn - Trường đại học Ngoại Ngữ.
                            <br></br>
                            ✨Hy vọng những chia sẻ bổ ích về ngành Business Analyst và văn
                            phòng làm việc hiện đại tại FSOFT sẽ trở thành nơi làm việc lý tưởng
                            của các bạn trong tương lai nhé.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/FPTSoftware.tuyendung/posts/pfbid02fiH9KhReNzT2xFjMmQWZoFEKP5GpCxfdPdsfsYtFj95f4EohtH36qcBbWxF549nsl" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product3" className={`${styles.text_h1} name has-popup-media`}>
                  FPT Software Academy
                </a>
                <div className="category">FPT Software</div>
              </div>
            </div>
          </div>

          {/* Content 4 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product4" className="has-popup-media">
                  <img className="product-image" src="images/No.04.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product4" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.04.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/lebelhamyhoian/posts/pfbid0rUXSLc2gDEBofSf9TYuCck74JPeuneUeamcadq2jcfzw5GuvYpraiVbugGok53FBl' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>Le Belhamy Resort & Spa</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            BƯỚC CHẠM THIÊN NHIÊN NƠI CẢNH SẮC PHỐ CỔ.
                          </p>
                          <p>
                            🎉 Bạn đã từng đặt chân đến vùng đất thiên nhiên hữu tình của phố cổ
                            Hội An chưa? Đây sẽ là một sự lựa chọn tuyệt vời cho dịp Đại lễ này và
                            hãy cùng Le Belhamy Resort & Spa khám phá nhé!
                            <br></br>
                            🌴 Đến với nơi đây, là đến với một mảnh đất mang nhiều dấu ấn khi
                            được trải dài trên bờ biển Hà My thơ mộng với biển xanh cát trắng nắng
                            vàng. Nơi mà khí hậu ôn hòa, luôn ưu ái cho bao du khách khi ghé thăm
                            cùng với sự hiếu khách của con người phố cổ. Bên cạnh đó, du khách
                            còn được chiêm ngưỡng nét đẹp vượt thời gian của Hội An, tất cả sẽ
                            được gói gọn cho bạn tận hưởng khi chọn Le Belhamy Resort & Spa là
                            nơi nghỉ dưỡng đó.
                            <br></br>
                            ✨ Hãy để chúng tôi đồng hành cùng bạn trong dịp Đại lễ này với nhiều
                            trải nghiệm khó quên bên các dịch vụ cao cấp.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/lebelhamyhoian/posts/pfbid0rUXSLc2gDEBofSf9TYuCck74JPeuneUeamcadq2jcfzw5GuvYpraiVbugGok53FBl" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product4" className={`${styles.text_h1} name has-popup-media`}>
                  Le Belhamy Resort & Spa
                </a>
                <div className="category">CHIIC Digital</div>
              </div>
            </div>
          </div>

          {/* Content 5 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product5" className="has-popup-media">
                  <img className="product-image" src="images/No.05.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product5" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.05.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/ciciliasaigon/posts/pfbid0ee95QqX9QfxmtLkY9RZLtygZHiQUnAHQwibQ2My8sbiuY3bZWySWEUpQhuLxa3Zfl' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>Cicilia Saigon Hotel & Spa</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            ✨Một cơn “Hắt hơi” mùa hè đủ khiến thành phố như chìm trong sự vắng
                            lặng lạ thường. Sài Gòn ơi ráng khỏe nhé và hãy đoàn kết cùng nhau
                            vượt qua khó khăn.🌞 Cicilia Saigon tin rằng chúng ta sẽ chiến thắng
                            virus Corona thôi!
                            <br></br>
                            🎯Cùng Cicilia Saigon thực hiện nghiêm 5K và chỉ thị số 16 của bộ y
                            tế để giữ an toàn cho bản thân, gia đình và xã hội nhé!
                          </p>
                        </div>
                        <a href="https://www.facebook.com/ciciliasaigon/posts/pfbid0ee95QqX9QfxmtLkY9RZLtygZHiQUnAHQwibQ2My8sbiuY3bZWySWEUpQhuLxa3Zfl" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-capstone" className={`${styles.text_h1} name has-popup-media`}>
                  Cicilia Saigon Hotel & Spa
                </a>
                <div className="category">Freelance Job</div>
              </div>
            </div>
          </div>

          {/* Content 6 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product6" className="has-popup-media">
                  <img className="product-image" src="images/No.06.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product6" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.06.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/danangcodeleague/posts/pfbid07waWAYKdGkVXSeeRDuEL9q9o1N7sMx1DCkiN2KP7dShFuSpjqgRfDGJCZg5E1x5ol' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}> Da Nang Code League</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            MINIGAME: NHANH TAY LẸ MẮT - BẮT QUÀ LIỀN TAY.
                          </p>
                          <p>
                            🔥 Hòa cùng không khí sục sôi ngay từ vòng đăng ký của giải đấu lập
                            trình lớn nhất khu vực miền Trung - Tây Nguyên, hãy cùng Danang Code
                            League thư giãn cuối tuần với minigame “Nhanh tay lẹ mắt - Bắt quà liền tay” nhé.
                          </p>
                          <ul className="list-style">
                            Tham gia mini game chỉ với 3 bước đơn giản:
                            <li> ▪️ Bước 1: Like và theo dõi fanpage Danang Code League.</li>
                            <li>
                              ▪️ Bước 2: React và Share bài viết này về trang cá nhân ở chế độ công khai kèm
                              hashtag #DanangCodeLeague #DNCL2023 #minigame.
                            </li>
                            <li>
                              ▪️ Bước 3: Comment ảnh chụp màn hình đoạn Gif sắp xếp đúng vị trí và tag tên
                              03 người bạn ngay dưới post này.
                            </li>
                          </ul>
                          <p>
                            ⏰ Thời gian tham gia: Từ 25/3/2023 đến 23h59’ ngày 07/04/2023.
                            <br></br>
                            <br></br>
                            📍 Cơ cấu giải thưởng:
                            <br></br>
                            ▪️ 01 GIẢI NHẤT - Card điện thoại 500.000 đồng: BTC sẽ chọn ngẫu nhiên 01 bạn
                            có đáp án đúng và làm đủ các bước mini game.
                            <br></br>
                            ▪️ 20 GIẢI MAY MẮN - Card điện thoại 50.000 đồng: Dành cho 20 comment có đáp
                            án đúng và nhanh nhất, đồng thời làm đủ các bước mini game.
                            <br></br>
                            <br></br>
                            ❌ Lưu ý:
                            <br></br>
                            ▪️ Mỗi tài khoản chỉ được tham gia 1 lần, không chỉnh sửa bình luận.
                            <br></br>
                            ▪️ Tài khoản tham gia hợp lệ là tài khoản thật, chính chủ và thực hiện đầy đủ 03
                            bước trên.
                            ▪️ Kết quả Minigame sẽ được công bố sau ngày 10/04/2023 trên fanpage DaNang
                            Code League.
                            <br></br>
                            ▪️ Quyết định của BTC là quyết định cuối cùng.
                            <br></br>
                            <br></br>
                            Chúc các bạn may mắn!
                          </p>
                        </div>
                        <a href="https://www.facebook.com/danangcodeleague/posts/pfbid07waWAYKdGkVXSeeRDuEL9q9o1N7sMx1DCkiN2KP7dShFuSpjqgRfDGJCZg5E1x5ol" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product6" className={`${styles.text_h1} name has-popup-media`}>
                  Da Nang Code League
                </a>
                <div className="category">FPT Software</div>
              </div>
            </div>
          </div>

          {/* Content 7 */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-product7" className="has-popup-media">
                  <img className="product-image" src="images/No.07.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-product7" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/No.07.jpg" alt="" />
                      <a className={styles.go_to_button} href='https://www.facebook.com/7Foxx.accessories/posts/pfbid0bXHe3z3GC57MSeZx2dzxpx2fyxFnpS2w5LxAbtw4D3yubsgTwkBmUxKBtFPWdKDcl' target='_blank'>
                        <p style={{ margin: 0 }}>View post</p>
                      </a>
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1 className={styles.text_h1}>Seven Foxx</h1>
                        <div className="blog-detail">below is my public content for partners, which high quality for advertisement.</div>
                        <div className={`${styles.blog_content} blog-content`}>
                          <p>
                            Eᗰ KᕼôᑎG ᒪà ᑎàᑎG Tᕼơ
                            <br></br>
                            ᑎᕼưᑎG Eᗰ ᒪà ᗷEᔕT ᔕEᒪᒪEᖇ👑
                          </p>
                          <p>
                            💍𝑁𝑔𝑎̆́𝑚 𝑞𝑢𝑎 𝑒𝑚 𝑏𝑒𝑠𝑡-𝑠𝑒𝑙𝑙𝑒𝑟 𝑛ℎ𝑎̀ 7𝐹𝑜𝑥𝑥 đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑣𝑖̀ 𝑠𝑎𝑜 𝑐𝑎́𝑐 𝑒𝑚 𝑖́ 𝑐𝑜́ 𝑠𝑢̛́𝑐 ℎ𝑢́𝑡 𝑛ℎ𝑢̛ 𝑣𝑎̣̂𝑦
                            𝑛ℎ𝑎.𝑁𝑒̂́𝑢 𝑛𝑎̀𝑛𝑔 𝑐𝑢̃𝑛𝑔 𝑏𝑖̣ 𝑚𝑒̂ ℎ𝑜𝑎̣̆𝑐 𝑏𝑜̛̉𝑖 𝑛𝑒́𝑡 đ𝑒̣𝑝 𝑐𝑢̉𝑎 𝑛ℎ𝑢̛̃𝑛𝑔 𝑚𝑎̂̃𝑢 𝑣𝑜̀𝑛𝑔 𝑡𝑎𝑦 𝑚𝑜̛́𝑖 𝑛ℎ𝑎̂́𝑡 𝑡ℎ𝑖̀
                            𝑖𝑛𝑏𝑜𝑥 𝑛𝑔𝑎𝑦 𝑐ℎ𝑜 𝑡𝑢̣𝑖 𝑚𝑖̀𝑛ℎ đ𝑒̂̉ đ𝑢̛𝑜̛̣𝑐 𝑚𝑢𝑎 ℎ𝑎̀𝑛𝑔 𝑚𝑜̣̂𝑡 𝑐𝑎́𝑐ℎ 𝑛ℎ𝑎𝑛ℎ 𝑛ℎ𝑎̂́𝑡 𝑛ℎ𝑒́ ❤️.
                          </p>
                        </div>
                        <a href="https://www.facebook.com/7Foxx.accessories/posts/pfbid0bXHe3z3GC57MSeZx2dzxpx2fyxFnpS2w5LxAbtw4D3yubsgTwkBmUxKBtFPWdKDcl" className="button" target="_blank" style={{ width: "100%", marginTop: "1rem" }}>
                          <span className="text">View Live Content&nbsp;</span>
                          <span className="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-product7" className={`${styles.text_h1} name has-popup-media`}>
                  Seven Foxx
                </a>
                <div className="category">Personal Project</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ProductList;
