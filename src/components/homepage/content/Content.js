import React, { useState, useEffect } from "react";
import './Content.css'
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../../img/slider/slide1.jpeg"
import slide2 from "../../img/slider/slide2.jpeg"
import slide3 from "../../img/slider/slide3.jpeg"
import post1 from '../../img/post/post-card1.jpeg'
import post2 from '../../img/post/post-card2.jpeg'
import post3 from '../../img/post/post-card3.jpeg'
import post4 from '../../img/post/post-card4.jpeg'
import post5 from '../../img/post/post-card5.jpeg'
import post6 from '../../img/post/post-card6.jpeg'
import post7 from '../../img/post/post-card7.jpeg'
import post8 from '../../img/post/post-card8.jpeg'
import post9 from '../../img/post/post-card9.jpeg'
import post10 from '../../img/post/post-card10.jpeg'

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    const index = activeIndex === 0 ? 2 : activeIndex - 1;
    setActiveIndex(index);
  };

  const handleNextClick = () => {
    const index = activeIndex === 2 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="containers">
    <div className="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
        ></button>
        <button
          type="button"
          data-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
        ></button>
        <button
          type="button"
          data-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={activeIndex === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={slide1} alt="Pertemuan PPTIK ITB dan UBL"></img>
          <div className="post-meta group">
            <p className="post-category">
              <a href="#">Pertemuan PPTIK ITB dan UBL</a>
              <span> - </span>
            </p>
            <p className="post-category">
              <a href="#"> Mitra </a>
              <span>/</span>
              <a href="#"> Slider </a>
            </p>
            <p className="post-date">
                2 Mar, 2023
            </p>
          </div>
        </div>
        <div className={activeIndex === 1 ? "carousel-item active" : "carousel-item"}>
          <img src={slide2} alt="Diskusi kerjasama dengan UPI"></img>
          <div className="post-meta group">
            <p className="post-category">
              <a href="#">Diskusi kerjasama dengan UPI</a>
              <span> - </span>
            </p>
            <p className="post-category">
              <a href="#"> Mitra </a>
              <span>/</span>
              <a href="#"> Slider </a>
            </p>
            <p className="post-date">
                4 Apr, 2023
            </p>
          </div>
        </div>
        <div className={activeIndex === 2 ? "carousel-item active" : "carousel-item"}>
          <img src={slide3} alt="Kedai Reka PPTIK ITB, Pustekhan ITB dengan PT.PINDAD"></img>
          <div className="post-meta group">
            <p className="post-category">
              <a href="#">Kedai Reka PPTIK ITB, Pustekhan ITB dengan PT.PINDAD</a>
              <span> - </span>
            </p>
            <p className="post-category">
              <a href="#"> Mitra </a>
              <span>/</span>
              <a href="#"> Slider </a>
            </p>
            <p className="post-date">
                19 Mar, 2023
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-button carousel-button-prev"
        onClick={handlePrevClick}
      >
        &#10094;
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={handleNextClick}
      >
        &#10095;
      </button>
    </div>

      <div className="post-list">
      <div class="post-card">
        <div className="post-card-list">
        <img src={post1} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>6 Apr, 2023</p>
          <p><a href="#" class="button">Diskusi UMKM dengan Tegal</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post2} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>5 Apr, 2023</p>
          <p><a href="#" class="button">Diskusi Perencanaan Event Bersama ITB, UBL, Prasmul Universitas Telkom, Brin dan PT LSKK</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post3} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>4 Apr, 2023</p>
          <p><a href="#" class="button">Diskusi kerjasama dengan UPI</a></p>
        </div>
        </div>
      </div>
      <div class="post-card">
        <div className="post-card-list">
        <img src={post4} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>4 Apr, 2023</p>
          <p><a href="#" class="button">Diskusi tentang Smart Organization bersama WQA</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post5} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>1 Apr, 2023</p>
          <p><a href="#" class="button">Diskusi tentang Monja (Monitoring Jalan)</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post6} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>31 Mar, 2023</p>
          <p><a href="#" class="button">Diskusi dengan Prof. Bayu Jayawardhana mengenai beberapa kolaborasi riset internasional indonesia-belanda</a></p>
        </div>
        </div>
      </div>
            <div class="post-card">
        <div className="post-card-list">
        <img src={post7} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>31 Mar, 2023</p>
          <p><a href="#" class="button">Meeting dengan ADB dan Samsung</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post8} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>27 Mar, 2023</p>
          <p><a href="#" class="button">Implementasi Panic button bersama Mitra di Kota Banjar Baru, Kalimantan Selatan</a></p>
        </div>
        </div>
        <div className="post-card-list">
        <img src={post9} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>21 Mar, 2023</p>
          <p><a href="#" class="button">PPTIK IoT Bersama Mitra di Labuan Bajo</a></p>
        </div>
        </div>
      </div>
      <div class="post-card">
        <div className="post-card-list">
        <img src={post10} alt="Gambar Card"></img>
        <div class="post-card-content">
          <p>20 Mar, 2023</p>
          <p><a href="#" class="button">Diskusi bersama INDOSAT</a></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};


export default Content;