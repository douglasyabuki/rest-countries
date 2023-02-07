// Props destructuring
interface Props {
  theme: string;
  changeTheme: React.MouseEventHandler
}

export default function ThemeSwitcher ({theme, changeTheme}: Props) {
  
  // Conditional styling to avoid nested ternary operations
  let changeButton = theme === "dark" ? "" : "";

  let buttonContent = theme === "dark" ? "Dark mode" : "Light mode";

  return (
    <div>
      <button onClick={changeTheme}>{buttonContent}</button>
    </div>
  );
}
