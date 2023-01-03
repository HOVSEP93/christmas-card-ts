import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <section className="flex-center">
        <Card />
        <p className="card-notice">Click card to open!</p>
      </section>
      <footer>
        <div className="top">Hovsep Stepanian &copy;</div>
        <div className="bottom" aria-hidden="true">
          Hovsep Stepanian &copy;
        </div>
      </footer>
    </div>
  );
}

export default App;
