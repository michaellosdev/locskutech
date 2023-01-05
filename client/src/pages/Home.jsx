import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import Tilt from 'react-parallax-tilt'


//assets import
import starEyesEmoji from '../assets/emoji.png'
import cameraEmoji from '../assets/camera-emoji.png'
import moneyEyesEmoji from '../assets/money-emoji.png'
import aboutUsPic from '../assets/about us.png'
import lebarreBc from '../assets/lebarre-bc.JPG'
//icons import
import webDevIcon from '../assets/icons/code.png'
import cameraIcon from '../assets/icons/camera.png'
import brandingIcon from '../assets/icons/branding.png'
import graphicDesignIcon from '../assets/icons/graphic-design.png'
import adManagmentIcon from '../assets/icons/manage.png'
import appDevelopmentIcon from '../assets/icons/mobile-development.png'
import seoIcon from '../assets/icons/seo.png'
import smmIcon from '../assets/icons/social-media.png'


function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='home--page'>
            <Navbar />
        <div className='hero--section' id='hero'  >
          <h1 data-aos="fade-up">THE LAST WEB AGENCY YOU WILL COME TO.</h1>
          {/* <div className='emojis--container' data-aos="fade-up">
            <img src={starEyesEmoji} alt="" />
            <img src={cameraEmoji} alt="" />
            <img src={moneyEyesEmoji} alt="" />
          </div> */}
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
        <div className='services--section'>
          <h2 data-aos="fade-down">WHAT DO WE DO</h2>
          <div className='cards--container' data-aos="fade-down">
          
          
          <Tilt 
          
          className='card card-1' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          >
              <div className='card-header' >
                <img src={webDevIcon} alt="" />
                <h3>WEB DEVELOPMENT</h3>
              </div>
              <div className="card-body">
                <p>
                  Our web design service helps clients create professional, effective websites. We handle all aspects of design, from planning and structure to visual appearance and functionality. Our team uses the latest tools and technologies, such as HTML, CSS, and JavaScript, to build websites that are easy to navigate and provide a great user experience. 
                </p>
              </div>
              <div className="card-footer">
                <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-2' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={cameraIcon} alt="" />
                <h3>CONTENT CREATION</h3>
              </div>
              <div className="card-body">
                <p>
                Our content creation service helps clients produce high-quality, engaging content for their online platforms. Our team can create a wide range of content types, including blog posts, articles, social media posts, and more. We work with clients to understand their business goals and target audience, and develop content that is relevant, informative, and aligned with their brand voice. 
                </p>
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-3' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={seoIcon} alt="" />
                <h3>SEO</h3>
              </div>
              <div className="card-body">
                <p>
                Our SEO service helps clients improve their website's visibility and ranking on search engines like Google. We use a variety of tactics, including keyword research, on-page optimization, and link building, to help our clients' websites rank higher in search results and attract more qualified traffic. Our team of SEO experts stays up-to-date on the latest best practices and algorithms to ensure that our clients' websites are optimized for success.
                </p>
              </div>
              <div className="card-footer">
                <h4>starting at $500</h4>
              </div>  
          </Tilt>

          <Tilt 
          className='card card-4' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={graphicDesignIcon} alt="" />
                <h3>GRAPHIC DESIGN</h3>
              </div>
              <div className="card-body">
                <p>
                Our graphic design service helps clients create visually appealing and effective graphics for their websites and other online platforms. Our skilled graphic designers can create a wide range of graphics, including logos, banners, infographics, social media posts, and more. We work closely with clients to understand their brand and design goals, and develop graphics that are on-brand and aligned with their marketing strategy. 
                </p>
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-5' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={appDevelopmentIcon} alt="" />
                <h3>APP DEVELOPMENT</h3>
              </div>
              <div className="card-body">
                <p>
                Our app development service helps clients create custom mobile or web applications for their business or personal needs. Our experienced app developers can build a wide range of apps, including e-commerce platforms, social media apps, productivity tools, and more. We work with clients to understand their requirements and develop an app that meets their needs and goals. 
                </p>
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-6' 
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={smmIcon} alt="" />
                <h3>SMM</h3>
              </div>
              <div className="card-body">
                <p>
                Our social media marketing (SMM) service helps clients promote their business and engage with their audience on social media platforms. Our team of social media experts can create and execute a customized SMM strategy that aligns with our clients' business goals and target audience. We also offer social media analytics and reporting to help our clients track the success of their campaigns and identify areas for improvement.
                </p>
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-7'
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={adManagmentIcon} alt="" />
                <h3>AD MANAGEMENT</h3>
              </div>
              <div className="card-body">
                <p>
                Our ad management service helps clients create and manage successful online advertising campaigns. Our ad management service includes creating and setting up ad campaigns, targeting the right audience, testing and optimizing ads, and tracking the results of the campaigns. We offer ad management for a variety of platforms, including Google Ads, Facebook Ads, and more.
                </p> 
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt>

          <Tilt 
          className='card card-8'
          glareEnable = 'true'
          gyroscope='true'
          glareBorderRadius='20px'
          perspective={2000}
          
          >
              <div className='card-header'>
                <img src={brandingIcon} alt="" />
                <h3>BRANDING</h3>
              </div>
              <div className="card-body">
                <p>
                Our branding service helps clients develop and strengthen their brand identity. Our team work with clients to understand their business and goals, and create a unique and consistent brand image that reflects their values and personality. Our branding service includes researching and developing brand guidelines, creating logos and other visual elements, and developing a brand voice. Our branding service helps clients build a strong, cohesive brand.
                </p>
              </div>
              <div className="card-footer">
              <h4>starting at $500</h4>
              </div>
          </Tilt> 
          </div>
        </div>
        <div className='our-work--section' >
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
    </div>
  )
}

export default Home