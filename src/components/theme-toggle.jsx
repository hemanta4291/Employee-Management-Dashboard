import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "./theme-provider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const switchToMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  return (
    <div onClick={switchToMode} className="cursor-pointer p-2">
      {theme === "light" ? (
        <MoonIcon size={20} className="text-gray-500" />
      ) : (
        <SunIcon size={20} className="text-yellow-500" />
      )}
    </div>
  );
}

export default ThemeToggle;
