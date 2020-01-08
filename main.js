
document.getElementsByTagName("H1")[0].setAttribute("id", "democlass"); 

console.log(document.getElementById("menu-item-480").getElementsByTagName( 'a' )[0]);

document.getElementById("menu-item-480").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/drprabaker/"); 

document.getElementById("menu-item-478").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/pa-rhea-escano/"); 

document.getElementById("menu-item-686").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/pa-ashley-lockwood/"); 

document.getElementById("menu-item-479").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/np-shorena-thomas/"); 

document.getElementById("menu-item-457").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/contact/"); 

document.getElementById("menu-item-449").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/services/"); 

document.getElementById("menu-item-458").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/about/"); 

document.getElementById("menu-item-480").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/drprabaker/"); 

document.getElementById("menu-item-452").getElementsByTagName( 'a' )[0].setAttribute("href", "http://caremd.us/providers/"); 

 document.getElementsByClassName("feature-box-title")[0].setAttribute("id", "linkRemove1"); 



  var list = document.getElementById("linkRemove1");
  list.removeChild(list.childNodes[0]);

document.getElementById("linkRemove1").innerHTML = "Care";

 document.getElementsByClassName("feature-box-title")[1].setAttribute("id", "linkRemove2"); 

  var list = document.getElementById("linkRemove2");
  list.removeChild(list.childNodes[0]);

document.getElementById("linkRemove2").innerHTML = "Compassion";

 document.getElementsByClassName("feature-box-title")[2].setAttribute("id", "linkRemove3"); 

  var list = document.getElementById("linkRemove3");
  list.removeChild(list.childNodes[0]);

document.getElementById("linkRemove3").innerHTML = "Competency";

document.getElementsByClassName("row")[5].setAttribute("id", "changeColumn"); 
document.getElementsByClassName("row")[1].setAttribute("id", "changeColumn2"); 

document.getElementsByClassName("box")[0].setAttribute("id", "drLink"); 
document.getElementsByClassName("box")[1].setAttribute("id", "rheaLink"); 
document.getElementsByClassName("box")[2].setAttribute("id", "ashleyLink"); 
document.getElementsByClassName("box")[3].setAttribute("id", "shorenaLink");

$("#changeColumn div").removeClass("col-lg-4");

$("#changeColumn div").addClass("col-lg-3");

$("#changeColumn div div").removeClass("col-lg-3");

$("#changeColumn div div div").removeClass("col-lg-3");

$("#changeColumn div").removeClass("col-md-4");

$("#changeColumn div").addClass("col-md-3");

$("#changeColumn div div").removeClass("col-md-3");

$("#changeColumn div div div").removeClass("col-md-3");

$("#changeColumn2 div").removeClass("col-lg-3");

document.getElementsByClassName("col-sm-12")[2].setAttribute("id", "changeColumn3"); 
document.getElementsByClassName("col-sm-9")[0].setAttribute("id", "changeColumn4"); 
$("#changeColumn3").addClass("col-lg-2");
$("#changeColumn4").addClass("col-lg-9");
$("#changeColumn4").removeClass("col-lg-8");



$(".social-link li[1]").addClass("dNone");

  var x = document.getElementsByClassName("feature-box-content");
  x[0].innerHTML = "We go out of our way to provide what is necessary for the health and welfare of our patients";
  x[1].innerHTML = "We sympathize and show great concern for our patient's problems and do everything in our power to get them back on track";
x[2].innerHTML = "Our qualified professionals have a track record of healing ailments in an efficient manner";


var y = document.getElementsByClassName("labSer");
  y[0].innerHTML = "We go out of our way to provide what is necessary for the health and welfare of our patients";


$(".social-link li:first-child").attr("id", "hello");



$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("#header-wrap-sticky-wrapper").removeClass("is-sticky");
    } 
});



