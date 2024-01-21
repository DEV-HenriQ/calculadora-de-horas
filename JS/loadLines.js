function loadLines()
{
   if (localStorage.getItem('myTbody') == null)
   {
      return
   }
   const tbody = document.querySelector('#tbody')
   tbody.innerHTML = localStorage.getItem('myTbody')
   const allTr = tbody.children

   for (i = 0; i < allTr.length; i++)
   {
      allTr[i].children[1].children[0].value = localStorage.getItem(`line${i}`).slice(0,10)
      allTr[i].children[2].children[0].value = localStorage.getItem(`line${i}`).slice(13,18)
      allTr[i].children[3].children[0].value = localStorage.getItem(`line${i}`).slice(21,26)
      allTr[i].children[4].children[0].value = localStorage.getItem(`line${i}`).slice(29,34)
      allTr[i].children[5].children[0].value = localStorage.getItem(`line${i}`).slice(37,42)
      allTr[i].children[6].children[0].value = localStorage.getItem(`line${i}`).slice(46,50)
   }

   document.querySelector('.plusBTN').addEventListener('click', addRow)
   putMinusFunction()
}