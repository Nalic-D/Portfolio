// ========== SKILLS.JS ==========
// Gestion des cartes de compétences, du flip et du panneau droit

document.addEventListener('DOMContentLoaded', function() {
    const rightPanelContent = document.querySelector('.right-panel-content');

    const skillInfos = {
        python: {
            title: 'Python',
            subtitle: 'Scripting, Data & Automation',
            details: `
                <strong>🎯 Niveau :</strong> Avancé<br/><br/>
                <strong>📦 Bibliothèques principales :</strong><br/>
                • Pandas – Manipulation et analyse de données<br/>
                • NumPy – Calculs numériques et tableaux multidimensionnels<br/>
                • Requests – Requêtes HTTP et API REST<br/>
                • BeautifulSoup – Web scraping et parsing HTML<br/>
                • Django/FastAPI – Frameworks web<br/><br/>
                <strong>💼 Cas d'usage :</strong><br/>
                • Automatisation de scripts de déploiement<br/>
                • Tests unitaires et intégration continue<br/>
                • Traitement de fichiers (CSV, JSON, XML)<br/>
                • Génération de rapports et visualisations<br/>
                • Scripts d'administration système<br/><br/>
                <strong>🚀 Projets réalisés :</strong><br/>
                • Script Python d'automatisation de tâches<br/>
                • Parsing de données et génération de rapports
            `
        },
        java: {
            title: 'Java',
            subtitle: 'Développement Objet & Android',
            details: `
                <strong>🎯 Niveau :</strong> Intermédiaire-Avancé<br/><br/>
                <strong>🛠️ Outils & Frameworks :</strong><br/>
                • Maven/Gradle – Gestion de projets<br/>
                • Spring Boot – Framework web et microservices<br/>
                • Hibernate – ORM et gestion BDD<br/>
                • JUnit – Tests unitaires<br/>
                • Android Studio – Développement mobile<br/><br/>
                <strong>💡 Concepts maîtrisés :</strong><br/>
                • Programmation Orientée Objet (POO)<br/>
                • Design Patterns (MVC, Singleton, Factory)<br/>
                • Architecture modulaire<br/>
                • Gestion des exceptions et déboggage<br/>
                • Threading et concurrence<br/><br/>
                <strong>📱 Expérience :</strong><br/>
                • Applications desktop avec Swing/JavaFX<br/>
                • Développement Android natif
            `
        },
        php: {
            title: 'PHP',
            subtitle: 'Backend Web & Bases de données',
            details: `
                <strong>🎯 Niveau :</strong> Avancé<br/><br/>
                <strong>🏗️ Architecture & Frameworks :</strong><br/>
                • Architecture MVC – Séparation des responsabilités<br/>
                • Laravel – Framework web moderne<br/>
                • Symfony – Framework robuste<br/>
                • Composer – Gestionnaire de dépendances<br/><br/>
                <strong>🔐 Sécurité & Performance :</strong><br/>
                • Authentification et authorisation<br/>
                • Protection contre les injections SQL<br/>
                • CSRF & XSS protection<br/>
                • Hashage sécurisé des mots de passe<br/>
                • Caching et optimisation requêtes<br/><br/>
                <strong>🌐 API & Intégration :</strong><br/>
                • API REST complètes (GET, POST, PUT, DELETE)<br/>
                • Intégration front-end avec AJAX<br/>
                • Webhooks et notifications
            `
        },
        web: {
            title: 'Web',
            subtitle: 'Intégration & Design Responsive',
            details: `
                <strong>🎯 Niveau :</strong> Avancé<br/><br/>
                <strong>📐 Compétences Front-End :</strong><br/>
                • HTML5 – Sémantique et accessibilité<br/>
                • CSS3 – Animations, transitions, flexbox, grid<br/>
                • JavaScript ES6+ – DOM, événements, async<br/>
                • Responsive Design – Mobile-first approach<br/>
                • CSS Preprocessors – SASS/SCSS<br/><br/>
                <strong>✨ Expérience Design :</strong><br/>
                • Layouts adaptatifs et fluides<br/>
                • Animations et micro-interactions<br/>
                • UI/UX moderne et intuitive<br/>
                • Performance – Optimisation des assets<br/>
                • Accessibilité (WCAG)<br/><br/>
                <strong>🔧 Outils :</strong><br/>
                • DevTools & debugging<br/>
                • Figma pour les mockups<br/>
                • Git & version control
            `
        },
        sql: {
            title: 'SQL',
            subtitle: 'Gestion de BDD & Requêtes',
            details: `
                <strong>🎯 Niveau :</strong> Avancé<br/><br/>
                <strong>🗄️ Bases de données :</strong><br/>
                • MySQL/MariaDB – Relationnelles<br/>
                • PostgreSQL – Avancé avec extensions<br/>
                • SQLite – Embedded et légère<br/><br/>
                <strong>🔍 Compétences :</strong><br/>
                • Requêtes optimisées (SELECT, JOIN, GROUP BY)<br/>
                • Transactions ACID et intégrité des données<br/>
                • Indexation et performance tuning<br/>
                • Procédures stockées et triggers<br/>
                • Réplication et sauvegarde<br/><br/>
                <strong>📊 Administration :</strong><br/>
                • Gestion des utilisateurs et permissions<br/>
                • Monitoring et logs<br/>
                • Backup & recovery<br/>
                • Génération de rapports complexes
            `
        }
    };

    const projectInfos = {
        gestion: {
            title: 'Application de gestion',
            details: `
                <strong>📋 Contexte :</strong> Projet d'école<br/>
                <strong>🛠️ Technologies :</strong> PHP, MySQL, HTML/CSS, JavaScript<br/>
                <strong>📐 Architecture :</strong> MVC (Modèle-Vue-Contrôleur)<br/><br/>
                <strong>✨ Fonctionnalités :</strong><br/>
                • Authentification sécurisée avec sessions<br/>
                • Gestion des utilisateurs (CRUD complet)<br/>
                • Système de rôles et permissions<br/>
                • Tableau de bord administrateur<br/>
                • Validation côté serveur et client<br/>
                • Protection contre les injections SQL<br/><br/>
                <strong>📈 Résultat :</strong><br/>
                Application fonctionnelle et sécurisée, prête à la production
            `
        },
        siteResponsive: {
            title: 'Site web responsive',
            details: `
                <strong>🎨 Contexte :</strong> Projet d'école - Design & Développement<br/>
                <strong>🛠️ Technologies :</strong> HTML5, CSS3, JavaScript, Responsive Design<br/>
                <strong>📱 Objectif :</strong> Mobile-first et adaptatif à tous les appareils<br/><br/>
                <strong>✨ Caractéristiques :</strong><br/>
                • Layout moderne avec CSS Grid & Flexbox<br/>
                • Animations fluides et transitions élégantes<br/>
                • Navigation optimisée pour mobile<br/>
                • Optimisation des images (srcset)<br/>
                • Performance excellente (Lighthouse 90+)<br/>
                • Accessibilité WCAG conforme<br/><br/>
                <strong>🎯 Points forts :</strong><br/>
                • Design épuré et professionnel<br/>
                • Expérience utilisateur optimale<br/>
                • Temps de chargement rapide
            `
        },
        scriptPython: {
            title: 'Script Python',
            details: `
                <strong>🎯 Contexte :</strong> Projet d'automatisation<br/>
                <strong>🛠️ Technologies :</strong> Python, Pandas, Requests<br/>
                <strong>⚙️ Objectif :</strong> Automatiser des tâches récurrentes<br/><br/>
                <strong>✨ Fonctionnalités :</strong><br/>
                • Traitement de fichiers multiformats (CSV, JSON, XML)<br/>
                • Parsing et extraction de données<br/>
                • Génération de rapports automatisés<br/>
                • Requêtes HTTP vers APIs externes<br/>
                • Scheduling et exécution programmée<br/>
                • Gestion des erreurs robuste<br/><br/>
                <strong>📊 Résultats :</strong><br/>
                • Économie de temps et réduction des erreurs<br/>
                • Reproductibilité des processus<br/>
                • Documentation claire et commentée
            `
        },
        subnautica: {
            title: 'Mod Subnautica',
            details: `
                <strong>🎮 Contexte :</strong> Projet personnel - Modding<br/>
                <strong>🛠️ Technologies :</strong> C#, Unity, Mod SDK Subnautica<br/>
                <strong>🎯 Objectif :</strong> Créer une extension de gameplay<br/><br/>
                <strong>✨ Fonctionnalités du Mod :</strong><br/>
                • Nouvelles mécaniques de jeu originales<br/>
                • Assets 3D et textures personnalisées<br/>
                • Intégration avec l'API Subnautica<br/>
                • Configuration et balancing du gameplay<br/>
                • Compatibilité avec d'autres mods<br/>
                • Optimisation performance<br/><br/>
                <strong>🚀 Expérience acquise :</strong><br/>
                • Développement en C# avancé<br/>
                • Compréhension de l'engine Unity<br/>
                • Création de contenu 3D<br/>
                • Collaboration communauté modding
            `
        },
        firefoxOCR: {
            title: 'Extension Firefox OCR',
            details: `
                <strong>🚀 Contexte :</strong> Projet personnel - IA & WebExtension<br/>
                <strong>🛠️ Technologies :</strong> JavaScript, Tesseract.js, HTML/CSS, Firefox API<br/>
                <strong>🤖 Objectif :</strong> Reconnaissance optique de texte intégrée au navigateur<br/><br/>
                <strong>✨ Fonctionnalités :</strong><br/>
                • Capture d'écran intégrée<br/>
                • Reconnaissance OCR en temps réel<br/>
                • Support multilingue<br/>
                • Extraction et copie du texte<br/>
                • Interface utilisateur intuitive<br/>
                • Gestion des performances<br/>
                • Historique des captures<br/><br/>
                <strong>💡 Points forts :</strong><br/>
                • Intégration IA pratique<br/>
                • Expérience utilisateur fluide<br/>
                • Efficacité opérationnelle<br/>
                • Code modulaire et maintenable
            `
        }
    };

    const setRightPanelContent = (html) => {
        if (!rightPanelContent) return;
        
        // Ajouter la classe fade-out
        rightPanelContent.classList.add('fade-out');
        
        // Attendre la fin de l'animation fade-out
        setTimeout(() => {
            // Changer le contenu
            rightPanelContent.innerHTML = html;
            
            // Retirer fade-out et ajouter fade-in
            rightPanelContent.classList.remove('fade-out');
            rightPanelContent.classList.add('fade-in');
            
            // Retirer la classe fade-in après l'animation
            setTimeout(() => {
                rightPanelContent.classList.remove('fade-in');
            }, 300);
        }, 300);
    };

    const showSkillInfo = (skillKey) => {
        const info = skillInfos[skillKey];
        if (!info) return;
        setRightPanelContent(`
            <h4>${info.title}</h4>
            <p>${info.subtitle}</p>
            <div>${info.details}</div>
        `);
    };

    const showProjectInfo = (projectKey) => {
        const info = projectInfos[projectKey];
        if (!info) return;
        setRightPanelContent(`
            <h4>${info.title}</h4>
            <div>${info.details}</div>
        `);
    };

    document.addEventListener('click', function(e) {
        const clickedCardScene = e.target.closest('.skill-card-scene');
        const clickedProjectCard = e.target.closest('.project-card');

        if (clickedCardScene) {
            const card = clickedCardScene.querySelector('.skill-card');
            const skillKey = clickedCardScene.dataset.skill;

            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            } else {
                document.querySelectorAll('.skill-card.flipped').forEach(c => c.classList.remove('flipped'));
                card.classList.add('flipped');
            }

            if (skillKey) showSkillInfo(skillKey);
            return;
        }

        if (clickedProjectCard) {
            const projectKey = clickedProjectCard.dataset.project;
            if (projectKey) showProjectInfo(projectKey);
            return;
        }

        document.querySelectorAll('.skill-card.flipped').forEach(c => c.classList.remove('flipped'));
    });
});
