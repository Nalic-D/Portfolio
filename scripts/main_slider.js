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
        <h4>Passionné de jeux vidéos depuis mon enfance, j'ai suivi un BAC Technologique en STI2D (Sciences Technologiques de l'Informatique et du Développement Durable) puis un BTS SIO (Services Informatiques aux Organisations) afin d'apprendre les bases de la Programmation Orientée Objet (POO) ainsi que d'autres concepts utiles.<br />
        <h4>Je programme de mon côté des petits jeux simples ou encore des scripts et automatisations pour m'entrainer et continuer d'apprendre.<br />
        
        <h4>La prochaine étape de mon parcours consitera à rentrer dans la piscine de l'école 42 à Angoulême. Continuer d'exercer dans des situations réalistes et exigentes avec des personnes toutes aussi passionées que moi renforcera mes atouts et me permettra de viser toujours plus loin !<br />
        
        <h2>Bienvenue sur mon Portfolio
        `,
        competences: `
            <h2>Compétences informatiques :</h2>
            <p>Cliquez sur les cartes pour voir les détails.</p>
            
            <div class="skills-grid">
                <div class="skill-card-scene" data-skill="python">
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

                <div class="skill-card-scene" data-skill="java">
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

                <div class="skill-card-scene" data-skill="php">
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

                <div class="skill-card-scene" data-skill="web">
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

                <div class="skill-card-scene" data-skill="sql">
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
                <div class="project-card" data-project="gestion">
                    <h3>Application de gestion</h3>
                    <p>Projet PHP MVC avec base de données.</p>
                    <p>Gestion des utilisateurs, CRUD et authentification sécurisée.</p>
                </div>

                <div class="project-card" data-project="siteResponsive">
                    <h3>Site web responsive</h3>
                    <p>HTML / CSS avec design moderne.</p>
                    <p>Layout adaptatif, animations fluides et performance mobile.</p>
                </div>

                <div class="project-card" data-project="scriptPython">
                    <h3>Script Python</h3>
                    <p>Automatisation de tâches.</p>
                    <p>Traitement de fichiers, parsing et génération de rapports.</p>
                </div>
            </div>

            <!-- Catégorie 2 -->
            <div class="section-title">
                <span>Mes projets</span>
            </div>

            <div class="projects-grid">
                <div class="project-card" data-project="subnautica">
                    <h3>Mod Subnautica</h3>
                    <p>Développement en C# avec optimisation.</p>
                    <p>Mod gameplay, assets Unity et intégration de nouvelles mécaniques.</p>
                </div>

                <div class="project-card" data-project="firefoxOCR">
                    <h3>Extension Firefox OCR</h3>
                    <p>IA + reconnaissance de texte.</p>
                    <p>Capture d'écran, traitement OCR et interface utilisateur simplifiée.</p>
                </div>
            </div>

            <!-- Veille technologique -->
            <div class="section-title">
                <span>Veille technologique</span>
            </div>

            <div id="tech-watch-content" class="tech-watch-container">
                <p style="text-align: center; color: #666;">Chargement...</p>
            </div>`,
        contact: `
            <div class="contact-section">
                <h2>Me contacter</h2>
                <p style="font-size: 1.05em; line-height: 1.8; margin-bottom: 30px; color: rgba(255, 255, 255, 0.95);">
                    Vous avez un projet en tête ou souhaitez discuter d'une collaboration ? N'hésitez pas à me contacter ! 
                    Je serais ravi de discuter et d'explorer avec vous les possibilités de travailler ensemble.
                </p>

                <div class="contact-info">
                    <div class="contact-item">
                        <strong>📧 Email</strong>
                        <p><a href="mailto:dufourgilan.c@gmail.com" style="color: rgba(var(--clr-primary-a10-rgb), 1); text-decoration: none; transition: opacity 0.2s;">dufourgilan.c@gmail.com</a></p>
                    </div>

                    <div class="contact-item">
                        <strong>🔗 GitHub Personnel</strong>
                        <p><a href="https://github.com/Jake-Tech13" target="_blank" rel="noopener noreferrer" style="color: rgba(var(--clr-primary-a10-rgb), 1); text-decoration: none; transition: opacity 0.2s;">https://github.com/Jake-Tech13</a></p>
                    </div>

                    <div class="contact-item">
                        <strong>🏢 GitHub Professionnel</strong>
                        <p><a href="https://github.com/Nalic-D" target="_blank" rel="noopener noreferrer" style="color: rgba(var(--clr-primary-a10-rgb), 1); text-decoration: none; transition: opacity 0.2s;">https://github.com/Nalic-D</a></p>
                    </div>
                </div>

                <div class="contact-footer" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(var(--clr-primary-a10-rgb), 0.2); text-align: center; color: rgba(255, 255, 255, 0.7); font-size: 0.95em;">
                    <p>Je réponds généralement dans les 24-48 heures. En attente de votre message ! :)</p>
                </div>
            </div>
        `,
        cv: `
            <div class="cv-section">
                <h2>Mon Curriculum Vitae</h2>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 25px;">Consultez mon CV détaillé ci-dessous :</p>
                
                <div class="pdf-container" style="background: rgba(32, 20, 200, 0.08); border: 2px solid rgba(var(--clr-primary-a10-rgb), 0.3); border-radius: 8px; padding: 20px; min-height: 600px;">
                    <iframe id="pdf-viewer" src="data/CV_2025-11-12_Ilan_Dufourg.pdf" type="application/pdf" style="width: 100%; height: 700px; border: none; border-radius: 4px;"></iframe>
                </div>

                <div style="margin-top: 20px; text-align: center;">
                    <a href="data/CV_2025-11-12_Ilan_Dufourg.pdf" download="CV_Ilan_DUFOURG.pdf" style="display: inline-block; padding: 12px 30px; background: rgba(var(--clr-primary-a10-rgb), 0.3); border: 2px solid rgba(var(--clr-primary-a10-rgb), 0.6); border-radius: 6px; color: white; text-decoration: none; transition: all 0.3s ease; font-weight: 600;">
                        📥 Télécharger le CV
                    </a>
                </div>
            </div>
        `
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