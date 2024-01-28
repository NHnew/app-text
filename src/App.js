import { useState } from "react";

function App() {
  const [text, setText] = useState("Salam, mən ");
  return (
    <div className="app">
      <h1>{text}</h1>
      <button onClick={() => setText((t => t + "adınız-am."))}>0</button>
      <button onClick={() => setText((t => t + "əlaçıyam."))}>1</button>
      <button onClick={() => setText((t => t + "yaxşı oxuyanam."))}>2</button>
      <button onClick={() => setText((t => t + "orta oxuyanam."))}>3</button>
    </div >
  );
}

export default App;
