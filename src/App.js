import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Header from './Components/Header';

function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <>
      <Layout
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      >
        <Header
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      </Layout>
      {console.log(isSideMenuOpen)}
    </>
  );
}

export default App;
