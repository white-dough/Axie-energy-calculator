$(document).ready(function() {
    var energyUsed = $(".energy-used-val");
    var energyGain = $(".energy-gain-val");
    var energyLoss = $(".energy-loss-val");
    var currentEnergy = $(".current-energy-val");

    $(".minus-button").click(function() {
        var theInput = $(this).siblings("input");
        if (parseInt(theInput.val()) - 1 > -1) {
            theInput.val(parseInt(theInput.val()) - 1);
        }
    });
    $(".plus-button").click(function() {
        var theInput = $(this).siblings("input");
        if (parseInt(theInput.val()) + 1 < 11) {
            theInput.val(parseInt(theInput.val()) + 1);
        }
    });
    $(".new-game-button").click(function() {
        reset();
    });
    $(".end-turn-button").click(function() {
        calculateEnergy();
    });

    function reset() {
        currentEnergy.val(3);
        energyUsed.val(0);
        energyGain.val(0);
        energyLoss.val(0);
    }

    function calculateEnergy() {
        var energyUsedParsed = parseInt(energyUsed.val());
        var energyGainParsed = parseInt(energyGain.val());
        var energyLossParsed = parseInt(energyLoss.val());
        var energyCurrentParsed = parseInt(currentEnergy.val());

        var tempVal = energyCurrentParsed - energyUsedParsed + energyGainParsed - energyLossParsed;
        if (tempVal < 0) {
            tempVal = 0;
        }
        tempVal += 2;
        if (tempVal > 10) {
            tempVal = 10;
        }
        energyUsed.val(0);
        energyGain.val(0);
        energyLoss.val(0);
        currentEnergy.val(tempVal);
    }


    $('.new-game-button')
        .on('mousedown', function() {

            $(this).css('background', "#6f3d18");
        })
        .on('mouseup', function() {
            $(this).css('background', "#8e501f");
        })

});