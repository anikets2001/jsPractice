/*---
✅ 1. Event Delegation
Definition:
Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements.

This works because of event bubbling.

---*/

// ✅ Example:
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>;

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
/*---

🧠 Why use it?

 Improves performance (fewer listeners)
 Useful when dynamically adding elements

 ---*/

/*--
 ✅ 2. Event Bubbling vs Capturing
Events in the DOM follow a 3-phase model:

Phase Name	        Description

Capturing	        Event travels from root → target’s parent
Target	            Event reaches the target element
Bubbling	        Event bubbles from target → root (default phase in JS)
---*/

// ✅ Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>;

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// ✅ Output if child is clicked:
// Child clicked
// Parent clicked   ← because of bubbling

/*---
✅ 3. Stopping Bubbling and Capturing
event.stopPropagation() → Stops event from propagating further.

event.stopImmediatePropagation() → Stops other handlers of the same event too.
---*/

/*---
✅ 4. addEventListener Options

element.addEventListener(type, listener, options);

✅ Options object:
Option	        Description
once	        Runs handler only once
passive	        Improves performance for scroll/touch
capture	Use     capturing phase instead of bubbling

✅ Example:

window.addEventListener("scroll", handleScroll, { passive: true });
button.addEventListener("click", handleClickOnce, { once: true });


✅ Summary Table – Interview Quick Notes

Topic	                        Key Idea
Event Delegation	            Parent handles events for children
Bubbling	                    Default phase: child → parent
Capturing	                    Phase before bubbling: parent → child
stopPropagation	                Stops bubbling or capturing
once	                        Listener runs once and then auto removed
passive	                        Hint to browser that listener won’t call preventDefault
capture                        	Makes listener run in capturing phase

---*/
