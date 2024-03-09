import Uniplus from "../src/pages/uniplus";
import "./App.css";
import Beer from "./assets/img/whiskey-drink.gif";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Toledo from "./pages/toledo";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffff",
        }}
      >
        <h1>buy me a beer</h1>
        <img src={Beer} width="250px" height="250px" alt="beer" />
        <h1>
          PIX de <b>qualquer valor</b>
        </h1>
        <h1>doks92@gmail.com</h1>
      </div>
      <div>
        <Toledo />
      </div>
      <div>
        <Uniplus />
      </div>
    </div>
  );
}

export default App;
