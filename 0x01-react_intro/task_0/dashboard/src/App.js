import "./App.css";

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
    </div>
  );
}

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright 2020 - Holberton School</p>
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
