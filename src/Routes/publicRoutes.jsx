import { Route } from "react-router-dom";
import { Home, About, Contact, Cars, CarDetail } from "Pages";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/car-listing">
      <Route path="" element={<Cars />} />
      <Route path="car-detail/:pid" element={<CarDetail />} />
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </>
);
