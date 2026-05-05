// ========== SKILLS.JS ==========
// Gestion des cartes de compétences et du flip

document.addEventListener('click', function(e) {
    // Vérifie si on a cliqué sur une carte (ou un de ses enfants)
    const clickedCardScene = e.target.closest('.skill-card-scene');

    if (clickedCardScene) {
        // Clic SUR une carte
        const card = clickedCardScene.querySelector('.skill-card');
        
        // Si la carte est déjà retournée, on la remet normale
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
        } else {
            // Sinon, on ferme d'abord TOUTES les autres cartes
            document.querySelectorAll('.skill-card.flipped').forEach(c => c.classList.remove('flipped'));
            // Et on retourne celle-ci
            card.classList.add('flipped');
        }
    } else {
        // Clic AILLEURS (pas sur une carte)
        // On retourne toutes les cartes (face visible)
        document.querySelectorAll('.skill-card.flipped').forEach(c => c.classList.remove('flipped'));
    }
});
