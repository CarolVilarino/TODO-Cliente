import axios from "axios";
import React, { useEffect } from "react";
import S from "./Clientes.module.css"; 
import Card from "../../components/Cards/Card.jsx";

class Clientes extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      clientes: [],
      loading: true,
      error: null, 
      
    };
  } 

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=10") 
      .then(response => {
        this.setState({
          clientes: response.data.results,
          loading: false,
        });
      })      
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      }); 
  }

  render() {
    // const { loading, error} = this.state;
    const clientesLista = this.state.clientes.map ((c) => ( 
      <Card 
        key={c.login.uuid}
        nome={c.name.first}
        sobrenome={c.name.last}
        genero={c.name.gender}
        email={c.email}
        telefone={c.phone}
        celular={c.cell}
        foto={c.picture.large}
        rua={c.location.street.name}
        numero={c.location.street.number}
        cidade={c.location.city}
        estado={c.location.state}
        cep={c.location.postcode}
      />
    ));


    return (
      <div>
        <h1>Clientes</h1> 
        {clientesLista}
      </div>
    );

  }
}

export default Clientes;