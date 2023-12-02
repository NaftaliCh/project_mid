import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div class="contact" id="contact">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Contact</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="contact-info">
                                    <p><i class="fa fa-user"></i>Maleke, Naftali</p>
                                    <p><i class="fa fa-tag"></i>Web Designer & Developer (Front End)</p>
                                    <p><i class="fa fa-envelope"></i><a href="mailto:info@example.com">naftali@gmail.com</a></p>
                                    <p><i class="fa fa-phone"></i><a href="tel:+1234567890">+62-3863-6396-24</a></p>
                                    <p><i class="fa fa-map-marker"></i>Langowan, Minahasa, Indonesia</p>
                                    <div class="social">
                                        <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" placeholder="Your Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="email" class="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Subject" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                                        </div>
                                        <div><button class="btn" type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Contact