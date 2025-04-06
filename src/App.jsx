import "./styles.css";

import Header from "./components/Header";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div>
      <Header/>
      <SignUp/>
    </div>
  );
}
