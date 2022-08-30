import React from "react";
import ReactDOM from "react-dom";
import S from "../Header/header.module.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            list: this.state.list + 1
        });
    }

    render() {
        return (
        <div className="cardClient">
            <div className="cardClientHeader">
                <img src={this.props.foto} alt="Foto do Cliente" />
                <h2>{this.props.nome} {this.props.sobrenome}</h2>
            </div>
            <div className="cardClientBody">
                <p><strong>Genero:</strong> {this.props.genero}</p>
                <p><strong>Email:</strong> {this.props.email}</p>
                <p><strong>Telefone:</strong> {this.props.telefone}</p>
                <p><strong>Celular:</strong> {this.props.celular}</p>
                <p><strong>Endereço:</strong> {this.props.rua}, {this.props.numero} - {this.props.cidade} - {this.props.estado} - {this.props.cep}</p>
            </div>
        </div>
        );
    }
}

export default Card;