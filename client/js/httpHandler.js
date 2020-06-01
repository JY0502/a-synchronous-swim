(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here (most likely $.get)
  // $.get(serverUrl,[data], [successCB]);
  const randomSwim = () => {
    $.get(serverUrl, (data)=>{SwimTeam.move(data)});
    //console.log('randomSwim was called');
  }
  // let's invoke randomSwim now
  setInterval(randomSwim, 1000);
// randomSwim();
  //console.log('httpHandler is invoked upon page load');
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // TODO: remember to fix the URL below (using the var serverURL)
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'FILL_ME_IN', // TODO
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
