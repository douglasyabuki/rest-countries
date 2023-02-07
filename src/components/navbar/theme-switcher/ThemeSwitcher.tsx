// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// Props destructuring
interface Props {
  theme: string;
  changeTheme: React.MouseEventHandler
}

// Theme switcher main function
export default function ThemeSwitcher ({theme, changeTheme}: Props) {
  
  // Conditional styling to avoid nested ternary operations
  let currentContent = theme === "dark" ? "Dark mode" : "Light mode";
  let currentIcon = theme === "dark" ? faMoon : faSun;

  // Returns the button to switch theme between dark and light to Navbar.tsx
  return (
    <div className="flex items-center justify-center" role={"button"} onClick={changeTheme}>
      <FontAwesomeIcon icon={currentIcon}></FontAwesomeIcon>
      <h2>{currentContent}</h2>
    </div>
  );
}
