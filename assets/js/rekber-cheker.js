$('#api_button').click(function () {
  let id = $('#api_id_input').val();
  $('#api_id_input').html("<span class='status-message'>" + "Mengambil Data..." + "</span>");
  fetch('https://cdn.jsdelivr.net/gh/ProjeXCode/RekberPXC@master/data/' + id + '.json')
    .then(res => res.json())
    .then(res => {
      $('#rekber_ovo').val(res.OVO);
      $('#rekber_dana').val(res.DANA);
      $('#rekber_gopay').val(res.GOPAY);
      $('#rekber_linkaja').val(res.LINK_AJA);
      $('#rekber_bca').val(res.BCA);
      $('#rekber_bni').val(res.BNI);
      $('#rekber_mandiri').val(res.MANDIRI);
      $('#rekber_whatsapp').val(res.WHATSAPP);
      $('#rekber_an').val(res.ATAS_NAMA);
      $('#rekber_fb_name').val(res.FB_NAME);
      $('#rekber_fb_url').val(res.FB_URL);
     })
    .then(() => {
      $('#status_message').html("<span class='data-success'>" + "Data Sukses Dimuat." + "</span>" + "<span class='success-message'>" + "REKBER VALID SILAHKAN LANJUTKAN TRANSAKSI ANDA" + "</span>");
    })
    .catch(e => {
     $('#status_message').html("<span class='data-failed'>" + "Data Gagal Dimuat." + "</span>" + "<span class='failed-message'>" + "REKBER NO VALID SILAHKAN URUNGKAN NIAT ANDA UNTUK BERTRANSAKSI" + "</span>");
      console.log(e)
    });
})
