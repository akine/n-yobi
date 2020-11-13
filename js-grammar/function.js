var myBirthTime = new Date(1990, 07, 23, 07, 23);
function updateParagraph() {
  var now = new Date();
  var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText =
    // '生まれてから' + seconds + '秒経過。';
    `生まれてから${seconds}秒経過。`;
}
setInterval(updateParagraph, 50);

function areaOfCircle(r) {
  return r * r * 3.14;
}
document.write(`<p>半径 5cm の円の面積は ${areaOfCircle(5)} です。</p>`)
document.write(`<p>半径 10cm の円の面積は ${areaOfCircle(10)} です。</p>`)
document.write(`<p>半径 15cm の円の面積は ${areaOfCircle(15)} です。</p>`)