import { useState } from "react";
import { Alert } from "./components/Alert";
import Button from "./components/Button";

function App() {
  let [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert onCloseButtonClicked={() => setAlertVisibility(false)}>
          My Alert
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
