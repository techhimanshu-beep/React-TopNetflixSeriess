import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
    <h1 className="heading_style"> top netflix series </h1>

    {
      Sdata.map((data, index) => {
        return (
          <Card
            imgsrc={data.imgsrc}
            title={data.title}
            sname={data.sname}
            links={data.links}
          />
        )
      })
    }
  </>,
  document.getElementById('root'));


