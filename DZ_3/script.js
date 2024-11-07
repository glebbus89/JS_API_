


const elemName = document.querySelector('.name');
const eleBtnLike = document.querySelector('.btn_like');
const elemLike = document.querySelector('.like');
const elemPhoto = document.querySelector('.photo');

let count = 0;


async function getPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(` error: ${error}`);
        return [];
    }
}

async function changePhoto() {
    const data = await getPhoto();
    elemPhoto.src = data.urls.small;
    elemName.textContent = `Автор фотографии: ${data.user.name}`;
}
changePhoto();

if (eleBtnLike) {
    eleBtnLike.addEventListener('click', () => {
        count++;
        elemLike.textContent = ` Количество лайков:${count}`;
    });
}



