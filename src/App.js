import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList/NewsList";
import SingleNews from "./components/SingleNews";
import { Provider } from "react-redux";

import Navbar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/news/:id" element={<SingleNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
