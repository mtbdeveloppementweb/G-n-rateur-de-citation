let btn=document.getElementById("btn");
let output=document.getElementById("output");
let quotes=[ 
    '« Il ne sert à rien d’être le meilleur si on est le seul à le savoir. »  Richard Branson',
    
    '« Le plus grand obstacle à la découverte n’est pas l’ignorance, c’est l’illusion de la connaissance. » Michaël Aguilar',
    
    '« Un intellectuel assis va moins loin qu’un con qui marche. » Michel Audiard',
    
    '« Les témoignages réussissent là où les vendeurs échouent. » Jeffrey Gitomer',
    
    '« Le talent ne suffit pas. A part quelques rares exceptions, les meilleurs joueurs sont les plus gros travailleurs. » Magic Johnson',
    
];
btn.addEventListener('click',function(){
var randomQuote= quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML=randomQuote;
})