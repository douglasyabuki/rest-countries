// Components
import ThemeSwitcher from "./theme-switcher/ThemeSwitcher";

interface Props {
  theme: string;
  changeTheme: React.MouseEventHandler;
}

export default function Navbar({ theme, changeTheme }: Props) {
  return (
    <div className="flex w-screen h-16 bg-slate-500 dark:bg-black justify-between items-center">
      <div>
        <h1>Where in the world</h1>
      </div>
      <div>
        <ThemeSwitcher theme={theme} changeTheme={changeTheme}></ThemeSwitcher>
      </div>
    </div>
  );
}
