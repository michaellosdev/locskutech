import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import Tilt from 'react-parallax-tilt'
import Form from '../components/Form'
import Modal from 'react-modal'

//modal styles
import {modalStyles} from '../styles/modalStyles'

import Expand from 'react-expand-animated';

//data
import {cards} from '../data/cardsData'


//assets import
import starEyesEmoji from '../assets/emoji.png'
import cameraEmoji from '../assets/camera-emoji.png'
import moneyEyesEmoji from '../assets/money-emoji.png'
import aboutUsPic from '../assets/about us.png'
import lebarreBc from '../assets/lebarre-bc.JPG'
import Footer from '../components/Footer'
import LuckyWheel from '../components/LuckyWheel'
//icons import



function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)
  const [play, setPlay] = useState(false)
  
  const backdrop = useRef(null)
  const modal =(e) => {
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
    backdrop.current.style.zIndex = 1
  }

  

  


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='home--page' id='home'>
            <Navbar />
        <div className='hero--section' id='hero'  >
          <h1 data-aos="fade-up">THE LAST WEB AGENCY YOU WILL COME TO.</h1>
          <button className='btn' data-aos="fade-up"><a href='#contact'>CLICK TO GROW YOUR BUSINESS</a></button>
          <a href="#about"><div className='down-arrow'></div></a>
        </div>

        {/* about section */}

        <div className="about-us--section" id="about" >
          <div className='about-us-text--container' data-aos="fade-left">
            <h2>ABOUT US</h2>
            <article>
            Welcome to loskutech, a full-service digital agency specializing in website design and development, online marketing, and branding. <br />

            Our team is made up of talented designers, developers, and marketers who are passionate about helping businesses succeed online. We have a diverse range of skills and expertise, and we bring this to bear on every project we work on. <br />

            Our process is collaborative and transparent, and we work closely with our clients to understand their goals and help them achieve them. We believe that the key to creating successful websites and online campaigns is to combine creative thinking with technical expertise and a deep understanding of our clients' industries and target audiences. <br />

            We take pride in our work and strive to exceed our clients' expectations on every project. If you're looking for a partner to help you grow your business online, we'd love to hear from you. Contact us today to learn more about how we can help you succeed.
            </article>
          </div>
          <div className='hello-text' data-aos="fade-right">
            <h2>HI,  WE ARE <br /> LOSKUTECH</h2>
          </div>
        </div>

        {/* services section */}
        <div className='services--section' id='services'>
          <h2 data-aos="fade-down">WHAT DO WE DO</h2>
          <div className='cards--container' data-aos="fade-down">
        {cards.map((card, index) => (
          
          <Tilt 
          className={`card card-${index + 1}` }
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          key={index}
          >
              <div className='card-header' onClick={() => {
                modal();
                setModalData(card)
              }}>
                <img src={card.icon} alt="" />
                <h3>{card.name}</h3>
              </div>
          
              <div className="card-body" onClick={() => {
                modal();
                setModalData(card)
              }} >
                <p>
                  {card.desc}
                </p>
              </div>
              <div className="card-footer" onClick={() => {
                modal();
                setModalData(card)
              }}>
                <h4>starting at ${card.price}</h4>
              </div>
          </Tilt>
        ))}
        {modalOpen ? <Modal
        className={`Modal Modal-${modalData.id}`}
        overlayClassName="Overlay"
        onRequestClose={(e) => {
          setModalOpen(false)
        }}
        isOpen={modalOpen}
        // style={modalStyles}
        >
          <div onClick={() => {
            document.body.style.overflow = 'auto'
            backdrop.current.style.zIndex = -99
            setModalOpen(false)
          }
        } className='modal-btn'>
            <div className='line-1'></div>
            <div className='line-2'></div>
          </div>
          <div className='modal-header'>
            <img src={modalData.icon} alt="" />
            <h2>{modalData.name}</h2>
          </div>
          <div className='modal-body'>
            <article>
              {modalData.longDesc}
            </article>
          </div>
          <div className='modal-footer'>
            <button onClick={() => 
              {setModalOpen(false); 
              document.body.style.overflow = 'auto';
              backdrop.current.style.zIndex = -99
              }}><a href='#contact'>CONTACT US</a></button>
            <h4>STARTING AT ${modalData.price}</h4>
          </div>

        </Modal>: ''}
          </div>
        <div className='backdrop' ref={backdrop}></div>
        </div>
        <div className='our-work--section' id='our-work'>
          <h2 data-aos="fade-down">OUR RECENT WORK</h2>
          <div className='our-work--container' data-aos="fade-down">

          <Tilt 
          className='card work-card work-card-1'
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className="card-header">

              </div>
              <div className="card-body">

              </div>
              <div className="card-footer">
                <h3>
                  LE BARRE CATERING 
                </h3>
                <h4>
                  BRANDING
                </h4>
              </div>
            </Tilt>
          <Tilt 
          className='card work-card work-card-2'
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className="card-header">

              </div>
              <div className="card-body">

              </div>
              <div className="card-footer">
                <h3>
                  LE BARRE CATERING 
                </h3>
                <h4>
                  WEB DESIGN
                </h4>
              </div>
            </Tilt>
          <Tilt 
          className='card work-card work-card-3'
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className="card-header">

              </div>
              <div className="card-body">

              </div>
              <div className="card-footer">
                <h3>
                  CRYSTAL GLASS AND GLAZING 
                </h3>
                <h4>
                  WEB DESIGN
                </h4>
              </div>
            </Tilt>
            
          </div>
        </div>

        <div className='contact--section' data-aos="fade-in" id='contact'>
          <div className='circles--container'>
            <div className='circle-1 circle' ></div>
            <div className='circle-2 circle'></div>
            <div className='circle-3 circle'></div>
            <div className='circle-4 circle'></div>
            <div className='circle-5 circle'></div>
            {/* <div className='circle-6 circle'></div> */}
            <div className='circle-7 circle'></div>
            <div className='circle-8 circle'></div>
            <div className='circle-9 circle'></div>
            <div className='circle-10 circle'></div>
          </div>

          <h2>SEND US A MESSAGE</h2>
          <div className='form--container' data-aos="fade-in">
            <Form />
          </div>
        </div>
        <div className='wheel--container' data-aos="fade-in">
          <h2>SPIN FOR SOMETHING NICE</h2>
          <div>
            <LuckyWheel />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home