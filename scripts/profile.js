// ========== PROFILE.JS ==========
// Gestion des informations de profil et du calcul de l'âge

// Fonction utilitaire pour calculer l'âge précis
function calculerAge(dateNaissance) {
    const aujourdhui = new Date();
    let age = aujourdhui.getFullYear() - dateNaissance.getFullYear();
    const m = aujourdhui.getMonth() - dateNaissance.getMonth();
    
    // Si le mois actuel est avant le mois d'anniv, ou si c'est le même mois mais avant le jour
    if (m < 0 || (m === 0 && aujourdhui.getDate() < dateNaissance.getDate())) {
        age--;
    }
    return age;
}

// Initialisation du profil au chargement
document.addEventListener("DOMContentLoaded", () => {
    // Calcul de l'âge
    // Attention : Mois 0 = Janvier, 1 = Février. Donc 5 Février = (2006, 1, 5)
    const birthdate = new Date(2006, 1, 5);
    const age = calculerAge(birthdate);

    // Mise à jour de la bannière gauche (sidebar)
    const profileTexts = document.querySelector('.profile-texts');
    if (profileTexts) {
        profileTexts.innerHTML = `
            <p>Ilan DUFOURG</p>
            <p>${age} ans</p>
            <p>BTS SIO (SLAM)</p>
        `;
    }

    // Stocker l'âge dans une variable globale pour l'utiliser dans d'autres scripts
    window.userAge = age;
});
