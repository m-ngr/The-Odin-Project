import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutsContextProvider from "./contexts/WorkoutsContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <WorkoutsContextProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </WorkoutsContextProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
