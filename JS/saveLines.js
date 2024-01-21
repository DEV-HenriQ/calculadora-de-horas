function autoSave()
{
   setInterval(saveLines, 1000)
}

function saveLines()
{
   saveLineHTML() /* Salva o html do body */
   saveLineValues() /* Salva os valores */
   deleteEmptyLines() /* Deleta Localstorage vazio */
}

function saveLineHTML()
{
   const tbody =  document.querySelector('#tbody')
   localStorage.setItem('myTbody', tbody.innerHTML)
}

function saveLineValues()
{
   const tbody = document.querySelector('#tbody')
   const allTr = tbody.children
   
   for (i = 0; i < allTr.length; i++)
   {
      let obj = {}

      obj.data = allTr[i].children[1].children[0].value
      obj.t1 = allTr[i].children[2].children[0].value
      obj.t2 = allTr[i].children[3].children[0].value
      obj.t3 = allTr[i].children[4].children[0].value
      obj.t4 = allTr[i].children[5].children[0].value
      obj.total = allTr[i].children[6].children[0].value

      localStorage.setItem(`line${i}`, `${obj.data} / ${obj.t1} / ${obj.t2} / ${obj.t3} / ${obj.t4} / ${obj.total}`)
   }
}

function deleteEmptyLines()
{
   const tbody = document.querySelector('#tbody')
   let tbodyLength = tbody.children.length
   let canEscape = false

   do
   {
      if (localStorage.getItem(`line${tbodyLength}`) != null)
      {
         localStorage.removeItem(`line${tbodyLength}`)
         tbodyLength++
      }
      else {canEscape = true}
   } while (canEscape == false)
}