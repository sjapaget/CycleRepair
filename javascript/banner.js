fetch('https://api.unsplash.com/photos/random?query=bicycle&count=5&client_id=cmVx6TdrFgjEaBYxLPPbmWuxlZBJMeCsyVFxI98D4FE')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].urls.thumb)
        const photosArr = document.getElementsByClassName("photo-banner-img")
        console.log(photosArr[0].src)
        for (let i = 0; i < photosArr.length; i++){
            photosArr[i].src = data[i].urls.small
        }

    });