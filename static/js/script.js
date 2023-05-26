// // Actions:

// const closeButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
// <title>remove</title>
// <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
// </svg>
// `;
// const menuButton = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
// <title>ellipsis-horizontal</title>
// <path d="M16 7.843c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 1.98c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// <path d="M16 19.908c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 14.046c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// <path d="M16 31.974c-2.156 0-3.908-1.753-3.908-3.908s1.753-3.908 3.908-3.908c2.156 0 3.908 1.753 3.908 3.908s-1.753 3.908-3.908 3.908zM16 26.111c-1.077 0-1.954 0.877-1.954 1.954s0.877 1.954 1.954 1.954c1.077 0 1.954-0.877 1.954-1.954s-0.877-1.954-1.954-1.954z"></path>
// </svg>
// `;

// const actionButtons = document.querySelectorAll('.action-button');

// if (actionButtons) {
//   actionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const buttonId = button.dataset.id;
//       let popup = document.querySelector(`.popup-${buttonId}`);
//       console.log(popup);
//       if (popup) {
//         button.innerHTML = menuButton;
//         return popup.remove();
//       }

//       const deleteUrl = button.dataset.deleteUrl;
//       const editUrl = button.dataset.editUrl;
//       button.innerHTML = closeButton;

//       popup = document.createElement('div');
//       popup.classList.add('popup');
//       popup.classList.add(`popup-${buttonId}`);
//       popup.innerHTML = `<a href="${editUrl}">Edit</a>
//       <form action="${deleteUrl}" method="delete">
//         <button type="submit">Delete</button>
//       </form>`;
//       button.insertAdjacentElement('afterend', popup);
//     });
//   });
// }

// Menu

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

if (dropdownButton) {
  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
}

// Upload Image
const photoInput = document.querySelector("#avatar");
const photoPreview = document.querySelector("#preview-avatar");
if (photoInput)
  photoInput.onchange = () => {
    const [file] = photoInput.files;
    if (file) {
      photoPreview.src = URL.createObjectURL(file);
    }
  };

// Scroll to Bottom
const conversationThread = document.querySelector(".room__box");
if (conversationThread) conversationThread.scrollTop = conversationThread.scrollHeight;



//const toggleButton = document.querySelector("#theme-toggle");
//const rootElement = document.querySelector("html");
//
//toggleButton.addEventListener("click", () => {
//  rootElement.classList.toggle("dark");
//});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the mode from the localStorage or default to 'light'
  var currentMode = localStorage.getItem('mode') || 'light';
  var html = document.querySelector('html');
  
  // Set the initial mode class on the HTML tag
  html.classList.add(currentMode);
  
  // Function to toggle between light and dark mode
  function toggleMode() {
    if (html.classList.contains('light')) {
      html.classList.remove('light');
      html.classList.add('dark');
      currentMode = 'dark';
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      currentMode = 'light';
    }
    
    // Save the mode to localStorage
    localStorage.setItem('mode', currentMode);
  }
  
  // Find the button element and attach the click event listener
  var modeToggleBtn = document.getElementById('mode-toggle-btn');
  modeToggleBtn.addEventListener('click', toggleMode);
  button.classList.toggle("dark-mode");
});




$(document).ready(function() {
  var isVirtualInput = false;

  // Function to show the virtual keyboard
  function showKeyboard() {
    // Attach the keyboard to the input element
    var keyboard = $('#keyboard-container').getkeyboard();
    keyboard.reveal();
  }

  // Function to hide the virtual keyboard
  function hideKeyboard() {
    // Hide the keyboard
    $('#keyboard-container').getkeyboard().close();
  }

  // Show the keyboard when the input field is clicked
  $('input[name="body"]').on('click', function() {
    showKeyboard();
  });

  // Hide the keyboard when clicked anywhere outside the input field
  $(document).on('click', function(event) {
    if (!$(event.target).closest('input[name="body"]').length) {
      hideKeyboard();
    }
  });

  // Attach the keyboard to the input element initially
  $('#keyboard-container').keyboard({
    layout: 'qwerty', // Set the keyboard layout (e.g., qwerty, alphabetical, numeric)
    usePreview: false, // Disable key preview
    autoAccept: true, // Automatically accept the typed key
    alwaysOpen: false, // Hide the keyboard when not focused on the input field
    position: {
      of: $('input[name="body"]'), // Set the position of the keyboard relative to the input field
      my: 'center top',
      at: 'center bottom',
      offset: '0 10', // Adjust the offset if needed
      collision: 'flipfit flipfit' // Adjust collision handling if needed
    },
    change: function(e, keyboard, el) {
      if (isVirtualInput) {
        var virtualInputValue = keyboard.preview.value.replace(/<br>/g, '\n');
        var currentValue = $('input[name="body"]').val();
        var caretPosition = el.selectionStart;
        var newValue = currentValue.slice(0, caretPosition) + virtualInputValue + currentValue.slice(caretPosition);
        $('input[name="body"]').val(newValue);
        isVirtualInput = false;
      } else {
        isVirtualInput = true;
      }
    }
  });

  // Hide the keyboard initially
  hideKeyboard();
});


