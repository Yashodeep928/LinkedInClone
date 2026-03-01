import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/Home";
import MyNetwork from "./pages/Network/MyNetwork";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/network" element={<MyNetwork />} />
    </Route>
    </Routes>
  );
}

export default App;