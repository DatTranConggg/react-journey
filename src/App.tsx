import './App.css'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Link to="/hello">Hello</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Route path="/hello" component={Hello} />
    </>
  )
}

function Hello() {
  return (
    <>
      <div>Hello guys</div>
    </>
  )
}

export default App
