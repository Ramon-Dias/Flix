import React, { useEffect, useState } from "react";
import "./App.css";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import FeatureMovie from "./components/FeatureMovie";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=> i.slug === "originals")
      let random = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[random]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv" )
      setFeature(chosenInfo)
 
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {feature && <FeatureMovie item={feature} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
