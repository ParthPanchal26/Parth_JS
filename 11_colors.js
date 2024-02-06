const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let changeBG;

const startChangingColor = function () {
    const changeBGcolor = () => {
        document.body.style.backgroundColor = randomColor();
    }
    if (!changeBG) {
        changeBG = setInterval(changeBGcolor, 600);
    }
};

const stopChangingColor = function () {
    clearInterval(changeBG);
    changeBG = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);