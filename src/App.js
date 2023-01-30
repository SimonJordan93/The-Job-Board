import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Jobs />
      <Footer tech="React" bootcamp="Le Reacteur" name="SimonJ" />
    </div>
  );
}

export default App;
