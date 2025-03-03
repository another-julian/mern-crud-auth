import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/tasks_pages/AddTask";
import UpdateTask from "./pages/tasks_pages/UpdateTask";
import Task from "./pages/tasks_pages/Task";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
function App() {
  const taskRoute = "/tasks";
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path={taskRoute} element={<Tasks />} />
            <Route path={`${taskRoute}/:id`} element={<Task />} />
            <Route path={`${taskRoute}/add`} element={<AddTask />} />
            <Route path={`/tasks/update/:id`} element={<UpdateTask />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
