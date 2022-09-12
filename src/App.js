import "./App.css";
import Posts from "./components/Posts";
// import Post from "./components/Post";
import PostInput from "./components/PostInput";

function App() {
  return (
    <div>
      <PostInput />
      {/* <Post /> */}

      <Posts />
    </div>
  );
}

export default App;
