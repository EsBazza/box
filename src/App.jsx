import "./App.css";

function Header({ name }) {
  return <h1 className="header">{name}</h1>
}
function Box({ subject }) {
  return (
    <div className="box">
      {subject}
    </div>
  )
}
export default function App() {
  const name = "Alonzo";
  const subject = "CPEITEL";
  return (
    <div className="app">
      <Header name={name} />
      <Box subject={subject} />
    </div>
  )
}

