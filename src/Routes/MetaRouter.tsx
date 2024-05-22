import { Route, Routes } from "react-router-dom";
import MetaHome from "../components/MetaHome";


const MetaRouter=()=>{
    return (<>
    
    <Routes>
        {/* <Route path="/metaLogin" element={} /> */}
        {/* <Route path="/charactorSelection" element={} /> */}
        <Route path="/*" element={<MetaHome/>} />

      </Routes>


    </>)
}

export default MetaRouter