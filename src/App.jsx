import { useState } from 'react'
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const [general,setGeneral] = useState({
    name:"John Doe",
    email:"example@gmail.com",
    phone:"123-132-123",
    edit:true
  })
  const [education,setEducation] = useState({
      name:"School",
      field:"CS",
      start:"2012-09-16",
      end:"2018-04-27",
      edit:true
  })
  const [experience,setExperience]=useState({
    name:"Computers",
    position:"Manager",
    responsibilities:"Monitoring and scheduling",
    from:"2021-04-11",
    until:"2023-05-29",
    edit:true
  })
  return(
    <>
    <div className='customize'>
    <General
      general={general}
      setGeneral={setGeneral}
    />
    <Education
    education={education}
    setEducation={setEducation}
    />
    <Experience
    experience={experience}
    setExperience={setExperience}
    />
    </div>
    <div className="cv">
      <div id="generalinfo">
        <h1>{general.name}</h1>
        <p>Email: {general.email}</p>
        <p>Phone: {general.phone}</p>
      </div>
      <div className="section">
        <h2>Education</h2>
        <p>School name: {education.name}</p>
        <p>Field of study: {education.field}</p>
        <p>Start of education: {education.start}</p>
        <p>End of education: {education.end}</p>
      </div>
      <div className="section">
        <h2>Work experience</h2>
        <p>Company name: {experience.name}</p>
        <p>Postition title: {experience.position}</p>
        <pre>Responsibilities: <br/>{experience.responsibilities}</pre>
        <p>From: {experience.from}</p>
        <p>Until: {experience.until}</p>
      </div>
    </div>
    </>
  )
}

export default App
