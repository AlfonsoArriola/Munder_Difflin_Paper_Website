 const nav = document.querySelector('#navbar');

 const domrec = nav.getBoundingClientRect();
const topOfNav = domrec.top;
 console.log(domrec);

 function fixNav(){
        if(window.scrollY >= topOfNav){
        	        	nav.style.position='fixed';
        	nav.style.top=0;
        } else{
        	
        	nav.style.position='static';
        	
        }
 };


 window.addEventListener('scroll', fixNav);













//   I know I can do this with a function, but im tired  ***************

// let mouseOnTop = document.querySelector().onmouseover = function() {mouseOver()};
// let mouseNotOnTOp = document.querySelector().onmouseout = function() {mouseOut()};

//      function  productDetails(){
//      	 if( mouseOnTop == true){

//               document.querySelector().style.visibility="visible";
// 	          document.querySelector().style.visibility="hidden";
//      	 }else{
//               document.querySelector().style.visibility="hidden";
// 	          document.querySelector().style.visibility="visible";
//      	 }

//      }













document.querySelector('#copyPaperSmall').onmouseover = function() {mouseOver()};
document.querySelector('#copyPaperSmall').onmouseout = function() {mouseOut()};

function mouseOver(){
	document.querySelector(".copyAd").style.visibility="visible";
	document.querySelector(".copyAd2").style.visibility="hidden";
}
function mouseOut(){
	document.querySelector(".copyAd").style.visibility="hidden";
	document.querySelector(".copyAd2").style.visibility="visible";
	
}
// -------------------------------------------------------

document.querySelector('#aNcSmall').onmouseover = function() {mouseOver()};
document.querySelector('#aNcSmall').onmouseout = function() {mouseOut()};

function mouseOver(){
	document.querySelector(".aNcAd").style.visibility="visible";
	document.querySelector(".aNcAd2").style.visibility="hidden";
}
function mouseOut(){
	document.querySelector(".aNcAd").style.visibility="hidden";
	document.querySelector(".aNcAd2").style.visibility="visible";	
}

// 0*************************************


document.querySelector('#nbSmall').onmouseover = function() {mouseOver()};
document.querySelector('#nbSmall').onmouseout = function() {mouseOut()};

function mouseOver(){
	document.querySelector(".nbAd").style.visibility="visible";
	document.querySelector(".nbAd2").style.visibility="hidden";
}
function mouseOut(){
	document.querySelector(".nbAd").style.visibility="hidden";
	document.querySelector(".nbAd2").style.visibility="visible";
	
}






