Base64 = {
    encode: function(str) {
      return Buffer.from(str).toString('base64');
    },
  };

document.getElementById("graphSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const dataset = document.getElementById("datasetInput").value;
    const label1 = document.getElementById("label1Input").value;
    const label2 = document.getElementById("label2Input").value;
    const data1 = document.getElementById("data1Input").value;
    const data2 = document.getElementById("data2Input").value;
    if (dataset === "" || label1 === "" || label2 === "" || data1 === "" || data2 === "")
        return;
    console.log(dataset);

    fetch(`https://quickchart.io/chart?c={type:%27bar%27,data:{labels:[%27${label1}%27,%27${label2}%27],%20datasets:[{label:%27${dataset}%27,data:[${data1},${data2}]}]}}`).then(function (resp) {
        console.log(resp);
        return resp.blob();
    }).then(function (blob) {
        var image = new Image();
        image.src = URL.createObjectURL(blob);
        image.style.width = '80%';
        console.log(image.src);
        var results = document.getElementById("results");
        results.innerHTML = '';
        results.appendChild(image);
        results.style.backgroundColor = 'white';
        results.style.margin = '0 3em';
        results.style.padding = '2em';
        results.style.borderRadius = '5px';
    })
});