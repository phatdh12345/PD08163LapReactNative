// yeu cau 1 : dừng các promise  khác nếu một promise thất bại và log ra lỗi promise đó

const promise1 = new Promise((resolve , reject) => {
    setTimeout(() => {
        reject("Lỗi promise 1 ");
    },2000);
});

const promise2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 2 ");
    },3000);
});

const promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hoàn promise 3 ");
    },4000);
});

Promise.all([promise1,promise2,promise3])
.then((results) => {
    console.log("Tất cả các promise hoàn thành thành công ");
})
.catch((error) => {
    console.log("Promise thất bại : ", error);
});