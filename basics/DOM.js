console.log("DOM in JS")
// dom-utils.js

// Element Selection
const $id = (id) => document.getElementById(id);
const $class = (className) => document.getElementsByClassName(className);
const $tag = (tag) => document.getElementsByTagName(tag);
const $query = (selector) => document.querySelector(selector);
const $queryAll = (selector) => document.querySelectorAll(selector);

// Element Creation & Insertion
const createElement = (tag, text) => {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  return el;
};

const append = (parent, child) => parent.appendChild(child);
const insertBefore = (newNode, referenceNode) => 
  referenceNode.parentNode.insertBefore(newNode, referenceNode);

// Event Handling
const on = (element, event, handler) => element.addEventListener(event, handler);
const off = (element, event, handler) => element.removeEventListener(event, handler);

// Class Manipulation
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);

// Export (for modules) or leave as global utilities   