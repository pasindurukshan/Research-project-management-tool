import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/keynote1.jpg'
import logo2 from './images/keynote2.jpg'
import logo3 from './images/keynote3.jpg'

class presenters extends Component {
    render() {
        return (
            <React.Fragment>

                <section id="trainer" class="parallax-section">
                    <div class="container">
                        <div class="row">

                            <div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
                                <h2>Our Panel Members</h2>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.9s">
                                <div class="trainer-thumb">
                                    <img src={logo} class="img-responsive" alt="Trainer"></img>
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Kushira Godellawatta</h2>
                                            <h3>Software Architect</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Senior Software Engineer at Harver, New York</p>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2s">
                                <div class="trainer-thumb">
                                    <img src={logo3} class="img-responsive" alt="Trainer" />
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Nuwan Kodagoda</h2>
                                            <h3>Doctor</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Head | Department of Computer Science and Software Engineering</p>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2.3s">
                                <div class="trainer-thumb">
                                    <img src={logo2} class="img-responsive" alt="Trainer" />
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Thusithanjana Thilakarathna</h2>
                                            <h3>lecturer SLIIT</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Senior lecturer at Sri Lanka Institute of Information Technology</p>
                            </div>

                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default presenters;