// KURULUM
var c = document.createElement("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
document.body.appendChild(c);
var ctx = c.getContext("2d");



// TANIMLAMA
var bgcolor ="#ff4301";
var forecolor = "#4a3f35";
var linecolor = "#2f2519";
var linewidth = 5;


ctx.fillStyle = bgcolor;
ctx.fillRect(0,0,c.width,c.height);
