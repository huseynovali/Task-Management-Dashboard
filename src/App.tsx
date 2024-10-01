import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Owerview from "./page/Owerview";
import Task from "./page/Task";

function App() {
  return (
    <Routes>
      <Route path="/owerview" element={<Owerview />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="task" element={<Task/>} />
      </Route>
    </Routes>
  );
}

export default App;
