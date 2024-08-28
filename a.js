// document.head.appendChild(Object.assign(document.createElement('script'), {src: '//'}));
// Function to apply styles to existing and new elements
function applyStyles() {
    // Set display: none to elements with the class name 'question-ai-answer'
    document.querySelectorAll('.question-ai-answer').forEach(element => {
        element.style.setProperty('display', 'none', 'important');
    });

    // Set the background color to white for elements with the class name 'question-ai-ask'
    document.querySelectorAll('.question-ai-ask').forEach(element => {
        element.style.setProperty('background-color', 'white', 'important');
    });


    document.querySelectorAll('.question-ai-ask__title').forEach(element => {
        element.style.setProperty('background-color', 'white', 'important');
        element.style.setProperty('color', 'white', 'important');
    });


    document.querySelectorAll('.question-ai-ask__chat').forEach(element => {
        element.style.setProperty('background-image', 'none', 'important');
    });

    document.querySelectorAll('.question-ai-loading').forEach(element => {
        element.style.setProperty('display', 'none', 'important');
    });

    document.querySelectorAll('.question-ai-error__icon').forEach(element => {
        element.style.setProperty('display', 'none', 'important');
    });

    document.querySelectorAll('.question-ai-error__title').forEach(element => {
        element.style.setProperty('display', 'none', 'important');
    });

    document.querySelectorAll('.question-ai-error__again').forEach(element => {
        element.style.setProperty('display', 'color', '#cdcdcd', 'important');
    });

    document.querySelectorAll('.question-ai-error__network').forEach(element => {
        element.style.setProperty('display', 'background-color', '#fff', 'important');
    });

}

// Apply styles initially
applyStyles();

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
    applyStyles(); // Apply styles whenever the DOM changes
});

// Start observing the entire document for added or modified nodes
observer.observe(document.body, { childList: true, subtree: true });
