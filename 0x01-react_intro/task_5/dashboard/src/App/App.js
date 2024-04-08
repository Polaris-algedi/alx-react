import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";
/*
Images are not loading.
https://stackoverflow.com/questions/34582405/react-wont-load-local-images

When using Webpack you need to require images in order for Webpack
to process them, which would explain why external images load while
internal do not, so instead of <img src={"/images/resto.png"} />
you need to use <img src={require('/images/image-name.png')} />
replacing image-name.png with the correct image name for each of them.
That way Webpack is able to process and replace the source img.
*/
function Header() {
  return (
    <div className="App-header">
      <img src={require("./holberton-logo.jpg")} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

function Body() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <button>OK</button>
    </div>
  );
}

function Footer() {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
