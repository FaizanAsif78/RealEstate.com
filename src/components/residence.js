// import React from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function residence() {
    return (
        <div className="container mainrecidenve">
            <div className="row ">
                <h6>best choice</h6>
                <h1>popular residence</h1>
            </div>
            <div className="row swipers">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (1).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (2).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (3).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (1).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (2).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (3).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (1).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sliders">
                        <center>
                            <img src="pics (2).jpg" />
                        </center>
                        <div className="residendata">
                            <h6><span>$</span>47,000</h6>
                            <h4>garden city assat</h4>
                            <p> software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
export default residence;