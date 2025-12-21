import { PostsProvider } from "./context/postsContext";
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