/*
gsap.from("#nav a",{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#nav a",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top -100%"
    }

})
gsap.from("#nav ",{
    
    backgroundColor:"lightgreen",
    color:"white",
    duration:2
    

})
gsap.from("#head h1 ",{
    x:-100,
    duration:2,
    delay:1
})
gsap.from("#head h2 ",{
    x:-100,
    duration:2,
    delay:2
})
*/

gsap.from(".header .search-form label",{
    x:-20,
    duration:6,
    delay:2,
    repeat:-1,
    color:"green",
    yoyo:true
})
gsap.from(".shopping-cart img",{
    y:-10,
    x:5,
    duration:6,
    delay:2,
    repeat:-1,
    yoyo:true
})
gsap.from(".login-form #button",{
   scale:1.1,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from(".header .logo i",{
    rotate:50,
     duration:2,
     delay:1,
     repeat:-1,
     yoyo:true
 })
 gsap.from(".header .logo i",{
    rotateX:20,
    rotateX:-20,
     duration:20,
     delay:5,
     repeat:-1,
     yoyo:true
 })
    
let searchForm = document.querySelector('.search-form');
document.querySelector('#search_btn').onclick=()=>{
    searchForm.classList.toggle('active');

}
let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#cart_btn').onclick=()=>{
    shoppingcart.classList.toggle('active');

}
let userform = document.querySelector('.login-form');
document.querySelector('#login_btn').onclick=()=>{
    userform.classList.toggle('active');

}


//code copy from swiper
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
   autoplay:{
    delay:4000,
    disableOnInteraction: false,
   },

  breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
   
      },
      1020: {
        slidesPerView: 3,
     
      },
    },
  });
  //code copied complete


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
   autoplay:{
    delay:4000,
    disableOnInteraction: false,
   },

  breakpoints: {
      0: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
   
      },
      1020: {
        slidesPerView: 3,
     
      },
    },
  });

  
  //javascript for chatbot

// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length

	if(textarea.rows < 6 || line < 6) {
		textarea.rows = line
	}

	if(textarea.rows > 1) {
		chatboxForm.style.alignItems = 'flex-end'
	} else {
		chatboxForm.style.alignItems = 'center'
	}
})



// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
		dropdownMenu.classList.remove('show')
	}
})

// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid(textarea.value)) {
		writeMessage()
		setTimeout(autoReply, 1000)
	}
})



function addZero(num) {
	return num < 10 ? '0'+num : num
}

function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	chatboxNoMessage.style.display = 'none'
	scrollBottom()
}

function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Thank you for your awesome support!
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}
  //chatbot
  gsap.from(".chatbox-wrapper .chatbox-toggle",{
    x:-20,
    duration:6,
    delay:2,
    repeat:-1,
    backgroundColor:"green",
    color:white,
    yoyo:true
})