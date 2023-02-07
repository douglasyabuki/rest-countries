// Components
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";

interface Props {
  theme: string;
  changeTheme: React.MouseEventHandler;
}

export default function Navbar({ theme, changeTheme }: Props) {
  return (
    <div className="flex w-screen h-16 bg-light-mode-background text-light-mode-text dark:bg-dark-mode-background dark:text-dark-mode-text justify-between items-center">
      <div>
        <h1>Where in the world</h1>
      </div>
      <div>
        <ThemeSwitcher theme={theme} changeTheme={changeTheme}></ThemeSwitcher>
      </div>
    </div>
  );
}
