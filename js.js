
document.addEventListener('DOMContentLoaded', function() {
    var message = document.getElementById('message');
    var audio = document.getElementById('background-music');

    message.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Alert function
    function showAlert() {
        alert("Please click the message first to start the background music!");
    }

    // Call the alert function when the page loads
    showAlert();
});
