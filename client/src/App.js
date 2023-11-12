import NavBar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
