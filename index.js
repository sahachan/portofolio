const header = document.querySelector('header');

window.addEventListener("scroll", function(){
header.classList.toggle("sticky",this.window.scrollY>0);
});


const txtElement = ['Web Developer','Data Analytics','Human Reletion'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function mengetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.movee').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(mengetik, 500);

})();