// Shift Protein Bar Website JavaScript
// Modern, Professional Interface with Advanced Interactions

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        headerOffset: 100,
        scrollThreshold: 150,
        animationDelay: 100,
        productChangeInterval: 5000
    };
    
    // Cache DOM elements for performance
    const elements = {
        header: document.querySelector('header'),
        navLinks: document.querySelectorAll('.nav-menu a[href^="#"]'),
        ctaButtons: document.querySelectorAll('.cta-primary, .cta-secondary, .nav-button'),
        productCards: document.querySelectorAll('.product-card'),
        carouselBtns: document.querySelectorAll('.carousel-btn'),
        proteinBars: document.querySelectorAll('.protein-bar'),
        animatedElements: document.querySelectorAll('.science-card, .testimonial-card, .product-card')
    };
    
    // Smooth scrolling navigation
    const initSmoothScrolling = () => {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const elementPosition = targetSection.offsetTop;
                    const offsetPosition = elementPosition - CONFIG.headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    elements.navLinks.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    };
    
    // Enhanced header effects
    const initHeaderEffects = () => {
        let ticking = false;
        
        const updateHeader = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > CONFIG.scrollThreshold) {
                elements.header.style.background = 'rgba(26, 18, 12, 0.98)';
                elements.header.style.backdropFilter = 'blur(20px)';
                elements.header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            } else {
                elements.header.style.background = 'rgba(26, 18, 12, 0.95)';
                elements.header.style.backdropFilter = 'blur(20px)';
                elements.header.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.05)';
            }
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
    };
    
    // Advanced scroll-triggered animations
    const initScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px'
        };
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.classList.add('animated');
                    }, index * CONFIG.animationDelay);
                }
            });
        }, observerOptions);
        
        elements.animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px) scale(0.95)';
            el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(el);
        });
    };
    
    // Product carousel functionality
    const initProductCarousel = () => {
        let currentProduct = 0;
        const products = Array.from(elements.productCards);
        
        const updateActiveProduct = (index) => {
            products.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
        };
        
        // Carousel button controls
        elements.carouselBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('next')) {
                    currentProduct = (currentProduct + 1) % products.length;
                } else {
                    currentProduct = currentProduct === 0 ? products.length - 1 : currentProduct - 1;
                }
                updateActiveProduct(currentProduct);
            });
        });
        
        // Auto-rotate products
        setInterval(() => {
            currentProduct = (currentProduct + 1) % products.length;
            updateActiveProduct(currentProduct);
        }, CONFIG.productChangeInterval);
        
        // Product card click interactions
        products.forEach((card, index) => {
            card.addEventListener('click', () => {
                currentProduct = index;
                updateActiveProduct(currentProduct);
            });
        });
    };
    
    // Interactive protein bars in hero
    const initProteinBarInteractions = () => {
        elements.proteinBars.forEach(bar => {
            bar.addEventListener('mouseenter', () => {
                const flavor = bar.getAttribute('data-flavor');
                showFlavorTooltip(bar, flavor);
            });
            
            bar.addEventListener('mouseleave', () => {
                hideFlavorTooltip();
            });
            
            bar.addEventListener('click', () => {
                animateBarSelection(bar);
            });
        });
    };
    
    // Tooltip functionality
    const showFlavorTooltip = (element, text) => {
        let tooltip = document.querySelector('.flavor-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'flavor-tooltip';
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(26, 18, 12, 0.9);
                color: white;
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 0.9rem;
                font-weight: 600;
                pointer-events: none;
                z-index: 1000;
                backdrop-filter: blur(10px);
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
            `;
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = text;
        
        const updateTooltipPosition = (e) => {
            tooltip.style.left = e.clientX - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = e.clientY - tooltip.offsetHeight - 10 + 'px';
        };
        
        element.addEventListener('mousemove', updateTooltipPosition);
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        }, 50);
    };
    
    const hideFlavorTooltip = () => {
        const tooltip = document.querySelector('.flavor-tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
        }
    };
    
    // Bar selection animation
    const animateBarSelection = (bar) => {
        bar.style.transform = 'scale(1.2) rotate(0deg)';
        bar.style.boxShadow = '0 20px 60px rgba(212, 165, 116, 0.4)';
        
        setTimeout(() => {
            bar.style.transform = '';
            bar.style.boxShadow = '';
        }, 300);
    };
    
    // CTA button interactions
    const initCTAInteractions = () => {
        elements.ctaButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Show coming soon message with style
                showStyledAlert();
            });
        });
    };
    
    // Styled alert modal
    const showStyledAlert = () => {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                backdrop-filter: blur(10px);
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    text-align: center;
                    max-width: 400px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    transform: scale(0.9);
                    transition: transform 0.3s ease;
                ">
                    <div style="font-size: 3rem; margin-bottom: 20px;">🚀</div>
                    <h3 style="color: #111827; margin-bottom: 16px; font-size: 1.5rem;">Coming Soon!</h3>
                    <p style="color: #6b7280; margin-bottom: 24px; line-height: 1.6;">We're putting the finishing touches on our revolutionary BuzzBar energy bars. Join our waitlist to be the first to experience energy that actually works.</p>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: linear-gradient(135deg, #6366f1, #8b5cf6);
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 25px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    ">Got it</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.querySelector('div > div').style.transform = 'scale(1)';
        }, 50);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
            }
        }, 5000);
    };
    
    // Performance monitoring
    const logPerformance = () => {
        if (window.performance && window.performance.now) {
            const loadTime = window.performance.now();
            console.log(`⚡ BuzzBar loaded in ${Math.round(loadTime)}ms`);
            console.log('🚀 Energy that works - optimized for performance!');
            console.log('✨ Professional interactions initialized');
        }
    };
    
    // Initialize all functionality
    const init = () => {
        initSmoothScrolling();
        initHeaderEffects();
        initScrollAnimations();
        initProductCarousel();
        initProteinBarInteractions();
        initCTAInteractions();
        logPerformance();
    };
    
    // Start the application
    init();
    
    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('[style*="position: fixed"]');
            if (modal) modal.remove();
        }
    });
});

// Nutrition information toggle function (global scope)
function toggleNutrition(id) {
    const nutritionPanel = document.getElementById(id);
    const button = nutritionPanel.previousElementSibling;
    const icon = button.querySelector('.toggle-icon');
    const text = button.querySelector('span:first-child');
    
    if (nutritionPanel.style.display === 'none' || nutritionPanel.style.display === '') {
        // Show panel
        nutritionPanel.style.display = 'block';
        nutritionPanel.style.opacity = '0';
        nutritionPanel.style.transform = 'translateY(-10px)';
        nutritionPanel.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            nutritionPanel.style.opacity = '1';
            nutritionPanel.style.transform = 'translateY(0)';
        }, 10);
        
        icon.textContent = '▲';
        text.textContent = 'Hide Nutritional Information';
    } else {
        // Hide panel
        nutritionPanel.style.opacity = '0';
        nutritionPanel.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            nutritionPanel.style.display = 'none';
        }, 300);
        
        icon.textContent = '▼';
        text.textContent = 'View Nutritional Information';
    }
}

// Regulatory information toggle function (global scope)
function toggleRegulatory(id) {
    const regulatoryPanel = document.getElementById(id);
    const button = regulatoryPanel.previousElementSibling;
    const icon = button.querySelector('.toggle-icon');
    const text = button.querySelector('span:first-child');
    
    if (regulatoryPanel.style.display === 'none' || regulatoryPanel.style.display === '') {
        // Show panel
        regulatoryPanel.style.display = 'block';
        regulatoryPanel.style.opacity = '0';
        regulatoryPanel.style.transform = 'translateY(-10px)';
        regulatoryPanel.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            regulatoryPanel.style.opacity = '1';
            regulatoryPanel.style.transform = 'translateY(0)';
        }, 10);
        
        icon.textContent = '▲';
        text.textContent = 'Hide Additional Product Information';
    } else {
        // Hide panel
        regulatoryPanel.style.opacity = '0';
        regulatoryPanel.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            regulatoryPanel.style.display = 'none';
        }, 300);
        
        icon.textContent = '▼';
        text.textContent = 'View Additional Product Information';
    }
}
