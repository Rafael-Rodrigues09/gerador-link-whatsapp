
let botao = document.getElementById('enviar')

botao.addEventListener('click', function(enviar){
let numsujo = document.getElementById('num').value
let msg = document.getElementById('msg').value
let numlimpo = numsujo.replace(/\D/g, '')
  let msgformatada = encodeURIComponent(msg)
  let url = `https://wa.me/${numlimpo}?text=${msgformatada}`
  if(numlimpo.length < 10){
    alert('Por favor, digite um número válido com DDD (ex: 88988186734)')
    return
  }
  window.open(url, '_blank')
  
} )