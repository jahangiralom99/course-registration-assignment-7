
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import CoursesName from './components/CoursesName/CoursesName'
import { useEffect } from 'react';

function App() {

  const [allCourses, setAllCourses] = useState([]);
  const [courseNames, setCourseNames] = useState([])


  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setAllCourses(data))
  },[])


  const handleSelectBtn = (course) => {
    const isExist = courseNames.find(item => item.id === course.id);
    if (!isExist) {
      setCourseNames([...courseNames, course])
    }
    else {
      return alert("AllReady Exist this Name")
    }
    
  }
  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='md:flex mt-12 container mx-auto'>
        <Courses allCourses={allCourses} handleSelectBtn={handleSelectBtn}></Courses>
        <CoursesName courseNames={courseNames}></CoursesName>
      </div>
    </div>
  )
}

export default App
