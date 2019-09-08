$(document).ready(function (){

// variables 
var attack = [];
var selection = null;
var currentHp = [];
var currentLegend = null;

//establish characters stats

wraith = [
    hp = "150"
]

//Unhides enemies when legend is selected.
$(".legend").click(function (e) {
    if ($(this).hasClass("legend")) {
        currentLegend = $(this).val();
    }
    $('.enemies').addClass("show")
    console.log(currentLegend)
})

// $('.enemies').addClass("show");



// code that adds class to hides other enemies

// attack button that when clicked will do .random to determine what damage was done

// currentLegend = $(this).val();

})

