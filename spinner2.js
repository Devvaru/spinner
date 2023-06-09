let delay = 100;
let spinners = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let spinner of spinners) {
  setTimeout(() => {
    process.stdout.write(spinner);
  }, delay += 200);
}