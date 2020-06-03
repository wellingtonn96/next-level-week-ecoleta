import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Logo from "../../assets/logo.svg";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={Logo} alt="Ecoleta" />

        <Link to="/">Voltar para home</Link>
      </header>

      <form>
        <h1>
          Cadastro <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no map</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione um UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade (UF)</label>
              <select name="city" id="city">
                <option value="0">Selecione um cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Items de coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="" />
            </li>
          </ul>
        </fieldset>

        <button type="button">Cadastrar item de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
