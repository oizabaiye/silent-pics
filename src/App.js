import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App mw-100 dark-gray flex flex-column items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
