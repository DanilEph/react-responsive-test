import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {
  

  return (
   <Layout>
     <Header>Header</Header>
     <Sidebar>Sidbar</Sidebar>
     <Main>Main</Main>
     <Footer>Footer</Footer>
   </Layout>
  );
}

export default App;
