/** @format */

import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
 const{toggleTheme, setToggleTheme} = useGlobalContext()
  return (
    <div>
      <NavLink to ="/">Home</NavLink>
      <NavLink to ="/solutions/development">Development</NavLink>
      <NavLink to ="/solutions/consultancy">Consultancy</NavLink>
      <NavLink to ="/solutions/resourcing">Resourcing</NavLink>
      <NavLink to ="/about/why17oranges">Why 17 Oranges</NavLink>
      <NavLink to ="/about/leadership">Leadership</NavLink>
      <NavLink to ="/about/casestudies">Case Studies</NavLink>
      <NavLink to ="/careers">Careers</NavLink>
      <NavLink to ="/contact">Contact</NavLink><br/>
      <button type="button" onClick={()=>setToggleTheme(!toggleTheme)}>Toggle Link</button>
    </div>
  );
};

export default Navbar;
