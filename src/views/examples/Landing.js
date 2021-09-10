/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/Childrens-Photographer-in-Perth-at-Sunset.jpg";
import ill2 from "assets/img/ill/ill-2.svg";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        To be more creative{" "}
                        <span>Travel Beyond</span>
                      </h1>
                      <p className="lead text-white">
                      Our site allows you to choose your ideal tourist destination and browse the features of each destination in addition to reading the feedback for other tourists
                      </p>
                      <div className="btn-wrapper">
                      
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" style={{ height:"100%"}}>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Easy access to content                          </h6>
                          <p className="description mt-3">
                          You can easily access any part of our site because there are buttons to help you get what you want
                          </p>
                          <div>
                            
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            
                          </div>
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" style={{ height:"100%"}}>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4" >
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          Attractive content
                          </h6>
                          <p className="description mt-3">
                          Browse the most beautiful pictures of the most beautiful sites around the world
                          </p>
                          <div>
                          <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                          </div>
                        
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0" style={{ height:"100%"}}>
                        <CardBody className="py-5" >
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Vote for your favorite destination                          </h6>
                          <p className="description mt-3">
                          You can vote for the places you like the most by clicking on the voting button. You can also see the voting results through the results page
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Choice
                            </Badge>
                          
                          </div>
                     
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            You can flip between pictures
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">You can vote for the best destination</h6>
                          </div>
                        </div>
                      </li>
                  
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        My background
                      </h4>
                    
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    
                    <h3>Our customers</h3>
                    <p className="lead">
                    I am Mahmoud Hamdan and I have a Bachelor's degree in Mechanical Engineering
                    </p>
                    <p>
                    I graduated from Al- Balqa' Applied University (BAU) in 2017
                    </p>
                  
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
           <h2>## Some pictures from our website</h2> <div/> 
          <div>
           
          <img src={require('assets/img/theme/one.png').default} width={600}/>
          <img src={require('assets/img/theme/Screenshot 2021-09-07 171002.png').default}  width={600}/>
          <img src={require('assets/img/theme/Screenshot 2021-09-07 171057.png').default} width={600} />
          <img src={require('assets/img/theme/Screenshot 2021-09-07 171217.png').default} width={600} />
          <img src={require('assets/img/theme/pro1.PNG').default}  width={600}/>

          </div>
   
         
        </main>
        
      </>
    );
  }
}

export default Landing;
