function setUpdate()
{
   if (localStorage.getItem('update') == null)
   {
      localStorage.setItem('update', false)
      novaAtualizacao()
   }
}

function novaAtualizacao()
{
   if (localStorage.getItem('update') == 'false')
   {
      if (confirm(`NOVA ATUALIZAÇÃO!\n\nCLIQUE NO BOTÃO 'ZERAR' PARA ATUALIZAR A TABELA\n\nObs.: Dados serão perdidos`))
      {
         localStorage.setItem('update', true)
         resetTableUpdate()
      }
      else {novaAtualizacao()}
   }
}

function resetTableUpdate()
{
   const tbody = document.querySelector('#tbody')
   tbody.innerHTML = `<tr class="tr">
   <td class="checkbox cursor"><img src="./IMG/desmarcado-removebg-preview.png" alt="imagem de checkbox desmarcado"></td>
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