import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/Home";
import MyNetwork from "./pages/Network/MyNetwork";
import Jobs from "./pages/Jobs/jobs";
import Notification from "./pages/Notification/Notification";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/network" element={<MyNetwork />} />
    <Route path="/jobs" element={<Jobs/>} />
    <Route path="/notifications" element={<Notification/>}/>
    </Route>
    </Routes>
  );
}

export default App;