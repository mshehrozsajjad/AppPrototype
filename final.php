<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>One Page Wonder - App Prototype</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/one-page-wonder.min.css" rel="stylesheet">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
  <!-- or -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <!-- Custom styles of my own -->
  <link href="css/custom.css" rel="stylesheet">

</head>
<style>
body:before {
  content: "";
  position: fixed;
  left: 0; right: 0;
  top: 0; bottom: 0;
  /* background: url('../img/bg-overlay.png'); */
}


body:before {

  background: url('img/bg-final.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -100;
}
h5,h6 {
    font-weight: normal;
}
</style>
<body style="background:#ffffff;">


  <div class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-4 m-t-xl">
        <img style="height: 50px;object-fit:contain;" src="img/logo.png"/>
      </div>
    </div>


    <div class="row m-t-xl ">
      <div class="col-sm-6 m-t-lg">
       <div class="row justify-content-end">
           <h4 class="col-sm-6  m-t-xl" style="margin-right:50px"><span style="font-weight:lighter">FOOTPRINT</span></h4>
           <div class="col-sm-7 m-b-sm  mt-4 round m-t-sm text-center order-lg-1 ">


               <button class="btn btn-block font-thin co3 bg-green p-sm font-white round" style="height: 130px;width: 130px;"> <a href="#">

               </a><span class="total" style="font-weight:bold;font-size:32px">0</span><br/>
                 kg of  CO<sub>2</sub>e</button>


           </div>
       </div>




      </div>
      <div class="col-sm-6 m-t-lg">

        <div class="row ">
            <h4 class="col-sm-7 m-t-xl m-l-xs" style=""><span style="font-weight:lighter">YOU SAVED</span></h4>
            <div class="col-sm-12">
              <div class="row align-items-center">

                <div class="col-sm-4 m-b-sm  mt-4 round m-t-sm text-center ">


                    <button class="btn btn-block font-thin co3 bg-green p-sm font-white round" style="height: 130px;width: 130px;background: #264059;"> <a href="#">

                    </a><span class="total1" style="font-weight:bold;font-size:32px;">0</span><br/>
                      kg of  CO<sub>2</sub>e</button>


                </div>
                <div class="col-sm-6">
                  Compared to a <br/>
                   non-customized meal

                </div>
                <div class="col-sm-12 m-t-md m-b-xl">
                    <img style="height: 40px;object-fit:contain;" src="img/final-btn.png"/>
                </div>
                <div class="col-sm-12 m-t-xl">
                  <span style="text-decoration:underline">
                    *Terms and conditions
                  </span>apply
                </div>
              </div>


            </div>

        </div>
      </div>
    </div>
  </div>



  <!-- Footer -->
  <!-- <footer class="py-5 bg-black">
  <div class="container">
  <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
</div>
</footer> -->

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script>
window.onload = function() {
  console.log(localStorage.getItem("totalDinner"));
  $('.total').html((Number(localStorage.getItem("totalDinner"))+Number(localStorage.getItem("totalBreakfast"))).toFixed(2));
  $('.total1').html((14 -( Number(localStorage.getItem("totalDinner"))+Number(localStorage.getItem("totalBreakfast")))).toFixed(2));
  $('*').click(function(event) {
    if (this === event.target) { // only fire this handler on the original element
        window.location = "index.php";
    }
});
};
</script>
<!-- <script src="script/custom.js"></script> -->

</body>

</html>
