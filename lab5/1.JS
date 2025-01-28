function getUser() {
  let xhtmp = new XMLHttpRequest();
  xhtmp.open("GET", "user.json", true);
  xhtmp.send();
  xhtmp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      console.log(users[0].fname);
    }
  };
}
getUser();
