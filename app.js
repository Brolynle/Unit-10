function askname() {
    var name = prompt("What is your name?")
    return name
} //10

alert(askname())

function convert() {
    var conv = prompt("What temperature unit would you like to convert from `c` or `f`?")
    return conv
} //20

alert(convert())


function ctof(a) {
    var t =((a - 32) * 5) / 9
    return t
} // 20

function ftoc(b) {
    var f = b * 9 / 5 + 32
    return f
} // 20

function enter() {
    var entert = prompt("Enter a degree:")
        if(convert == "c") {
            ctof(entert)
        }

        else if (convert == "f") {
            ftoc(entert)
        }
}

alert(enter())



