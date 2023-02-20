import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./products/mainComponent/MainComponent";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />}>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
