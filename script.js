var burgerMenu = document.getElementById('burgerMenu');
var topNav = document.getElementById('responsiveNav');
burgerMenu.addEventListener('click', function(){
if (topNav.className === 'topNav') {
topNav.className += ' responsive';
}

});
