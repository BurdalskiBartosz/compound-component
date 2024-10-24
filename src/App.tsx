import { useEffect } from "react";

function App() {
  console.log("App RENDER");
  useEffect(() => {
    console.log("USE EFFECT IN App");
  }, []);
  return <div></div>;
}

export default App;
