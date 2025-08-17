import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"


import { RealEstate } from "./pages/Industries/RealEstate";
import { Hospitality } from "./pages/Industries/Hospitality";
import { DomesticStaff } from "./pages/Industries/PrivateHouseHolds/DomesticStaff";
import { Chalets } from "./pages/Industries/chaletvilla";
import { Yachting } from "./pages/Industries/yachting";
import { Privatejets } from "./pages/Industries/privatejets";
import { FamilyOffices } from "./pages/Industries/FamilyOffices";


import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Industries } from "./pages/Industries";


import { Services } from "./pages/Services";

import { Consultancy } from "./pages/Services/consultancy";
import { Realestatemanagement } from "./pages/Services/realestatemanagement";
import { Recruitmentsolutions } from "./pages/Services/recruitmentsolutions";
import { Candidates } from "./pages/Candidates";
import { Householdestatemanagement } from "./pages/Industries/PrivateHouseHolds/HouseholdEstateManagement";
import { Privatechefs } from "./pages/Industries/PrivateHouseHolds/PrivateChefs";




function App() {
  return (
    <>
      <HashRouter  > 

        <Routes>
          <Route index element = {<Home />}/>
          
          <Route path="/industries/realestate" element={<RealEstate />} />
          <Route path="/industries/Hospitality" element={<Hospitality />} />
          <Route path="/industries/familyoffices" element={<FamilyOffices />} />

          <Route path="/industries/privatehouseholds/domesticstaff" element={<DomesticStaff />} />
          <Route path="/industries/privatehouseholds/householdestatemanagement" element={<Householdestatemanagement />} />
          <Route path="/industries/privatehouseholds/privatechefs" element={<Privatechefs />} />

          <Route path="/industries/chalets" element={<Chalets />} />
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
         
          <Route path="/candidates" element={<Candidates />} />


          <Route path = "*" element = {<NotFound />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
