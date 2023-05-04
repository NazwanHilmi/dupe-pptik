import React from 'react'
import MainLayout from '../../../layout/MainLayout'
import './SmartSystem.css'

const SmartSystem = () => {
    return (
        <MainLayout>
            <div className='containers'>
                <div className='smart'>
                    <div className='smart-title'>
                        <h2>Smart System</h2>
                    </div>
                    <div className="smart-list">
                    <ul className="list-title">
                        <li>Smart Learning</li>
                        <ul className="list list-contents">
                            <li><a href="#">Tugas Akhir Dalam Jaringan</a></li>
                            <li><a href="#">Vidyanusa</a></li>
                            <li><a href="#">PRD Online Course</a></li>
                            <li><a href="#">Open Data Course</a></li>
                        </ul>
                    </ul>
                    <ul className="list-title">
                        <li>Transportasi</li>
                        <ul className="list list-contents">
                            <li><a href="#">BSTS</a></li>
                            <li><a href="#">BLITS</a></li>
                            <li><a href="#">TLITS</a></li>
                            <li>BPG</li>
                            <li>System Moving Block Kereta Api</li>
                            <li>System Autodrive</li>
                            <li>Mobil Listrik</li>
                            <li>Simulator Lokomotif</li>
                        </ul>
                    </ul>
                    <ul className="list-title">
                        <li>Kesehatan</li>
                        <ul className="list list-contents">
                            <li><a href="#">Shesop</a></li>
                        </ul>
                    </ul>
                    <ul className="list-title">
                        <li>Indonesia United</li>
                        <ul className="list list-contents">
                            <li><a href="#">Idun Nelayan</a></li>
                            <li><a href="#">DPR Kita</a></li>
                            <li><a href="#">Pemilu</a></li>
                            <li><a href="#">Smart Vertical Agriculture</a></li>
                            <li><a href="#">Radio Bandung</a></li> 
                            <li>Detektor Gempa</li>
                            <li><a href="#">Tari Tradisional</a></li>
                            <li>Flora & Fauna (Way Kambas, Rumah Pohon)</li>
                        </ul>
                    </ul>
                    <ul className="list-title">
                        <li>Brain Computer Interface</li>
                    </ul>
                    <ul className="list-title">
                        <li>Advanced Robotic & Automation</li>
                        <ul className="list list-contents">
                            <li>ROV</li>
                            <li>Lumen Robot Friend</li>
                            <li>Seaglider</li>
                        </ul>
                    </ul>
                </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default SmartSystem
