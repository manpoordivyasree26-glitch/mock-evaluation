import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import PostsList from "./components/PostsList";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostsList />
    </div>
  );
};

export default AppContent;
