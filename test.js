$('#api_button').click(function () {
  let id = $('#api_id_input').val();
  $('#status_message').html("<span class='status-message'>" + "Mengambil Data..." + "</span>");
  fetch('https://cdn.jsdelivr.net/gh/ProjeXCode/RekberPXC@master/data/' + id + '.json')
    .then(res => res.json())
    .then(res => {
      $('#rekber_ovo').text(res.OVO);
      $('#rekber_dana').text(res.DANA);
      $('#rekber_gopay').text(res.GOPAY);
      $('#rekber_linkaja').text(res.LINK_AJA);
      $('#rekber_bca').text(res.BCA);
      $('#rekber_bni').text(res.BNI);
      $('#rekber_mandiri').text(res.MANDIRI);
      $('#rekber_whatsapp').text(res.WHATSAPP);
      $('#rekber_an').text(res.ATAS_NAMA);
      $('#rekber_fb_name').text(res.FB_NAME);
      $('#rekber_fb_url').text(res.FB_URL);
     })
    .then(() => {
      $('#status_message').html("<span class='data-success'>" + "Data Sukses Dimuat." + "</span>" + "<span class='success-message'>" + "REKBER VALID SILAHKAN LANJUTKAN TRANSAKSI ANDA" + "</span>");
    })
    .catch(e => {
     $('#status_message').html("<span class='data-failed'>" + "Data Gagal Dimuat." + "</span>" + "<span class='failed-message'>" + "REKBER NO VALID SILAHKAN URUNGKAN NIAT ANDA UNTUK BERTRANSAKSI" + "</span>");
     $('#valid').text("None");
      console.log(e)
    });
})
