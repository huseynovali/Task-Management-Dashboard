import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="about" element={<p>about</p>} />
      </Route>
    </Routes>
  );
}

export default App;
