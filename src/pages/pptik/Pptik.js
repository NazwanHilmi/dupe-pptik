import React from 'react'
import './Pptik.css'
import MainLayout from '../../layout/MainLayout'
import pptik1 from "../../components/img/pptik/1.jpg"
import pptik2 from "../../components/img/pptik/2.jpg"
import pptik3 from "../../components/img/pptik/3.jpg"

function Pptik() {
    document.title = "Tentang PPTIK - Pusat Penelitian Teknologi Informasi dan Komunikasi";


    return (
        <MainLayout>
            <div className='containers'>
                <div className='pptik'>
                    <div className='pptik-title'>
                        <h2>Tentang PPTIK</h2>
                    </div>
                    <div className='pptik-content'>
                        <div className='title-content'>
                            <p><strong>Legalitas Pendirian</strong></p>
                            <p className='content-desc'>SK Rektor ITB No.174/SK/K01/OT/2004</p>
                        </div>
                        <div className='title-content'>
                            <p><strong>Profile PPTIK</strong></p>
                            <p className='content-desc'>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</p>
                            <p className='content-desc'>Menjawab berbagai tantangan baru dari era ITB–Entrepreneurial University , kegiatan PPTIK pada kurun waktu 2015 – 2020 akan berfokus pada:</p>
                            <ul>
                                <li>Pemantapan kapasitas organisasi PPTIK untuk berkolaborasi dengan sebanyak mungkin pihak pada berbagai sektor dengan memanfaatkan portfolio teknologi dan solusi yang telah dikembangkan oleh seluruh stakeholder PPTIK.</li>
                                <li>Pemantapan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan teknologi dan solusi digital learning dengan menerapan teknologi dan solusi digital learning kepada stakeholder yang semakin luas dan beragam dengan memastikan munculnya inovasi pembelajaran yang berbasis teknologi dan solusi digital learning dalam bentuk model bisnis maupun startup digital learning.</li>
                                <li>Peningkatan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan TIK dan solusi berbasis TIK untuk berbagai sektor aplikasi dengan memastikan munculnya inovasi teknologi terkait yang dapat didemonstrasikan dalam 3 bentuk yaitu publikasi ilmiah, prototype yang berfungsi, pra-Startup.</li>
                            </ul>
                            <p className='content-desc'>Teknologi dan solusi teknologi yang dikembangkan di PPTIK akan berupa sistem layanan media digital interaktif modern.</p>
                            <div className='content-image'>
                                <img src={pptik1} className='pptik-img' ></img>
                                <p>Komponen Layanan Media Digital Interaktif Modern</p>
                            </div>
                            <p className='content-desc'>Untuk mendukung roadmap tersebut, di tahun 2015-2017 riset yang dikembangkan oleh PPTIK ITB fokus ke arah pengembangan framework komunitas pintar yang menjadi standar tercapainya konsep kota pintar. Komponen framework smart community yang dikembangkan adalah:</p>
                            <ul>
                                <li><strong>Smart Mobility </strong>melalui penerapan riset Intelligent Transportation System (ITS).</li>
                                <li><strong>Smart Health Care
                                </strong> melalui pengembangan dan penerapan sistem Detta Care (Detection of Data Patient Condition with Health Monitoring System).</li>
                                <li><strong>Smart Government</strong> melalui pengembangan sebuah riset berbasis proyek bernama Indonesia United (Idun).</li>
                                <li><strong>Smart Education</strong> melalui pengembangan riset E-Learning dan game edukasi VidyaNusa, Tugas Akhir Dalam Jaringan (TADJ), Open Online Data Course (OODC) hingga ke pengembangan robot Artificial Intelligence (AI) untuk edukasi dan interaksi sosial manusia dengan nama “Lumen Social Robot”.</li>
                            </ul>
                            <div className='title-content'>
                                <p><strong>Kemitraan</strong></p>
                                <p className='content-desc'>Dalam proses pengembangan riset-riset tersebut, PPTIK telah menjalin kerjasama dengan beberapa pihak diantaranya KPU, KPUD Jawa Barat, Bawaslu Jawa Barat, Zamrud technology, Persatuan Radio Siaran Swasta Nasional Indonesia (PRSSNI) Kotamadya Bandung, Yayasan Penelitian dan Pengembangan Telematika Indonesia (YPPTI), Microsoft Indonesia, NTT Data, Sampoerna Telekomunikasi Indonesia, Dinas Kesehatan PALU Sulawesi Tengah, Badan Meterologi, Klimatologi dan Geofiisika (BMKG), Eon Reality Group, Pusat Penelitian Geoteknologi LIPI, MIT USA, Keio University, Universitas Telkom dan Universiti Teknologi Malaysia (UTM), Japan Smart Community Alliance, Yayasan Keanekaragaman Hayati Indonesia (KEHATI), International Rhino Foundation (IRF), Anargya Technology, PT. Westpoint Security Indonesia, Bapeda Kotamadya Bandung, Dinas Perhubungan Kota Bandar Lampung, Bstartup dan lainnya. Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Kemenristekdikti, dll.</p>
                            </div>
                            <div className='title-content square'>
                                <p><strong>Jasa Layanan</strong></p>
                                <ul>
                                    <li>Penelitian dalam penerapan TIK</li>
                                    <li>Kerjasama Industri</li>
                                    <li>Konsultasi</li>
                                    <li>Inkubasi Startup</li>
                                </ul>
                            </div>
                            <div className='title-content'>
                                <p><strong>Pengalaman Pembinaan</strong></p>
                                <p className='content-desc'>PPTIK berpengalaman selama beberapa tahun terakhir membina banyak calon startup seperti: Lentera Nusantara, PT.Anargya, dll.</p>
                            </div>
                            <div className='title-content'>
                                <p><strong>Prestasi</strong></p>
                                <p className='content-desc'>Calon-calon startup binaan PPTIK ITB banyak mendapatkan award pada level nasional maupun internasional, seperti INAICTA, APICTA, Indonesia Innovations and Innovators Expo (I3E) Kemenristekdikti, dan lain-lain.</p>
                            </div>
                            <div className='title-content vm'>
                                <p>VISI :</p>
                                <p className='content-desc'>Setiap warga negara Indonesia harus dapat memanfaatkan TIK untuk kemajuan perikehidupannya. Setiap warganegara dapat berpartisipasi dalam masyarakat pengetahuan dan ekonomi pengetahuan, baik ikut mendapatkan manfaatnya maupun ikut membangunnya. Di tahun 2016 setiap warga negara Indonesia harus bisa mendapatkan jatah secara cuma-cuma.</p>
                            </div>
                            <div className='title-content square'>
                                <p>MISI :</p>
                                <ul>
                                    <li>Membangun reputasi riset dan peneliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT.</li>
                                    <li>Mendorong perkembangan produk komersial, enterpreneurship, dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</li>
                                </ul>
                            </div>
                            <div className='content-image vm'>
                                <img src={pptik2}></img>
                                <p>Komponen Layanan Media Digital Interaktif Modern</p>
                            </div>
                            <div className='content-image vm'>
                                <img src={pptik3}></img>
                                <p>Komponen Layanan Media Digital Interaktif Modern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Pptik
