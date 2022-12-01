import React from "react";

import UniplusLogo from "../../assets/img/uniplus.png";
import "./style.css";

import moment from "moment";

import { Card } from "primereact/card";

export default function Uniplus() {
  const dia = moment(new Date()).format("DD");
  const mes = moment(new Date()).format("MM");
  const ano = moment(new Date()).format("YY");

  return (
    <div>
      <div className="card">
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          title="Senha do dia"
          subTitle="Senha técnica para aplicativos da família uniplus"
        >
          <img src={UniplusLogo} width="50%" height="50%" alt="logo_uniplus" />
          <h1 style={{ fontWeight: "400", fontFamily: "Inconsolata" }}>
            {" "}
            Hoje é {moment(new Date()).format("DD/MM/YYYY")}{" "}
          </h1>

          <h1 style={{ fontSize: "50px" }}> {dia * mes * ano * 3}</h1>
        </Card>
      </div>
    </div>
  );
}
