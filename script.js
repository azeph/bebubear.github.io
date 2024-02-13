document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "<span class='response-text'>Yay! You said yes! Happy Valentine's Day, my love! 💖😍</span>";
    // Redirect to the romantic page
    window.location.href = "romantic_page.html";
});

document.getElementById('maybeBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "<span class='response-text'>Maybe? I'll take that as a yes! Happy Valentine's Day, my dear! 💖😘</span>";
window.location.href = "romantic_page.html";
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "<span class='response-text'>Oh, alright. Happy Valentine's Day! But your charm is irresistible! 💖😊</span>";
window.location.href = "romantic_page.html";
});

