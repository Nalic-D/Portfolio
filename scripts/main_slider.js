// ========== MAIN SLIDER.JS ==========
// Gestion principale: Navigation et affichage des pages avec animations

document.addEventListener("DOMContentLoaded", () => {
    // --- VARIABLES GLOBALES ---
    const content = document.getElementById("content");
    const buttons = document.querySelectorAll(".button-link");
    
    // --- DEFINITION DES PAGES ---
    // Note: window.userAge est défini dans profile.js
    const pages = {
        profil: `
            <h3>Nom : DUFOURG</h3><br />
            <h3>Prénom : Ilan</h3><br />
            <h3>Age : ${window.userAge || '?'} ans</h3><br />
            <h3>Date de naissance : 05/02/2006</h3><br />
            <h3>Ville de résidence : Bayonne</h3><br />
        `,
        competences: `
            <h2>Compétences informatiques :</h2>
            <p>Cliquez sur les cartes pour voir les détails.</p>
            
            <div class="skills-grid">
                <div class="skill-card-scene">
                    <div class="skill-card">
                        <div class="skill-face skill-front">
                            <img src="img/python_logo.png" alt="Python"> 
                        </div>
                        <div class="skill-face skill-back">
                            <strong>Python</strong>
                            Scripting, Data & Automation
                        </div>
                    </div>
                </div>

                <div class="skill-card-scene">
                    <div class="skill-card">
                        <div class="skill-face skill-front">
                            <img src="img/java_logo.png" alt="Java">
                        </div>
                        <div class="skill-face skill-back">
                            <strong>Java</strong>
                            Développement Objet & Android
                        </div>
                    </div>
                </div>

                <div class="skill-card-scene">
                    <div class="skill-card">
                        <div class="skill-face skill-front">
                            <img src="img/php_logo.png" alt="PHP">
                        </div>
                        <div class="skill-face skill-back">
                            <strong>PHP</strong>
                            Backend Web & Bases de données
                        </div>
                    </div>
                </div>

                <div class="skill-card-scene">
                    <div class="skill-card">
                        <div class="skill-face skill-front">
                            <img src="img/html_logo.png" alt="HTML/CSS">
                        </div>
                        <div class="skill-face skill-back">
                            <strong>Web</strong>
                            Intégration & Design Responsive
                        </div>
                    </div>
                </div>

                <div class="skill-card-scene">
                    <div class="skill-card">
                        <div class="skill-face skill-front">
                            <img src="img/sql_logo.png" alt="SQL">
                        </div>
                        <div class="skill-face skill-back">
                            <strong>SQL</strong>
                            Gestion de BDD & Requêtes
                        </div>
                    </div>
                </div>
            </div>
        `,
        projets: `<!-- Catégorie 1 -->
            <div class="section-title">
                <span>Projets d'école</span>
            </div>

            <div class="projects-grid">
                <div class="project-card">
                    <h3>Application de gestion</h3>
                    <p>Projet PHP MVC avec base de données.</p>
                </div>

                <div class="project-card">
                    <h3>Site web responsive</h3>
                    <p>HTML / CSS avec design moderne.</p>
                </div>

                <div class="project-card">
                    <h3>Script Python</h3>
                    <p>Automatisation de tâches.</p>
                </div>
            </div>

            <!-- Catégorie 2 -->
            <div class="section-title">
                <span>Mes projets</span>
            </div>

            <div class="projects-grid">
                <div class="project-card">
                    <h3>Mod Subnautica</h3>
                    <p>Développement en C# avec optimisation.</p>
                </div>

                <div class="project-card">
                    <h3>Extension Firefox OCR</h3>
                    <p>IA + reconnaissance de texte.</p>
                </div>
            </div>`
    };

    // Initialisation du contenu
    if (content) content.innerHTML = pages.profil;

    // --- LOGIQUE DES BOUTONS DU MENU ---
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const pageKey = btn.dataset.page;
            if (pageKey) e.preventDefault(); 

            // 1. Changement du TITRE de la page (Top Banner) avec animation de fondu
            const pageTitle = document.querySelector('.page-title');
            const btnText = btn.textContent.trim();
            if (pageTitle) {
                // Animation de fondu sortie
                pageTitle.classList.add('fade-out');
                
                setTimeout(() => {
                    // Changement du texte
                    pageTitle.textContent = btnText;
                    
                    // Retrait de la classe fade-out et ajout de fade-in
                    pageTitle.classList.remove('fade-out');
                    pageTitle.classList.add('fade-in');
                    
                    // Nettoyage de la classe fade-in après l'animation
                    setTimeout(() => {
                        pageTitle.classList.remove('fade-in');
                    }, 300);
                }, 300);
            }

            // 2. Gestion de la classe ACTIVE (Visuel bouton)
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 3. Changement du CONTENU (Animation)
            if (!pageKey || !pages[pageKey]) return;

            // Animation de sortie
            content.classList.add("slide-out");
            
            setTimeout(() => {
                // Changement du HTML
                content.innerHTML = pages[pageKey];
                
                // Animation d'entrée
                content.classList.remove("slide-out");
                content.classList.add("slide-in");
                
                // Nettoyage classe d'entrée
                setTimeout(() => {
                    content.classList.remove("slide-in");
                }, 400);
            }, 400);
        });
    });
});