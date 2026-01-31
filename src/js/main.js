/* ============================================
   MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLanguageSelector();
    initSmoothScroll();
    initAnimations();
    initButtons();
});

/* Navigation Functions */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Update active nav link based on current page
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* Language Selector */
function initLanguageSelector() {
    const langDropdown = document.getElementById('langDropdown');
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggle) {
        langToggle.addEventListener('click', function() {
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!langDropdown.contains(event.target)) {
                langDropdown.classList.remove('active');
            }
        });

        // Change language
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('href').substring(1);
                changeLanguage(lang, this);
            });
        });
    }
}

function changeLanguage(lang, element) {
    // Update active language option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');

    // Update button text
    const langMap = {
        'pt': '🇧🇷 PT (BR)',
        'en': '🇺🇸 EN (US)',
        'es': '🇪🇸 ES (ES)'
    };

    document.getElementById('langToggle').textContent = langMap[lang];

    // Save preference
    localStorage.setItem('preferredLanguage', lang);

    console.log('Idioma alterado para:', lang);
    // Aqui você implementaria a lógica real de mudança de idioma
}

/* Smooth Scroll */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* Animations on Scroll */
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.dataset.animation || 'slideInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with data-animation attribute
    document.querySelectorAll('[data-animation]').forEach(el => {
        observer.observe(el);
    });
}

/* Button Functions */
function initButtons() {
    const consultButton = document.getElementById('consultButton');
    
    if (consultButton) {
        consultButton.addEventListener('click', function() {
            showModal('Solicitar Diagnóstico', 
                'Preencha o formulário abaixo para solicitar um diagnóstico gratuito de nossas soluções.');
        });
    }

    // All "Ver Planos" buttons
    const planButtons = document.querySelectorAll('.btn-secondary');
    planButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productTitle = this.closest('.product-card, .saas-card')?.querySelector('.product-title')?.textContent;
            if (productTitle) {
                window.location.href = `src/pages/planos.html?produto=${encodeURIComponent(productTitle)}`;
            } else {
                window.location.href = 'src/pages/planos.html';
            }
        });
    });
}

/* Modal Functions */
function showModal(title, message) {
    let modal = document.getElementById('customModal');
    
    if (!modal) {
        modal = createModal();
        document.body.appendChild(modal);
    }

    const modalTitle = modal.querySelector('.modal-title');
    const modalMessage = modal.querySelector('.modal-message');
    
    if (modalTitle) modalTitle.textContent = title;
    if (modalMessage) modalMessage.textContent = message;
    
    modal.classList.add('active');

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function createModal() {
    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2 class="modal-title"></h2>
            <p class="modal-message"></p>
            <form class="modal-form" id="consultForm">
                <div class="form-group">
                    <label class="form-label">Nome</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Telefone</label>
                    <input type="tel" class="form-control" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Empresa</label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Mensagem</label>
                    <textarea class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar</button>
            </form>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 400;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            animation: fadeIn 0.3s ease-out;
        }

        .modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: var(--color-dark);
            padding: 2rem;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(111, 53, 187, 0.3);
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 10px 40px rgba(111, 53, 187, 0.3);
        }

        .modal-close {
            position: absolute;
            right: 1rem;
            top: 1rem;
            background: none;
            border: none;
            color: var(--color-light);
            font-size: 2rem;
            cursor: pointer;
            transition: color var(--transition-base);
        }

        .modal-close:hover {
            color: var(--color-primary);
        }

        .modal-title {
            font-size: var(--font-size-2xl);
            margin-bottom: 1rem;
            color: var(--color-light);
        }

        .modal-message {
            color: var(--color-gray);
            margin-bottom: 1.5rem;
        }

        .modal-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    `;
    document.head.appendChild(style);

    return modal;
}

/* Scroll to Top Button */
function createScrollTopButton() {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.innerHTML = '↑';
    btn.className = 'scroll-top-btn';
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--color-primary);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            cursor: pointer;
            display: none;
            z-index: 300;
            transition: all var(--transition-base);
            box-shadow: var(--shadow-glow);
        }

        .scroll-top-btn.show {
            display: block;
            animation: slideInUp 0.3s ease-out;
        }

        .scroll-top-btn:hover {
            background: var(--color-primary-dark);
            transform: translateY(-5px);
            box-shadow: 0 0 30px rgba(111, 53, 187, 0.6);
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize scroll to top button
createScrollTopButton();

/* Performance optimization */
window.addEventListener('load', function() {
    console.log('Site carregado com sucesso!');
});

/* Error handling */
window.addEventListener('error', function(e) {
    console.error('Erro:', e.message);
});
