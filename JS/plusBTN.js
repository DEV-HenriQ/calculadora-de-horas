const plusBTN = document.querySelector('.plusBTN')
plusBTN.addEventListener('click', addRow)

function addRow()
{
   const tbody = document.querySelector('#tbody')

   const tr = document.createElement('tr')
   const td1 = document.createElement('td')
   const td2 = document.createElement('td')
   const td3 = document.createElement('td')
   const td4 = document.createElement('td')
   const td5 = document.createElement('td')
   const td6 = document.createElement('td')
   const td7 = document.createElement('td')
   const td8 = document.createElement('td')
   td8.classList.add('cursor')

   const inputTd1 = `<img src="./IMG/desmarcado-removebg-preview.png" alt="imagem de checkbox desmarcado">`
   const inputTd2 = document.createElement('input')
   const inputTd3 = document.createElement('input')
   const inputTd4 = document.createElement('input')
   const inputTd5 = document.createElement('input')
   const inputTd6 = document.createElement('input')
   const inputTd7 = document.createElement('input')
   const divTd8 = document.createElement('div')

   inputTd2.type = "date"
   inputTd2.classList.add('dia')

   inputTd3.type = "time"
   inputTd3.classList.add('entrada')

   inputTd4.type = "time"
   inputTd4.classList.add('pausa')

   inputTd5.type = "time"
   inputTd5.classList.add('volta')

   inputTd6.type = "time"
   inputTd6.classList.add('saida')

   inputTd7.type = "time"
   inputTd7.classList.add("total")
   inputTd7.disabled = true

   divTd8.classList.add('minusBTN')
   divTd8.innerHTML = `<img src="./IMG/ICONS/dash-circle-fill.svg" alt="plus logo">`

   td1.innerHTML = inputTd1
   td1.classList.add('checkbox', 'cursor')
   td2.append(inputTd2)
   td3.append(inputTd3)
   td4.append(inputTd4)
   td5.append(inputTd5)
   td6.append(inputTd6)
   td7.append(inputTd7)
   td8.append(divTd8)
   tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
   tr.classList.add('tr')
   tbody.append(tr)

   putMinusFunction()
   putCheckFunction()
   saveLines()
}

function putMinusFunction()
{
   const allMinus = document.querySelectorAll('.minusBTN')

   allMinus.forEach(function (cada)
   {
      cada.addEventListener('click', removeRow)
   })
}

function removeRow(event)
{
   const elementClicked = event.currentTarget;
   elementClicked.parentNode.parentNode.remove()
   saveLines()
}

function putCheckFunction()
{
   const allCheckbox = document.querySelectorAll('.checkbox')

   allCheckbox.forEach(function (cada)
   {
      cada.addEventListener('click', toogleImg)
   })
}

function toogleImg(event)
{
   const elementClicked = event.currentTarget;

   if (elementClicked.innerHTML ===  `<img src="./IMG/desmarcado-removebg-preview.png" alt="imagem de checkbox desmarcado">`)
   {
      elementClicked.innerHTML = `<img src="./IMG/marcado-removebg-preview.png" alt="imagem de checkbox marcado">`
   }
   else
   {
      elementClicked.innerHTML = `<img src="./IMG/desmarcado-removebg-preview.png" alt="imagem de checkbox desmarcado">`
   }
}