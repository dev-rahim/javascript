// 4.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom", "Joynal abedin"];
var biggestName = "";
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  if (element.length > biggestName.length) {
    biggestName = element;
  }
}
console.log(biggestName);
