
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import CoursesName from './components/CoursesName/CoursesName'
import { useEffect } from 'react';

function App() {

  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setAllCourses(data))
  },[])


  const handleSelectBtn = (course) => {
    console.log("dffdfdfd");
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='md:flex mt-12 container mx-auto'>
        <Courses allCourses={allCourses} handleSelectBtn={handleSelectBtn}></Courses>
        <CoursesName></CoursesName>
      </div>
    </div>
  )
}

export default App
