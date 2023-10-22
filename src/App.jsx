import { useRef, useState } from "react";
import "./App.css";
import logoCard from "./images/card-logo.svg";
import successLogo from "./images/icon-complete.svg";

function App() {
  //variables y ref mensajes
  const numerosver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [nombreError, setNombreError] = useState("Wrong format, letters only");
  const [numeroError, setNumeroError] = useState("Wrong format, numbers only");
  const [monthError, setMonthError] = useState("Wrong format, numbers only");
  const [cvvError, setCvvError] = useState("Wrong format, numbers only");

  const wrongName = useRef();
  const wrongNumber = useRef();
  const wrongMonth = useRef();
  const wrongCvv = useRef();

  //use ref inputs y html
  const tarjetNumber = useRef();
  const nombre = useRef();
  const mes = useRef();
  const year = useRef();
  const cvc = useRef();

  const numero = useRef();
  const nombreRef = useRef();
  const month = useRef();
  const yearRef = useRef();
  const cvv = useRef();
  const success = useRef();
  const formulario = useRef();

  // validaciones formulario

  const reescribirName = (e) => {
    nombre.current.innerHTML = e.target.value.toUpperCase();
    if (
      e.target.value.includes(numerosver[0]) ||
      e.target.value.includes(numerosver[1]) ||
      e.target.value.includes(numerosver[2]) ||
      e.target.value.includes(numerosver[3]) ||
      e.target.value.includes(numerosver[4]) ||
      e.target.value.includes(numerosver[5]) ||
      e.target.value.includes(numerosver[6]) ||
      e.target.value.includes(numerosver[7]) ||
      e.target.value.includes(numerosver[8]) ||
      e.target.value.includes(numerosver[9])
    ) {
      setNombreError("Wrong format, letters only");
      wrongName.current.style.visibility = "visible";
      nombreRef.current.style.border = "2px solid red";
    } else {
      wrongName.current.style.visibility = "hidden";
      nombreRef.current.style.border = "1.5px solid #808080a5";
    }

    if (e.target.value == "") {
      nombre.current.innerHTML = "JANE APPLESEED";
    }
  };

  const reescribirNumber = (e) => {
    if (e.target.value != Number(e.target.value)) {
      setNumeroError("Wrong format, numbers only");
      wrongNumber.current.style.visibility = "visible";
      numero.current.style.border = "2px solid red";
    } else {
      wrongNumber.current.style.visibility = "hidden";
      numero.current.style.border = "1.5px solid #808080a5";
    }

    tarjetNumber.current.innerHTML = e.target.value;
    // Obtener el valor sin espacios
    const inputValue = e.target.value.replace(/\s/g, "");

    // Formatear el número de tarjeta con espacios cada cuatro dígitos
    let formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Limitar la longitud a 19 caracteres
    if (formattedValue.length > 19) {
      formattedValue = formattedValue.slice(0, 19);
    }
    // Actualizar el contenido del ref del número de tarjeta
    tarjetNumber.current.textContent = formattedValue;

    if (e.target.value === "") {
      tarjetNumber.current.innerHTML = "0000 0000 0000 0000";
    }
  };

  const reescribirMes = (e) => {
    mes.current.innerHTML = e.target.value + " /";
    if (e.target.value != Number(e.target.value)) {
      setMonthError("Wrong format, Numbers only");
      wrongMonth.current.style.visibility = "visible";
      month.current.style.border = "2px solid red";
      wrongMonth.current.style.marginLeft = "25px";
    } else {
      wrongMonth.current.style.visibility = "hidden";
      month.current.style.border = "1.5px solid #808080a5";
    }
  };

  const reescribirYear = (e) => {
    year.current.innerHTML = e.target.value;
    if (e.target.value != Number(e.target.value)) {
      setMonthError("Wrong format, Numbers only");
      wrongMonth.current.style.visibility = "visible";
      yearRef.current.style.border = "2px solid red";
      wrongMonth.current.style.marginLeft = "25px";
    } else {
      wrongMonth.current.style.visibility = "hidden";
      yearRef.current.style.border = "1.5px solid #808080a5";
    }
  };

  const reescribirCvc = (e) => {
    cvc.current.innerHTML = e.target.value;
    if (e.target.value != Number(e.target.value)) {
      setCvvError("Wrong format, Numbers only");
      wrongCvv.current.style.visibility = "visible";
      cvv.current.style.border = "2px solid red";
    } else {
      wrongCvv.current.style.visibility = "hidden";
      cvv.current.style.border = "1.5px solid #808080a5";
    }
  };

  // validacion boton de entrada
  const presionado = (e) => {
    e.preventDefault();
    let isValid = true; // Track whether all fields are valid

    if (numero.current.value === "") {
      setNumeroError("Can't be blank");
      wrongNumber.current.style.visibility = "visible";
      isValid = false;
    } else {
      setNumeroError("");
      wrongNumber.current.style.visibility = "hidden";
    }

    if (nombreRef.current.value === "") {
      setNombreError("Can't be blank");
      wrongName.current.style.visibility = "visible";
      isValid = false;
    } else {
      setNombreError("");
      wrongName.current.style.visibility = "hidden";
    }

    if (month.current.value === "") {
      setMonthError("Can't be blank");
      wrongMonth.current.style.visibility = "visible";
      isValid = false;
    } else {
      setMonthError("");
      wrongMonth.current.style.visibility = "hidden";
    }

    if (cvv.current.value === "") {
      setCvvError("Can't be blank");
      wrongCvv.current.style.visibility = "visible";
      isValid = false;
    } else {
      setCvvError("");
      wrongCvv.current.style.visibility = "hidden";
    }

    if (isValid) {
      formulario.current.style.display = "none";
      success.current.style.display = "flex";
    }
  };

  const handleReloadPage = () => {
    window.location.reload(); // Recargar la página actual
  };

  // html

  return (
    <div className="content">
      <div className="cardContainer">
        <div className="cardFront">
          <img className="logoCard" src={logoCard} alt="" />

          <div className="ceros" ref={tarjetNumber}>
            0000 0000 0000 0000
          </div>

          <div className="cardFront-aling">
            <p ref={nombre}>JANE APPLESEED</p>
            <p className="yearAl">
              {" "}
              <span className="year" ref={mes}>
                00 /
              </span>{" "}
              <span className="year" ref={year}>
                00
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="cardBack">
          <div className="ceros2" ref={cvc}>
            000
          </div>
        </div>

        {
          // mobileeee
        }
        <div className="cardFront-Mobile">
          <img className="logoCard" src={logoCard} alt="" />

          <div className="ceros" ref={tarjetNumber}>
            0000 0000 0000 0000
          </div>

          <div className="cardFront-aling">
            <p className="mobileP" ref={nombre}>
              JANE APPLESEED
            </p>
            <p>
              {" "}
              <span className="year" ref={mes}>
                00 /
              </span>{" "}
              <span className="year" ref={year}>
                00
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/*inputs*/}

      <form ref={formulario} className="formularioTarjeta">
        <label htmlFor="cardName">CARDHOLDER NAME</label>
        <input
          ref={nombreRef}
          onChange={reescribirName}
          id="cardName"
          type="text"
          placeholder="e.g. Jane Appleseed"
          maxLength={25}
        />
        <label ref={wrongName} htmlFor="cardName" className="wrong">
          {nombreError}
        </label>

        <label htmlFor="cardNumber">CARD NUMBER </label>
        <input
          ref={numero}
          onChange={reescribirNumber}
          id="cardNumber"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={16}
        />
        <label ref={wrongNumber} htmlFor="cardNumber" className="wrong">
          {numeroError}
        </label>

        <div className="code">
          <div className="codeAling">
            <label htmlFor="mes">EXP. DATE (MM/YY)</label>
            <div className="mesGap">
              <input
                ref={month}
                onChange={reescribirMes}
                id="mes"
                type="text"
                placeholder="MM"
                maxLength={2}
                minLength={2}
              />
              <input
                ref={yearRef}
                onChange={reescribirYear}
                id="mes"
                type="text"
                placeholder="YY"
                maxLength={2}
                minLength={2}
              />
            </div>
            <div>
              {" "}
              <label ref={wrongMonth} htmlFor="mes" className="wrong">
                {monthError}
              </label>{" "}
            </div>
          </div>

          <div className="codeAling">
            <label htmlFor="cvv">CVC</label>
            <input
              ref={cvv}
              onChange={reescribirCvc}
              id="cvv"
              type="text"
              placeholder="e.g. 123"
              maxLength={3}
              minLength={3}
            />
            <label ref={wrongCvv} htmlFor="cvv" className="wrong">
              {cvvError}
            </label>
          </div>
        </div>
        <input
          onClick={presionado}
          className="submit"
          type="submit"
          value="Confirm"
        />
      </form>

      <div
        ref={success}
        className="success"
        style={{
          display: "none",
        }}
      >
        <img className="successLogo" src={successLogo} alt="" />

        <div>
          <h1>THANK YOU!</h1>
          <h2> We've added your card details</h2>
        </div>
        <button onClick={handleReloadPage} className="submit">
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
