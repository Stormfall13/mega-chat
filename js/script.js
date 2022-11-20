$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);
});

    function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('#accordeon .acc-body').not($(this).next()).slideUp(600);
  // открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(600);
}


const setBtn = document.querySelector('.settings');
const setPopup = document.querySelector('.set__popup');
const closeSet = document.querySelector('.close__set');
setBtn.addEventListener("click", function(){
  setPopup.style.display = 'block';
});
closeSet.addEventListener("click", function(){
  setPopup.style.display = '';
});

// const colorRemoveBtn = document.getElementById('remove__color');
// const removeTextColor = document.querySelectorAll('.text__remove');

// document.querySelectorAll('.remove__color').forEach(function (colorRemoveBtn) {
//   colorRemoveBtn.addEventListener('click', function () {
//   if (colorRemoveBtn.classList.contains('opened')) {
//     for(let textColor of removeTextColor){
//       textColor.style.color = '';
//     }
//   colorRemoveBtn.classList.remove('opened');
//   } else {
//     for(let textColor of removeTextColor){
//       textColor.style.color = '#f00';
//     }
//   colorRemoveBtn.classList.add('opened');
//   }
//   }); 
// });

/* ЦВЕТОВЫЕ ПАЛИТРЫ ####### */

/* link__color */ 
/* Main WINDOW */
const linkWhite = document.querySelector('.white');
const mainWindow = document.querySelectorAll('#main__window, .chat__wrapp, .set__popup');
const headMain = document.querySelectorAll('.head__main, .head, .chat__header, .head__popup');
const wrappInput = document.querySelectorAll('.wrapp__input');
const linkStart = document.querySelectorAll('.link__start, .acc-head, .link__select');
const userAvatar = document.querySelectorAll('.avatar, .user__photo, .chat__window');


const accordTextTitle = document.querySelectorAll('.head__wrapp');
const accHeadSvg = document.querySelectorAll('.acc-head>svg');

const messageElement = document.querySelectorAll('.message');

const borderDeletElement = document.querySelectorAll('.search__wrapp, .tab, .window');

document.querySelectorAll('.white').forEach(function (linkWhite) {
  linkWhite.addEventListener('click', function () {
  if (linkWhite.classList.contains('opened')) {
    for(let headM of headMain){
      headM.style.background = '#FFFCFB';
    }
    for(let mainWin of mainWindow){
      mainWin.style.background = '#EAEAEA';

    } 
    for(let wrappInp of wrappInput){
      wrappInp.style.background = '#FFFCFB';
      wrappInp.style.border = '1px solid #DDDDDD';
    }  
    for(let linkS of linkStart){
      linkS.style.background = '#FFFCFB';
      linkS.style.border = '1px solid #DDDDDD';
      linkS.style.color = '#464646';
    }  
    for (userA of userAvatar){
      userA.style.background = '#464646';
    }
    for (accordTT of accordTextTitle){
      accordTT.style.color = '#464646';
    }
    for (accSvg of accHeadSvg){
      accSvg.style.fill = '#464646';
    }
    for (borderDelete of borderDeletElement){
      borderDelete.style.border = '1px solid #DDDDDD';
    }
    for (messageEl of messageElement){
      messageEl.style.border = '1px solid #DDDDDD';
      messageEl.style.background = '#FFFCFB';
    }
  linkWhite.classList.remove('opened');
  } else {
    for(let headM of headMain){
      headM.style.background = '';
    }
    for(let mainWin of mainWindow){
      mainWin.style.background = '';
    } 
    for(let wrappInp of wrappInput){
      wrappInp.style.background = '';
      wrappInp.style.border = '';
    }   
    for(let linkS of linkStart){
      linkS.style.background = '';
      linkS.style.border = '';
      linkS.style.color = '#fff'; 
    }   
    for (userA of userAvatar){
      userA.style.background = '';
    }
    for (accordTT of accordTextTitle){
      accordTT.style.color = '';
    }
    for (accSvg of accHeadSvg){
      accSvg.style.fill = '#fff';
    } 
    for (borderDelete of borderDeletElement){
      borderDelete.style.border = '';
    } 
    for (messageEl of messageElement){
      messageEl.style.border = '';
      messageEl.style.background = '';
    } 
  linkWhite.classList.add('opened');
  }

  });  
}); 











/*##############################################*/

const smileBtn = document.querySelector('.smile__btn');
const emojiContainer = document.querySelector('.emoji__inner');

document.querySelectorAll('.smile__btn').forEach(function (smileBtn) {
  smileBtn.addEventListener('click', function () {
  if (smileBtn.classList.contains('opened')) {
      emojiContainer.style.display = 'none';
  smileBtn.classList.remove('opened');
  } else {
      emojiContainer.style.display = 'flex';
  smileBtn.classList.add('opened');
  }
  }); 
});


document.querySelector('.link__start').addEventListener('click', ()=>{
  document.querySelector('.logo__item').innerText = '';
  let data = document.querySelector('.get__company ').value;
  let logoItemText = document.querySelector('.logo__item');
  logoItemText.append(data);
  let linkStart = document.querySelector('#main__window');
  linkStart.style.display = 'none';
  let chatWrapp = document.querySelector('.chat__wrapp');
  chatWrapp.style.display = 'block';
});

let chatWrapp = document.querySelector('.chat__wrapp');
let closeChat = document.querySelector('.close');
let linkStartBlock = document.querySelector('#main__window');
closeChat.addEventListener('click', function(){
  chatWrapp.style.display = 'none';
  linkStartBlock.style.display = 'block';
})
/* .send__win */

document.querySelector('.enter__btn').addEventListener('click', ()=>{
  
  let dataChat = document.querySelector('.chat__input__input');
  // let inputText = document.querySelector('.send__win');

  let windowsChat = document.querySelector('.window');
  
  // let myContainer = document.querySelector('.my');
  // myContainer.style.display = 'block';
  // let cloneTag = myContainer.cloneNode(true);
  // windowsChat.appendChild(cloneTag);

  // inputText.append(dataChat);
  
  var elem = document.createElement("div");
  elem.classList.add('message');
  elem.classList.add('my');
  windowsChat.append(elem);
  var span = document.createElement("span"); 
  span.classList.add('send__win');
  elem.append(span);   
  let inputText = document.querySelectorAll('.send__win');
  for (i of inputText){
    i.innerHTML = dataChat.value;
  }


});




const getText = document.querySelectorAll('.get__text');
const userName = document.querySelector('.tab__name');
const chatWindows = document.querySelector('.chat__window');
const accUl = document.querySelectorAll('.open__chat');
const closeChatWindows = document.querySelector('.chat__cc>svg');



for ( const getTextChat of getText ){
  getTextChat.addEventListener('click', ()=>{
  chatWindows.style.display = 'block';
  userName.innerHTML = getTextChat.textContent;
  });
};
closeChatWindows.addEventListener('click', function(){
  chatWindows.style.display = 'none';
  document.querySelector('.message').remove();
  document.querySelector('.chat__input__input').value = "";
});


