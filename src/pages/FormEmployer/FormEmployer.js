import styles from "./FormEmployer.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function FormEmployer() {
  const goTo = useNavigate();
  const [form, setForm] = useState({
    nameProject: "",
    area: "",
    description: "",
    startDate: "",
    budget: "",
    details: "",
    contact: "",
    img: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Gentileza preencher o campo ${key} corretamente`);
        return;
      }
    }

    try {
      axios.post("https://ironrest.herokuapp.com/giglandGigs", form);
      goTo(`/Freelancers`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Cadastre sua vaga:</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label htmlFor="nameProject">Nome do projeto:</label>
          <input
            id="nameProject"
            placeholder="Project Name"
            name="nameProject"
            value={form.nameProject}
            onChange={handleChange}
          />

          <label htmlFor="area">Segmento</label>
          <input
            id="area"
            placeholder="segmento"
            name="area"
            value={form.area}
            onChange={handleChange}
          />
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            placeholder="Breve descrição"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <label htmlFor="startDate">Data</label>
          <input
            id="startDate"
            placeholder="Data"
            name="startDate"
            value={form.startDate}
            //type="radio"
            onChange={handleChange}
          />
          <label htmlFor="budget">Orçamento</label>
          <input
            id="budget"
            placeholder="Orçamento"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          />
          <label htmlFor="details">Detalhamento</label>
          <input
            id="details"
            placeholder="Detalhe aqui sua vaga"
            name="details"
            value={form.details}
            onChange={handleChange}
          />
          <label htmlFor="contact">Contato:</label>
          <input
            id="contact"
            placeholder="Endereço de e-mail"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />
          <label htmlFor="img">Link para logo ou imagem de seu projeto:</label>
          <input id="img" name="img" value={form.img} onChange={handleChange} />
          <button type="submit">Cadastre sua vaga!</button>
        </div>
      </form>
    </>
  );
}
