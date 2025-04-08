import "./styles.css";

import Header from "./components/Header";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";
import Project from "./pages/Project"
import Issue from "./pages/Issue"

export default function App() {
  return (
    <div>
      <Header/>
      <Issue/>
    </div>
  );
}
