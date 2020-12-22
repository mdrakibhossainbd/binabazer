import React from 'react';
import '../../MainCSS/MainCSS.css';
import img1 from '../../../img/Screenshot_1.png';
import img2 from '../../../img/Screenshot_2.png';
import img3 from '../../../img/Screenshot_3.png';
import img4 from '../../../img/Screenshot_4.png';
import img5 from '../../../img/Screenshot_5.png';
import Slider from '../Slider/Slider';
import CustomerSupport from '../CustomerSupport/CustomerSupport';

const MainFeatures = () => {
    return (
        <div className="mainFeatures">
            <div className="">
                <div className="row">
                    <div className="col-md-2">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav">
                                    <p> <i className="fa fa-bars" aria-hidden="true"></i> Category</p>
                                    <div className="underLine"></div>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-3</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-4</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-5</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-6</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-7</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-8</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link-9</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            
                            <div className="col-md-12">
                            <Slider></Slider>
                           
                        </div>
                        <div className="row">
                           <CustomerSupport/>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-2 right-bar">
                        <div className="col-md-12 image-box">
                            <img src={img4} alt="" />
                        </div>
                        <div className="col-md-12 image-box">
                            <img src={img4} alt="" />
                        </div>
                        <div className="col-md-12 image-box">
                            <img src={img4} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFeatures;