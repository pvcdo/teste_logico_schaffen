function criarFormCampo(){
  const controles = document.getElementById('controles')

  const formCampo = document.createElement('form')
  formCampo.id = 'form-campo'
  formCampo.className = "form-control"

  controles.appendChild(formCampo)

  const iptHortaX = document.createElement('input')
  iptHortaX.type = "number"
  iptHortaX.id = "hortaX"
  iptHortaX.placeholder = "Digite o comprimento da horta na direção X"

  const iptHortaY = document.createElement('input')
  iptHortaY.type = "number"
  iptHortaY.id = "hortaY"
  iptHortaY.placeholder = "Digite o comprimento da horta na direção Y"

  const botaoDimHorta = document.createElement('button')
  botaoDimHorta.id = "btn-envia-dim"
  botaoDimHorta.innerHTML = "Criar"
  botaoDimHorta.addEventListener('click',criarCampo)

  formCampo.appendChild(iptHortaX)
  formCampo.appendChild(iptHortaY)
  controles.appendChild(botaoDimHorta)

}

function criarCampo(){
  const iptHortaX = document.getElementById('hortaX')
  const iptHortaY = document.getElementById('hortaY')
  
  if(iptHortaX.value === "" || iptHortaY.value === ""){
    console.log('campos vazios')
    return
  }

  const nX = iptHortaX.value
  const nY = iptHortaY.value

  const formCampo = document.getElementById('form-campo')
  const formPos = document.getElementById('form-pos')
  const controles = document.getElementById('controles')
  const botaoDimHorta = document.getElementById('btn-envia-dim')

  formCampo.remove()
  botaoDimHorta.remove()

  

  /*<input type="number" name="pos_x" id="ipt_x" placeholder="Digite a posição inicial em x">
  <input type="number" name="pos_y" id="ipt_y" placeholder="Digite a posição inicial em y">
  <input type="text" name="teta" id="ipt_or" placeholder="Digite a orientação (n,l,s,o)">
  <button id="btn-pos" onclick="posicionar()">Posicionar</button>*/
}

function criarFormPos(){

}

function posicionar(){
  const campo = document.getElementById('campo')
  
  const x = document.getElementById('ipt_x').value
  const y = document.getElementById('ipt_y').value
  const or = document.getElementById('ipt_or').value

  document.getElementById('ipt_x').value = ""
  document.getElementById('ipt_y').value = ""
  document.getElementById('ipt_or').value = ""

  console.log(x,y,or)

  campo.innerHTML = "<div id='irrigador'></div>"

  const irrigador = document.getElementById('irrigador')

  irrigador.style.marginTop = `${12 + 36*(5-y)}px`
  irrigador.style.marginLeft = `${20 + 40*x}px`

  let teta
  if(or === "n"){teta = 0}
  if(or === "l"){teta = 105}
  if(or === "s"){teta = 70}
  if(or === "o"){teta = 35}

  irrigador.style.backgroundPositionX = `${teta}px`

  console.log('irrigador colocado')
}

function caminho(/*x, y, or*/) {

  /*
  let movimentos = []

  var teta

  const orientacoes = ["l", 'n', 'o', 's']

  switch (or) {
    case "l":
      teta = 0;
      break;
    case "n":
      teta = 90;
      break;
    case "o":
      teta = 180;
      break;
    case "s":
      teta = 270;
      break;
    default:
      console.error("Errado");
      break;
  }

  const posicoes = [
    [x, y, teta],
    [4, 1],
    [4, 5],
    [3,4]
  ]

  for (let i = 1; i < posicoes.length; i++) {
    let pos_x = posicoes[i - 1][0]
    let pos_y = posicoes[i - 1][1]
    teta = posicoes[i - 1][2]
    let cant_x = posicoes[i][0]
    let cant_y = posicoes[i][1]

    let delta_x = cant_x - pos_x
    let delta_y = cant_y - pos_y

    var teta_x = teta
    if (delta_x > 0) { teta_x = 0 }
    if (delta_x < 0) { teta_x = 180 }
    if (teta_x !== teta) {
      let giro = girar(teta, teta_x)
      movimentos.push(...giro)
    }

    for (var passo = 0; passo < Math.abs(delta_x); passo++) {
      movimentos.push("M")
    }

    var teta_y = teta_x
    if (delta_y > 0) { teta_y = 90 }
    if (delta_y < 0) { teta_y = 270 }
    if (teta_y !== teta_x) {
      let giro = girar(teta_x, teta_y)
      movimentos.push(...giro)
    }

    for (var passo = 0; passo < Math.abs(delta_y); passo++) {
      movimentos.push("M")
    }

    movimentos.push("I")

    posicoes[i].push(teta_y)

  };

  console.log("Caminho: " + movimentos.join(","))
  console.log("Orientação final: " + orientacoes[posicoes[posicoes.length - 1][2] / 90])*/
}

function girar(t0, t1) {
  if (t1 === 270) {
    if (t0 === 0) {
      return ["D"]
    }
    if (t0 === 180) {
      return ["E"]
    }
  }

  if (Math.abs(t1 - t0) === 180) {
    return ["D", "D"]
  }
  if (t1 - t0 < 0) {
    return ["D"]
  }
  if (t1 - t0 > 0) {
    return ["E"]
  }
}
