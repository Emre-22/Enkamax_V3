import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"


import { RealEstate } from "./pages/Industries/RealEstate";
import { Hospitality } from "./pages/Industries/Hospitality";
import { Privatehouseholds } from "./pages/Industries/privatehouseholds";
import { Chalets } from "./pages/Industries/chaletvilla";
import { Yachting } from "./pages/Industries/yachting";
import { Privatejets } from "./pages/Industries/privatejets";
import { FamilyOffices } from "./pages/Industries/familyoffices";


import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Industries } from "./pages/Industries";


import { Services } from "./pages/Services";

import { Consultancy } from "./pages/Services/consultancy";
import { Realestatemanagement } from "./pages/Services/realestatemanagement";
import { Recruitmentsolutions } from "./pages/Services/recruitmentsolutions";




function App() {
  return (
    <>
      <BrowserRouter basename="/Enkamax_V3"> 

        <Routes>
          <Route index element = {<Home />}/>
          
          <Route path="/industries/realestate" element={<RealEstate />} />
          <Route path="/industries/Hospitality" element={<Hospitality />} />
          <Route path="/industries/familyoffices" element={<FamilyOffices />} />

          <Route path="/industries/privatehouseholds" element={<Privatehouseholds />} />
          <Route path="/industries/chaletvilla" element={<Chalets />} />
          <Route path="/industries/yachting" element={<Yachting />} />
          <Route path="/industries/privatejets" element={<Privatejets />} />



          <Route path="/services/recruitmentsolutions" element={<Recruitmentsolutions/>}/>
          <Route path="/services/consultancy" element={<Consultancy/>}/>
          <Route path="/services/realestatemanagement" element={<Realestatemanagement/>}/>



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
