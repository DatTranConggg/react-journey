import { useEffect } from 'react'
// @ts-ignore
import productApi from './api/productApi'
import './App.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Route, Link } from 'react-router-dom'

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.getAll()
      console.log(res)
    }

    fetchProducts();
  }, [])
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
