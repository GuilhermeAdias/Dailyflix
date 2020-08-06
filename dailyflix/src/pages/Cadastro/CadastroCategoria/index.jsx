import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />
           <div>
            <label>
              Descrição:
            <textarea
                type="text"
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div> 

        {/* <FormField
          label="Descrição:"
          name="descricao"
          type="text"
          value={values.descricao}
          onChange={handleChange}
        /> */}

        <FormField
          label="Cor:"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
          />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;