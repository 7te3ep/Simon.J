async function bruteforce(){
    const questionnaire = await fetch("assets/questionnaire.json").then(response => response.json())
    const questions = questionnaire.questions
    let reponses = []
        for (let j = 0; j <4; j ++){
            // reponse 1
            for (let k = 0; k <4; k ++){
                // reponse 2
                for (let l = 0; l <4; l ++){
                    // reponse 3
                    reponses.push(`R0_A${questions[0].reponses[j]}_R1_A${questions[1].reponses[k]}_R2_A${questions[2].reponses[l]}_`)
                }
            }

        }
    reponses.forEach(async (rep)=>{
        const repFetch = await fetch("./"+rep+".html",{ method: "GET" })
        const body = await repFetch.text()
        if(body.includes("foundPage")){
            window.location.replace("./"+rep+".html");
        }
    })
}