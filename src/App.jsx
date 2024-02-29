import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({});
  const handleFormData = (data) => {
    setData(data);
  };
  return (
    <div>
      <h1>Formulario</h1>
      <Form onFormSubmit={handleFormData}>
        {Object.keys(data).length > 0 && <Card datos={data} />}
      </Form>
    </div>
  );
}

export default App;
