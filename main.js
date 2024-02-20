var qoute = [
    {'qoute':"You must be the change you wish to see in the world.",
'auther':"Mahatma Gandhi"
},{
    'qoute':"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    'auther':" -Martin Luther King Jr."
},
{
    'qoute':"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    'auther':"-Helen Keller"
}
];

function getQoute() {
    var num = Math.floor(Math.random()*qoute.length);
    console.log(num)
    document.getElementById("qoute").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].auther;
}
