let padding = 0;
let previousElement = "";
function slasher(element: string) {
  if (previousElement === "/" && element === "/") {
    padding--;
  } else if (previousElement === "\\" && element === "\\") {
    padding++;
  }
  previousElement = element;

  const repeatElement = Math.floor(Math.sqrt(padding)) || 1;
  console.log(
    " ".repeat(Math.max(padding, 0)) + element.repeat(repeatElement)
  );
  padding = Math.max(padding, 0);
}

const sleep = (m: number) => new Promise((resolve) => setTimeout(resolve, m));

while (true) {
  const rand = Math.random() > 0.5 ? "\\" : "/";
  slasher(rand);
  await sleep(50);
}
