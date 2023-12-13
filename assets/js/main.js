function calcIdealWeight() {
  // + Wandelt die Eingabewerte von String in Number um!

  const age = +document.getElementById("inputAge").value;
  const height = +document.getElementById("inputHeight").value;
  const bodyType = document.getElementById("bodyType").value;
  let idealGewicht;

  if (bodyType === "schmal") {
    idealGewicht = (height - 100 + age / 10) * 0.9 * 0.9;
  } else if (bodyType === "breit") {
    idealGewicht = (height - 100 + age / 10) * 0.9 * 1.1;
  }

  const result = document.getElementById("result");
  result.innerHTML = `<p>Dein Idealgewicht ist: ${idealGewicht} KG</p>`;
}
