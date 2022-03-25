function askname() {
    var name = prompt("What is your name?")
    return name
}

alert(askname())

function convert() {
    var conv = prompt("What temperature unit would you like to convert from `c` or `f`?")
    return conv
}

alert(convert())


function ctof(a) {
    var t =((a - 32) * 5) / 9
    return t
}

function ftoc(b) {
    var f = b * 9 / 5 + 32
    return f
}

function enter() {
    var entert = prompt("Enter a degree:")
        if(convert == "c") {
            return t
        }

        else if(convert == "f") {
            return f
        }

    return entert

}

alert(enter())



