
document.getElementsByClassName("row")[1].setAttribute("id", "changeColumn2"); 

$("#changeColumn2 div").removeClass("col-lg-3");

document.getElementsByClassName("col-sm-12")[2].setAttribute("id", "changeColumn3"); 
document.getElementsByClassName("col-sm-9")[0].setAttribute("id", "changeColumn4"); 
$("#changeColumn3").addClass("col-lg-2");
$("#changeColumn4").addClass("col-lg-9");
$("#changeColumn4").removeClass("col-lg-8");
