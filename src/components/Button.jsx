import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

// 1. Primary Button (ប៊ូតុងពណ៌ខៀវ)
export function PrimaryButton({ children = "ចុចទីនេះ", onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// 2. Dark Button (ប៊ូតុង Dark Theme Style ទំនើប)
export function DarkButton({ children = "Dark Button", onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-medium rounded-xl border border-zinc-700 hover:border-zinc-500 shadow-md hover:shadow-zinc-900/50 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      <svg
        className="w-4 h-4 text-zinc-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      <span>{children}</span>
    </button>
  );
}

// 3. Light Button (ប៊ូតុង Light Theme Style ទំនើប)
export function LightButton({ children = "Light Button", onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 bg-white hover:bg-zinc-50 text-zinc-800 font-medium rounded-xl border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      <svg
        className="w-4 h-4 text-amber-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <span>{children}</span>
    </button>
  );
}

// 3. Dark Mode Toggle Button (ប៊ូតុងផ្លាស់ប្តូរ Dark / Light Mode)
export function DarkThemeToggle({ className = "" }) {
  const context = useContext(ThemeContext);
  const theme = context?.theme || "dark";
  const toggleTheme = context?.toggleTheme;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 shadow-sm cursor-pointer select-none active:scale-95 ${
        isDark
          ? "bg-zinc-900 border-zinc-700 hover:border-yellow-500/50 text-white hover:shadow-yellow-500/10 hover:shadow-lg"
          : "bg-white border-zinc-200 hover:border-indigo-400 text-zinc-800 hover:shadow-indigo-500/10 hover:shadow-lg"
      } ${className}`}
      aria-label="Toggle dark mode"
    >
      {/* Icon Pill */}
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 ${
          isDark ? "bg-zinc-800 text-yellow-400" : "bg-amber-100 text-amber-600"
        }`}
      >
        {isDark ? (
          // Moon icon
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </span>

      {/* Label Text */}
      <span className="text-sm font-medium tracking-wide">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>

      {/* Status indicator dot */}
      <span
        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
          isDark ? "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" : "bg-emerald-500"
        }`}
      />
    </button>
  );
}

export default DarkButton;
