$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();
    openModal;

    const userInput = $('input[type="text"]').val();

    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=btSEwRIppgqvwv4PzLVVOyWyrQPQr1mS&limit=5`);

      xhr.done(function(data) {

          const $gif = $('<img>')
                      .attr("src", data.data[0].url)
                      .appendTo('#modal-textbox');
                    });

    }
  )
})
