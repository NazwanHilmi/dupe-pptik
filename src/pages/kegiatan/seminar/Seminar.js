import React from 'react'
import MainLayout from '../../../layout/MainLayout'
import './Seminar.css'
import post1 from '../../../components/img/kegiatan/seminar/1.jpeg'
import post2 from '../../../components/img/kegiatan/seminar/2.jpeg'
import post3 from '../../../components/img/kegiatan/seminar/3.jpeg'
import post4 from '../../../components/img/kegiatan/seminar/4.jpeg'
import post5 from '../../../components/img/kegiatan/seminar/5.jpeg'
import post6 from '../../../components/img/kegiatan/seminar/6.jpeg'
import post7 from '../../../components/img/kegiatan/seminar/7.jpeg'
import post8 from '../../../components/img/kegiatan/seminar/8.jpeg'
import post9 from '../../../components/img/kegiatan/seminar/9.jpeg'
import post10 from '../../../components/img/kegiatan/seminar/10.jpeg'

import card1 from '../../../components/img/kegiatan/riset/1.png'
import card2 from '../../../components/img/kegiatan/riset/2.png'

const Seminar = () => {
    return (
        <MainLayout>
            <div className='containers'>
                <div className='category seminar'>
                    <h1>
                        <i class="fa-solid fa-folder-open" style={{ color: '#4d4d4d' }}></i>
                        Category :
                        <span> Seminar & Workshop</span>
                    </h1>
                </div>
                <div className="post-list kegiatan">
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post1} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>21 Sep, 2023</p>
                                <p><a href="#" class="button">Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wik...</a></p>
                                <p className='post-card-desc'>PPTIK diundang untuk menjadi pembicara pada kegiat…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post2} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>11 Jul, 2022</p>
                                <p><a href="#" class="button">Program Kelas Online bersama PT LSKK</a></p>
                                <p className='post-card-desc'>PPTIK membuat sebuah program yang disebut dengan K…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post3} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>6 Jun, 2022</p>
                                <p><a href="#" class="button">Webinar Smart System For Industry</a></p>
                                <p className='post-card-desc'>Webinar Smart System For Industry ialah salah satu…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post4} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>17 Nov, 2022</p>
                                <p><a href="#" class="button">Workshop di SMK Ulil Albab Cirebon</a></p>
                                <p className='post-card-desc'>PPTIK bersama tim melakukan workshop. Workshop dil…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post5} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>8 Nov, 2021</p>
                                <p><a href="#" class="button">Kunjungan SMK Dewantara Bekasi</a></p>
                                <p className='post-card-desc'>SMK Dewantara ialah salah satu SMK yang terletak d…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post6} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>3 Sep, 2022</p>
                                <p><a href="#" class="button">Workshop Jejaring Kemitraan bersama SMKN 13 Bandun...</a></p>
                                <p className='post-card-desc'>Workshop yang diadakan oleh SMKN 13 Bandung, mengu…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post7} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>21 Jul, 2022</p>
                                <p><a href="#" class="button">KKSI 2021</a></p>
                                <p className='post-card-desc'>KKSI atau KAMP Kreatif SMK Indonesia tahun 2021 ia…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post8} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>10 Aug, 2021</p>
                                <p><a href="#" class="button">Sosialisasi Kawal Desa</a></p>
                                <p className='post-card-desc'>PPTIK bersama dengan Mitra SMK yang terdiri dari K…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post10} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>7 Apr, 2021</p>
                                <p><a href="#" class="button">Webinar PPTIK SMK United</a></p>
                                <p className='post-card-desc'>PPTIK melaksanakan webinar pada tanggal 7 April. W…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post9} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>25 Mar, 2021</p>
                                <p><a href="#" class="button">PPTIK Modern Technology Platform</a></p>
                                <p className='post-card-desc'>PPTIK bekerja sama dengan SMKN 1 Cimahi menggelar …</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Seminar

export const Riset = () => {
    return (
        <MainLayout>
            <div className='containers'>
                <div className='category riset-kegiatan'>
                    <h1>
                        <i class="fa-solid fa-folder-open" style={{ color: '#4d4d4d' }}></i>
                        Category :
                        <span> Riset</span>
                    </h1>
                </div>
                <div className="post-list kegiatan">
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={card1} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>9 Mar, 2023</p>
                                <p><a href="#" class="button">Smart Health System</a></p>
                                <p className='post-card-desc'>Sistem Layanan Kesehatan (Health Care System) adal…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={card2} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>13 Feb, 2023</p>
                                <p><a href="#" class="button">Proses Pembuatan Mobil Listrik</a></p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post3} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>6 Jun, 2022</p>
                                <p><a href="#" class="button">Webinar Smart System For Industry</a></p>
                                <p className='post-card-desc'>Webinar Smart System For Industry ialah salah satu…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post4} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>17 Nov, 2022</p>
                                <p><a href="#" class="button">Workshop di SMK Ulil Albab Cirebon</a></p>
                                <p className='post-card-desc'>PPTIK bersama tim melakukan workshop. Workshop dil…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post5} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>8 Nov, 2021</p>
                                <p><a href="#" class="button">Kunjungan SMK Dewantara Bekasi</a></p>
                                <p className='post-card-desc'>SMK Dewantara ialah salah satu SMK yang terletak d…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post6} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>3 Sep, 2022</p>
                                <p><a href="#" class="button">Workshop Jejaring Kemitraan bersama SMKN 13 Bandun...</a></p>
                                <p className='post-card-desc'>Workshop yang diadakan oleh SMKN 13 Bandung, mengu…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post7} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>21 Jul, 2022</p>
                                <p><a href="#" class="button">KKSI 2021</a></p>
                                <p className='post-card-desc'>KKSI atau KAMP Kreatif SMK Indonesia tahun 2021 ia…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post8} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>10 Aug, 2021</p>
                                <p><a href="#" class="button">Sosialisasi Kawal Desa</a></p>
                                <p className='post-card-desc'>PPTIK bersama dengan Mitra SMK yang terdiri dari K…</p>
                            </div>
                        </div>
                        <div className="post-card-list kegiatan">
                            <img src={post10} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>7 Apr, 2021</p>
                                <p><a href="#" class="button">Webinar PPTIK SMK United</a></p>
                                <p className='post-card-desc'>PPTIK melaksanakan webinar pada tanggal 7 April. W…</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div className="post-card-list kegiatan">
                            <img src={post9} alt="Gambar Card"></img>
                            <div class="post-card-content">
                                <p>25 Mar, 2021</p>
                                <p><a href="#" class="button">PPTIK Modern Technology Platform</a></p>
                                <p className='post-card-desc'>PPTIK bekerja sama dengan SMKN 1 Cimahi menggelar …</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}