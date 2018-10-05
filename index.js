axios.get("https://lit-fortress-6467.herokuapp.com/object")
.then((res) => {
    const imageContainer = document.querySelector(".container-right")
    let albumCoverOne = document.createElement("img")
    albumCoverOne.src = ("images/") + res.data.results[ Math.floor(Math.random() * (4 - 0 + 1)) + 0].cover_art
    console.log(res.data.results)
    imageContainer.appendChild(albumCoverOne)
    let albumCoverTwo = document.createElement("img")
    albumCoverTwo.src = ("images/") + res.data.results[ Math.floor(Math.random() * (4 - 0 + 1)) + 0].cover_art
    imageContainer.appendChild(albumCoverTwo)
    let albumCoverThree = document.createElement("img")
    albumCoverThree.src = ("images/") + res.data.results[Math.floor(Math.random() * (4 - 0 + 1)) + 0].cover_art
    imageContainer.appendChild(albumCoverThree)
})
