console.log("lets load an svg, then update it!");
let wordHome = document.getElementById("wordHome");
wordHome.addEventListener("load", () =>{
    console.log("The image has loaded");
    let wordHomeContents = wordHome.contentDocument;
    console.log(wordHomeContents);
    console.log(wordHomeContents.getElementById("theSpeak"));
    let actualWord = wordHomeContents.getElementById("theSpeak");
    actualWord.textContent = "Borkulations";
    console.log(actualWord);
})