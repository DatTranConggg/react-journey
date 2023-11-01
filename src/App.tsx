import { StudentModel } from 'models'
import './App.css'
import { Header, Footer } from './components/common'
import { Student } from 'features/labs/Student'
import MainLayout from 'layout/MainLayout'

function App() {

  const john: StudentModel = {
    name: "John",
    age: 22,
    isHero: true,
    hobbyList: 'nhau'
  }


  const noo: StudentModel = {
    name: "Noo",
    age: 22,
    isHero: true,
    hobbyList: 'nhau'
  }

  function handleOnClick(name: string) {
    console.log("something !!!", name);
  }


  return (
    <>
      <MainLayout>
        <Student student={noo} onClick={handleOnClick} />
      </MainLayout>

      <Student student={john} onClick={handleOnClick} />
    </>
  )
}

export default App
