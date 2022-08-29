import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "3rem",
          padding: "1rem",
        }}
      >
        Welcome to 🦠 Life
      </h1>
      <Home/>
    </div>
  );
}

export default App;
