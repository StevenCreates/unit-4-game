$(document).ready(function () {

    // variables 
    var attack = [];
    var selection = null;
    var currentHp = [];
    var currentLegend = null;
    var currentEnemy = null;

    //establish characters stats

    var pathfinder = {
        id: 0,
        name: "pathfinder",
        hp: 200,
        attack: 18,
    }

    var wraith = {
        id: 1,
        name: "wraith",
        hp: 150,
        attack: 15,
    }

    var octane = {
        id: 2,
        name: "octane",
        hp: 100,
        attack: 22,
    }

    var wattson = {
        id: 3,
        name: "wattson",
        hp: 175,
        attack: 20,
    }


    //Adds class to selected legend
    $(".legend").click(function (e) {
        if ($(this).hasClass("legend")) {
            currentLegend = $(this).val();
            $(this).addClass("youSelected");
            //   $(".youSelected").add("div");
        }
        //Adds class to legends not selected
        if ($('.legend')) {
            $('.legend:not(.youSelected').addClass("hide")
        }

        $('.enemies').addClass("show")
        console.log(currentLegend)
    })

    //Grabs value of current legend
    $(".fighter").click(function (e) {
        if ($(this).hasClass("enemies")) {
            currentEnemy = $(this).val();
            $(this).addClass("enemySelected")
        }
        if ($('.enemies')) {
            $('.enemies:not(.enemySelected').addClass("hideenemy")
        }
        $('.attackbut').addClass("show")
        console.log(currentEnemy)
    })


    // attack button that when clicked will do .random to determine what damage was done





    //end doc ready function
})

