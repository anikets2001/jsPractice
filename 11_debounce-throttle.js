/*--
🔹 Debounce vs Throttle — Overview
Feature	              Debounce	                                    Throttle
Execution	            Delays execution until after a pause	        Executes at regular intervals
Use case	            Search input, auto-suggestions	              Scroll, resize, mousemove
Mechanism	            Resets timer on every event	                  Ignores repeated events during delay
---*/

/*-- 
🔸 Debounce
📘 Concept:
Debounce ensures a function runs only once after a delay, if there's no repeated call during that delay.

📦 Use Case:
Typing in a search bar — don't fire an API call on every keypress, wait until user stops typing.
---*/

// Implementation
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Clear the previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

//   🛠 Example Usage:
const handleInput = debounce(function (e) {
  console.log("Searching for:", e.target.value);
}, 300);

document.getElementById("search").addEventListener("input", handleInput);

/*--

🔸 Throttle
📘 Concept:
Throttle limits a function to execute once every X milliseconds, no matter how many times it's triggered.

📦 Use Case:
Resize or scroll event — don’t want it firing hundreds of times per second.
--*/

// Implementation
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

//   🛠 Example Usage:
const handleResize = throttle(function () {
  console.log("Window resized at", new Date().toISOString());
}, 500);

window.addEventListener("resize", handleResize);

/*---
🎯 Interview Soundbites
✅ For Debounce:
"Debounce waits for a pause in event firing before calling the function — great for search fields or input validation where we want minimal API calls."

✅ For Throttle:
"Throttle restricts how often a function can run over time, ensuring it only fires once per interval — useful for resize or scroll listeners."
---*/
