const class1 = [
  {
    mssv: "PS0000",
    name: "Nguyen Van A",
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: "pass",
  },
  {
    mssv: "PS0001",
    name: "Nguyen Van B",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "pass",
  },
];
const class2 = [
  {
    mssv: "PS0002",
    name: "Nguyen Van C",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "failed",
  },
  {
    mssv: "PS0003",
    name: "Nguyen Van D",
    avgPoint: 10,
    avgTraningPoint: 10,
    status: "pass",
  },
  {
    mssv: "PS0004",
    name: "Nguyen Van E",
    avgPoint: 10,
    avgTraningPoint: 2,
    status: "pass",
  },
];

// gộp danh sách sv của các lớp và lấy ra sv pass
const allStudent = class1
  .concat(class2)
  .filter((student) => student?.status !== "failed");
console.log(allStudent);

// danh sách sv có điểm trung binh từ cao đến thấp
const sortedByAvgPoint = [...class1, ...class2].sort(
  (a, b) => b.avgPoint - a.avgPoint
);
console.log("Danh sách sinh viên có điểm trung bình từ cao đến thấp ");
console.log(sortedByAvgPoint);

// sap xep sinh vien co diem ren luyen tu cao den thap
const sortedByAvgTraningPoint = [...class1, ...class2].sort(
  (a, b) => b.avgTraningPoint - a.avgTraningPoint
);
console.log("Danh sách sinh viên có điểm ren luyen  từ cao đến thấp ");
console.log(sortedByAvgTraningPoint);

// tìm sv có avgPoint và avgTraining cao nhất
const allstudents = class1.concat(class2);

const maxAvgPoint = allstudents.reduce((max, student) =>
  student.avgPoint > max.avgPoint ? student : max
);
const maxAvgTrainingPoint = allstudents.reduce((max, student) =>
  student.avgTraningPoint > max.avgTraningPoint ? student : max
);

console.log("Sinh vien có AvgPoint cao nhất là : ");
console.log(maxAvgPoint);
console.log("Sinh vien có AvgTraingingPoint cao nhất là : ");
console.log(maxAvgTrainingPoint);
