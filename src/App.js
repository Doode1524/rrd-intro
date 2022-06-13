import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button
        onClick={() =>
          navigate("/test1", {
            state: {
              greet: "Hello",
              goodbye: "Goodbye",
            },
          })
        }
      >
        Test1
      </button>
      <button onClick={() => navigate("/test2")}>Test2</button>
      <button onClick={() => navigate("/test3")}>Test3</button>

      <Routes>
        <Route exact path="/test1" element={<Test1 />} />
        <Route exact path="/test2" element={<Test2 />} />
        <Route exact path="/test3" element={<Test3 />} />
      </Routes>
    </div>
  );
}

export default App;
