import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProducts from "./products/tableProducts/CreateProducts";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateProducts />}>
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
