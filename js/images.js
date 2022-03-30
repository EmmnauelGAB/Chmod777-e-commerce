	let fileImage = document.getElementById('fileImage');
	let btnFake = document.getElementById('btnFake');
	let imageFile = document.getElementById('imageFile');

	btnFake.addEventListener('click', function() {
	    fileImage.click();
	});
	fileImage.addEventListener('change', function() {
	    previewFile('imageFile', 'fileImage', 'inputFile')
	        //previewFile(id imagen, input type file , textArea);
	});
	//previewFile(id imagen, input type file , textArea);
	function previewFile(img, inputFile, input) {

	    var preview = document.getElementById(img);
	    var file = document.getElementById(inputFile).files[0];
	    var reader = new FileReader();

	    reader.addEventListener("load", function() {
	        document.getElementById(input).value = reader.result;
	        preview.src = reader.result;
	    }, false);

	    if (file) {
	        reader.readAsDataURL(file);
	    } // file
	} // previewFile