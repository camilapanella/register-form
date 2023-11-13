import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./form.module.css";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  PictureOutlined,
} from "@ant-design/icons";

export function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Name is required!";
  if (!input.email) errors.email = "Email is required!";
  if (input.phone < 0 || input.price > 1000000)
    errors.phone = "Please enter a valid phone number";
  if (!input.password.length < 8)
    errors.password = "Password must be at least 8 digits!";
  return errors;
}

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      name: "",
      phone: "",
      email: "",
      password: "",
      image: "",
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.welcome}>¡Bienvenido!</div>
        <span className={styles.text1}>
          Convertite ahora en un agente Flexy.
        </span>
        <div>
          <label>
            <input name="photo" type="file" value={input.image} hidden />
            <PictureOutlined className={styles.photo} />{" "}
            <span>Subi tu foto de perfil.</span>
          </label>
        </div>
        <input
          type="text"
          value={input.name}
          name="name"
          className={styles.input}
          placeholder="Nombre y Apellido"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={input.phone}
          name="phone"
          className={styles.input}
          placeholder="+54 01 0200 000"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={input.email}
          name="email"
          className={styles.input}
          placeholder="hola@tuemail.com"
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.password}>
          <input
            type={visible ? "text" : "password"}
            value={input.password}
            name="password"
            className={styles.passText}
            placeholder="Ingresa tu contraseña"
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.eye} onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        <h5 className={styles.errors}>Debe tener al menos 8 caracteres.</h5>
        <h5 className={styles.errorsRes}>Olvidaste tu contraseña?</h5>

        <button
          className={styles.button}
          disabled={!input.name || !input.email || input.password}
          type="submit"
        >
          <h6 className={styles.buttonText}>Registrate</h6>{" "}
        </button>

        <h5 className={styles.text2}>
          ¿Ya tenés una cuenta? <Link>Inicia sesion</Link>
        </h5>
      </form>
    </div>
  );
}
