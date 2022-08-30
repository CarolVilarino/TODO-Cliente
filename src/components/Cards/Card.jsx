import React from "react";
import ReactDOM from "react-dom";
import S from "./card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      list: this.state.list + 1,
    });
  }

  render() {
    return (
      <article class={S.card}>
        <a href="#">
          <picture class={S.card__thumbnail}>
            <img src={this.props.foto} alt="Foto do Cliente" />
          </picture>

          <div class={S.card__content}>
            <h3 class={S.card__title}>
              {this.props.nome} {this.props.sobrenome}
            </h3>  
              <p>
                <strong>Email:</strong> {this.props.email}
              </p>
              <p>
                <strong>Telefone:</strong> {this.props.telefone}
              </p>
              <p>
                <strong>Celular:</strong> {this.props.celular}
              </p>
              <p>
                <strong>Endereço:</strong> {this.props.rua}, {this.props.numero}{" "}
                - {this.props.cidade} - {this.props.estado} - {this.props.cep}
              </p>
          </div> 
        </a>
      </article>
    );
  }
}

export default Card;
