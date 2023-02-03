let i = 1;

while (i <= 150) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("foobar");
    } else {
      console.log("foo");
    }
  } else if (i % 5 == 0) {
    if (i % 3 == 0) {
      console.log("foobar");
    } else {
      console.log("bar");
    }
  } else {
    console.log(i);
  }
  i++;
}
