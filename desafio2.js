function nbYear(p0, percent, aug, p) {
    let p100 = percent / 100
    let year = 0
    let pf = p0
    
    while(pf<=p){
      pf = pf + pf*p100 + aug
      year++
    }
    
    return year
}


console.log(nbYear(1500000, 0.25, 1000, 2000000))


// ================================================
function stringArray(str){
    var out = str.split('')
    return out
}

function printError(codigo){
    const abcArray = stringArray('abcdefghijklm')
    let codArray = stringArray(codigo)
    const tot = codArray.length
    let certas = 0

    codArray.filter((letter) => {
        abcArray.filter((correct) => {
            if(letter == correct){
                return certas++  
            }
        })
    })
    return tot-certas + '/' +  tot
}

console.log(printError('aksdkandww'))
