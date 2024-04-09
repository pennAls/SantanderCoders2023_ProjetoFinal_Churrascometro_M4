const n_homensSalvo = localStorage.getItem("n_homens");
const n_mulheresSalvo = localStorage.getItem("n_mulheres");
const n_childSalvo = localStorage.getItem("n_child");
const n_bebidas = localStorage.getItem("n_bebida");

const men = document.getElementById("n_homens");
if (n_homensSalvo !== null) {
  men.textContent = n_homensSalvo;
}

const woman = document.getElementById("n_mulheres");
if (n_mulheresSalvo !== null) {
  woman.textContent = n_mulheresSalvo;
}

const children = document.getElementById("n_child");
if (n_childSalvo !== null) {
  children.textContent = n_childSalvo;
}

//CARNE

const menMeat = document.getElementById("menmeat");
menMeat.textContent = (n_homensSalvo * 0.4).toFixed(2) + " Kg";
menMeat.classList.add("text");
men.classList.add("text");

const womanMeat = document.getElementById("womanmeat");
womanMeat.textContent = (n_mulheresSalvo * 0.32).toFixed(2) + " Kg";
womanMeat.classList.add("text");
woman.classList.add("text");

const childMeat = document.getElementById("childmeat");
childMeat.textContent = (n_childSalvo * 0.2).toFixed(2) + " Kg";
childMeat.classList.add("text");
children.classList.add("text");

//PÃO

const menPao = document.getElementById("menPao");
menPao.textContent = n_homensSalvo * 2 + " Pães";
menPao.classList.add("text");

const womanPao = document.getElementById("womanPao");
womanPao.textContent = n_mulheresSalvo * 2 + " Pães";
womanPao.classList.add("text");

const childPao = document.getElementById("childPao");
childPao.textContent = n_childSalvo * 1 + " Pães";
childPao.classList.add("text");

//CARVÃO

const carvao = document.getElementById("carvao");
carvao.textContent =
  parseFloat(n_homensSalvo) +
  parseFloat(n_childSalvo) +
  parseFloat(n_mulheresSalvo) +
  " Kg";
carvao.classList.add("text");

//SAL

const sal = document.getElementById("sal");
sal.textContent =
  (
    parseFloat(n_homensSalvo * 0.04) +
    parseFloat(n_childSalvo * 0.04) +
    parseFloat(n_mulheresSalvo * 0.04)
  ).toFixed(2) + " Kg";
sal.classList.add("text");

//GELO

const gelo = document.getElementById("gelo");
gelo.textContent =
  (
    parseFloat(n_homensSalvo * 0.5) +
    parseFloat(n_childSalvo * 0.5) +
    parseFloat(n_mulheresSalvo * 0.5)
  ).toFixed(2) + " Kg";
gelo.classList.add("text");

//REFRIGERANTE

const refri = document.getElementById("refri");
refri.textContent =
  (
    parseFloat(n_homensSalvo * 0.4) +
    parseFloat(n_childSalvo * 0.4) +
    parseFloat(n_mulheresSalvo * 0.4)
  ).toFixed(2) + " L";
refri.classList.add("text");

//AGUA

const agua = document.getElementById("agua");
agua.textContent =
  (
    parseFloat(n_homensSalvo * 0.2) +
    parseFloat(n_childSalvo * 0.2) +
    parseFloat(n_mulheresSalvo * 0.2)
  ).toFixed(2) + " L";
agua.classList.add("text");

//CERVEJA

const beer = document.getElementById("beer");
beer.textContent = parseFloat(n_bebidas * 0.6 * 3).toFixed(2) + " L";
beer.classList.add("text");

const buttom_valores = document.getElementById("buttom_valores");
let buttonClicked = false;

