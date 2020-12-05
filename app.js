$(() => {


  const $openBtn = $("#openModal");

  const $modal = $("#modal");

  const $closeBtn = $("#close");

  const openModal = () => {
    $modal.css("display", "block");
  }

  $openBtn.on("click", openModal);

  const closeModal = () => {
    $modal.css("display", "none")
  }

  $closeBtn.on("click", closeModal);

  $('form').on('submit', (event) => {
    event.preventDefault();
    openModal;

    const userInput = $('input[type="text"]').val();

  $.ajax({
    url: `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=c9e5efca-9984-4101-8beb-b6467586c96f`,

  }).then(
    (data) => {

      $('#modal-textbox').empty();
      const $hr = $('<hr>').css("background-color", "black").css("height", "1px").css("border", "none")
      const $h1 = $('<h1>').text(`${userInput} :`).css("font-family", "sans-serif").appendTo('#modal-textbox').append($hr)
      const $class = $('<p>').css("font-family", "sans-serif").appendTo('#modal-textbox').html(data[0].fl)

      const define = () => {
        for(let i = 0; i < 3; i++){
          console.log(data[i].shortdef);

          const $p = $('<p>')
                  .css("line-height", "150%")
                  .css("font-family", "sans-serif")
                  .appendTo('#modal-textbox')
                  .html("🔍  " + data[i].shortdef);
        }
      }
      define()
    })




    // $.ajax({
    //   url: `https://bing-image-search1.p.rapidapi.com/images/${userInput}`
    //   // url: `https://api.tenor.com/v1/search?q=${userInput}&key=O3BV287UVV0M&limit=1`,
    // }).then(
    //   (data) => {
    //     // const $gif = $('<img>').attr("src", data.results[0].url).appendTo('definition')
    //     console.log(data);
    //   }
    // )
  })
})
