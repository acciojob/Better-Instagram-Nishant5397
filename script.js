//your code here
// Get all the draggable elements
const images = document.querySelectorAll('.image');

// Store the currently selected element
let selectedElement = null;

// Add event listeners to each draggable element
images.forEach(image => {
  // Event listener for starting the drag
  image.addEventListener('dragstart', (event) => {
    selectedElement = event.target;
    // Set a custom data transfer property to identify the dragged element
    event.dataTransfer.setData('text/plain', 'dragging');
  });

  // Event listener for dragging over a droppable area
  image.addEventListener('dragover', (event) => {
    // Prevent the default behavior which would not allow dropping
    event.preventDefault();
  });

  // Event listener for dropping on a droppable area
  image.addEventListener('drop', (event) => {
    // Prevent the default behavior which would open the dropped image as a link
    event.preventDefault();

    // Swap the background images of the dragged and dropped elements
    const backgroundImage = selectedElement.style.backgroundImage;
    selectedElement.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = backgroundImage;

    // Reset the selected element
    selectedElement = null;
  });
});
