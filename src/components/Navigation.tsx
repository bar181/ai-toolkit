import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="absolute top-6 right-8 z-10">
      <Link 
        to="/how-to"
        className={`text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors ${
          location.pathname === "/how-to" ? "underline" : ""
        }`}
      >
        How To
      </Link>
    </nav>
  );
};

export default Navigation;
