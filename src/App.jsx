import { Routes, Route } from "react-router-dom"
import Translate from "./components/Translate"
import Quizes from "./components/Quizes"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/translate" exact element={<Translate/>}/>
      <Route path="/quizes" exact element={<Quizes/>}/>
    </Routes>

    </>
  )
}

export default App