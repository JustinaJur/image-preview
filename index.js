const getImages = async () => {
  const leftSide = document.querySelector(".left-side");
  const imgLg = document.querySelector(".img-lg");
  const imgData = document.querySelector(".img-data");

  const response = await fetch("https://picsum.photos/v2/list/");

  const fetchedImages = await response.json();

  fetchedImages.map(item => {
    leftSide.innerHTML += `<img class="img-sm" src="${item.download_url}" alt="${item.author}"/>`;
  });

  //initial displaying
  imgLg.setAttribute("src", fetchedImages[0].download_url);
  imgData.innerText = `Author - ${fetchedImages[0].author}. Size - ${fetchedImages[0].width}/${fetchedImages[0].height}`;

  const imgSm = document.querySelectorAll(".img-sm");

  for (let i = 0; i < imgSm.length; i++) {
    imgSm[i].addEventListener("click", () => {
      const shownPic = fetchedImages.filter(
        img => img.download_url === imgSm[i].src
      );
      imgLg.setAttribute("src", imgSm[i].src);
      imgData.innerText = `Author - ${shownPic[0].author}. Size - ${shownPic[0].width}/${shownPic[0].height}`;
    });
  }
};

getImages();
