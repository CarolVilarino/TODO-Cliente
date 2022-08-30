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
            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone" id="telefone" />
            <label htmlFor="celular">Celular</label>
            <input type="text" name="celular" id="celular" />
            <label htmlFor="rua">Rua</label>
            <input type="text" name="rua" id="rua" />
            <label htmlFor="numero">Número</label>
            <input type="text" name="numero" id="numero" />
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" id="cidade" />
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" id="estado" />
            <label htmlFor="cep">CEP</label>
            <input type="text" name="cep" id="cep" />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;