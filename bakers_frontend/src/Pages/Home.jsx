import React, { useEffect, useState } from "react";
import apiServices, { BASE_URL_IMG } from '../ApiServices/ApiServices'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from "react-router-dom";
export default function Home() {

        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
          setTimeout(() => {
              setLoading(false);
          }, 1500);
          apiServices.getallProduct()
              .then((data) => {
                  if (data.data.success) {
      
                      setProduct(data.data.data);
      
                  } else {
                      toast.error(data.data.msg);
                  }
              })
              .catch((err) => {
      
                  toast.error("Something went wrong");
              });
            }, [loading]);
  return (
   <>
    
 {/* <!-- Carousel Start --> */}
 {/* <div className=" p-0 pb-5 wow fadeIn" >
        <div className=" header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="" src="./assets/img/cake.jpg" alt="" style={{width:"100%"}}/>
                <div className="owl-carousel-inner">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-lg-8">
                                <p className="text-primary text-uppercase fw-bold mb-2">// The Best Bakery</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">We Bake With Passion</h1>
                                <p className="text-light fs-5 mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
                                <a href="" className="btn btn-primary rounded-pill py-3 px-5">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div> */}
    {/* {/* <!-- Carousel End --> */}
    <div className="container-fluid bg-dark text-white py-5 hero" >
      <div className="container text-center py-5 heroinside">
        {/* <p className="text-warning text-uppercase mb-3">// The Best Bakery</p> */}
        <h1 className="display-4 fw-bold mb-4 text-white">We Bake With Passion</h1>
        <p className="lead mb-4">Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam rebum ipsum.</p>
        <a href="https://www.facebook.com/SunnyTanejaBakers/" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Read More</a>

      </div>
    </div>
    {/* <!-- Facts Start --> */} 
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Years Experience</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-users fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Skilled Professionals</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Total Products</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                        <p className="mb-2">Order Everyday</p>
                        <h1 className="display-5 mb-0" data-toggle="counter-up">500+</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Facts End -->


    {/* <!-- About Start --> */} 
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="/assets/img/about-1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="/assets/img/about-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">// About Us</p>
                        <h1 className="display-6 mb-4">We Bake Every Item From The Core Of Our Hearts</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-2 mb-4">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Quality Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Custom Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Online Order
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Home Delivery
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="https://www.facebook.com/SunnyTanejaBakers/">Read </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Product Start --> */}
    <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
            <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 text-light mb-0">The Best Bakery In Your City</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <div className="d-inline-flex align-items-center text-start">
                            <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                            <div className="ms-4">
                                <p className="fs-5 fw-bold mb-0">Call Us</p>
                                <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Bakery Products</p>
                <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
            </div>
            <div className="row g-4">
            {product.map((data, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                  <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">{data.new_price}{data.old_price}</div>
                    <h3 className="mb-3">{data.productname}</h3>
                    <h4 className="mb-3">{data.category}</h4>
                    <span>{data.description}</span>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={BASE_URL_IMG + data?.Image} alt={data.productname} />
                    <div className="product-overlay">
                       <Link to={"/single-product/" + `${data?._id}`} className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Cake</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="/assets/img/product-1.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Bread</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="/assets/img/product-2.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h4 className="mb-3">Cookies</h4>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="/assets/img/product-3.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Product End -->


    <!-- Service Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="text-primary text-uppercase mb-2">// Our Services</p>
                    <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-bread-slice text-white"></i>
                                </div>
                                <h5 className="mb-0">Quality Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 className="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-truck text-white"></i>
                                </div>
                                <h5 className="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="/assets/img/service-1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="/assets/img/service-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End -->


    <!-- Team Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Our Team</p>
                <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-1.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-2.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-3.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src="/assets/img/team-4.jpg" alt=""/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End -->


    <!-- Testimonial Start --> */}
    <div className="container-xxl bg-light my-6 py-6 pb-0">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Client's Review</p>
                <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-1.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-2.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-3.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="testimonial-item bg-white rounded p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src="/assets/img/testimonial-4.jpg" alt=""/>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
            </div>
            <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 text-light mb-0">Subscribe Our Newsletter</h1>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="position-relative">
                            <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}

<ToastContainer/>
   </>
  )
}
