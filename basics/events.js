console.log("EVENTS IN JS")
// event-utils.js

// Add event listener
const on = (element, event, handler) => {
  if (element) {
    element.addEventListener(event, handler);
  }
};

// Remove event listener
const off = (element, event, handler) => {
  if (element) {
    element.removeEventListener(event, handler);
  }
};

// Event delegation helper
const delegate = (parent, selector, eventType, handler) => {
  parent.addEventListener(eventType, (event) => {
    const targetElement = event.target.closest(selector);
    if (targetElement && parent.contains(targetElement)) {
      handler(event, targetElement);
    }
  });
};

// Event handlers for button and mouse events
const buttonClickHandler = (event) => {
  console.log('Button clicked:', event.target);
};

const mouseOverHandler = (event) => {
  console.log('Mouse over element:', event.target);
  event.target.style.backgroundColor = 'lightblue'; // example effect
};

const mouseOutHandler = (event) => {
  console.log('Mouse out of element:', event.target);
  event.target.style.backgroundColor = ''; // reset effect
};

// Usage examples:
// Attach click event on button with id 'myBtn'
const myButton = document.getElementById('myBtn');
on(myButton, 'click', buttonClickHandler);

// Attach mouseover and mouseout events on an element with id 'hoverArea'
const hoverArea = document.getElementById('hoverArea');
on(hoverArea, 'mouseover', mouseOverHandler);
on(hoverArea, 'mouseout', mouseOutHandler);

// Export utilities and example handlers if needed
export { on, off, delegate, buttonClickHandler, mouseOverHandler, mouseOutHandler };
