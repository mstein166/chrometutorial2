const article = document.querySelector("article");
const title = document.querySelector("headline-1 js-widont prettify");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  if (readingTime > 5) {
    badge.style.color = "red"; // Change text color to red
  }
  
  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;

  if (date || heading) {
    (date ?? heading).insertAdjacentElement("afterend", badge);
  } else {
    console.warn('No suitable element found to insert the badge after. Consider appending it to another element.');
  }

  if ("headline-1 js-widont prettify") {
    badge.textContent = 'Your movie is...";
  }
