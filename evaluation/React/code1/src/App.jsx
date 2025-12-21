import { PostsProvider } from "./context/postsContext";
import { ThemeProvider,ThemeContext } from "./context/ThemeContext";
import PostsList from "./components/PostsLists";
import ThemeToggle from "./components/ThemeToggle";
import {useContext} from "react";
const AppContent=()=>{
const {theme}=useContext(ThemeContext);
return(
  <div className={`app ${theme}`}>
    <ThemeToggle/>
    <PostsList/>
  </div>
);
};
function App(){
  return(
    <ThemeProvider>
      <PostsProvider>
        <AppContent>

        </AppContent>
      </PostsProvider>
    </ThemeProvider>
  );
}
export default App;