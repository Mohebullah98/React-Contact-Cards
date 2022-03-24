import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import Contacts from "../contacts";

function App() {
  return (
    <div>
      <Heading />
      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        tel={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        tel={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        tel={Contacts[2].phone}
        email={Contacts[2].email}
      />
    </div>
  );
}

export default App;
