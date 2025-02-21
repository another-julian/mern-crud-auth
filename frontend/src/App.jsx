import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/Tasks/AddTask";
import UpdateTask from "./pages/Tasks/UpdateTask";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" elemenet={<Task />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/update-task/:id" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
