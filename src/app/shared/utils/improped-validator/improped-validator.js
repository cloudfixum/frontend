import React from 'react';

import {BlockedWords} from "./improped-words";

let words = new BlockedWords()

export function ValidatorContent(){
    let aux = document.getElementById("description").value;
    let textarea = aux;
    for(let i = 0; i < words.length;i++){
        let regex = new RegExp("(^|\\s)"+words[i]+"($|(?=\\s))","gi")
        textarea = textarea.replace(regex, function($0, $1){return $1 + "*****"});
    }
    aux.value = textarea;
}

