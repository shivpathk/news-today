import React,{useState} from 'react'
import Navbar from './components/navbar'
import NewsBoard from './components/newsBoard'
import Footer from './components/footer'

const App = () => {
  const [category , setCategory] = useState("general")
  const [country , setCountry] = useState("in")
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <NewsBoard category={category} country={country}/>
      <Footer/>
    </div>
  )
}

export default App