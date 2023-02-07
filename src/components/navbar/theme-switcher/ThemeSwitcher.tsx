import * as React from 'react';

interface Props {
  changeTheme: React.MouseEventHandler
}

export default function ThemeSwitcher ({changeTheme}: Props) {
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}
