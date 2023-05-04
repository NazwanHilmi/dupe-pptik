import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Kegiatan.css'
import post1 from '../../components/img/kegiatan/1.jpeg'
import post2 from '../../components/img/kegiatan/2.jpeg'
import post3 from '../../components/img/kegiatan/3.jpeg'
import post4 from '../../components/img/kegiatan/4.jpeg'
import post5 from '../../components/img/kegiatan/5.jpeg'
import post6 from '../../components/img/kegiatan/6.jpeg'
import post7 from '../../components/img/kegiatan/7.jpeg'
import post8 from '../../components/img/kegiatan/8.jpeg'
import post9 from '../../components/img/kegiatan/9.jpeg'
import post10 from '../../components/img/kegiatan/10.jpeg'

function Kegiatan() {
  return (
    <MainLayout>
      <div className='containers'>
        <div className='kegiatan'>
          <div className='category'>
            <h1>
              <i class="fa-solid fa-folder-open" style={{ color: '#4d4d4d' }}></i>
              Category :
              <span> Kegiatan</span>
            </h1>
          </div>
          <div className="post-list kegiatan">
            <div class="post-card">
              <div className="post-card-list kegiatan">
                <img src={post1} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>5 Apr, 2023</p>
                  <p><a href="#" class="button">Diskusi Perencanaan Event Bersama ITB, UBL, Prasmu...</a></p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post2} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>22 Nov, 2022</p>
                  <p><a href="#" class="button">STP Inqubation Day 2</a></p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post3} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>21 Nov, 2022</p>
                  <p><a href="#" class="button">STP Inqubation Day 1</a></p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list kegiatan">
                <img src={post4} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>17 Nov, 2022</p>
                  <p><a href="#" class="button">Diskusi bersama Rektor dan Jajaran dari Universita...</a></p>
                  <p className='post-card-desc'>PPTIK melakukan diskusi bersama Rektor dan Jajaran…</p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post5} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>21 Sep, 2022</p>
                  <p><a href="#" class="button">Workshop Penyelarasan Kurikulum Bahan Ajar SMK Wik...</a></p>
                  <p className='post-card-desc'>PPTIK diundang untuk menjadi pembicara pada kegiat…</p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post6} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>15 Sep, 2022</p>
                  <p><a href="#" class="button">Pusan National University & SmartM2M</a></p>
                  <p className='post-card-desc'>PPTIK diundang untuk menjadi pembicara pada kegiat…</p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list kegiatan">
                <img src={post7} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>21 Jul, 2022</p>
                  <p><a href="#" class="button">Penerimaan Universitas Bandar Lampung Award 2022</a></p>
                  <p className='post-card-desc'>PPTIK membuat sebuah program yang disebut dengan K…</p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post8} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>11 Jul, 2022</p>
                  <p><a href="#" class="button">Program Kelas Online bersama PT LSKK</a></p>
                  <p className='post-card-desc'>PPTIK bersama dengan Mitra SMK yang terdiri dari K…</p>
                </div>
              </div>
              <div className="post-card-list kegiatan">
                <img src={post9} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>4 Jul, 2022</p>
                  <p><a href="#" class="button">Diskusi dengan SMK Kopri, SMKN 3 Metro, dan SMK Ar...</a></p>
                  <p className='post-card-desc'>PPTIK bersama dengan Mitra SMK yang terdiri dari S…</p>
                </div>
              </div>
            </div>
            <div class="post-card">
              <div className="post-card-list kegiatan">
                <img src={post10} alt="Gambar Card"></img>
                <div class="post-card-content">
                  <p>29 Jun, 2022</p>
                  <p><a href="#" class="button">Diskusi dengan SMKN 2 Bandung</a></p>
                  <p className='post-card-desc'>Diskusi dilakukan pada tanggal 29 Juni 2022 dengan…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Kegiatan
