axios.get(" https://lit-fortress-6467.herokuapp.com/object")
.then((res) => {
  console.log(res)
    const imageContainer = document.querySelector(".container-right")
    let albumCoverone = document.createElement("img")
    albumCoverone.src = "images/21.jpg"
    imageContainer.appendChild(albumCoverone)
    let albumCoverTwo = document.createElement("img")
    albumCoverTwo.src = "images/thriller.jpg"
    imageContainer.appendChild(albumCoverTwo)
    let albumCoverThree = document.createElement("img")
    albumCoverThree.src = "images/red.jpg"
    imageContainer.appendChild(albumCoverThree)
})
