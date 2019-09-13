$(document).ready(function () {

    // variables 
    var attackerAP = [];
    var defenderAP = [];
    var currentLegend;
    var currentEnemy;
    var attackerHP;
    var defenderHP;



    //establish characters stats
    var legends = {
        Pathfinder: {
            id: 0,
            name: "Pathfinder",
            hp: 200,
            attack: 18,
        },

        Wraith: {
            id: 1,
            name: "Wraith",
            hp: 150,
            attack: 15,
        },

        Octane: {
            id: 2,
            name: "Octane",
            hp: 100,
            attack: 22,
        },

        Wattson: {
            id: 3,
            name: "Wattson",
            hp: 175,
            attack: 20,
        }
    }

    var enemies = {
        Gibraltar: {
            id: 4,
            name: "Gibraltar",
            hp: 300,
            attack: 10,
        },

        Lifeline: {
            id: 5,
            name: "Lifeline",
            hp: 210,
            attack: 15,
        },

        Caustic: {
            id: 6,
            name: "Caustic",
            hp: 100,
            attack: 22,
        },
    }




    //Adds everything to selected legend
    function apexLegends() {
        $(".legend").click(function (e) {
            if ($(this).hasClass("legend")) {
                currentLegend = $(this).data("value");
                $(this).addClass("youSelected");
            }
            if ($('.legend')) {
                $('.legend:not(.youSelected').addClass("hide");
            }

            if ($(".youSelected")) {
                $("#battleground").append($('.youSelected'));
            }
            $('.enemies').addClass("show");
            console.log(currentLegend);

            if (currentLegend == legends.Pathfinder.name) {
                attackerHP = legends.Pathfinder.hp;
                attackerAP = legends.Pathfinder.attack;
                legattack = legends.Pathfinder;
                console.log(attackerHP);
                console.log(attackerAP);
            }
            else if (currentLegend == legends.Wraith.name) {
                attackerHP = legends.Wraith.hp;
                attackerAP = legends.Wraith.attack;
                legattack = legends.Wraith;
                console.log(attackerHP);
                console.log(attack);
            }
            else if (currentLegend == legends.Octane.name) {
                attackerHP = legends.Octane.hp;
                attackerAP = legends.Octane.attack;
                legattack = legends.Octane;
                console.log(attackerHP);
                console.log(attack);
            }
            else if (currentLegend == legends.Wattson.name) {
                attackerHP = legends.Wattson.hp;
                attackerAP = legends.Wattson.attack;
                legattack = legends.Wattson;
                console.log(attackerHP);
                console.log(attack);
                console.log(attackerAP);
            }
        })


        //Grabs value of current enemy
        $(".fighter").click(function (e) {
            if ($(this).hasClass("enemies")) {
                currentEnemy = $(this).data("value");
                $(this).addClass("enemySelected")
            }
            if ($('.enemies')) {
                $('.enemies:not(.enemySelected').addClass("hideenemy");
            }
            if ($(".enemySelected")) {
                $("#battleground").append($('.enemySelected'));
            }
            $('.attackbut').addClass("show");
            
            if (currentEnemy == enemies.Gibraltar.name) {
                defenderHP = enemies.Gibraltar.hp;
                defenderAP = enemies.Gibraltar.attack;
                objattack = enemies.Gibraltar;
                console.log(defenderHP);
                console.log(defenderAP);
            }
            else if (currentEnemy == enemies.Lifeline.name) {
                defenderHP = enemies.Lifeline.hp;
                defenderAP = enemies.Lifeline.attack;
                objattack = enemies.Lifeline;
                console.log(defenderHP);
                console.log(defenderAP);
            }
            else if (currentEnemy == enemies.Caustic.name) {
                defenderHP = enemies.Caustic.hp;
                defenderAP = enemies.Caustic.attack;
                objattack = enemies.Caustic;
                console.log(defenderHP);
                console.log(defenderAP);
            }
            
        })

    }
    //Start Fight

    //attack click
    function attak() {
        $(".attackyou").click(function (e) {
        defenderHP = parseInt(defenderHP) - parseInt(attackerAP);
        console.log(defenderHP);
        $(".defenderhealth").text(defenderHP);

        attackerHP = parseInt(attackerHP) - parseInt(defenderAP);
        console.log(attackerHP);
        $(".playerhealth").text(attackerHP);


        if (attackerHP <= 0){
            alert("you lose");
        }
        else if (defenderHP <= 0){
            alert("you win");
        }
        })
    }









    attak();
    apexLegends();


    //end doc ready function
})