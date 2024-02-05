// Function for full screen activation
function activate(ele) {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  }
}

// Function for full screen activation
function deactivate() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}