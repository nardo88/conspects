function valChange1() {
var rotate = document.querySelector('#rotate1').value;
var rotateValue = document.querySelector('#rotateValue1');
var rotateItem = document.querySelector('#rotateItem1');

rotateValue.innerHTML = rotate + ' градусов';
rotateItem.style.transform = 'rotateX(' + rotate + 'deg)';

}

function valChange2() {
var rotate = document.querySelector('#rotate2').value;
var rotateValue = document.querySelector('#rotateValue2');
var rotateItem = document.querySelector('#rotateItem2');

rotateValue.innerHTML = rotate + ' градусов';
rotateItem.style.transform = 'rotateY(' + rotate + 'deg)';

}

function valChange3() {
var rotate = document.querySelector('#rotate3').value;
var rotateValue = document.querySelector('#rotateValue3');
var rotateItem = document.querySelector('#rotateItem3');

rotateValue.innerHTML = rotate + ' градусов';
rotateItem.style.transform = 'rotate(' + rotate + 'deg)';

}

function valChange4() {
var rotate = document.querySelector('#rotate4').value;
var rotateValue = document.querySelector('#rotateValue4');
var rotateItem = document.querySelector('#rotateItem4');

rotateValue.innerHTML = rotate + ' градусов';
rotateItem.style.transform = 'rotate(' + rotate + 'deg)';

}

function valChange5() {
var rotate = document.querySelector('#rotate5').value;
var rotateValue = document.querySelector('#rotateValue5');
var rotateItem = document.querySelector('#rotateItem5');

rotateValue.innerHTML = rotate ;
rotateItem.style.transform = 'scale(' + rotate + ')';

}
function valChange6() {
var rotate = document.querySelector('#rotate6').value;
var rotateValue = document.querySelector('#rotateValue6');
var rotateItem = document.querySelector('#rotateItem6');

rotateValue.innerHTML = rotate;
rotateItem.style.transform = 'scaleX(' + rotate + ')';

}

function valChange7() {
var rotate = document.querySelector('#rotate7').value;
var rotateValue = document.querySelector('#rotateValue7');
var rotateItem = document.querySelector('#rotateItem7');

rotateValue.innerHTML = rotate;
rotateItem.style.transform = 'scaleY(' + rotate + ')';

}

function valChange8() {
var rotate = document.querySelector('#rotate8').value;
var rotateValue = document.querySelector('#rotateValue8');
var rotateItem = document.querySelector('#rotateItem8');

rotateValue.innerHTML = rotate;
rotateItem.style.transform = 'skewX(' + rotate + 'deg)';

}

function valChange9() {
var rotate = document.querySelector('#rotate9').value;
var rotateValue = document.querySelector('#rotateValue9');
var rotateItem = document.querySelector('#rotateItem9');

rotateValue.innerHTML = rotate;
rotateItem.style.transform = 'skewY(' + rotate + 'deg)';

}

function valChange10() {
var rotate = document.querySelector('#rotate10').value;
var rotateValue = document.querySelector('#rotateValue10');
var rotateItem = document.querySelector('#rotateItem10');

rotateValue.innerHTML = rotate;
rotateItem.style.transform = 'translateX(' + rotate + 'px)';

}

function valChange11() {
var rotate = document.querySelector('#rotate11').value;
var rotateValue = document.querySelector('#rotateValue11');
var rotateItem = document.querySelector('#rotateItem11');

rotateValue.innerHTML = -rotate;
rotateItem.style.transform = 'translateY(' + -rotate + 'px)';

}