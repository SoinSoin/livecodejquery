$(document).ready(function () {
    var value = Math.floor(Math.random() * 11);
    var compteur = 0;
    console.log(value);
    var dedans;

    function ClickButton() {
        console.log(compteur);
        if (dedans > value && compteur < 3) {
            $("#oui").hide();
            $("#plus").hide();
            $("#moins").slideDown();

        }

        if (dedans < value && compteur < 3) {
            $("#oui").hide();
            $("#plus").slideDown();
            $("#moins").hide();

        }

        if (dedans == value) {
            $("#moins").hide();
            $("#oui").slideDown("600");
            $("#moins").hide();
            $("#btni").hide() && $("#btn").show();
            $("#btn").click(function rechagement()
            {
                location.reload();
            }) ;
            console.log("ok");
           
        } 
        else if (compteur > 3) {
            $("#btni").hide() && $("#btn").show();
            $("#btn").click(function rechagement()
        {
            location.reload();
        }) ;
            console.log("perdu");
            // location.reload();
        }

    }

    $("#btni").click(function () {
        compteur++;
        dedans = $("#texti").val();
        console.log(dedans);
        ClickButton();
    });
});