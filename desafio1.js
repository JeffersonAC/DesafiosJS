function isValidWalk(walk) {
    var vertical = 0
    var horizontal = 0

    if(walk.length !== 10) return false

    walk.forEach((letter,_) => {
         switch(letter){
           case 'n':
             vertical++
             break
           case 's':
             vertical--
             break
           case 'w':
             horizontal++
             break
           case 'e':
             horizontal--
             break
            default:
            console.log('nada')
         }
        })
    return vertical === 0 && horizontal === 0
}

console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))