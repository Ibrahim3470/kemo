var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Find the clicked tab link and add the active class
  var clickedTabLink = event.currentTarget;
  clickedTabLink.classList.add("active-link");

  // Find the corresponding tab content and add the active class
  var correspondingTabContent = document.getElementById(tabname);
  correspondingTabContent.classList.add("active-tab");
}


var icon = document.getElementById("icon");
var isDarkMode = localStorage.getItem('darkMode') === 'true';

// تحديث حالة الوضع الليلي عند تحميل الصفحة
if (isDarkMode) {
    document.body.classList.add("light-theme");
    icon.src = "Img/moon.png";
} else {
    document.body.classList.remove("light-theme");
    icon.src = "Img/sun.png";
}

icon.onclick = function () {
    // تبديل الوضع الليلي
    document.body.classList.toggle("light-theme");
    isDarkMode = document.body.classList.contains("light-theme");

    // حفظ حالة الوضع الليلي في localStorage
    localStorage.setItem('darkMode', isDarkMode);

    // تحديث صورة الرمز بناءً على الوضع الليلي
    icon.src = isDarkMode ? "Img/moon.png" : "Img/sun.png";
};

const list = document.querySelectorAll(".list");
function activelink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activelink));

