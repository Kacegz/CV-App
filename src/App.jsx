import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import General from './General';
import Experience from './Experience';
import Education from './Education';
import EditBtn from './EditBtn';

function App() {
  const [general,setGeneral] = useState({
    name:"yoo",
    email:"mail@gmail.com",
    phone:"123",
    editable:true
  })
  const [education,setEducation] = useState({
      name:"School",
      field:"CS",
      date:"12:08:2012",
  })
  const [experience,setExperience]=useState({
    name:"",
    position:"",
    responsibilities:"",
    date:"",
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
      <h1>My name is {general.name}</h1>
      <p>Email: {general.email}</p>
      <p>Phone: {general.phone}</p>
      <hr />
      <h2>School name: {education.name}</h2>
    </div>
    </>
  )
  /*const [count, setCount] = useState(0)
  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
