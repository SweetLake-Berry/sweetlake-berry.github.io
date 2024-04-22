document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];
    let currentImageIdx = 0;
    const galleryImage = document.querySelector('.gallery img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function updateImage() {
        galleryImage.src = images[currentImageIdx];
        galleryImage.alt = 'Фото ' + (currentImageIdx + 1);
    }

    prevButton.addEventListener('click', function() {
        currentImageIdx = (currentImageIdx - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener('click', function() {
        currentImageIdx = (currentImageIdx + 1) % images.length;
        updateImage();
    });

    updateImage(); // Инициализируем первое изображение
});
