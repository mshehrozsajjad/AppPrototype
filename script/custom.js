var co1 = 1;
var co2 = 3;

function func1(element,kg,type){
    //Some code
    $(element).parent().addClass('thickBorder').removeClass('thinBorder');
    if(type == 1)
      co1 = kg;
    else
      co2 = kg;
    $("#total").html(co1+co2);
};

function func2(element,kg,type){
  //Some code
  $(element).parent().addClass('thinBorder').removeClass('thickBorder');
  if(type == 1)
    co1 = kg;
  else
    co2 = kg;
      $("#total").html(co1+co2);
};

function func3(element,kg,type){
    //Some code
    $(element).parent().removeClass('thinBorder thickBorder');
    if(type == 1)
      co1 = kg;
    else
      co2 = kg;
        $("#total").html(co1+co2);
};
