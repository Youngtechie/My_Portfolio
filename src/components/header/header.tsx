import Image from "next/legacy/image";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onToggleNavbar: () => void;
  open: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ onToggleNavbar, open }, ref) => {

  return (
    <header ref={ref} className="header-container px-4 py-2 flex lg:hidden">
      <div className="header-content">
        <Image
          src="/logo.png"
          alt="Olaegbe's Logo"
          width={50}
          height={50}
          className="logo"
          priority 
        />
        <button
          className="menu-toggle"
          aria-label={open ? "Close Menu" : "Open Menu"}
          onClick={onToggleNavbar}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="2x" color="white" />
        </button>
      </div>
    </header>
  );
  }
);

Header.displayName = "Header";