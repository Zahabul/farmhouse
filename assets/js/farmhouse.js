const navbarToggleBtn = document.getElementById("navbarToggleBtn");
const navbarSupportedContent = document.getElementById("navbarSupportedContent");

navbarToggleBtn.addEventListener("click", function() {
    navbarSupportedContent.style.display = "none";
    navbarSupportedContent.classList.toggle("active");
});



$(document).ready(function () {

    $(window).on("scroll load", function () {
        if ($(window).scrollTop() > 300) {
            $(".scroll-top").show();
            $("#mainHeader").addClass("overlay");
        } else {
            $(".scroll-top").hide();
            $("#mainHeader").removeClass("overlay");
        }

        $(".loader").fadeOut(300);
    });

    // smooth scrolling

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500,
            "linear"
        );
    });



    // One Page Scrolling
    $(".navbar-nav").onePageNav({
        currentClass: "current",
    });

    $(window).scrollTop(0);
});

