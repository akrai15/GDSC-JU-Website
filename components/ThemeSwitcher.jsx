import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // handle hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Define CSS classes for the scrollbar based on the theme
  const scrollbarStyle = theme === "dark" ? "dark-scrollbar" : "light-scrollbar";

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5 text-orange-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-slate-800" />
        )}
      </button>

      {/* Scroll Down Button */}
      {/* Add content here or remove the button if you don't want it */}
      
      {/* Apply custom scrollbar styles based on the theme */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${theme === "dark" ? "#333" : "#ccc"};
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${theme === "dark" ? "#555" : "#999"};
          }
        `}
      </style>
    </div>
  );
};

