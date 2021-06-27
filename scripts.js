//
//
//
//
//


data = new Date();
hour = data.getHours();
var mf500 = 0;

/////ADAPTIVE
//ADAPTIVE


function trrue(params) {
  trruev=1
}
////1 screen

  var fscreen = $('.screen,.first')[0]
  var mans=0
  var lie=0
  var trruev=0
  function fscreengo(el) {
    if (+$('.screen,.first input')[1].value<=0) {
      alert('столько участников не бывает!')
    }else{
      mans= +$('.screen,.first input')[1].value
      goSecScreen()
      setTimeout(() => {
        $('.screen,.first input')[1].value=undefined
      }, 200);
    }
  }
  function fscreeninput(el) {
    if (+el.value<0) {
      el.value=0
    }
  }

  function go1screen() {
  for (let index = 1; index < 5; index++) {
    $('.screen,.second')[index].style.display='none'
  $('.screen,.second')[index].style.opacity='0'
    
  }
    
  }

//////////1 screen

//2screen
function goSecScreen() {
  console.log(fscreen);
  let sscreen = $('.screen,.second')[1]

  sscreen.style.display='flex'
  setTimeout(() => {
  sscreen.style.opacity='1'
    
  }, 10);  

  setTimeout(() => {
    go3screen()
  }, getRandomInRange(1500, 2200));
}
/////////2screen

//3screen
function go3screen(){
  let sscreen = $('.screen')[2]

  sscreen.style.display='flex'
  setTimeout(() => {
  sscreen.style.opacity='1'
    
  }, 10);

  let tit = $('.third>.tit')[0]

  tit.innerText=`Выбрать победителя из ${mans} участников?`
}
/////////3screen

//4screen
function go4screen(el){
  let sscreen = $('.screen')[3]

  sscreen.style.display='flex'
  setTimeout(() => {
  sscreen.style.opacity='1'
    
  }, 10);

  setTimeout(() => {
    go5screen()
  }, getRandomInRange(3000, 4000));
}
///////4screen


//5screen

function vin(mans) {
  trueP = getRandomInRange(0, 1)

  if (trruev!==1 ) {
    return 1  
  }else{
    return getRandomInRange(0, mans)
  }
}
function go5screen(){
  let sscreen = $('.screen')[4]

  sscreen.style.display='flex'
  setTimeout(() => {
  sscreen.style.opacity='1'

  }, 10);

  let tit = $('.fif>.tit')[0]

  tit.innerText=`Выиграл человек номер ${vin(mans)}! Поздравляем!`
}
///////5screen



/////LIBS
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : void 0
}function setCookie(name, value, options = {}) {
  (options = {
    path: "/",
    ...options
  }).expires instanceof Date && (options.expires = options.expires.toUTCString());
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    !0 !== optionValue && (updatedCookie += "=" + optionValue)
  }
  document.cookie = updatedCookie
}function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1
  })
}
//LIBS