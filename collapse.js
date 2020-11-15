// Immer wenn ein neuer Inhalt geöffnet wird,
// werden alle anderen Inhalte versteckt...
$(".collapse-link").on('click', function() {
    $(".collapse").removeClass("show");
});