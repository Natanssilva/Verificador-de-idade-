 function verificar(){
   const data = new Date()
   const ano = data.getFullYear()
   const FormsAno = document.getElementById('txtano')

   const res = document.querySelector('div#resultado')

   if (FormsAno.value.length === 1 || Number(FormsAno.value) > ano ) {
        window.alert('[ERRO 203] VERIFIQUE A DATA DE NASCIMENTO')
   } else if(Number(FormsAno.value) <= 1900){
        window.alert ('Você já está morto')
   }else{
    const fsex = document.getElementsByName('radgenero')
    const idade = ano - Number(FormsAno.value)

    let genero = ''
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'
        document.body.style.background = '#b9846f'
        if (idade >= 0 && idade <14) {
            //kid
            img.setAttribute('src', 'kid-homem.jpg')
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem.M.jpg')
        }else if(idade<50){
            //adulto
            img.setAttribute('src', 'homem-adulto.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idoso.M.jpg')
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        document.body.style.background = '#8900F0'
        if (idade >= 0 && idade <14) {
            //kid
            img.setAttribute('src', 'kid-mulher.jpg')
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'jovem.F.jpg')
        }else if(idade<50){
            //adulto
            img.setAttribute('src', 'mulher-adulta.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'idosa.F.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
    res.appendChild(img)
    }
}