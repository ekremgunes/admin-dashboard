var openFile = function (event) {
    
    var input = event.target;


    var reader = new FileReader();
    reader.onload = function () {

        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        var outputDiv = document.getElementById("output-div");
        var outputImgDiv = document.getElementById("output-img-div");

        outputImgDiv.style.display = "none";
        output.style.display = "inline";

    };
    reader.readAsDataURL(input.files[0]);
};