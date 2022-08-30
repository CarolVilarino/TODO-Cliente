import React, { UseEffect } from "react";
import S from "./Cadastro.module.css";

function Cadastro() {

  return (
    <div className={S.container}>
      <div className="form">
        <h1>Cadastro</h1>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" id="sobrenome" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" name="confirmarSenha" id="confirmarSenha" />
      </div>
    </div>
  );
}

