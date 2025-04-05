import "./styles.css";

import Header from "./components/Header";
import Repository from "./components/IssueItemMain"
import IssueItemMain from "./components/IssueItemMain";

export default function App() {
  return (
    <div>
      <Header/>
      <IssueItemMain/>
    </div>
  );
}
