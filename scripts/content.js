const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector("header");
  const date = article.querySelector("time")?.parentNode;

  if (date || heading) {
    (date ?? heading).insertAdjacentElement("afterend", badge);
  } else {
    console.warn('No suitable element found to insert the badge after. Consider appending it to another element.');
  }
}
