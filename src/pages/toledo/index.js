import React from "react";

import ToledoLogo from "../../assets/img/LogoToledo.png";
import "./style.css";


import { Card } from "primereact/card";

import moment from "moment";
import "moment/locale/pt-br";


export default function Toledo() {
  moment.locale("pt-br");

  const dia = moment(new Date()).format("DD");
  const mes = moment(new Date()).format("MM");

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
          subTitle="Senha técnica para balanças toledo "
        >
          <img src={ToledoLogo} width="50%" height="50%" alt="logo_uniplus" />
          <h1 style={{ fontWeight: "400", fontFamily: "Inconsolata" }}>
            {" "}
            Hoje é {moment(new Date()).format("DD/MM/YYYY - dddd")}
          </h1>

          <h1 style={{ fontSize: "50px" }}>
            {parseInt(dia) + 20} {parseInt(mes) + 11}
          </h1>
        </Card>
      </div>
    </div>
  );
}
