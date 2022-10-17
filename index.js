const images = [
        "https://cdn.pixabay.com/photo/2022/10/12/10/45/bird-7516219_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/10/03/02/22/seagull-7494831_960_720.jpg",
        "https://cdn.pixabay.com/photo/2022/07/03/22/00/cat-7300029_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
        "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg"
];

function randomImages() {
    for (let i = 0; i <= images.length; i++) {
        let image = images[Math.floor(Math.random() * 15)];
        var result = document.getElementById("result");
        var img = document.createElement("img");
        img.src = image;
        result.appendChild(img);
    }
}

document.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        randomImages();
    }
});