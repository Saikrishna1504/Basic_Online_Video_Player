const API_KEY = 'Your_API_Here';  

function searchYouTube() {
    const query = document.getElementById('search').value;
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                const videoThumbnail = item.snippet.thumbnails.default.url;
                const videoElement = `
                    <div onclick="playVideo('${videoId}')">
                        <img src="${videoThumbnail}" alt="${videoTitle}">
                        <p>${videoTitle}</p>
                    </div>`;
                results.innerHTML += videoElement;
            });
            document.getElementById('results').style.display = 'block';
            document.getElementById('player').style.display = 'none';
        });
}

function playVideo(videoId) {
    const player = document.getElementById('player');
    player.innerHTML = `
        <button onclick="goBack()">Back to Search</button>
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0&modestbranding=1&controls=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    document.getElementById('results').style.display = 'none';
    document.getElementById('player').style.display = 'block';
}

function goBack() {
    document.getElementById('results').style.display = 'block';
    document.getElementById('player').style.display = 'none';
}

// Snowflake animation script
document.addEventListener('DOMContentLoaded', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        const randomX = Math.random() * 100 + '%';
        const randomDelay = Math.random() * 10 + 's';
        snowflake.style.left = randomX;
        snowflake.style.animationDelay = randomDelay;
    });
});

// Voice search functionality (using Web Speech API)
const voiceSearchButton = document.getElementById('voiceSearchButton');

voiceSearchButton.addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
        document.getElementById('search').value = event.results[0][0].transcript;
        searchYouTube();
    };
    recognition.start();
});

// Comments functionality
function addComment() {
    const commentText = document.getElementById('comment-input').value;
    if (commentText.trim()) {
        const commentsContainer = document.getElementById('comments');
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = commentText;
        commentsContainer.appendChild(commentElement);
        document.getElementById('comment-input').value = ''; // Clear the input field
    }
}
