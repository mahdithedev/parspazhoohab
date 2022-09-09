var w;
var count;
var open;
open = false;
var i;
function screen(t){
    w = window.innerWidth;
    if (w <= 600){
        return ;
    }
    if (!open){
      open = true;
    }
    i = t;
    document.getElementById("main-img").src = "../images/img"+i+".jpeg";

    document.getElementById("page").classList.remove("dis-none");
    setTimeout("fade(1)",500);
}
function fade(n){ 
    if (n == 1){
        document.getElementById("page").classList.remove("fade");
    }
    if (n == 0){
        document.getElementById("page").classList.add("dis-none");
    }
}
function collapse(){
    document.getElementById("page").classList.add("fade");
    setTimeout("fade(0)",500);
}
function nop(n){
    count = document.getElementsByClassName("img").length;
    if (n == "-"){
        i--;
    }
    if (n == "+"){
        i++;
    }
    if (i ==  count+1){
        i = 1;
    }
    if (i == 0){
        i = count;
    }
    document.getElementById("main-img").src = "../images/img"+i+".jpeg";
}
var main = ["اصلی","صفحه","صفحه اصلی","گزارش","گزارش گیری",
            "گزارشات","مقالات","مقاله","تلفن","رزومه",
            "سی وی","CV","همکاری","درخواست همکاری","درخواست",
            "مناقصه", "مناقصات", "پیوند", "پیوندها", "لینک",
            "link", "links"];
var gallery = ["عکس", "عکس ها", "گالری", "gallery", "photo",
               "image", "images"];
var about = ["درباره", "درباره ما", "about", "about us", "تاسیسات",
              "بازرسی", "آبیاری", "زهکشی", "گواهی", "مجوز"];
var contact = ["دفتر","office","تهران","بندرعباس","کرمان",
               "دفتر کرمان ","دفتر تهران ","دفتر مرکزی ","آدرس","نقشه",
               "map"];
var login = ["login","ورود","نام کاربری", "پروژه", "project", "projects"];
var allpages = [gallery, main, about, contact, login];
var mainw = ["webbody","webbody","webbody","icons","icons",
              "icons","icons","icons","icons","icons",
              "icons","icons","icons","icons","icons",
              "icons","icons","footer","footer","footer",
              "footer","footer"];
var galleryw = ["webbody","webbody","webbody","webbody","webbody",
                "webbody","webbody"];
var aboutw = ["webbody","webbody","webbody","webbody","title1",
              "title2","title3","title3","img-container","img-container"];
var contactw = ["webbody","webbody","col-2", "col-1", "col-3",
                 "col-3", "col-2", "col-1","map-container","map-container",
                 "map-container"];
var loginw = ["webbody","webbody","webbody","webbody","webbody","webbody"];
var where = [galleryw, mainw, aboutw, contactw, loginw];
var input;
function create(){
    input = document.getElementById("search-inp");
    input.addEventListener("keypress", function(event) {
      input.placeholder = "...جستجو";
      if (event.key === "Enter") {
        event.preventDefault();
        search();
      }
    });
    input.addEventListener("focusout", function() {
        input.placeholder = "...جستجو";
      });
}
function search(){
    var word = document.getElementById("search-inp").value;
    var found;
    found = false;
    for (var j1 = 0; j1 < allpages.length; j1++){
        for (var j2 = 0; j2 < allpages[j1].length; j2++){
            if (word == allpages[j1][j2]){
                found = true;
                if (j1 == 0){
                    document.getElementById("searchLink").href = "#"+where[j1][j2];
                    document.getElementById("searchLink").click();
                }
                if (j1 != 0){
                    if (j1 == 1){
                        document.getElementById("searchLink").href = "/main";
                        document.getElementById("searchLink").click();
                    }
                    if (j1 == 2){
                        document.getElementById("searchLink").href = "/about";
                        document.getElementById("searchLink").click();
                    }
                    if (j1 == 3){
                        document.getElementById("searchLink").href = "/contact";
                        document.getElementById("searchLink").click();
                    }
                    if (j1 == 4){
                        document.getElementById("searchLink").href = "/login";
                        document.getElementById("searchLink").click();
                    }
                }
            }
            if (j1 == allpages.length - 1 && j2 == allpages[j1].length - 1 && found == false){
                input.value = "";
                input.placeholder = "!پیدا نشد";
            }
        }
    }
}