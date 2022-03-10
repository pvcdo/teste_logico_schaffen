function irrigar(x,y,or){
    const arr_irr = [
        [4,1],
        [4,5],
        [3,4]
    ]

    var teta = 0

    switch(or){
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

    arr_irr.forEach((canteiro, i) => {
        const delta_x = canteiro[0] - x
        const delta_y = canteiro[1] - y
        if(delta_x > 0 && or == 1){
            
        }
    });

    console.log(teta)
}

function movimentar(){
    
}

irrigar(3,2,"s")