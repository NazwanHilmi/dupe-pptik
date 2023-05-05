import React from 'react'
import MainLayout from '../../layout/MainLayout'
import './Peneliti.css'
import ketua from '../../components/img/peneliti/ketua.jpg'
import peneliti1 from '../../components/img/peneliti/1.jpg'
import peneliti2 from '../../components/img/peneliti/2.jpg'
import peneliti3 from '../../components/img/peneliti/3.jpg'
import peneliti4 from '../../components/img/peneliti/4.jpg'
import peneliti5 from '../../components/img/peneliti/5.jpg'
import peneliti6 from '../../components/img/peneliti/6.jpg'
import peneliti7 from '../../components/img/peneliti/7.jpg'
import peneliti8 from '../../components/img/peneliti/8.jpg'
import peneliti9 from '../../components/img/peneliti/9.jpg'
import peneliti10 from '../../components/img/peneliti/10.jpg'
import peneliti11 from '../../components/img/peneliti/11.jpg'
import peneliti12 from '../../components/img/peneliti/12.jpg'
import peneliti13 from '../../components/img/peneliti/13.jpg'
import peneliti14 from '../../components/img/peneliti/14.jpg'


function Peneliti() {
    document.title = "Peneliti & Staf - Pusat Penelitian Teknologi Informasi dan Komunikasi";


    return (
        <MainLayout>
            <div className='containers'>
                <div className='peneliti'>
                    <div className='peneliti-title'>
                        <h2>Peneliti & Staf</h2>
                    </div>
                    <div className='head-peneliti'>
                        <div className='peneliti-img'>
                            <img src={ketua}></img>
                        </div>
                        <div className='peneliti-desc'>
                            <p><span>Kepala PPTIK</span> : Dr. tech.Ary Setijadi Prihatmanto, ST., MT. </p>
                            <a href='#'>http://orcid.org/0000-0002-9471-0227</a>
                        </div>
                    </div>
                    <div className='gallery-post-peneliti'>
                        <div className='gallery-card peneliti'>
                            <div className='gallery-image peneliti'>
                                <img src={peneliti1}></img>
                                <img src={peneliti2}></img>
                                <img src={peneliti3}></img>
                                <img src={peneliti4}></img>
                            </div>
                            <div className='gallery-image peneliti'>
                                <img src={peneliti5}></img>
                                <img src={peneliti6}></img>
                                <img src={peneliti7}></img>
                                <img src={peneliti8}></img>
                            </div>
                            <div className='gallery-image peneliti'>
                                <img src={peneliti9}></img>
                                <img src={peneliti10}></img>
                                <img src={peneliti11}></img>
                                <img src={peneliti12}></img>
                            </div>
                            <div className='gallery-image peneliti'>
                                <img src={peneliti13}></img>
                                <img src={peneliti14}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}


export default Peneliti
