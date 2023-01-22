let str = "janardhan";
//console.dir(str.split(""));
let arr = str.split("");
//console.log(arr[2]);
let add = "";
for (i = 0; i < arr.length; i++) {
  if (arr[i] === "a") {
    add += arr[i];
  } else if (arr[i] === "e") {
    add += arr[i];
  } else if (arr[i] === "i") {
    add += arr[i];
  } else if (arr[i] === "o") {
    add += arr[i];
  } else if (arr[i] === "u") {
    add += arr[i];
  }
}

let addlegth = console.log(
  "the count of vowels present in " + "" + str + " is " + add.length
);
