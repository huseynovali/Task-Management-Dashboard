import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Owerview from "./page/Owerview";

function App() {
  return (
    <Routes>
      <Route path="/owerview" element={<Owerview />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="about" element={<p>about</p>} />
      </Route>
    </Routes>
  );
}

export default App;
