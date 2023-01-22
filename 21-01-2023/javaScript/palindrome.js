const palindrome = "level";
arrpalindrome = palindrome.split("");
// console.log(arrpalindrome);
// console.log(arrpalindrome.length);

let rev = "";
for (let i = arrpalindrome.length - 1; i >= 0; i--) {
  rev += arrpalindrome[i];
}
// console.log(rev);
if (palindrome === rev) {
  console.log("The given sentence " + palindrome + " is " + "palindrome");
} else {
  console.log(
    "Sorry the given sentence " + palindrome + " is " + "not a palindrome"
  );
}
