const reqURL = 'https://api.github.com/users/ParthPanchal26'

const xhr = new XMLHttpRequest();

xhr.open('GET', reqURL);

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const profile = JSON.parse(this.responseText);
        console.log('followers', profile);
        document.querySelector('.img').setAttribute("src", profile.avatar_url);
        document.querySelector('.name').innerHTML = ` <div class="name">Name : ${profile.name}</div>`
        document.querySelector('.followers').innerHTML = ` <div class="followers">Followers : ${profile.followers}</div>`
    }
}

xhr.send();