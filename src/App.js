import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Header from './Components/Header';

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  
  return (
    <>
      <Layout>
        <Header/>
      </Layout>
    </>
  );
}

export default App;
