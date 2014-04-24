$(function() {
  $(".logo, .header-logo").lettering();

  // Typer
  // http://cosmos.layervault.com/typer-js.html
  $('[data-typer-targets]').typer();

  // SVG fallback
  if (!Modernizr.svg) {
    $("img[src$='.svg']").each(function() {
      $(this).attr("src", $(this).data('fallback'));
    });
  }
});
