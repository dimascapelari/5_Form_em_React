import "./App.css";
import { MyForms } from "./components/MyForms";

export function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Forms</h2>
      <MyForms
        user={{
          name: "Dimas",
          email: "dimas.capelari@gmail.com",
          bio: "Sou Programador",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
