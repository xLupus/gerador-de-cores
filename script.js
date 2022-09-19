const BTN = document.getElementById('gerar-cor')
BTN.addEventListener('click', gerarCores)

function gerarCores(){

    let rgb = document.getElementById('cor-rgb')
    let hexa = document.getElementById('cor-hexa')
    
    //RGB
    let red =  Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let corRGB = `RGB(${red},${green},${blue})`

    rgb.textContent = corRGB
    rgb.style.fontWeight = 'bold'
    rgb.style.color = corRGB

    //HEXA
    let redHexa = converterRGBparaHEXA(red)
    let greenHexa = converterRGBparaHEXA(green)
    let blueHexa = converterRGBparaHEXA(blue)

    let corHEXA = `#${redHexa}${greenHexa}${blueHexa}`

    hexa.textContent = corHEXA
    hexa.style.fontWeight = 'bold'
    hexa.style.color = corHEXA
 
    document.body.style.background = corRGB
}

function converterRGBparaHEXA(num){

    const HEXA_NUM = '0123456789ABCDEF'

    let numHexa = ''

    if(num < 16)
        numHexa = HEXA_NUM.charAt(num) + '0'

    while(num >= 16 ){
        if(num % 16 < 16){
            let hexa = 0
            hexa = num % 16
            hexa = Math.floor(hexa).toFixed(0)
            numHexa += HEXA_NUM.charAt(hexa)
        }
        
        num = num / 16
        num = Math.floor(num)   

        if(num < 16)
            numHexa += HEXA_NUM.charAt(num)
    }

    numHexa = numHexa.split('').reverse() 
    numHexa = numHexa.toString().replace(/,/g, '')

    return numHexa
}

