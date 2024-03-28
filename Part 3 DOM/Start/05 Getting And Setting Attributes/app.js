// 1. Select the anchor tag
const a = document.querySelector("a");
// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));
// 3. Select a-two & set "href" attribute
const a2 = document.querySelector(".a-two");
// setAttribute(attrName, value)
a2.setAttribute("href", "https://www.youtube.com/@joemasu7956");
console.log(a);
