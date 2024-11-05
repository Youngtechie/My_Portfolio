// Header.tsx
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onToggleNavbar: () => void;
  open: boolean // Specify the function type
}

export function Header({ onToggleNavbar, open }: HeaderProps) {
  return (
    <div>
      <div className="lg:hidden flex L_head L_head_S px-2">
        <Image src={"/next.svg"} alt="" width={100} height={50} className="invert" />
        <FontAwesomeIcon
          icon={!open? faBars : faTimes}
          color="white"
          size="2x"
          onClick={onToggleNavbar}
        />
      </div>
    </div>
  );
}
