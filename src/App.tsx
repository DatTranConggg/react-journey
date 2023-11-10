import { StudentModel } from 'models'
import './App.css'
import { Student } from 'features/labs/Student'
import MainLayout from 'layout/MainLayout'
import { Gallery } from 'features/labs/Gallery'
import { InputIssue } from 'features/labs/InputIssue'
import FeedbackForm from 'features/labs/FeedbackForm'

function App() {
  const john: StudentModel = {
    name: 'John',
    age: 22,
    isHero: true,
    hobbyList: 'nhau',
  }

  const noo: StudentModel = {
    name: 'Noo',
    age: 22,
    isHero: true,
    hobbyList: 'nhau',
  }

  function handleOnClick(name: string) {
    console.log('something !!!', name)
  }

  function testHandleClick() {
    console.log('testHanleClick !!!')
  }

  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default App
