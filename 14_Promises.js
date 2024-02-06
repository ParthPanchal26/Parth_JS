const promise_one = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromise one execute!");
        resolve(200);
    }, 1000);
});

promise_one.then((resolve) => {
    console.log(`\nPromise one resolved with status code : ${resolve}`);
}).catch((err) => {
    console.log("\nPromise one rejected!");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromise two executed!");
        resolve(200);
    }, 1000);
})

    .then((resolve) => {
        console.log(`\nPromise two resolved with status code : ${resolve}`);
    })
    .catch((reject) => {
        console.log("\nPromise two rejected!");
    })


const promise_three = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromise three execute!");
        resolve({ userName: "Parth26", email: "parthpanchal2602@gmail.com" });
    }, 1000);
});

promise_three.then((resolve) => {
    console.log(resolve);
});

const promise_four = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (err) {
            resolve({ userName: 'Parth25', password: 'akashvaniRadio75' });
        } else {
            reject(`\nSomething went wrong!!!`)
        }
    }, 1000);
})

promise_four.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("\nThe promise is either resolved or rejected!");
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve({ userName: 'js_Parth', password: 'akashvaniRadio75' });
        } else {
            reject(`\nSomething went wrong!!!`)
        }
    }, 1000);
});

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// const getAllUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);

// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((result) => {
    return result.json();
}).then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});