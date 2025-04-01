import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 
import Topics from "../Components/Topics"; 
import Articles from "../Components/Articles"; 
import Card from "../Components/Card"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Card  article="Article Name"/> <br />
      <Card article="Article Name"/>
      <Footer />
    </div>
  );
}

export default App;