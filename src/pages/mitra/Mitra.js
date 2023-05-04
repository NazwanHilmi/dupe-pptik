import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Mitra.css'

import post1 from '../../components/img/post/post-card1.jpeg'
import post2 from '../../components/img/post/post-card2.jpeg'
import post3 from '../../components/img/post/post-card3.jpeg'
import post4 from '../../components/img/post/post-card4.jpeg'
import post5 from '../../components/img/post/post-card5.jpeg'
import post6 from '../../components/img/post/post-card6.jpeg'
import post7 from '../../components/img/post/post-card7.jpeg'
import post8 from '../../components/img/post/post-card8.jpeg'
import post9 from '../../components/img/post/post-card9.jpeg'
import post10 from '../../components/img/post/post-card10.jpeg'

function Mitra() {
    return (
        <MainLayout>
            <div className='containers'>
                <div className='content-mitra'>
                    <div className='category'>
                        <h1>
                            <i class="fa-solid fa-folder-open" style={{ color: '#4d4d4d' }}></i>
                            Category :
                            <span> Mitra</span>
                        </h1>
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
            </div>
        </MainLayout >
    )
}

export default Mitra