import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout } from './layouts/layout'
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from './routes/routes'

function App() {
  localStorage.setItem('role', "Staff")
  return (
    <Router>
      <Layout content={<RoutesApp />} />
    </Router>
  )
}

export default App
