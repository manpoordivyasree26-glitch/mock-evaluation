import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { PostsProvider } from "./context/PostsContext";
import ThemeToggle from "./components/ThemeToggle";
import PostsList from "./components/PostsList";

function AppInner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostsList />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PostsProvider>
        <AppInner />
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
