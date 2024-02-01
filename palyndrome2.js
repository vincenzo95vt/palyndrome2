function show(text){
    let message = document.getElementById("content");
    message.innerHTML += `${text}`

}

function noSpace(text){
   let textWnoSpace = text.replaceAll(" ", "")
    return textWnoSpace
}

function noAccent(text){
    const accent = "áéíóú";
    const vowels = "aeiou";

    for (let i= 0; i < accent.length; i++) {
        if (text.includes(accent.charAt(i))) {
            text = text.replace(accent.charAt(i), vowels.charAt(i))
        }
        
    }
    return text;
}
function textReversed(text){
    let newText = text.split("").reverse().join()
    return newText
}

function cleaningText(text){
    let textNoSpace = noSpace(text)
    let noAccents = noAccent(textNoSpace)
    let lowerText = noAccents.toLowerCase()
    return lowerText
}
function formattedReverseText(text){
    const noSpaces = noSpace(text);
    const noAccents = noAccent(noSpaces);
    const textLower = noAccents.toLowerCase()
   
    return textLower

}

let myText = "Dábale arroz a la zorra el abad"

function isPalyndrome2(fn1, fn2){
    if (fn1 === fn2){
        return "true"
    }else{
        return "false"
    }
}



show(cleaningText(myText));
show("<br>")
show(formattedReverseText(myText))
show("<br>")
show(isPalyndrome2(cleaningText(myText), formattedReverseText(myText)))
