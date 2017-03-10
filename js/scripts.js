//nav bar
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";

}
//end
//login js
$(document).ready(function () {
    $("#landing").slideDown(4000);
    var Anita = "a3220";
    $("form#blanks").submit(function (event) {
        event.preventDefault();
        var userInput = $("input#foodID").val();
        $("input#foodID").val("");
        if (userInput === Anita) {
            $("#anita").fadeToggle();
        } else {
            $("#anita").hide();
            alert("Sorry wrong ID try again");
        };
    });

});
//end
//Feedback html
