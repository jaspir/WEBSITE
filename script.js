window.onload = () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    loadingScreen.style.transition = 'opacity 5s linear';
    loadingScreen.style.opacity = '5';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'none';
    }, 3000);
};

