const returnArray = [];
const imageArray = () => {
  for (i = 1; i <= 100; i++) {
    let fileName = `image_`;
    let newFileName = "";
    if (i < 10) {
      newFileName = fileName + "00" + i;
      returnArray.push(newFileName);
    } else if (i < 100) {
      newFileName = fileName + "0" + i;
      returnArray.push(newFileName);
    } else {
      newFileName = fileName + i;
      returnArray.push(newFileName);
    }
  }
};

imageArray();
console.log(returnArray);
