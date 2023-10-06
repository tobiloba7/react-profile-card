import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="coder-dawg.jpg" alt="profile-pic" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ninja Dawg</h1>
      <p>Hi, I'm the coding dawg.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="front-end" emoji="🐶" color="red" />
      <Skill name="bark-end" emoji="🐿️" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.name}</p>
      <p>{props.emoji}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
