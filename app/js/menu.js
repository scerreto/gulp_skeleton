console.log("menu js");


function fetch_text (url) {
  return fetch(url).then((response) => (response.text()));
}

function load (page) {
  fetch_text(`pages/${page}.html`).then((html) => {
    document.getElementById("main_content").innerHTML = html;
  }).catch((error) => {
    console.warn(error);
  });
}

