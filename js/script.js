const user = document.getElementById("name");
const email = document.getElementById("email");
const cep = document.getElementById("CEP");
const submit = document.getElementById("button_login");

async function sessionID() {
  try {
    const response = await fetch(`https://www.uuidgenerator.net/api/version4`, { method: "GET" });
    const id = await response.text();
    sessionStorage.setItem('sessionUUID', id); 
    console.log("UUID da sessão salvo:", id);
  } catch (error) {
    console.error("Erro ao obter o UUID:", error);
  }
}

async function handleLoginClick(e) {
  e.preventDefault(); 
  await sessionID();
  validarLogin(); 
}

const validarLogin = () => {
  let nomeUsuarioValido = true;
  let cepValido = true;
 
  for (const letra of user.value) {
    if (!isNaN(letra) && letra !== " ") {
      window.alert("O Nome de Usuário não pode conter números");
      nomeUsuarioValido = false;
      break;
    } else if (/[^a-zA-Z0-9\s]/.test(letra)) {
      window.alert("O Nome de Usuário não pode conter caracteres especiais");
      nomeUsuarioValido = false;
      break;
    }
  }

  if (!nomeUsuarioValido) {
    return;
  }

  if (cep.value.length !== 8) {
    window.alert("CEP inválido");
    cepValido = false;
  }
  if (!cepValido) {
    return;
  }

  if (user.value && email.value && cep.value) {
    localStorage.setItem("nome", user.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("cep", cep.value);
    window.location.href = "people.html";
  } else {
    window.alert("Existem campos vazios");
  }
};

const carregarDadosLogin = () => {
  const nomeSalvo = localStorage.getItem("nome");
  const emailSalvo = localStorage.getItem("email");
  const cepSalvo = localStorage.getItem("cep");

  if (nomeSalvo && emailSalvo && cepSalvo) {
    user.value = nomeSalvo;
    email.value = emailSalvo;
    cep.value = cepSalvo;
  }
};

submit.addEventListener("click", handleLoginClick);
carregarDadosLogin();
