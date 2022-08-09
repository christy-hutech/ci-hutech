import "./App.css";

import React from 'react';

import SearchPage from "./pages/searchPage/searchPage";

import Allrouters from "./router/routers";
function App() {

  return (
    // <div className="Container">
    <Allrouters />
    // </div>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/home" exact element={<Home />} />
    //     <Route path="/topics" exact element={<Home />} />
    //     <Route path="/articles" exact element={<Home />} />
    //     <Route path="/campaign" exact element={<Home />} />
    //     <Route path="/gallery" exact element={<Home />} />
    //     <Route path="/essentials" exact element={<Home />} />
    //   </Routes>
    //   <Footer />
    // </Router>
   
  );

  return <Allrouters />;

}

export default App;
