import React from "react";
import "./Card.css";

export default function Alltimecard(props) {
  return (
    <div className="card">
      <img className="productpicture" src={props.imag} alt="product picture" />
      <div className="datadiv">
        <div className="name">{props.name}</div>
        <div>
          AED <span className="prise">{props.prise}</span>
        </div>
        <span>
          Arries <span className="updatedate">{props.updatedate}</span>
        </span>
        <br />
        <span className="express">
          <img
            className="picexpress"
            alt="express"
            src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
          />
        </span>
      </div>
    </div>
  );
}
