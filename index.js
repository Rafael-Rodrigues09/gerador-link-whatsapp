
let botao = document.getElementById('enviar')

botao.addEventListener('click', function(enviar){
let numsujo = document.getElementById('num').value
let msg = document.getElementById('msg').value
let numlimpo = numsujo.replace(/\D/g, '')
let msgformatada = encodeURIComponent(msg)
let url = `https://wa.me/${numlimpo}?text=${msgformatada}`
let resultado = document.getElementById('resultado')
let linkfinal = document.getElementById('linkfinal')
let botaocopiar = document.getElementById('copbotao')
  if(numlimpo.length < 10){
    alert('Por favor, digite um número válido com DDD (ex: 88988186734)')
    return
  }
  linkfinal.innerText = url
  linkfinal.href = url
  resultado.style.display = 'block'
  botaocopiar.style.display = 'block'
} )

function copiar(){
  let linkcop = document.getElementById('linkfinal').innerText
  let botaocopiar = document.getElementById('copbotao')
  navigator.clipboard.writeText(linkcop)
  botaocopiar.innerText = "✅ Copiado!"
  setTimeout(function(){
    botaocopiar.innerText = 'Copiar'
    }, 2000)
}