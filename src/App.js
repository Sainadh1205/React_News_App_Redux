import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import NewsList from "./components/NewsList/NewsList";
import SingleNews from "./components/SingleNews";
import { Provider } from "react-redux";

import Navbar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Count from "./components/Count";

import store from "./redux/store";

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiNews = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7561b0dd655e4f529c9f4e64db980e70"
        );
        setNewsList(apiNews.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route
              path="/news/:id"
              element={<SingleNews />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/count" element={<Count />} />
          </Routes>
        </div>
        <marquee>{newsList.map((news) => "   🌟" + news.title )}</marquee>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
