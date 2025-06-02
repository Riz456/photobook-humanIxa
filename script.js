document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

    // Fixed Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate the menu
        if (navLinks.classList.contains('active')) {
            gsap.from('.nav-links li', {
                x: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Hero section animations
    gsap.from('.title-line', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
    });

    // ... (keep other animations the same) ...

    // Fixed Data Loading
    function loadSampleData() {
        // Sample gallery data - make sure these paths are correct
        const galleryData = [
            { img: 'file.png', category: 'class', caption: 'First day of school' },
            { img: 'https://via.placeholder.com/600x400/00a878/ffffff?text=School+Event', category: 'event', caption: 'Annual school festival' },
            { img: 'https://via.placeholder.com/600x400/00a878/ffffff?text=Sports+Day', category: 'sport', caption: 'Basketball tournament' },
            { img: 'https://via.placeholder.com/600x400/00a878/ffffff?text=Graduation', category: 'graduation', caption: 'Graduation ceremony' },
            { img: 'https://via.placeholder.com/600x400/00a878/ffffff?text=Science+Fair', category: 'event', caption: 'Science fair exhibition' },
            { img: 'https://via.placeholder.com/600x400/00a878/ffffff?text=Library', category: 'class', caption: 'Study session in library' }
        ];

        const galleryContainer = document.querySelector('.modern-gallery');
        if (galleryContainer) {
            galleryContainer.innerHTML = ''; // Clear existing content
            galleryData.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.setAttribute('data-lightbox', item.img);
                galleryItem.setAttribute('data-caption', item.caption);
                galleryItem.innerHTML = `
                    <img src="${item.img}" alt="${item.caption}" loading="lazy">
                    <div class="gallery-caption">${item.caption}</div>
                `;
                galleryContainer.appendChild(galleryItem);
            });
        }

        // Sample student data
        const studentData = [
            { name: 'Alex Johnson', class: 'XII IPA 1', quote: 'The best three years of my life!', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Alex' },
            { name: 'Bella Chen', class: 'XII IPA 2', quote: 'Made friends for life here', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Bella' },
            { name: 'Chris Wilson', class: 'XII IPS 1', quote: 'Teachers who truly cared', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Chris' },
            { name: 'Diana Martinez', class: 'XII IPA 3', quote: 'Unforgettable experiences', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Diana' },
            { name: 'Ethan Brown', class: 'XII IPS 2', quote: 'Ready for the next chapter', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Ethan' },
            { name: 'Fiona Lee', class: 'XII IPA 1', quote: 'Will miss these days', img: 'https://via.placeholder.com/300x400/00a878/ffffff?text=Fiona' }
        ];

        const studentGrid = document.querySelector('.student-grid');
        if (studentGrid) {
            studentGrid.innerHTML = ''; // Clear existing content
            studentData.forEach(student => {
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card';
                studentCard.innerHTML = `
                    <img src="${student.img}" alt="${student.name}" class="student-image" loading="lazy">
                    <div class="student-info">
                        <h3 class="student-name">${student.name}</h3>
                        <p class="student-class">${student.class}</p>
                        <p class="student-quote">"${student.quote}"</p>
                        <div class="social-links">
                            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                `;
                studentGrid.appendChild(studentCard);
            });
        }

        // Sample timeline data
        const timelineData = [
            { date: 'August 2020', title: 'First Day', description: 'Our journey began as nervous freshmen', images: [
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Day1',
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Day2'
            ]},
            { date: 'March 2021', title: 'School Trip', description: 'Memorable trip to the national museum', images: [
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Trip1'
            ]},
            { date: 'October 2021', title: 'Sports Day', description: 'Won first place in basketball tournament', images: [
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Sports1',
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Sports2'
            ]},
            { date: 'May 2022', title: 'Science Fair', description: 'Our class project won the innovation award', images: [
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Science1'
            ]},
            { date: 'June 2023', title: 'Graduation', description: 'The bittersweet end of our high school journey', images: [
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Grad1',
                'https://via.placeholder.com/300x200/00a878/ffffff?text=Grad2'
            ]}
        ];

        const timelineContainer = document.querySelector('.modern-timeline');
        if (timelineContainer) {
            timelineContainer.innerHTML = ''; // Clear existing content
            timelineData.forEach((item, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                
                let imagesHTML = '';
                item.images.forEach(img => {
                    imagesHTML += `<img src="${img}" class="timeline-image" data-lightbox="${img}" data-caption="${item.title} - ${item.date}" loading="lazy">`;
                });
                
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-date">${item.date}</div>
                        <h3 class="timeline-title">${item.title}</h3>
                        <p class="timeline-description">${item.description}</p>
                        <div class="timeline-images">${imagesHTML}</div>
                    </div>
                    <div class="timeline-dot"></div>
                `;
                timelineContainer.appendChild(timelineItem);
            });
        }

        // Sample messages
        const messageData = [
            { name: 'Mr. Anderson', class: 'Teacher', message: 'So proud of all your achievements. Wishing you the best for your future endeavors!', date: '2 days ago' },
            { name: 'Sarah Williams', class: 'XII IPA 1', message: 'Can\'t believe it\'s over! These three years went by so fast. Let\'s stay in touch everyone!', date: '1 week ago' },
            { name: 'David Kim', class: 'XII IPS 2', message: 'From strangers to family. Thank you all for the memories that will last a lifetime.', date: '2 weeks ago' }
        ];

        const messageWall = document.querySelector('.message-wall');
        if (messageWall) {
            messageWall.innerHTML = ''; // Clear existing content
            messageData.forEach(msg => {
                const messageCard = document.createElement('div');
                messageCard.className = 'message-card';
                messageCard.innerHTML = `
                    <div class="message-header">
                        <div>
                            <span class="message-author">${msg.name}</span>
                            <span class="message-class">${msg.class}</span>
                        </div>
                        <span class="message-date">${msg.date}</span>
                    </div>
                    <div class="message-text">${msg.message}</div>
                `;
                messageWall.appendChild(messageCard);
            });
        }

        // Reinitialize event listeners for newly created elements
        initEventListeners();
    }

    function initEventListeners() {
        // Reinitialize gallery item hover effects
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.03,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(item.querySelector('img'), {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(item.querySelector('.gallery-caption'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(item.querySelector('img'), {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                gsap.to(item.querySelector('.gallery-caption'), {
                    y: 20,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Reinitialize lightbox functionality
        const lightbox = document.querySelector('.modern-lightbox');
        if (lightbox) {
            const lightboxImg = document.querySelector('.lightbox-image');
            const lightboxCaption = document.querySelector('.lightbox-caption');
            const closeBtn = document.querySelector('.lightbox-close');
            const prevBtn = document.querySelector('.lightbox-nav.prev');
            const nextBtn = document.querySelector('.lightbox-nav.next');

            let currentImageIndex = 0;
            let images = [];

            document.querySelectorAll('[data-lightbox]').forEach((item, index) => {
                images.push({
                    src: item.getAttribute('data-lightbox'),
                    caption: item.getAttribute('data-caption') || ''
                });

                item.addEventListener('click', function() {
                    currentImageIndex = index;
                    openLightbox();
                });
            });

            function openLightbox() {
                lightboxImg.src = images[currentImageIndex].src;
                lightboxCaption.textContent = images[currentImageIndex].caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            function navigateLightbox(direction) {
                currentImageIndex += direction;
                
                if (currentImageIndex < 0) {
                    currentImageIndex = images.length - 1;
                } else if (currentImageIndex >= images.length) {
                    currentImageIndex = 0;
                }
                
                lightboxImg.style.opacity = 0;
                
                setTimeout(() => {
                    lightboxImg.src = images[currentImageIndex].src;
                    lightboxCaption.textContent = images[currentImageIndex].caption;
                    lightboxImg.style.opacity = 1;
                }, 300);
            }

            if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
            if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
            if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));

            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            document.addEventListener('keydown', function(e) {
                if (lightbox.classList.contains('active')) {
                    if (e.key === 'Escape') {
                        closeLightbox();
                    } else if (e.key === 'ArrowLeft') {
                        navigateLightbox(-1);
                    } else if (e.key === 'ArrowRight') {
                        navigateLightbox(1);
                    }
                }
            });
        }
    }

    // Load sample data after everything is initialized
    loadSampleData();
});