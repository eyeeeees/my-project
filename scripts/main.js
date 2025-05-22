
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт полностью загружен');
    
    // Анимация для карточек
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена! (Это демо, данные никуда не отправляются)');
        this.reset();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "../images/img1.jpeg",
	"../images/img2.jpeg",
	"../images/img3.jpeg",
	"../images/img4.jpeg",
	"../images/img5.jpeg"
   ];
    
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    
    function showImage(index) {
        galleryImage.src = images[index];
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });
    
    // Show first image initially
    showImage(currentIndex);
});
