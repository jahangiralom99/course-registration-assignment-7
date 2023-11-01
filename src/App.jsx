
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import CoursesName from './components/CoursesName/CoursesName'
import { useEffect } from 'react';


function App() {

  const [allCourses, setAllCourses] = useState([]);
  const [courseNames, setCourseNames] = useState([])
  const [price, setPrice] = useState(0)
  const [credit, setCredit] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setAllCourses(data))
  },[])

 
  const handleSelectBtn = (course) => {
    let sumPrice = course.price;
    let sumCredit = course.credit
    const isExist = courseNames.find(item => item.id === course.id);
    if (!isExist) {
      {
        courseNames.forEach(item => {
          sumPrice = sumPrice + item.price;
          
        })
      }
      setCourseNames([...courseNames, course])
    }
    else {
      return alert("AllReady Exist this Name")
    }
    {
      courseNames.forEach(item => {
        sumCredit = sumCredit + item.credit
      })
      if (sumCredit <= 20) {
        setCredit(sumCredit)
        const creditRem =20 - sumCredit;
        if (creditRem > 0) {
          setRemainingTime(creditRem)
        }
        else {
          return alert("Credit")
        }
      }
      else {
        return alert("Please enter")
      }
   }
    setPrice(sumPrice)
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='md:flex mt-12 container mx-auto'>
        <Courses allCourses={allCourses} handleSelectBtn={handleSelectBtn}></Courses>
        <CoursesName
          courseNames={courseNames}
          price={price}
          credit={credit}
          remainingTime={remainingTime}
        ></CoursesName>
      </div>
    </div>
  )
}

export default App
