$(document).ready(function() {

        var hashURL = window.location.hash;
        hashURL = hashURL.substring(1,hashURL.length);
    var rolename;
if (hashURL=="CEO"){
    rolename="Chief Executive Officer";
}
    if (hashURL=="acc-manager"){
    rolename="Accountable Manager";
}
    $(".role-name").text(rolename);
   var hashlink=$(".au-btn--primary").attr("href");
    hashlink=hashlink+"#"+hashURL;
    
    
    $(".au-btn--primary").attr("href",hashlink);
    
    
});// JavaScript Document