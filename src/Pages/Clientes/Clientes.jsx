import axios from "axios";
import React, { useEffect } from "react";
import S from "./Clientes.module.css";
import Card from "../../components/Cards/Card.jsx";
import Button from "../../components/Buttons/Button.jsx";

class Clientes extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      clientes: [],
      page: 1,
      loading: false,
      error: null, 
      
    };
  } 

  componentDidMount() {
    this.loadClientes()
  }
  // Função para carregar os clientes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadClientes()
    }
  }

  loadClientes = async () => {
    try {
      const { page } = this.state;
      this.setState({ loading: true, error: null });
    
      const response = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=12`
      )
    
      this.setState((prevState) => ({
        clientes: [...prevState.clientes, ...response.data.results],
        loading: false,
      }))
    } catch (error) {
      this.setState({ loading: false, error: error });  
  } finally {
    this.setState({ loading: false });
  }
}

carregarMais = () => {
  this.setState((prevState) => ({
    page: prevState.page + 1
  }));
};

  render() {
    const { loading, error} = this.state;
    const clientesLista = this.state.clientes.map ((c) => ( 
      <Card 
        key={c.login.uuid}
        nome={c.name.first}
        sobrenome={c.name.last} 
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
      <div class="container"> 
        <section class={S.cards}> 
          {clientesLista} 
          {error && <p>{error}</p>}
          <button onClick={this.carregarMais}>
            {loading ? "Carregando..." : "Carregar mais"}
          </button>
        </section>
      </div>
    );

  }
}

export default Clientes;