// Fonction pour créer des particules (étoiles ou cœurs)
function createParticle(type) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Ajouter un type de particule (étoile ou cœur)
    if (type === 'star') {
        particle.classList.add('star');
    } else {
        particle.classList.add('heart');
    }
    
    // Positionnement aléatoire sur l'écran
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particle.style.top = `${y}px`;
    particle.style.left = `${x}px`;
    
    // Durée de l'animation
    const duration = Math.random() * 2 + 3;  // Entre 3 et 5 secondes
    particle.style.animationDuration = `${duration}s`;
    
    // Ajouter la particule au conteneur
    document.getElementById('animation-container').appendChild(particle);

    // Retirer la particule après l'animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Créer des particules toutes les 0.5 secondes
setInterval(() => {
    const randomType = Math.random() < 0.5 ? 'star' : 'heart';
    createParticle(randomType);
}, 500);
