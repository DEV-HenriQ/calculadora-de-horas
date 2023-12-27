const downloadBTN = document.querySelector('#downloadBTN')
downloadBTN.addEventListener('click', toPDF)

function toPDF() {
  const item = document.querySelector(".main");
 
  var opt = 
  {
    margin: 0,
    filename: "minhaTabela.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A2", orientation: "landscape" },
  };
 
  html2pdf().set(opt).from(item).save();
}

function toPrint()
{
  const conteudo = document.querySelector(".table-container").innerHTML;

  let estilo = "<style>";
  estilo += "div.table-container {width: 90vw; margin: .5rem auto; overflow-x: auto;}"
  estilo += ".table {text-align: center;}"
  estilo += ".table thead {background-color: var(--tema-cor); font-weight: bold; color: var(--texto-branco); height: 40px; font-family: 'Rubik', sans-serif;}"
  estilo += ".table thead tr{margin: 5px;}"
  estilo += ".table thead tr th:nth-child(1){width: 10%; min-width: 100px;}"
  estilo += ".table thead tr th:nth-child(2){width: 17.6%; min-width: 176px;}"
  estilo += ".table thead tr th:nth-child(3){width: 17.6%; min-width: 176px;}"
  estilo += ".table thead tr th:nth-child(4){width: 17.6%; min-width: 176px;}"
  estilo += ".table thead tr th:nth-child(5){width: 17.6%; min-width: 176px;}"
  estilo += ".table thead tr th:nth-child(6){width: 17.6%; min-width: 176px;}"
  estilo += ".table thead tr th:nth-child(7){width: 2%; min-width: 40px;}"
  estilo += ".table tbody tr td:nth-child(1){width: 10%; min-width: 100px;}"
  estilo += ".table tbody tr td:nth-child(2){width: 17.6%; min-width: 176px;}"
  estilo += ".table tbody tr td:nth-child(3){width: 17.6%; min-width: 176px;}"
  estilo += ".table tbody tr td:nth-child(4){width: 17.6%; min-width: 176px;}"
  estilo += ".table tbody tr td:nth-child(5){width: 17.6%; min-width: 176px;}"
  estilo += ".table tbody tr td:nth-child(6){width: 17.6%; min-width: 176px;}"
  estilo += ".table tbody tr td:nth-child(7){width: 2%; min-width: 40px;}"
  estilo += "td input, td div { width: 100%; height: 50px; text-align: center; font-family: 'Rubik', sans-serif; font-size: 1.2rem; font-weight: 600; display: flex; align-items: center; justify-content: center; background-image: radial-gradient( circle farthest-corner at 10% 20% rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% ); color: #0F2027; transition: .5s; border: 0;}"
  estilo += "td div {background-image: radial-gradient( circle farthest-corner at 10% 20%, rgba(237,3,32,0.87) 20.8%, rgba(242,121,1,0.84) 74.4% );}"
  estilo += "td div:hover, td input:hover {background-image: linear-gradient( 109.6deg,  rgba(209,0,116,1) 11.2%, rgba(110,44,107,1) 91.1% );}"
  estilo += "tbody tr td div img {width: 18px; margin: 0 5px; cursor: pointer;}"
  estilo += ".cursor {cursor: pointer;}"
  estilo += "</style>";

  const win = window.open('','', 'height=700,width=700');
  win.document.write('<html><head>')
  win.document.write('<title>Calculadora de Ponto</title>')
  win.document.write(estilo)
  win.document.write('</head>')
  win.document.write('<body>')
  win.document.write(conteudo)
  win.document.write('</body></html>')
  /* win.print() */
  window.print()
}
