// penggunaan jendela sroll 
window.addEventlistener('scroll',()=>{
	document.querySelector('nav') .classlist.toggle('window-scroll',window.scrollY >0)
})
