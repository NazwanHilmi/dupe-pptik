import React, { useRef } from 'react'
import MainLayout from '../../layout/MainLayout'
import './Galeri.css'
import gallery1 from '../../components/img/gallery/1.jpeg'
import gallery2 from '../../components/img/gallery/2.jpeg'
import gallery3 from '../../components/img/gallery/3.jpeg'
import gallery4 from '../../components/img/gallery/4.jpeg'
import gallery5 from '../../components/img/gallery/5.jpeg'
import gallery6 from '../../components/img/gallery/6.jpeg'
import gallery7 from '../../components/img/gallery/7.jpeg'
import gallery8 from '../../components/img/gallery/8.jpeg'
import gallery9 from '../../components/img/gallery/9.jpeg'


function Galeri() {
    const playerRef = useRef(null);

    function changeVideo(videoSrc) {
        const player = playerRef.current;
        const source = player.getElementsByTagName('source')[0];
        source.src = videoSrc;
        player.load();
    }

    return (
        <MainLayout>
            <div className='containers'>
                <div className='gallery'>
                    <div className='gallery-title'>
                        <h2>Galeri</h2>
                        <p>[metaslider id=517]</p>
                    </div>
                    <div className='gallery-post'>
                        <div className='gallery-card'>
                            <div className='gallery-image'>
                                <img src={gallery1}></img>
                                <img src={gallery2}></img>
                                <img src={gallery3}></img>
                            </div>
                            <div className='gallery-image'>
                                <img src={gallery4}></img>
                                <img src={gallery5}></img>
                                <img src={gallery6}></img>
                            </div>
                            <div className='gallery-image'>
                                <img src={gallery7}></img>
                                <img src={gallery8}></img>
                                <img src={gallery9}></img>
                            </div>
                        </div>
                    </div>
                    <div className='video-player'>
                        <video id="player" ref={playerRef} playsInline controls data-poster="/path/to/poster.jpg">
                            <source src="https://pptik.itb.ac.id/wp-content/uploads/sites/119/2016/11/Edit-Video-Demo-2-rev.mp4" type="video/mp4" />
                        </video>
                        <div className='button-change'>
                            <div className='button-click'>
                                <button onClick={() => changeVideo('https://pptik.itb.ac.id/wp-content/uploads/sites/119/2016/11/Edit-Video-Demo-2-rev.mp4')}>1. Elearning VidyaNusa</button>
                                <p>4:08</p>
                            </div>
                            <div className='button-click'>
                                <button onClick={() => changeVideo('https://pptik.itb.ac.id/wp-content/uploads/sites/119/2016/11/Shesop-TMDG8-LSKK-ITB.mp4')}>2. VIdeo Produk Sheshop</button>
                                <p>0:55</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Galeri
