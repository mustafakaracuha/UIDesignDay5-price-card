import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import search from "../assets/img/search.png"

export default function Card() {
  return (
    <>
      <div className="box">
        <div className="main">
          <div className="head">
            <h1>549, - </h1>
            <p>Pay now, later or split up.</p>
          </div>
          <div className="buy">
            <button type="">BUY ONLINE</button>
            <p>
              18 in online storage- <span>can be shipped today</span>
            </p>
          </div>
          <div className="check">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Free shipping over NOK 800"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked/>}
                label="Lightning fast delivery"
              />
            </FormGroup>
          </div>
          <div className="zipCode">
            <p>See how fast you can get the item</p>
            <div>
              <span><img width={19} src={search} alt=""/></span>
              <input placeholder="Zip Code"/>
              <button type="">Check</button>
            </div>
          </div>
           <button className="pickUp" type="">PICK UP IN STORE</button>
        </div>
      </div>
    </>
  );
}
