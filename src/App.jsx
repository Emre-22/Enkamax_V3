import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { RealEstate } from "./pages/RealEstate";
import { Hospitality } from "./pages/Hospitality";
import { UHNW } from "./pages/UHNW";
import { FamilyOffices } from "./pages/FamilyOffices";
import { Tourism } from "./pages/Tourism";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Industries } from "./pages/Industries";
import { Services } from "./pages/Services";





function App() {
  return (
    <>
      <BrowserRouter basename="/Enkamax_V3"> 

        <Routes>
          <Route index element = {<Home />}/>
          
          <Route path="/industries/realestate" element={<RealEstate />} />
          <Route path="/industries/Hospitality" element={<Hospitality />} />
          <Route path="/industries/uhnw" element={<UHNW />} />
          <Route path="/industries/familyoffices" element={<FamilyOffices />} />
          <Route path="/industries/tourism" element={<Tourism />} />

          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          
          <Route path = "*" element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
