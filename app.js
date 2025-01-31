//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayAmigos = []
function adicionarAmigo(){
  if(!document.getElementById("amigo").value){
    alert("Por favor, insira um nome.")
    return
  }
  arrayAmigos.push(document.getElementById("amigo").value)
  document.getElementById("amigo").value = ""
  document.getElementById("listaAmigos").innerHTML = ''
  arrayAmigos.map(amigo => {
    document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`
  })
  return
}

function sortearAmigo(){
  if(!arrayAmigos.length){
    alert("Por favor, insira pelo menos um amigo.")
    return
  }
  let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)]
  document.getElementById("listaAmigos").innerHTML = ''
  document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado
  arrayAmigos = []
  return
}