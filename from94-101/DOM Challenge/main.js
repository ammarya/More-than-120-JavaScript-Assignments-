//  body styling
document.body.style.cssText =
  "margin: 0px; background-color: rgb(236, 236, 236);font-family: Tahoma, Ariel;";
// ---------------------------------------------------------------------------------------

// header styling
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText =
  "display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";
document.body.appendChild(header);

// header logo
let headerLogo = document.createElement("div");
headerLogo.className = "website-logo";
headerLogo.style.cssText =
  "font-weight: bold; color:rgb(35, 169, 110); font- size: 26px;";
headerLogo.innerHTML = "Ammar";
header.appendChild(headerLogo);

// header sections
let ul = document.createElement("ul");
ul.className = "content";
ul.style.cssText =
  "padding: 0px; margin: 0px; display: flex; list-style: none;";
let ulSections = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < ulSections.length; i++) {
  let li = document.createElement("li");
  li.style.cssText = "margin: 5px; color: rgb(136 136 136);";
  li.innerHTML = ulSections[i];
  ul.appendChild(li);
}
header.appendChild(ul);
// ---------------------------------------------------------------------------------------
// page content
let pageContent = document.createElement("div");
document.body.appendChild(pageContent);
pageContent.className = "main-container";
pageContent.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
  let span = document.createElement("span");
  span.style.cssText =
    "font-size: 40px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
  span.innerHTML = i;
  product.appendChild(span);
  product.innerHTML = "Product";
  pageContent.appendChild(product);
}
// ---------------------------------------------------------------------------------------

// footer
let footer = document.createElement("footer");
document.body.appendChild(footer);
footer.className = "footer";
footer.style.cssText =
  "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
footer.innerHTML = "Copyright 2021";
