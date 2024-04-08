import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from'../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
        </div>  
        
      <div className="about-right">
        <h3>ABOUT UNIVESRSITY</h3>
        <h2>Nurturing Tommorrow's Leader Today</h2>
        <p>Embark on a trancefermative educational jpurney with our Univesity's comperhensive educations programs.Our cutting edge curriculam is designed to empower students with the knowledge, skills, and experinces needed to excel in the dynamic field of the education.</p>
        <p>With a focus innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningfull impact in clssroom, schools and communities.</p>
        <p>Whether you aspire to become a teacher, adminstrator, counselor, or educational leader, our deserve range of programs offers the perfect pathway to achive your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About