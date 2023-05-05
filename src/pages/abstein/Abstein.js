import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Abstein.css'
import modul1 from '../../components/img/abstein/1.jpeg'
import modul2 from '../../components/img/abstein/2.jpeg'

const ModulBelajar = () => {
    document.title = "Workshop | Bahan Materi - Pusat Penelitian Teknologi Informasi dan Komunikasi";

    return (
        <MainLayout>
            <div className='containers'>
                <div className='modul'>
                    <div className='modul-title'>
                        <h2><a href='#'>Berita</a> / <a href='/kegiatanpage'>Kegiatan</a></h2>
                        <div className='modul-content'>
                            <h1>WorkShop | Bahan Materi</h1>
                            <p>Diposting Oleh : <a href='#'>ADMINPPTIK</a> November 6, 2018</p>
                            <div className='modul-img'>
                                <img src={modul1}></img>
                                <img src={modul2}></img>
                            </div>
                            <div className='about-content'>
                                <p>Instrumentasi<br></br>
                                    memberi peluang besar dalam pengembangan bisnis dan industri baru. Saat ini, instrumentasi modern memiliki ciri khas menghubungkan hal-hal terkait ke internet, Internet of Things (IoT), sehingga informasi terkait mudah untuk diproses, dimonitor dan ditransformasi untuk menghasilkan nilai informasi yang baru dengan biaya yang terjangkau.</p><br></br>
                                <p>Instrumentasi modern memungkinkan munculnya inovasi nilai baru yang bermuara pada banyak peluang bisnis baru yang belum pernah ada sebelumnya.
                                    Pada kegiatan ini, diharapkan setiap SMK yang terlibat:<br></br>
                                    a. memiliki wawasan tentang IoT dan bagaimana memanfaatkannya dalam berbagai bidang maupun bisnis yang dapat dikembangkan berdasarkan IoT.<br></br>
                                    b. mendapatkan pengalaman mengembangkan produk-produk IoT yang terkait: produk-produk sistem instrumentasi, perangkat lunak baik di smartphone maupun di server.<br></br>
                                    c. dapat melihat bagaimana produk-produk tadi digunakan untuk menghasilkan layanan dan membuat action plan yang sesuai dengan kekuatan masing-masing SMK.<br></br>
                                    d. memulai melaksanakan action-plan di atas.</p>
                                <br></br>
                                <br></br>
                                <p>Beberapa Materi WorkShop IoT di mulai dari Merakit sampai Menampilkan di Website</p>
                                <div className='content-video'>
                                    <div className='about-video'>
                                        <p>1. Video Tutorial Merakit Mesin Abstein Menggunakan RFID Reader</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7iKKicDepX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className='about-video'>
                                        <p>2. Video Konfigurasi Node MCU</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Az-MAnXXyL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className='about-video'>
                                        <p>3.Video Konfigurasi Wifi</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mKp2zMxo8-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className='about-video'>
                                        <p>4. Video Pemasangan Mesin Absensi</p>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-TD--_8HdF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <p>File Workshop : <a href='https://1drv.ms/b/s!AscxZIjmF6VzmfhNymtxfZP_e7CnpQ'>Download Disini</a></p>
                                <p>Call Center <a href='http://bit.ly/adminIoT'>WA Admin | Click Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    )
}

export default ModulBelajar
