import React from "react";
import S from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Clientes");
  }
  function handleClick2() {
    navigate("/Cadastro");
  }

  return (
    <div class={S.menu}>
      <ul >
        <li>
          <a onClick={handleClick}>Clientes</a>
        </li>
        <li>
          <a onClick={handleClick2}>Cadastro</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
