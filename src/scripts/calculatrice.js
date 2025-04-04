function addToScreen(value) {
    document.getElementById('calc-screen').value += value;
}
function clearScreen() {
    document.getElementById('calc-screen').value = '';
}
function calculate() {
        const screenContent = document.getElementById('calc-screen').value
        let indexOperateur =  screenContent.split("").indexOf("+")
        if (indexOperateur == -1){
            indexOperateur = screenContent.split("").indexOf("-")
        }
        if (indexOperateur == -1){
            return clearScreen()
        }

        const operateur = screenContent[indexOperateur]
        const termes = screenContent.split(operateur).map((element)=>parseInt(element))
        const result = operateur == "+" ? termes[0] + termes[1] : termes[0] - termes[1]
        document.getElementById('calc-screen').value = result;
}