import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import CarManagement from "./pages/CarManagement";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<CarManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;