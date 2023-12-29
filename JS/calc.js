const calcBTN = document.querySelector('#calcBTN')
calcBTN.addEventListener('click', calc)

function calc()
{
   if(verifyEmptyData())
   {
      return
   }
   const tbody = document.querySelector('#tbody')
   const allTr = tbody.children

   for (i = 0; i < allTr.length; i++)
   {
      const entrada = allTr[i].children[1].children[0].value
      const pausa = allTr[i].children[2].children[0].value
      const volta = allTr[i].children[3].children[0].value
      const saida = allTr[i].children[4].children[0].value

      
      
      const total = somarHoras(diminuirHoras(transformToNumbers(entrada), transformToNumbers(pausa), ''), diminuirHoras(transformToNumbers(volta), transformToNumbers(saida), ''))

      allTr[i].children[5].children[0].value = total
   }

   somarTudo()
   mostrarMensagem()

}

function somarTudo()
{
   const allTotal = document.querySelectorAll('.total')
   
   let horas = []
   let minutos = []

   for (i = 0; i < allTotal.length; i++)
   {
      horas[i] = Number(allTotal[i].value.slice(0,2));
      minutos[i] = Number(allTotal[i].value.slice(3,5)) 
   }

   let ht = 0; let mt = 0;

   for (i = 0; i < allTotal.length; i++)
   {
      ht += horas[i]
      mt += minutos[i]
   }

   if (mt >= 60)
   {
      do
      {
         mt -= 60
         ht++
      } while (mt >= 60)
   }

   document.querySelector('.totalTime').innerHTML = transformToHours(ht, mt)
}

function transformToNumbers(texto)
{
   const novaHora = []
   if (texto.length < 6)
   {
      novaHora[0] = Number(texto.slice(0,2))
      novaHora[1] = Number(texto.slice(3,5))
      return novaHora
   }
   else
   {
      novaHora[0] = Number(texto.slice(0,3))
      novaHora[1] = Number(texto.slice(4,6))
      return novaHora
   }
}

function transformToHours(hora, minuto)
{
   if (hora < 10)
   {
      hora = `0${hora}`
   }
   if (minuto < 10)
   {
      minuto = `0${minuto}`
   } 
   
   return `${hora}:${minuto}`
}

function diminuirHoras(tempo1, tempo2, verification)
{
   if((tempo2[1] - tempo1[1]) < 0)
   {
      tempo2[0]--
      tempo2[1]+= 60
   }

   const minuto = tempo2[1] - tempo1[1]
   
   if ((tempo2[0] - tempo1[0] < 0))
   {
      if (verification == '')
      {
         alert('Verifique as horas...')
         return
      }
      else
      {
         let h = diminuirHoras(tempo2, tempo1, '')
         console.log(h)
         return `Você está devendo <span class="time-message2">${transformToHours(h[0], h[1])}</span>`
      }
   }

   if (verification !== '')
   {
      const hora = tempo2[0] - tempo1[0]
      return (`Você tem <span class="time-message1" >${transformToHours(hora, minuto)}</span> de crédito!`)
   }

   const hora = tempo2[0] - tempo1[0]
   const novaHora = [hora, minuto]
   return novaHora

}

function somarHoras(tempo1, tempo2)
{
   let horas = tempo1[0] + tempo2[0]
   let minutos = tempo1[1] + tempo2[1]
   do{
      if(minutos >= 60)
      {
         minutos-= 60
         horas++
      }
   } while(minutos >= 60)

   let tempoTotal = transformToHours(horas, minutos)
   return tempoTotal
}

function verifyEmptyData()
{
   const tbody = document.querySelector('#tbody')
   const allTr = tbody.children
   let verifyOut = false

   for (i = 0; i < allTr.length; i++)
   {
      const dia = allTr[i].children[0].children[0].value
      const entrada = allTr[i].children[1].children[0].value
      const pausa = allTr[i].children[2].children[0].value
      const volta = allTr[i].children[3].children[0].value
      const saida = allTr[i].children[4].children[0].value

      if(dia.length <=0 || entrada.length <=0  || pausa.length <=0 || volta.length <=0 || saida.length <=0)
      {
         verifyOut = true
         alert('Existe(m) célula(s) vazia(s)!')
         i = allTr.length
      }
   }

   return verifyOut
}

function mostrarMensagem()
{
   let message = document.querySelector('.message')
   const allTotal = document.querySelectorAll('.total')

   let horasPuras = [8*(allTotal.length), 0]
   let horasFeitas = transformToNumbers(document.querySelector('.totalTime').innerHTML)

   const resultado = diminuirHoras(horasPuras, horasFeitas, 'teste')
   message.innerHTML = resultado
}