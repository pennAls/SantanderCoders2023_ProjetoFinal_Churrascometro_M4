const n_mulheres = document.getElementById("n_mulheres");
const n_child = document.getElementById("n_child");
const n_bebida = document.getElementById("n_bebida");
const submitpeople = document.getElementById("button_people");
const n_homens = document.getElementById("n_homens");

const validarPessoas = (e) => {
  e.preventDefault();

  if (
    !n_mulheres.value.trim() ||
    !n_child.value.trim() ||
    !n_bebida.value.trim() ||
    !n_homens.value.trim()
  ) {
    window.alert("Por favor, preencha todos os campos.");
    return; 
  }

  if (
    !Number.isInteger(parseFloat(n_mulheres.value)) ||
    !Number.isInteger(parseFloat(n_child.value)) ||
    !Number.isInteger(parseFloat(n_bebida.value)) ||
    !Number.isInteger(parseFloat(n_homens.value))
  ) {
    window.alert("Os valores não podem ser números fracionários.");
    return; 
  }

  let naoNegativo = true;

  if (
    n_bebida.value < 0 ||
    n_child.value < 0 ||
    n_homens.value < 0 ||
    n_mulheres.value < 0
  ) {
    window.alert("Os valores não podem ser negativos");
    naoNegativo = false;
  }

  if (naoNegativo) {
    localStorage.setItem("n_homens", n_homens.value);
    localStorage.setItem("n_mulheres", n_mulheres.value);
    localStorage.setItem("n_bebida", n_bebida.value);
    localStorage.setItem("n_child", n_child.value);
    window.location.href = "tabela_churras.html";
  }
};

submitpeople.addEventListener("click", validarPessoas);
