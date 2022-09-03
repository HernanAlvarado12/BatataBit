/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let index = [];
    for(let k = 0; k < words.length; k++){
        let element = words[k].toLowerCase();
        let positions = [];
        for(let i = 0; i < element.length; i++){
            for(let j = 0; j < keyboard.length; j++){
                let indexOf = keyboard[j].indexOf(element[i]);
                if(indexOf != -1){
                    positions.push(j);
                    break;
                }
            }
        }
        console.log(positions);
        let success = true;
        for(let i = 0; i < (positions.length -1) && success; i++){
            console.log(i)
            if(positions[i] != positions[i +1])
                success = false;
        }
        if(success)
            index.push(words[k]);
    }
    return index;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))