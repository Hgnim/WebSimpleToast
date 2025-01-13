function n1() {
  showToast("hello!");
}
function n2() {
  showToast("other colors", 3000, "button-2");
}
function n3() {
  showToast("inside the div", 3500, "button-3", undefined, "buttonDiv");
}
function n4() {
  showToast("big text", 1000, undefined, "button-4");
}
function n5() {
  showToast("1", 500, undefined, undefined, undefined, function () {
    showToast("2", 500, undefined, undefined, undefined, function () {
      showToast("3", 500);
    });
  });
}