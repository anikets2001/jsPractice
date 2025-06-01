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
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

//   🛠 Example Usage:
const debounceFunc = function (e) {
  console.log("searching for:", e.target.value);
};
const handleInput = debounce(debounceFunc, 300);

document.getElementById("search").addEventListener("input", handleInput);

/*---

“This is my custom debounce function. 
It delays the execution of the provided func until after delay milliseconds have passed without the function being called again. 
I use clearTimeout to cancel the previous timer and setTimeout to restart it.

I’ve used apply(this, args) to preserve the original context and pass all arguments properly.

In the usage example, I debounce a search input so that the debounceFunc only runs after the user stops typing for 300ms. 
This improves performance by reducing unnecessary calls.”
---*/

/*--

🔸 Throttle
📘 Concept:
Throttle limits a function to execute once every X milliseconds, no matter how many times it's triggered.

📦 Use Case:
Resize or scroll event — don’t want it firing hundreds of times per second.
--*/

// Implementation

/*---
You have a button that logs "Clicked!" whenever it's pressed. 
But you want to limit how often that log can happen — 
e.g., only once every 2 seconds, even if the button is clicked rapidly.


<button id="throttle-btn">Click me rapidly</button>
---*/

function throttle(func, delay) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
}

function handleClick() {
  console.log("Clicked!");
}

const throttledClick = throttle(handleClick, 2000);
document
  .getElementById("throttle-btn")
  .addEventListener("click", throttledClick);


/*---
🎯 Interview Soundbites
✅ For Debounce:
"Debounce waits for a pause in event firing before calling the function — great for search fields or input validation where we want minimal API calls."

✅ For Throttle:
"Throttle restricts how often a function can run over time, ensuring it only fires once per interval — useful for resize or scroll listeners."
---*/

