import Uniplus from "../src/pages/uniplus";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Toledo from "./pages/toledo";

function App() {
  return (
    <div className="App">
      <Toledo />
      <Uniplus />
    </div>
  );
}

export default App;
