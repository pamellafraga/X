/* ============================================
   CONTACT PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validação básica
    if (!name || !email || !phone || !company || !subject || !message) {
        showNotification('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Validação de email
    if (!isValidEmail(email)) {
        showNotification('Por favor, insira um email válido', 'error');
        return;
    }

    // Aqui você implementaria o envio para o servidor
    // Por enquanto, vamos simular um envio bem-sucedido
    console.log({
        name,
        email,
        phone,
        company,
        subject,
        message
    });

    // Simular envio
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        this.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Adicionar estilos se não existirem
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                background: var(--color-dark);
                border-radius: var(--radius-lg);
                max-width: 400px;
                z-index: 1000;
                animation: slideInRight 0.3s ease-out;
                border-left: 4px solid;
            }

            .notification-success {
                border-left-color: var(--color-success);
                color: var(--color-success);
                background: rgba(16, 185, 129, 0.1);
            }

            .notification-error {
                border-left-color: var(--color-error);
                color: var(--color-error);
                background: rgba(239, 68, 68, 0.1);
            }

            .notification-warning {
                border-left-color: var(--color-warning);
                color: var(--color-warning);
                background: rgba(245, 158, 11, 0.1);
            }

            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remover notificação após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}
