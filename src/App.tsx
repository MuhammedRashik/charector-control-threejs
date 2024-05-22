import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import MetaRouter from "./Routes/MetaRouter";
function App() {
  

  return (
    <>
 <Toaster />
      <Router>
        <Routes>
          <Route path="/meta/*" element={ <MetaRouter /> } />
        </Routes>
      </Router>

    </>
  )
}

export default App
