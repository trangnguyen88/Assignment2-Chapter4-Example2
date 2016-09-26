var main = function() {
    "use strict";
    var addComments2 = function() {
        var $new_comment2;
        if ($(".comment-input2 input").val() !== "") {
            $new_comment2 = $("<p class = \"user2-comment\">").text($(
                ".comment-input2 input").val());
            $new_comment2.hide();
            $(".comments").append($new_comment2);
            $new_comment2.fadeIn();
            $(".comment-input2 input").val("");
        }
    };
    var addComments1 = function() {
        var $new_comment1;
        if ($(".comment-input1 input").val() !== "") {
            $new_comment1 = $("<p class = \"user1-comment\">").text($(
                ".comment-input1 input").val());
            $new_comment1.hide();
            $(".comments").append($new_comment1);
            $new_comment1.fadeIn();
            $(".comment-input1 input").val("");
        }
    };
    $(".comment-input1 button").on("click", function(event) {
        addComments1();
    });
    $(".comment-input2 button").on("click", function(event) {
        addComments2();
    });
    $(".comment-input1 input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addComments1();
        }
    });
    $(".comment-input2 input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addComments2();
        }
    });
};
$(document).ready(main);