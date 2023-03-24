import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="Header">Dictionary </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by <a href="https://alena-mohsenyar.netlify.app/">Alena</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
