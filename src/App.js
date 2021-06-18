import { useState, useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BuildGenerator from "./pages/BuildGenerator";
import BraumGif from "./images/braum-error.gif";
import "./App.css";

function App() {
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const URL =
      "https://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json";

    const getChampions = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      const champions = Object.values(data.data).map(
        ({ id, name, image, tags }) => ({
          id,
          name,
          image: image.full,
          tag: tags,
        })
      );
      setChampions(champions);
    };
    getChampions();
  }, [setChampions]);
  return (
    <div className="App">
      {loading ? (
        <Fragment>
          <h1>Loading data...</h1>
          <img src={BraumGif} alt="loading-gif"></img>
        </Fragment>
      ) : (
        <Switch>
          <Route exact path="/">
            <MainPage champions={champions} />
          </Route>
          {champions.map((item) => (
            <Route
              path={`/:${item.id}`}
              key={item.id}
              render={() => <BuildGenerator />}
            >
              <BuildGenerator />
            </Route>
          ))}
        </Switch>
      )}
    </div>
  );
}

export default App;
