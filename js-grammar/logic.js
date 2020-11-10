// var age = 16;
// var result = null;
// if (age >= 20) {
//   result = '成年';
// } else {
//   result = '未成年';
// }
// document.write(result);

// var age = 65;
// var isMember = true;
// var result = null;
// if (age >= 60 && isMember) {
//   result = 'シニア会員割引の対象です';
// } else {
//   result = 'シニア会員割引の対象ではありません';
// }
// document.write(result);

var age = 16;
var isMember = true;
var result = null;
if (age <= 15) {
  result = '15歳以下なので 800円';
} else if (age >= 16 && isMember) {
  result = '16歳以上の会員なので 1000円'
} else {
  result = '1800 円'
}
document.write(result)