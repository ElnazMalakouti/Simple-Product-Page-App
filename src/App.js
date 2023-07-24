import { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Main from './Components/Main';


function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <>
      <Layout
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      >
        <Main/>
      </Layout>
    </>
  );
}

export default App;
