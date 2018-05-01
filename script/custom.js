var co1 = 0;
var co2 = 0;
var co3 = 0;
var co4 = 0;
var co5 = 0;
var co6 = 0;
var co7 = 0;
var co8 = 0;
var co9 = 0;
$("#simple_arc").lettering();
function func1(element,kg,type){
    //Some code
    $(element).parent().addClass('thinBorder').removeClass('thickBorder mediumBorder noBorder' );
    if(type == 1)
      co1 = kg;
    else if (type == 2)
      co2 = kg;
    else if (type == 3)
      co3 = kg;
    else if (type == 4)
      co4 = kg;
    $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

    if(window.location.pathname.split("/").pop().includes("page1")) {
      localStorage.setItem("totalDinner", $(".total").html());
      console.log(localStorage.getItem("totalDinner"));
    }
    else if (window.location.pathname.split("/").pop().includes("page2")) {
      localStorage.setItem("totalBreakfast", $(".total").html());
      console.log(localStorage.getItem("totalBreakfast"));
    }

};
function funcCon(element,kg,type){
    if($(element).hasClass('active')){
      if(type == 1)
        co5 = 0;
      else if (type == 2)
        co6 = 0;
      else if (type == 3)
        co7 = 0;
      else if (type == 4)
        co8 = 0;
      $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

      if(window.location.pathname.split("/").pop().includes("page1")) {
        localStorage.setItem("totalDinner", $(".total").html());
        console.log(localStorage.getItem("totalDinner"));
      }
      else if (window.location.pathname.split("/").pop().includes("page2")) {
        localStorage.setItem("totalBreakfast", $(".total").html());
        console.log(localStorage.getItem("totalBreakfast"));
      }

    }else{
      if(type == 1)
        co5 = kg;
      else if (type == 2)
        co6 = kg;
      else if (type == 3)
        co7 = kg;
      else if (type == 4)
        co8 = kg;
      $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

      if(window.location.pathname.split("/").pop().includes("page1")) {
        localStorage.setItem("totalDinner", $(".total").html());
        console.log(localStorage.getItem("totalDinner"));
      }
      else if (window.location.pathname.split("/").pop().includes("page2")) {
        localStorage.setItem("totalBreakfast", $(".total").html());
        console.log(localStorage.getItem("totalBreakfast"));
      }



    }
    $(element).toggleClass('active');
    var count = $(element).parent().children('.active').length;
    if(count == 4){
       $(element).parent().addClass('multiple4');
       $(element).parent().removeClass('multiple3');
    }else if(count == 3) {
      $(element).parent().addClass('multiple3');
        $(element).parent().removeClass('multiple2 multiple4');
    }
    else if(count == 2) {
      $(element).parent().addClass('multiple2');
      $(element).parent().removeClass('thinBorder multiple3');
    }
    else if(count == 1) {
      $(element).parent().addClass('thinBorder');
      $(element).parent().removeClass('noBorder multiple2');
    }
    else {
      $(element).parent().addClass('noBorder');
      $(element).parent().removeClass('thinBorder');
    }
    // $(element).parent().addClass('thinBorder').removeClass('thickBorder mediumBorder noBorder' );
}

function func2(element,kg,type){
  //Some code
  $(element).parent().addClass('mediumBorder').removeClass('thickBorder thinBorder noBorder');
  if(type == 1)
    co1 = kg;
  else if (type == 2)
    co2 = kg;
  else if (type == 3)
    co3 = kg;
  else if (type == 4)
    co4 = kg;
  $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

  if(window.location.pathname.split("/").pop().includes("page1")) {
    localStorage.setItem("totalDinner", $(".total").html());
    console.log(localStorage.getItem("totalDinner"));
  }
  else if (window.location.pathname.split("/").pop().includes("page2")) {
    localStorage.setItem("totalBreakfast", $(".total").html());
    console.log(localStorage.getItem("totalBreakfast"));
  }

};

function func3(element,kg,type){
  //Some code
  $(element).parent().addClass('thickBorder').removeClass('thinBorder mediumBorder noBorder');
  if(type == 1)
    co1 = kg;
  else if (type == 2)
    co2 = kg;
  else if (type == 3)
    co3 = kg;
  else if (type == 4)
    co4 = kg;
  $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

  if(window.location.pathname.split("/").pop().includes("page1")) {
    localStorage.setItem("totalDinner", $(".total").html());
    console.log(localStorage.getItem("totalDinner"));
  }
  else if (window.location.pathname.split("/").pop().includes("page2")) {
    localStorage.setItem("totalBreakfast", $(".total").html());
    console.log(localStorage.getItem("totalBreakfast"));
  }

};
function func4(element,kg,type){
    //Some code
    $(element).parent().addClass('noBorder').removeClass('thinBorder mediumBorder thickBorder');
    if(type == 1)
      co1 = kg;
    else if (type == 2)
      co2 = kg;
    else if (type == 3)
      co3 = kg;
    else if (type == 4)
      co4 = kg;
    $(".total").html((co1+co2+co3+co4+co5+co6+co7+co8).toFixed(2));

    if(window.location.pathname.split("/").pop().includes("page1")) {
      localStorage.setItem("totalDinner", $(".total").html());
      console.log(localStorage.getItem("totalDinner"));
    }
    else if (window.location.pathname.split("/").pop().includes("page2")) {
      localStorage.setItem("totalBreakfast", $(".total").html());
      console.log(localStorage.getItem("totalBreakfast"));
    }

};
