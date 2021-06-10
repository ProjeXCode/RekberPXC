$('#api_button').click(function () {
  let id = $('#api_id_input').val();
  $('#status_message').html("<span class='status-message'>" + "Mengambil Data..." + "</span>");
  fetch('https://cdn.jsdelivr.net/gh/ProjeXCode/RekberPXC@master/data/' + id + '.json')
    .then(res => res.json())
    .then(res => {
      $('#rekber_ovo').html(res.OVO);
      $('#rekber_dana').html(res.DANA);
      $('#rekber_gopay').html(res.GOPAY);
      $('#rekber_linkaja').html(res.LINK_AJA);
      $('#rekber_bca').html(res.BCA);
      $('#rekber_bni').html(res.BNI);
      $('#rekber_mandiri').html(res.MANDIRI);
      $('#rekber_whatsapp').html(res.WHATSAPP);
      $('#rekber_an').html(res.ATAS_NAMA);
      $('#rekber_fb_name').html(res.FB_NAME);
      $('#rekber_fb_url').html(res.FB_URL);
     })
    .then(() => {
      $('#status_message').html("<span class='data-success'>" + "Data Sukses Dimuat." + "</span>" + "<span class='success-message'>" + "REKBER VALID SILAHKAN LANJUTKAN TRANSAKSI ANDA" + "</span>");
    })
    .catch(e => {
     $('#status_message').html("<span class='data-failed'>" + "Data Gagal Dimuat." + "</span>" + "<span class='failed-message'>" + "REKBER NO VALID SILAHKAN URUNGKAN NIAT ANDA UNTUK BERTRANSAKSI" + "</span>");
     $('#valid').html("None");
      console.log(e)
    });
})
