import React, { useState } from "react";
import { Header } from "./component/Header";
import { TourForm } from "./component/TourForm";
import { TourList } from "./component/TourList";

const App = () => {
  const [state, setstate] = useState(false);

  return (
    <div className="app">
      <Header />
      <TourForm setState={setstate} />
      <TourList  />
      {state ? null : "Пока что нет никаких туров,вы можете добавить свой!"}
    </div>
  );
};

export default App;
