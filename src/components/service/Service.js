import React from 'react';
import "./service.css";

const Service = () => {
    return (
        <div class="service" id="service">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Service</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-desktop"></i>
                                    <h3>JavaScript</h3>
                                    <p>Penggunaan sintaks dasar JavaScript, Manipulasi DOM (Document Object Model), Menangani peristiwa (event handling) dan AJAX, Penggunaan framework seperti React.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-laptop"></i>
                                    <h3>CSS</h3>
                                    <p>Penggunaan CSS untuk layout, warna, tipografi, dan animasi.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-search"></i>
                                    <h3>HTML</h3>
                                    <p>Menguasai sintaks dan elemen HTML, Memahami struktur dasar dokumen HTML, Mengetahui tag-tag khusus.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-envelope-open-text"></i>
                                    <h3>MODIFIKASI FIREBASE</h3>
                                    <p>Layanan penyimpanan data yang digunakan dalam aplikasi web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Service