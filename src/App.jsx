import { useState } from 'react';
import './App.scss'
import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

function App() {

  const [currentItem, setCurrentItem] = useState('');

  return (
    <div className="app">

        <Header currentItem={ currentItem } setCurrentItem={ setCurrentItem } />

        <MainContent currentItem={ currentItem } />

        <Footer />

    </div>
  )
}

export default App