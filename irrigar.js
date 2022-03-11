function irrigar(x, y, or) {

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
  console.log("Orientação final: " + orientacoes[posicoes[posicoes.length - 1][2] / 90])
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

irrigar(0, 3, "l")
