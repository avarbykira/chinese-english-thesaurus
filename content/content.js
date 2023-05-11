// Create the popup element and add it to the document body
const popup = document.createElement('div');
popup.setAttribute('id', 'selection-popup');
document.body.appendChild(popup);

// Listen for 'mouseup' event on all input fields and textareas
document.body.addEventListener('mouseup', function(e) {
  if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
    let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd).trim();
    if(selection !== ''){
      // Update popup content and position
      popup.textContent = selection;
      popup.style.top = `${e.pageY}px`;
      popup.style.left = `${e.pageX}px`;
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  }
});

// Hide the popup when clicking anywhere
document.body.addEventListener('mousedown', function() {
  popup.style.display = 'none';
});
