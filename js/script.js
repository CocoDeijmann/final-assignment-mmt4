$(document).ready(function () {
    // ACCORDION
    $("#accordion_container").accordion({
        animate: 1200,
        heightStyle: "content"
    });

    // WATCHED BUTTON
    $(".video_button").each(function () {

        $('button.watched_button').click(function () {
            $(this).parents().prev().find('.check_button').addClass('checked');
        })

    });

    // PLAY EN REWIND KNOPPEN
    $("video").each(function () {

        var player = videojs(this.id, {});


        $("button#rewind_button").click(function () {
            player.currentTime(-10);
        });

        let clicked = false;

        $("button#play_button").click(function () {
            if (!clicked) {
                player.pause();
                clicked = true;
            } else {
                player.play();
                clicked = false;
            }
        });

    });

    // MODAL
    $("button#myBtn").click(function () {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });

    // TOGGLE
    $('.slider').click(function () {

        $('.slider').toggleClass('active')
        $('body, nav, #logo, li, #playlist, #h2_blue, h3, h4, #accordion_container, .name, .email_button, .accordion, .playlist_container').toggleClass('dark')

    });

});