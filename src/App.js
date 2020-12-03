import "./App.css";
import Trending from "./components/Trending.js";
import Header from "./components/Header.js";
import Popular from "./components/Popular.js";
import Sidebar from "./components/Sidebar.js";
function App() {
  return (
    <div>
      <Header />
      <Trending />
      <Popular />
    </div>
  );
}

export default App;
