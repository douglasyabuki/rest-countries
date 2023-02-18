// Components
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";

// Props destructuring
interface Props {
  theme: string;
  changeTheme: React.MouseEventHandler;
}

// Navbar main function
export default function Navbar({ theme, changeTheme }: Props) {

  // Returns the whole navbar to index.tsx;
  return (
    <div className="flex w-screen h-16 text-sm md:text-md bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text justify-between items-center p-6 shadow-lg shadow-transparent-black transition-colors duration-300">
      <div>
        <h1>Where in the world</h1>
      </div>
      <div>
        <ThemeSwitcher theme={theme} changeTheme={changeTheme}></ThemeSwitcher>
      </div>
    </div>
  );
}
