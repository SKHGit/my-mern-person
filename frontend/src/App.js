import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import List from "./pages/List";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/list"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
