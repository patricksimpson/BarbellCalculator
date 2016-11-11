workoutCalculator = (function() {
  var barWeight = 45,
    plates = [45, 35, 25, 10, 5, 2.5],
    // Default invetory, should be overriden by local storage.
    plateObject = {
      '45': 4,
      '35': 4,
      '25': 4,
      '10': 4,
      '5': 4,
      '2-5': 4
    },
    total = 0,
    sidePlates = [];

  $('document').ready(function() {
    if (localStorage) {
      var LSPlates = localStorage.getItem('plateWeight');
      if (LSPlates) {
        plateObject = JSON.parse(LSPlates);
      }
    }
    calculatePlateWeight();

    $('.calc-plates').on('click', calculatePlateWeight);
    $('.hide-plates').on('click', togglePlateCalc);
  });

  function togglePlateCalc() {
    $('.plates-form--content').toggle();
    $('.hide-plates').toggleClass('hide show');
    return false;
  }

  $('.plate-calc').on('change', function(e) {
    $plate = $(e.target);
    plateObject[$plate.data('plate')] = $plate.val();
    calculatePlateWeight();

    if (localStorage) {
      localStorage.setItem('plateWeight', JSON.stringify(plateObject));
    }
  });

  function calculatePlateWeight() {
    var total = null,
      barWeight = $('#bar').val() * 1;
    _.each(plateObject, function(value, key) {
      var weight = key * 1;
      $('#plate-' + key).val(value);
      if (key === '2-5') {
        weight = 2.5;
      }
      total += weight * value;
    });

    $("#total-available-amount-plates").text(total);
    $("#total-available-amount-all").text(total + barWeight);
  }

  $('#total').on('keyup', function(e, v) {
    var weight = $(e.target).val();
    sidePlates = [];
    getWeights(weight);
    $('.bar .side').html('');
    _.each(sidePlates, function(plate) {
      var plateClass = 'plate-' + plate.weight.toString().replace('.', '-');
      var $li = $('.' + plateClass),
        $barLeft = $('.bar .left-side');
      $barRight = $('.bar .right-side');
      if (plate.multiplier > 0) {
        $li.show();
        $li.find('span').text(plate.multiplier);
        for (i = 0; i < plate.multiplier; i++) {
          $barLeft.append('<span class="' + plateClass + '">')
          $barRight.append('<span class="' + plateClass + '">');
        }
      } else {
        $li.hide();
      }
    });
  });

  getRealPlateKey = function(key) {
    return key.toString().replace('.', '-');
  }

  getWeights = function(weight) {
    $('.bar .side').html('Loading');
    var plateWeight = weight - barWeight,
      sideWeight = plateWeight / 2,
      remain = sideWeight;
    _.each(plates, function(plate) {
      var num = 0,
        iterationPlates = null,
        plateWeightAvailable = plateObject[getRealPlateKey(plate)],
        remainder;
      if (plate <= remain && plateWeightAvailable > 0) {
        num = _.parseInt(remain / plate);
        if (num > (plateWeightAvailable / 2)) {
          num = (plateWeightAvailable / 2);
        }
        remain -= (num * plate);
      } else {
        num = 0;
      }
      remainder = remain * 2;
      if ((remainder + barWeight) > 0) {
        var actual = weight - remainder;
        $('#amount-remain').html(remainder).removeClass().addClass('remainder-' + remainder.toString());
        $('#actual-amount').html(actual);
        if (remainder > 2) {
          $('#rounded-amount').html(actual*1 + 5);
        } else {
          $('#rounded-amount').html(actual);
        }
      }
      iterationPlates = {
        'weight': plate,
        'multiplier': num
      }
      sidePlates.push(iterationPlates);
    });
  }
  return {
    getWeights
  }
})();
