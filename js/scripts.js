/*!
* Start Bootstrap - Simple Sidebar v6.0.2 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

$("#close-menu").click(function(){
    $("#sidebar-wrapper").css("margin-left", "-415px");
});
$(".togglebutton").click(function(){
    $("#sidebar-wrapper").css("margin-left", "0px");
});


// $(".togglebutton").click(function(){
//     if ($(window).width() <= 1025) {
//         $(".cmn-right-side-div-bar").addClass("no-margin-sidebar");
//         $(".hamburger-pnl").addClass("hamburger-pnl-margin15");
//      }
//      else {
//         $(".cmn-right-side-div-bar").addClass("no-margin-sidebar");
//         $(".hamburger-pnl").removeClass("hamburger-pnl-margin15");
//     }
//   });

