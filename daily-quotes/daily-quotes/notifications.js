function showNotification(message, type = 'info') {
    const div = document.createElement('div');
    div.textContent = message;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    div.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        z-index: 1000;
        animation: fadeIn 0.3s;
    `;
    
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 2000);
}
