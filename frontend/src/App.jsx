import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/tasks" element={<h1>Tasks Route</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
