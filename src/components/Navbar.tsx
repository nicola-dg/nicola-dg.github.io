
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
    return (

    <header>
      {/* Navbar Mobile (visibile solo su schermi piccoli) */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      {/* Navbar Desktop (visibile solo da md in su) */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
    </header>
  );
}


export default Navbar;

      