buttom_valores.addEventListener("click", (e) => {
  e.preventDefault();

  if (buttonClicked) {
    return;
  }

  const section_total = document.getElementById("total");
  const div_total = document.createElement("div");
  div_total.classList.add("valor");

  const valor_carne_input = document.getElementById("carne").value;
  const valor_pao_input = document.getElementById("pão").value;
  const valor_carvao_input = document.getElementById("carvão").value;
  const valor_sal_input = document.getElementById("salkg").value;
  const valor_gelo_input = document.getElementById("gelokg").value;
  const valor_refrigerante_input =
    document.getElementById("refrigerante").value;
  const valor_agua_input = document.getElementById("água").value;
  const valor_cerveja_input = document.getElementById("cerveja").value;

  if (
    !valor_carne_input ||
    !valor_pao_input ||
    !valor_carvao_input ||
    !valor_sal_input ||
    !valor_gelo_input ||
    !valor_refrigerante_input ||
    !valor_agua_input ||
    !valor_cerveja_input
  ) {
    window.alert(
      "Por favor, preencha todos os campos dos itens do churrasco antes de calcular."
    );
    buttom_valores.disabled = false;
    buttonClicked = false;

    return;
  }
  buttom_valores.disabled = true;
  buttonClicked = true;

  const valor_carne = parseFloat(valor_carne_input) || 0;
  const valor_pao = parseFloat(valor_pao_input) || 0;
  const valor_carvao = parseFloat(valor_carvao_input) || 0;
  const valor_sal = parseFloat(valor_sal_input) || 0;
  const valor_gelo = parseFloat(valor_gelo_input) || 0;
  const valor_refrigerante = parseFloat(valor_refrigerante_input) || 0;
  const valor_agua = parseFloat(valor_agua_input) || 0;
  const valor_cerveja = parseFloat(valor_cerveja_input) || 0;

  const total_carne = document.createElement("p");
  const totalMeat = parseFloat(
    n_childSalvo * 0.2 + n_mulheresSalvo * 0.32 + n_homensSalvo * 0.4
  );
  const total_carne_valor = totalMeat * valor_carne;
  total_carne.textContent =
    "Total de carne: R$ " + total_carne_valor.toFixed(2);
  div_total.appendChild(total_carne);

  const total_pao = document.createElement("p");
  const totalPao = parseInt(
    n_homensSalvo * 2 + n_mulheresSalvo * 2 + n_childSalvo * 1
  );
  const total_pao_valor = valor_pao;
  total_pao.textContent = "Total de pão: R$ " + total_pao_valor.toFixed(2);
  div_total.appendChild(total_pao);

  const total_carvao = document.createElement("p");
  const total_carvao_valor =
    parseFloat(n_homensSalvo) +
    parseFloat(n_childSalvo) +
    parseFloat(n_mulheresSalvo);
  total_carvao.textContent =
    "Total de carvão: R$ " + total_carvao_valor.toFixed(2);
  div_total.appendChild(total_carvao);

  const total_sal = document.createElement("p");
  const total_sal_valor =
    (parseFloat(n_homensSalvo * 0.04) +
      parseFloat(n_childSalvo * 0.04) +
      parseFloat(n_mulheresSalvo * 0.04)) *
    valor_sal;
  total_sal.textContent = "Total de sal: R$ " + total_sal_valor.toFixed(2);
  div_total.appendChild(total_sal);

  const total_gelo = document.createElement("p");
  const total_gelo_valor =
    (parseFloat(n_homensSalvo * 0.5) +
      parseFloat(n_childSalvo * 0.5) +
      parseFloat(n_mulheresSalvo * 0.5)) *
    valor_gelo;
  total_gelo.textContent = "Total de gelo: R$ " + total_gelo_valor.toFixed(2);
  div_total.appendChild(total_gelo);

  const total_refrigerante = document.createElement("p");
  const total_refrigerante_valor =
    (parseFloat(n_homensSalvo * 0.4) +
      parseFloat(n_childSalvo * 0.4) +
      parseFloat(n_mulheresSalvo * 0.4)) *
    valor_refrigerante;
  total_refrigerante.textContent =
    "Total de refrigerante: R$ " + total_refrigerante_valor.toFixed(2);
  div_total.appendChild(total_refrigerante);

  const total_agua = document.createElement("p");
  const total_agua_valor =
    (parseFloat(n_homensSalvo * 0.2) +
      parseFloat(n_childSalvo * 0.2) +
      parseFloat(n_mulheresSalvo * 0.2)) *
    valor_agua;
  total_agua.textContent = "Total de água: R$ " + total_agua_valor.toFixed(2);
  div_total.appendChild(total_agua);

  const total_cerveja = document.createElement("p");
  const total_cerveja_valor = parseFloat(n_bebidas * 0.6 * 3) * valor_cerveja;
  total_cerveja.textContent =
    "Total de cerveja: R$ " + total_cerveja_valor.toFixed(2);
  div_total.appendChild(total_cerveja);

  const somatorio = document.createElement("p");
  somatorio.textContent =
    "+ -------------------------------------------------------";
  div_total.appendChild(somatorio);

  const total_geral_valor =
    total_carne_valor +
    total_pao_valor +
    total_carvao_valor +
    total_sal_valor +
    total_gelo_valor +
    total_refrigerante_valor +
    total_agua_valor +
    total_cerveja_valor;

  const total_geral_element = document.createElement("p");
  total_geral_element.textContent =
    "TOTAL DO CHURRACO: R$ " + total_geral_valor.toFixed(2);
  div_total.appendChild(total_geral_element);

  section_total.appendChild(div_total);
});

const retorno = document.getElementById("buttom_return");
retorno.addEventListener("click", () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "./index.html";
});


