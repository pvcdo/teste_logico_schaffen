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

  console.log('criando')

  const nX = parseInt(iptHortaX.value)
  const nY = parseInt(iptHortaY.value)

  console.log(nX,nY)

  const campo = document.getElementById('campo')

  for(let y = 0; y < nY+1; y++){
    console.log('criando a linha' + y)
    const linha = document.createElement('div')
    const id_linha = document.createElement('div')
    if(y < nY){
      for(let x = 0; x < nX+1; x++){
        const celula = document.createElement('div')
        celula.className = "celula"
        if(x === nX){
          celula.classList.add('cel-f')
        }
        if(x === 0){
          celula.classList.remove('celula')
          celula.classList.add('id-linha')
          if(y < nY){
            celula.innerHTML = nY - y - 1
          }
        }
        linha.appendChild(celula)
      }
      linha.className = "linha"
      if(y === nY-1){
        linha.classList.add('lin-f')
      }
    }else{
      linha.id = "indice-coluna"
      for(let x = 0; x <= nX; x++){
        const id_coluna = document.createElement('div')
        if(x === 0){
          id_coluna.className = "id-coluna-pr"
        }else{
          id_coluna.className = "id-coluna"
          id_coluna.innerHTML = x-1
        }
        linha.appendChild(id_coluna)
      }
    }
    campo.appendChild(linha)
  }

  const formCampo = document.getElementById('form-campo')
  const botaoDimHorta = document.getElementById('btn-envia-dim')

  formCampo.remove()
  botaoDimHorta.remove()

  criarFormPtsIrr(nX,nY)
}

function criarFormPtsIrr(tamanhoCampoX,tamanhoCampoY){
  const controles = document.getElementById('controles')

  const formPtsIrr = document.createElement('form')
  formPtsIrr.className = 'form-control'
  formPtsIrr.id = 'form-pts-irr'

  const ipt_x = document.createElement('input')
  ipt_x.type = 'number'
  ipt_x.name = 'pos_x'
  ipt_x.id = 'ipt_x'
  ipt_x.placeholder = 'Digite a posição em x'
  
  const ipt_y = document.createElement('input')
  ipt_y.type = 'number'
  ipt_y.name = 'pos_y'
  ipt_y.id = 'ipt_y'
  ipt_y.placeholder = 'Digite a posição em y'
  
  const botao_add = document.createElement('button')
  botao_add.id = 'btn-add-pt'
  botao_add.innerHTML = "Posicionar ponto"
  botao_add.addEventListener('click',function(){pontoIrr(tamanhoCampoX,tamanhoCampoY)} )

  const botao_pos = document.createElement('button')
  botao_pos.id = 'btn-form-pos'
  botao_pos.innerHTML = "Posicionar irrigador"
  botao_pos.addEventListener('click',function(){criarFormPos(tamanhoCampoX,tamanhoCampoY)})

  formPtsIrr.appendChild(ipt_x)
  formPtsIrr.appendChild(ipt_y)

  controles.appendChild(formPtsIrr)
  controles.appendChild(botao_add)
  controles.appendChild(botao_pos)
}

function pontoIrr(tamanhoCampoX,tamanhoCampoY){
  const campo = document.getElementById('campo')
  
  const x = parseInt(document.getElementById('ipt_x').value)
  const y = parseInt(document.getElementById('ipt_y').value)

  document.getElementById('ipt_x').value = ""
  document.getElementById('ipt_y').value = ""

  console.log(x,y)

  const pt_irr = document.createElement('img')
  pt_irr.src = "./src/img/pt_irr.png"
  pt_irr.className = "pt_irr"
  pt_irr.style.top = `${60*(tamanhoCampoY-(y+1))}px`
  pt_irr.style.left = `${60*x+22}px`

  campo.appendChild(pt_irr)

  console.log('ponto de irrigação posicionado')
}

function criarFormPos(tamanhoCampoX,tamanhoCampoY){
  document.getElementById('form-pts-irr').remove()
  document.getElementById('btn-add-pt').remove()
  document.getElementById('btn-form-pos').remove()

  const controles = document.getElementById('controles')

  const formPos = document.createElement('form')
  formPos.className = 'form-control'
  formPos.id = 'form-pos'

  const ipt_x = document.createElement('input')
  ipt_x.type = 'number'
  ipt_x.name = 'pos_x'
  ipt_x.id = 'ipt_x'
  ipt_x.placeholder = 'Digite a posição inicial em x'
  
  const ipt_y = document.createElement('input')
  ipt_y.type = 'number'
  ipt_y.name = 'pos_y'
  ipt_y.id = 'ipt_y'
  ipt_y.placeholder = 'Digite a posição inicial em y'

  const ipt_teta = document.createElement('input')
  ipt_teta.type = 'text'
  ipt_teta.name = 'teta'
  ipt_teta.id = 'ipt_or'
  ipt_teta.placeholder = 'Digite a orientação (n,l,s,o)'

  const botao_pos = document.createElement('button')
  botao_pos.id = 'btn-pos'
  botao_pos.innerHTML = "Posicionar"
  botao_pos.addEventListener('click',function(){posicionar(tamanhoCampoX,tamanhoCampoY)} )

  formPos.appendChild(ipt_x)
  formPos.appendChild(ipt_y)
  formPos.appendChild(ipt_teta)

  controles.appendChild(formPos)
  controles.appendChild(botao_pos)
}

function posicionar(tamanhoCampoX,tamanhoCampoY){
  const campo = document.getElementById('campo')
  
  const x = parseInt(document.getElementById('ipt_x').value)
  const y = parseInt(document.getElementById('ipt_y').value)
  const or = document.getElementById('ipt_or').value

  document.getElementById('ipt_x').value = ""
  document.getElementById('ipt_y').value = ""
  document.getElementById('ipt_or').value = ""

  console.log(x,y,or)

  const irrigador = document.createElement('img')
  irrigador.src = "./src/img/irr_n_t.png"
  irrigador.id = 'irrigador'
  console.log(60*(tamanhoCampoY-(y+1)))
  console.log('tamanhocampoy: ' + tamanhoCampoY)
  irrigador.style.top = `${60*(tamanhoCampoY-(y+1))}px`
  irrigador.style.left = `${60*x+22}px`

  let teta

  if(or === "n"){teta = 0}
  if(or === "l"){teta = 90}
  if(or === "s"){teta = 180}
  if(or === "o"){teta = 270}

  irrigador.style.transform = `rotate(${teta}deg)`

  campo.appendChild(irrigador)

  console.log('irrigador posicionado')
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
