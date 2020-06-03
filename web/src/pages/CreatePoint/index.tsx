import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import api from "../../services/api";
import "./style.css";

import Logo from "../../assets/logo.svg";

// array ou objeto: manualmente informar o tipo da varíavel

interface item {
  id: number;
  title: string;
  image_url: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    api.get("items").then((response) => {
      setItems(response.data);
    });
  }, []);

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

          <Map center={[-23.5574787, -46.6262312]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-23.5574787, -46.6262312]} />
          </Map>

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
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="button">Cadastrar item de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
