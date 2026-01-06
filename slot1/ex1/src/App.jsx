import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />

      <main className="content">
        <h1>Hello React</h1>
      </main>

      <Footer />
    </div>
  )
}

export default App
