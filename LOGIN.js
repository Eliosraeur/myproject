//--------------------------SIGNIN------------------------------
var user = []; 
var pass = [];
function validateDK() {
    var uDK = document.getElementById("usernameDK").value;
    var p1DK = document.getElementById("passwordDK").value;
    var p2DK = document.getElementById("password-repeatDK").value;
  if(uDK == "") {
    alert("Vui lòng nhập tên người dùng!");
    }
  if(p1DK == "") {
    alert("Vui lòng nhập mật khẩu!");
    }
  if(p2DK == "" || p2DK != p1DK) {
    alert("Vui lòng xác minh lại mật khẩu!");
  }
  if(uDK != "" && p1DK != "" && p2DK != "" && p2DK == p1DK)
  {
    alert("Đăng ký thành công!");
    
    user.push(uDK);
    pass.push(p2DK);
    localStorage.setItem("Username", JSON.stringify(user));
    localStorage.setItem("Password", JSON.stringify(pass));
  }
}

//--------------------------------LOGIN--------------------------------------------
var checked = true;
var x = false;
function validateDN() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
  if(u== "") {
    alert("Vui lòng nhập tên đăng nhập!");
    checked = false; }
  if(p == "") {
    alert("Vui lòng nhập mật khẩu!");
    checked = false; }
  if(checked == true){
      user = JSON.parse(localStorage.getItem("Username"));
      pass = JSON.parse(localStorage.getItem("Password"));
      for(var i in user)
      {
        if(user[i] == u && pass[i] == p)
        {
          alert("Đăng nhập thành công!");
          alert("Chào bạn, " + user[i]);
          localStorage.setItem("nameUser", JSON.stringify(user[i]));
          x = true;
        }
      }
      if(x == false){ alert("Đăng nhập thất bại!");}}
  }
  //-----------------------------------ACCOUNT CONFIRMED-----------------------------------------
  var login = "";
  var logout = "";
  document.body.onload = function()
  {
    login = JSON.parse(localStorage.getItem("nameUser"));
    if(login.length > 0)
    {
      logout = "×";
      document.getElementById("dangnhap").innerHTML = login;
      document.getElementById("dangky").innerHTML = logout;
      document.getElementById("dangnhap").href = "";
      document.getElementById("dangky").href = "";
      document.getElementById("dangky").onclick = function(){
        login = JSON.parse(localStorage.removeItem("nameUser"));
      }
    }
  }

