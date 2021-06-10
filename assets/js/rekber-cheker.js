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
      $('#status_message').alert("<span class='data-success'>" + "Data Sukses Dimuat." + "</span>" + "<span class='success-message'>" + "REKBER VALID SILAHKAN LANJUTKAN TRANSAKSI ANDA" + "</span>");
    })
    .catch(e => {
     $('#status_message').alert("<span class='data-failed'>" + "Data Gagal Dimuat." + "</span>" + "<span class='failed-message'>" + "REKBER NO VALID SILAHKAN URUNGKAN NIAT ANDA UNTUK BERTRANSAKSI" + "</span>");
     $('#rekber_ovo').val("None");
      $('#rekber_dana').val("None");
      $('#rekber_gopay').val("None");
      $('#rekber_linkaja').val("None");
      $('#rekber_bca').val("None");
      $('#rekber_bni').val("None");
      $('#rekber_mandiri').val("None");
      $('#rekber_whatsapp').val("None");
      $('#rekber_an').val("None");
      $('#rekber_fb_name').val("None");
      $('#rekber_fb_url').val("None");
      console.log(e)
    });
})
