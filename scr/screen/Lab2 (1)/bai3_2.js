// yêu cầu 2 : luôn chạy các promise kể cả thành công hay thất bại và log ra màn hình tb :const promise1 = new Promise((resolve , reject) => {
const promise1 = new Promise((resolve , reject) => {
setTimeout(() => {
        resolve("Hoàn thành promise 1 ");
    },2000);
});

const promise2 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 2 ");
    },3000);
});

const promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 3 ");
    },4000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results)  => {
    console.log("Tất cả promise đã hoàn thành ");
    results.forEach((result) => {
          if(result.status === 'fulfilled'){
            console.log("promise hoàn thành :", result.value);
          }else{
            console.log("promise thất bại : ",result.reason);
          }
    });
});