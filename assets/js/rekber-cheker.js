<script>
$(document).ready(function(){
$("#submit_url").click(function(){
  var link_input = document.getElementById('link_rekber').value;
    url = new Object();
    url.VALETINEDAY = 20;
    url.GONGXIFATCAI = 30;
    url.PROMOQIUQIU = 40;
    url.QIUQIU = 30;
    console.log(link_input)
    if (url[link_input]) {
          document.getElementById('validurl').innerHTML= "<span class='promo-valid'>" + "Coupon applied!" + "</span>" ;
          $("#status_rekber").html("Silahkan Bertransaksi,Akun Trusted Oleh System");
    } else {
     document.getElementById('validurl').innerHTML= "<span class='promo-novalid'>" + "Coupon not applied!" + "</span>" ;
       $("#status_rekber").html("Jangan Bertransaksi,Akun Tidak dikenali System");
    }
 });
 });
</script>
