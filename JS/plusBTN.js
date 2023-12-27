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
   td7.classList.add('cursor')

   const inputTd1 = document.createElement('input')
   const inputTd2 = document.createElement('input')
   const inputTd3 = document.createElement('input')
   const inputTd4 = document.createElement('input')
   const inputTd5 = document.createElement('input')
   const inputTd6 = document.createElement('input')
   const divTd7 = document.createElement('div')

   inputTd1.type = "date"
   inputTd1.classList.add('dia')

   inputTd2.type = "time"
   inputTd2.classList.add('entrada')

   inputTd3.type = "time"
   inputTd3.classList.add('pausa')

   inputTd4.type = "time"
   inputTd4.classList.add('volta')

   inputTd5.type = "time"
   inputTd5.classList.add('saida')

   inputTd6.type = "time"
   inputTd6.classList.add('total')
   inputTd6.disabled = true

   divTd7.classList.add('minusBTN')
   divTd7.innerHTML = `<img src="./IMG/ICONS/dash-circle-fill.svg" alt="plus logo">`

   td1.append(inputTd1)
   td2.append(inputTd2)
   td3.append(inputTd3)
   td4.append(inputTd4)
   td5.append(inputTd5)
   td6.append(inputTd6)
   td7.append(divTd7)
   tr.append(td1, td2, td3, td4, td5, td6, td7)
   tbody.append(tr)

   putMinusFunction()
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