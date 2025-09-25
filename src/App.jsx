import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Edit from './Components/Edit'
import Preview from './Components/Preview'
import Steps from './Components/Steps'
import History from './Pages/History'
import Landing from './Pages/Landing'
import Pnf from './Pages/Pnf'
import ResumeGenereatorPage from "./Pages/ResumeGenereatorPage";



function App() {
  return (
    <>
      <Header />
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
       <Route path="/resume" element={<ResumeGenereatorPage />} />



        <Route path="/form" element={<Form />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/steps" element={<Steps />} />

       
        <Route path="*" element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App