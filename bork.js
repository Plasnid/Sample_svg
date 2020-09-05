console.log("borkinating");
let wordyHome = document.getElementById("wordHome");
wordyHome.addEventListener("load", () =>{
    console.log("The image has loaded");
    let wordyHomeContents = wordyHome.contentDocument;
    console.log(wordyHomeContents);
    console.log(wordyHomeContents.getElementById("theWord"));
})