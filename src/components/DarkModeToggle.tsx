"use client";

import { CiDark } from "react-icons/ci";
import Toggle from "./Toggle";
import { useTheme } from "~/hooks/ThemeSetter";

export default function DarkModeToggle() {
  const { currentTheme, setCurrentTheme } = useTheme();

  const handleThemeSwitch = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  };

  return (
    <div
      onClick={handleThemeSwitch}
      className="flex items-center justify-between gap-1 px-2"
    >
      <div className="flex gap-1 items-center">
        <CiDark />
        <div>Dark Mode</div>
      </div>

      <Toggle trigger={currentTheme === 'dark'} />
    </div>
  );
}
