const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach((videoItem) => {
    const video = videoItem.querySelector('video');

    videoItem.addEventListener('mouseenter', () => {
        video.play();
    });

    videoItem.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to the beginning
    });
});
