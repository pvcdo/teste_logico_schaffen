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

  const ipt_id = document.createElement('input')
  ipt_id.type = 'hidden'
  ipt_id.name = 'id'
  ipt_id.id = 'ipt_id'
  ipt_id.value = 1

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

  formPtsIrr.appendChild(ipt_id)
  formPtsIrr.appendChild(ipt_x)
  formPtsIrr.appendChild(ipt_y)

  controles.appendChild(formPtsIrr)
  controles.appendChild(botao_add)
  controles.appendChild(botao_pos)
}

function pontoIrr(tamanhoCampoX,tamanhoCampoY){
  const campo = document.getElementById('campo')
  
  const id = parseInt(document.getElementById('ipt_id').value)
  const x = parseInt(document.getElementById('ipt_x').value)
  const y = parseInt(document.getElementById('ipt_y').value)

  document.getElementById('ipt_x').value = ""
  document.getElementById('ipt_y').value = ""

  console.log(x,y)

  const pt_irr = document.createElement('img')
  pt_irr.id = "pt-irr-" + id
  pt_irr.src = "./src/img/pt_irr.png"
  pt_irr.className = "pt_irr"
  pt_irr.style.top = `${60*(tamanhoCampoY-(y+1))}px`
  pt_irr.style.left = `${60*x+22}px`

  campo.appendChild(pt_irr)

  criarTabelaPtsIrr(id,x,y)

  console.log('ponto de irrigação posicionado')
}

function criarTabelaPtsIrr(id,x,y){
  const area_tabela = document.getElementById('tabelas')

  if(id === 1){
    var titulo_h3 = document.createElement('h3')
    titulo_h3.innerHTML = "Pontos de irrigação"

    var tabela = document.createElement('table')
    const linha_cab = document.createElement('tr')
    const cab_id = document.createElement('th')
    const cab_x = document.createElement('th')
    const cab_y = document.createElement('th')

    tabela.id = 'tabela-pts-irr'

    cab_id.innerHTML = "id"
    cab_x.innerHTML = "x"
    cab_y.innerHTML = "y"

    linha_cab.appendChild(cab_id)
    linha_cab.appendChild(cab_x)
    linha_cab.appendChild(cab_y)

    tabela.appendChild(linha_cab)

    area_tabela.appendChild(titulo_h3)
    area_tabela.appendChild(tabela)
  }else{
    var tabela = document.getElementById('tabela-pts-irr')
  }

  const tr = document.createElement('tr')
  const el_id = document.createElement('td')
  const el_x = document.createElement('td')
  const el_y = document.createElement('td')

  el_id.innerHTML = id
  el_x.innerHTML =  x
  el_y.innerHTML =  y

  tr.appendChild(el_id)
  tr.appendChild(el_x)
  tr.appendChild(el_y)

  tabela.appendChild(tr)

  const id_novo_valor = ++id
  document.getElementById('ipt_id').value = id_novo_valor
}

function criarFormPos(tamanhoCampoX,tamanhoCampoY){
  document.getElementById('form-pts-irr').remove()
  document.getElementById('btn-add-pt').remove()
  document.getElementById('btn-form-pos').remove()

  const controles = document.getElementById('controles')

  const formPos = document.createElement('form')
  formPos.className = 'form-control'
  formPos.id = 'form-pos'

  const ipt_ini = document.createElement('input')
  ipt_ini.type = 'hidden'
  ipt_ini.name = 'pos_ini'
  ipt_ini.id = 'ipt_ini'
  ipt_ini.value = true

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

  formPos.appendChild(ipt_ini)
  formPos.appendChild(ipt_x)
  formPos.appendChild(ipt_y)
  formPos.appendChild(ipt_teta)

  controles.appendChild(formPos)
  controles.appendChild(botao_pos)
}

function posicionar(tamanhoCampoX,tamanhoCampoY){
  const campo = document.getElementById('campo')
  const controles = document.getElementById('controles')
  
  const ini = document.getElementById('ipt_ini').value
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

  manipularTabelaPosIrr(ini,or,x,y)

  const botao_iniciar = document.createElement('button')
  botao_iniciar.id = 'btn-ini'
  botao_iniciar.innerHTML = "Iniciar irrigação"
  botao_iniciar.addEventListener('click',function(){irrigar(tamanhoCampoX,tamanhoCampoY)} )
  
  controles.appendChild(botao_iniciar)

  console.log('irrigador posicionado')
}

