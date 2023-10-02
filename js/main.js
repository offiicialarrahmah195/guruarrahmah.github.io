document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit default
    
    // Mengambil nilai username dan password dari input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Memeriksa apakah username dan password sesuai
    if (username === "smkarrahmahjasinga@gmail.com" && password === "Admin") {
      // Redirect ke halaman yang ditentukan
      window.location.href = "https://www.appsheet.com/start/71cd8999-f384-4737-915f-0dc79355b2d5";
    } else {
      // Menampilkan pesan kesalahan
      alert("Username atau password salah");
    }
  });