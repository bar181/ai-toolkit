import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="absolute top-6 right-8 z-10 flex gap-6">
      <Link 
        to="/case-studies"
        className={`text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors ${
          location.pathname === "/case-studies" ? "underline" : ""
        }`}
      >
        Case Studies
      </Link>
      <Link 
        to="/data-prompts"
        className={`text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors ${
          location.pathname === "/data-prompts" ? "underline" : ""
        }`}
      >
        Data Prompts
      </Link>
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