function manipularTabelaPosIrr(ini,or,x,y){
  const area_tabela = document.getElementById('tabelas')

  if(ini === "true"){
    var titulo_h3 = document.createElement('h3')
    titulo_h3.innerHTML = "Posição do irrigador"

    var tabela = document.createElement('table')
    const linha_cab = document.createElement('tr')
    const cab_or = document.createElement('th')
    const cab_x = document.createElement('th')
    const cab_y = document.createElement('th')

    tabela.id = 'tabela-pos-irr'

    cab_or.innerHTML = "Orientação"
    cab_x.innerHTML = "x"
    cab_y.innerHTML = "y"

    linha_cab.appendChild(cab_x)
    linha_cab.appendChild(cab_y)
    linha_cab.appendChild(cab_or)

    const tr = document.createElement('tr')
    const el_x = document.createElement('td')
    const el_y = document.createElement('td')
    const el_or = document.createElement('td')

    el_x.innerHTML = x
    el_y.innerHTML = y
    el_or.innerHTML = or

    tr.appendChild(el_x)
    tr.appendChild(el_y)
    tr.appendChild(el_or)

    tabela.appendChild(linha_cab)
    tabela.appendChild(tr)

    area_tabela.appendChild(titulo_h3)
    area_tabela.appendChild(tabela)

    document.getElementById('ipt_ini').value = false
  }else{
    var tabela = document.getElementById('tabela-pos-irr')
    document.getElementById('irrigador').remove()

    const el_x = tabela.getElementsByTagName('td')[0]
    const el_y = tabela.getElementsByTagName('td')[1]
    const el_or = tabela.getElementsByTagName('td')[2]

    el_or.innerHTML = or
    el_x.innerHTML =  x
    el_y.innerHTML =  y

  }
}

function irrigar(){
  
  const pts_irr = []
  const pos_irri = []

  const tabela_pts_irr = document.getElementById('tabela-pts-irr')
  const pontos = tabela_pts_irr.getElementsByTagName('tr')
  const n_pts = pontos.length

  for(let n = 1; n < n_pts; n++){
    const ponto_x = parseInt(pontos[n].children[1].innerHTML)
    const ponto_y = parseInt(pontos[n].children[2].innerHTML)

    pts_irr.push([ponto_x,ponto_y])
  }

  const tabela_pos_irr = document.getElementById('tabela-pos-irr')
  const posicao = tabela_pos_irr.getElementsByTagName('tr')[1]
  
  const ponto_x = parseInt(posicao.children[0].innerHTML)
  const ponto_y = parseInt(posicao.children[1].innerHTML)
  const ponto_or = posicao.children[2].innerHTML

  pos_irri.push(ponto_x,ponto_y,ponto_or)

  caminho(pts_irr, pos_irri)
}

async function caminho(pts_irr, pos_irri/*x, y, or*/) {

  const x = pos_irri[0]
  const y = pos_irri[1]
  const or = pos_irri[2]

  let movimentos = []

  var teta

  const orientacoes = ['l','n','o','s']

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
    ...pts_irr
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
      await movimentar(giro)
      movimentos.push(...giro)
    }

    for (var passo = 0; passo < Math.abs(delta_x); passo++) {
      await movimentar("M",teta_x)
      movimentos.push("M")
    }

    var teta_y = teta_x
    if (delta_y > 0) { teta_y = 90 }
    if (delta_y < 0) { teta_y = 270 }
    if (teta_y !== teta_x) {
      let giro = girar(teta_x, teta_y)
      await movimentar(giro)
      movimentos.push(...giro)
    }

    for (var passo = 0; passo < Math.abs(delta_y); passo++) {
      await movimentar("M",teta_y)
      movimentos.push("M")
    }

    movimentos.push("I")

    apagarPtIrr(i)

    posicoes[i].push(teta_y)

  };

  while(document.getElementById('controles').hasChildNodes()){
    document.getElementById('controles').children[0].remove()
  }

  const area_operacao = document.getElementById('operacao')
  
  const caminho = document.createElement('p')
  caminho.innerHTML = "Caminho: " + movimentos.join(",")

  const orientacao = document.createElement('p')
  orientacao.innerHTML = "Orientação final: " + orientacoes[posicoes[posicoes.length - 1][2] / 90]

  area_operacao.appendChild(caminho)
  area_operacao.appendChild(orientacao)
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

function movimentar(movimento,teta){
  const irrigador = document.getElementById('irrigador')
  const topo = parseInt(irrigador.style.top)
  const esq = parseInt(irrigador.style.left)

  const transform = irrigador.style.transform

  const texto_1 = transform.split("rotate(",)[1]
  const giro = parseInt(texto_1.split("deg)")[0])

  console.log(movimento)
  
  return new Promise(resolve => {
    setTimeout(() => {
      if(movimento === "M"){
        if(teta === 0){irrigador.style.left = esq + 60 + "px"}
        if(teta === 90){irrigador.style.top = topo - 60 + "px"}
        if(teta === 180){irrigador.style.left = esq - 60 + "px"}
        if(teta === 270){irrigador.style.top = topo + 60 + "px"}
      }
      if(movimento.length === 1 && movimento[0] === "D"){
        console.log('girou direita')
        irrigador.style.transform = `rotate(${giro+90}deg)`
      }
      if(movimento.length === 1 && movimento[0] === "E"){
        console.log('girou esquerda')
        irrigador.style.transform = `rotate(${giro-90}deg)`
      }
      if(movimento.length === 2){
        movimentar("D")
        movimentar("D")
      }
      resolve()
    },1000)
  })
}

function apagarPtIrr(i){
  const pt_irr = document.getElementById(`pt-irr-${i}`)
  return new Promise(resolve => {
    setTimeout(() => {
      pt_irr.remove()
      resolve()
    },1000)
  })
}
