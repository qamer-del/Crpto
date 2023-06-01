import React from 'react'
import{Hero, Navbar,Componeis, Fetcher, Contents, Blogs, Footer, Join, Cards, Getstared, Heros, Featchertow} from "./components"
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Heros/>
      <Componeis/>
      <Fetcher/>
      <Contents/>
      <Getstared/>
      <Featchertow/>
      <Cards/>
      <Blogs/>
      <Join/>
      <Footer/>
    </div>
  )
}
export default App