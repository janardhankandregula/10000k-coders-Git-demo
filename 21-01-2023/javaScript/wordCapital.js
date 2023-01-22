let word = "welcome to biggest reality show";

let wordarr = word.split(" ");
let finalResult = "";
for (i = 0; i < wordarr.length; i++) {
  let wordarr2 = wordarr[i].split("");

  let result1 = wordarr2[0].toUpperCase();
  let result2 = "";
  for (j = 1; j < wordarr2.length; j++) {
    result2 += wordarr2[j];
  }

  finalResult += result1 + result2 + " ";
}
console.log(finalResult);
