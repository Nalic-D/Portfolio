// ========== MOBILE-PANEL.JS ==========
// Gestion du panneau droit (tiroir mobile)

document.addEventListener("DOMContentLoaded", () => {
    const rightPanel = document.getElementById("right-panel");
    const toggleBtn = document.getElementById("right-panel-toggle");
    const contentWrapper = document.querySelector(".content-wrapper");

    // Gestion du bouton toggle
    if (toggleBtn && rightPanel) {
        toggleBtn.addEventListener("click", () => {
            rightPanel.classList.toggle("open");

            // Changement du sens de la flèche
            if (rightPanel.classList.contains("open")) {
                toggleBtn.innerHTML = "&gt;";
            } else {
                toggleBtn.innerHTML = "&lt;";
            }
        });
    }

    // Fermer le panneau si on clique ailleurs (Mobile uniquement)
    if (contentWrapper) {
        contentWrapper.addEventListener("click", () => {
            if (window.innerWidth <= 1024 && rightPanel && rightPanel.classList.contains("open")) {
                rightPanel.classList.remove("open");
                if (toggleBtn) toggleBtn.innerHTML = "&lt;";
            }
        });
    }
});
