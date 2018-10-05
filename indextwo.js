axios.get("https://lit-fortress-6467.herokuapp.com/object")
.then((res) =>{
  console.log(res)
   const imageContainerOne = document.querySelector(".album-container")
   let firstAlbumCover = document.createElement("img")
   firstAlbumCover.src = ("images/") + res.data.results[0].cover_art
   imageContainerOne.appendChild(firstAlbumCover)
   const imageContainerTwo = document.querySelector(".album-container-two")
   let secondAlbumCover = document.createElement("img")
   secondAlbumCover.src = ("images/") + res.data.results[1].cover_art
   imageContainerTwo.appendChild(secondAlbumCover)
   const imageContainerThree = document.querySelector(".album-container-three")
   let thirdAlbumCover = document.createElement("img")
   thirdAlbumCover.src = ("images/") + res.data.results[2].cover_art
   imageContainerThree.appendChild(thirdAlbumCover)
   const imageContainerFour = document.querySelector(".album-container-four")
   let fourthAlbumCover = document.createElement("img")
   fourthAlbumCover.src = ("images/") + res.data.results[3].cover_art
   imageContainerFour.appendChild(fourthAlbumCover)
   const imageContainerFive = document.querySelector(".album-container-five")
   let fifthAlbumCover = document.createElement("img")
   fifthAlbumCover.src = ("images/") + res.data.results[4].cover_art
   imageContainerFive.appendChild(fifthAlbumCover)

   let thePolice = document.querySelector(".album-container")
   thePolice.addEventListener("click", (e) => {
    let middleContainer = document.querySelector(".body-container")
    let policeName = document.createElement("p")
    policeName.innerHTML = res.data.results[0].artist
    middleContainer.appendChild(policeName)

    let blackUhuru = document.querySelector(".album-container-two")
    blackUhuru.addEventListener("click", (e) => {
     let middleContainer = document.querySelector(".body-container")
     let uhuruName = document.createElement("p")
     uhuruName.innerHTML = res.data.results[1].artist
     middleContainer.appendChild(uhuruName)

    let divisionFaces = document.querySelector(".album-container-three")
    divisionFaces.addEventListener("click", (e) => {
    let middleContainer = document.querySelector(".body-container")
    let splitFace = document.createElement("p")
    splitFace.innerHTML = res.data.results[2].artist
    middleContainer.appendChild(splitFace)

    let michaelJackson = document.querySelector(".album-container-four")
    michaelJackson.addEventListener("click", (e) => {
    let middleContainer = document.querySelector(".body-container")
    let thriller = document.createElement("p")
    thriller.innerHTML = res.data.results[3].artist
    middleContainer.appendChild(thriller)

    let adele = document.querySelector(".album-container-five")
    adele.addEventListener("click", (e) => {
    let middleContainer = document.querySelector(".body-container")
    let someoneLikeYou = document.createElement("p")
    someoneLikeYou.innerHTML = res.data.results[4].artist
    middleContainer.appendChild(someoneLikeYou)
          })
        })
      })
    })
  })
})
