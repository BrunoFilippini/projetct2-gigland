import styles from "./FormFreelancer.module.css";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function FormFreelancer() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    profission: "",
    branding: "",
    education: "",
    recentProjects: "",
    skills: "",
    interest: "",
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
      await axios.post("https://ironrest.herokuapp.com/giglandFreelas", form);
      navigate(`/Employers`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Faça Cadastro Aqui !</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label htmlFor="freelancerName">Nome: </label>
          <input
            id="freelancerName"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="profission">Profissão:</label>
          <input
            id="profission"
            name="profission"
            onChange={handleChange}
            value={form.profission}
          />
          <label htmlFor="branding">Uma breve descrição sobre você:</label>
          <input
            id="branding"
            name="branding"
            value={form.branding}
            onChange={handleChange}
          />
          <label htmlFor="education">Sua formação:</label>
          <input
            id="education"
            name="education"
            value={form.education}
            onChange={handleChange}
          />
          <label htmlFor="recentProjects">
            Conte um pouco sobre seus trabalhos anteriores:
          </label>
          <input
            id="recentProjects"
            name="recentProjects"
            value={form.recentProjects}
            onChange={handleChange}
          />
          <label htmlFor="skills">
            Quais são as suas principais habilidades?
          </label>
          <input
            id="skills"
            name="skills"
            value={form.skills}
            onChange={handleChange}
          />
          <label htmlFor="interest">
            Quais são seus interesses futuros e objetivos?
          </label>
          <input
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
          />
          <label htmlFor="contact">Seu contato:</label>
          <input
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />

          <label htmlFor="img">Link da foto para seu perfil:</label>
          <input id="img" name="img" value={form.img} onChange={handleChange} />
          <button type="submit">Cadastre seu Perfil !</button>
        </div>
      </form>
    </>
  );
}
