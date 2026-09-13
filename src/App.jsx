import "./App.css";
import { ThemeProvider } from "./Context/Context";
import { useTheme } from "./hooks/ThemeHook";


function AppContent() {
  const { theme, toggleTheme } = useTheme();

  
  return (
    <div className="app">
      <div className="card">
        <h1>Current Theme: {theme}</h1>

        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;


