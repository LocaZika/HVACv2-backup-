import { Route } from "react-router-dom";
import { Home, About, Contact, Cars } from "Pages";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </>
);
