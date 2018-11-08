import React from "react";

const CardGroup = props => <div className="cardGroup">{props.children}</div>;

const Card = props => (
  <div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
      <div className={`icon fa ${props.icon} card__descriptionIcon`} />
      <div className="card__descriptionText">
        {props.title}
        <br />
        {props.hint}
      </div>
    </div>
    <div className="card__price">${props.price}</div>
  </div>
);

const App = () => (
  <CardGroup>
    <Card title="Trial" icon="fa-thumbs-o-up" price="Free!" />
    <Card
      title="Basic tier"
      icon="fa-trophy"
      price="$10.00"
      hint="(most popular)"
    />
    <Card
      title="Advanced tier"
      icon="fa-bolt"
      price="$6,000.00"
      hint="(only for enterprise-level professionals)"
    />
  </CardGroup>
);

export default App;
