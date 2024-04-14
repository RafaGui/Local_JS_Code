const apiUrl = "https://api.thecatapi.com/v1/images/search"

async function getImageCat (file) {
    let image = await fetch(apiUrl)
        .then(response => response.json())
        .then(data =>
            document.querySelector('.sett-img').setAttribute("src", data[0].url)
        );
}

document.querySelector('button').addEventListener('click', getImageCat);