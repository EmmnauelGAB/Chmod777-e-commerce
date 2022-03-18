const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dtticbwtn', 
    uploadPreset: 'default-preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", () => {
      myWidget.open();
    }, false);