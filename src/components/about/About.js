import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div class="about" id="about">
        <div class="content-inner">
            <div class="content-header">
                <h2>About Me</h2>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6 col-lg-5">
                    <img src="img/avta.png" alt="Image"/>
                </div>
                <div class="col-md-6 col-lg-7">
                    <p>
                        Maleke, Naftali adalah student yang memiliki keahlian di bidang front end. Sebagai seorang yang terus belajar di dalam dunia teknologi informasi, saya mampu menciptakan antarmuka pengguna yang menakjubkan dan responsif. Kreativitas dan kecerdasannya dalam menggabungkan desain visual dengan fungsionalitas teknis membuatnya menjadi ahli di ranah front end development
                    </p>
                    <a class="btn" href="#">Hire Me</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="skills">
                        <div class="skill-name">
                            <p>Design Templete</p><p>85%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="skill-name">
                            <p>HTML</p><p>95%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="skills">
                        <div class="skill-name">
                            <p>CSS</p><p>90%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="skill-name">
                            <p>Java Script</p><p>85%</p>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default About