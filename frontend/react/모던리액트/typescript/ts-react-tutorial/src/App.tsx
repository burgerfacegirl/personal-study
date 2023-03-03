import React from "react";
import MyForm from "./MyForm";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
