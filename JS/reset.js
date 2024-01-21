document.querySelector('#resetBTN').addEventListener('click', resetTable)

function resetTable()
{
   if(!confirm('DADOS SERÃO EXCLUÍDOS. ZERAR TABELA?'))
   {
      return
   }
   const tbody = document.querySelector('#tbody')
   tbody.innerHTML = `<tr class="tr">
   <td class="checkbox cursor"><img src="./IMG/desmarcado-removebg-preview.png" alt="imagem de checkbox desmarcado"></td>
   <td><input type="date" class="dia"></td>
   <td><input type="time" class="entrada"></td>
   <td><input type="time" class="pausa"></td>
   <td><input type="time" class="volta"></td>
   <td><input type="time" class="saida"></td>
   <td><input type="time" class="total" disabled></td>
   <td class="cursor"><div class="plusBTN"><img src="./IMG/ICONS/plus-lg.svg" alt="plus logo"></div></td>
</tr>`

   const plusBTN = document.querySelector('.plusBTN')
   plusBTN.addEventListener('click', addRow)
   putCheckFunction()

   document.querySelector('.results-area').innerHTML =
   `<p>Horas Feitas no total: <span class="totalTime">00:00</span></p>
   <p class="message">Calcule para ver o resultado!</p>`
   saveLines()
}