import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        Thapar University<br />
                        Patiala, Punjab<br />
                        India<br />
                        <i className="fa fa-phone"></i>: +91 78459-74859<br />
                        <i className="fa fa-fax"></i>: +91 98147-32775<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:foodBonanza@food.net">foodBonanza@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.55211962004!2d76.41587131447842!3d30.33525498177736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910285baff25c2b%3A0xec7c66bf6f025f4f!2sThapar%20University!5e0!3m2!1sen!2sin!4v1613366651945!5m2!1sen!2sin" style={{ width:600, height:450, frameborder:0, border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+919814732775"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:foodBonanza@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;