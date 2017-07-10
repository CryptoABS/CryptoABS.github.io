$("select.language-switcher").change(() => {
  let locale = $("select.language-switcher option:selected").val();
  window.location.assign(locale == "en-US" ? `./` : `./index_${locale}.html`);
});