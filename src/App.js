import { useState, useEffect, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BuildGenerator from "./pages/BuildGenerator";
import BraumGif from "./images/braum-error.gif";
import useHttp from "./hooks/use-https";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const URL =
  "https://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json";

  const objectValues = () => {
    return ({ id, name, image, tags }) => ({
      id,
      name,
      image: image.full,
      tags,
    })
  }
  
  const champions = useHttp(URL,objectValues());

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
