import React from 'react'
import MainLayout from '../../layout/MainLayout'
import styles from './Karya.css'
import post1 from '../../components/img/karya/1.jpeg'
import post2 from '../../components/img/karya/2.jpeg'
import post3 from '../../components/img/karya/3.jpeg'
import post4 from '../../components/img/karya/4.jpeg'
import post5 from '../../components/img/karya/5.jpeg'
import post6 from '../../components/img/karya/6.jpeg'
import post7 from '../../components/img/karya/7.jpeg'
import post8 from '../../components/img/karya/8.jpeg'
import post9 from '../../components/img/karya/9.jpeg'
import post10 from '../../components/img/karya/10.jpeg'

function Karya() {
  document.title = "Karya - Pusat Penelitian Teknologi Informasi dan Komunikasi";

  return (
    <MainLayout>
      <div className='containers'>
        <div className='content-karya'>
          <div className='category'>
            <h1>
              <i class="fa-solid fa-folder-open" style={{ color: '#4d4d4d' }}></i>
              Category :
              <span> Karya</span>
            </h1>
          </div>
          <div className="post-list">
            <div class="post-card">
              <div className="post-card-list karya">
                <img src={post1} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>1 Apr, 2023</p>
                  <p><a href="#" class="button">Diskusi tentang Monja (Monitoring Jalan)</a></p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post2} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>9 Apr, 2023</p>
                  <p><a href="#" class="button">Smart Health System</a></p>
                  <p className='post-card-desc'>Sistem Layanan Kesehatan (Health Care System) adal…</p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post3} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>13 Feb, 2023</p>
                  <p><a href="#" class="button">Proses Pembuatan Mobil Listrik</a></p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list karya">
                <img src={post4} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>21 Dec, 2022</p>
                  <p><a href="#" class="button">Koordinasi SIM dengan SMKN 7 Kota Tangerang</a></p>
                  <p className='post-card-desc'>PPTIK bersama SMKN 7 Kota Tangerang melakukan koor…</p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post5} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>8 Nov, 2022</p>
                  <p><a href="#" class="button">Pemasangan Alat Survey</a></p>
                  <p className='post-card-desc'>Pemasangan Alat Survey dilakukan di Lampung pada t…</p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post6} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>13 Oct, 2022</p>
                  <p><a href="#" class="button">Diskusi Project Legit Bandung</a></p>
                  <p className='post-card-desc'>Tim PPTIK dan teman teman dari TMDG melakukan disk…</p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list karya">
                <img src={post7} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>15 Sep, 2022</p>
                  <p><a href="#" class="button">Diskusi Lanjutan dengan Tim Teknik Sipil Universit...</a></p>
                  <p className='post-card-desc'>PPTIK melakukan diskusi lanjutan dengan tim Teknik…</p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post8} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>18 Jun, 2022</p>
                  <p><a href="#" class="button">Pemasangan monitor untuk Bus Public Announcement (...</a></p>
                  <p className='post-card-desc'>Pemasangan tersebut dilakukan pada tanggal 18 Juni…</p>
                </div>
              </div>
              <div className="post-card-list karya">
                <img src={post9} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>7 Jun, 2022</p>
                  <p><a href="#" class="button">Diskusi lanjutan SEMUT JABAR</a></p>
                  <p className='post-card-desc'>PPTIK melakukan diskusi terkait Semut Jabar. Disku…</p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list karya">
                <img src={post10} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>24 May, 2022</p>
                  <p><a href="#" class="button">Penyerahan Alat Peraga Smart Hidroponik</a></p>
                  <p className='post-card-desc'>Alat Peraga Smart Hidroponik adalah salah satu pro…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Karya
