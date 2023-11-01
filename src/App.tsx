import { StudentModel } from 'models'
import './App.css'
import { Header, Footer } from './components/common'
import { Student } from 'features/labs/Student'

function App() {

  const john: StudentModel = {
    name: "John",
    age: 22,
    isHero: true,
    hobbyList: 'nhau'
  }

  function handleOnClick(name: string) {
    console.log("something !!!", name);
  }


  return (
    <>
      <Header></Header>
      <Footer></Footer>

      <Student student={john} onClick={handleOnClick} />
    </>
  )
}

export default App
