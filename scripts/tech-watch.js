// ========== TECH-WATCH.JS ==========
// Chargement du contenu de Veille technologique depuis un fichier texte

document.addEventListener('DOMContentLoaded', function() {
    // Observer pour détecter quand le contenu tech-watch est ajouté au DOM
    const observer = new MutationObserver(function(mutations) {
        const techWatchContainer = document.getElementById('tech-watch-content');
        
        if (techWatchContainer && !techWatchContainer.hasAttribute('data-loaded')) {
            techWatchContainer.setAttribute('data-loaded', 'true');
            loadTechWatchContent();
        }
    });

    observer.observe(document.getElementById('content'), {
        childList: true,
        subtree: true
    });

    // Charger au démarrage si le conteneur existe déjà
    const initialContainer = document.getElementById('tech-watch-content');
    if (initialContainer && !initialContainer.hasAttribute('data-loaded')) {
        initialContainer.setAttribute('data-loaded', 'true');
        loadTechWatchContent();
    }
});

function loadTechWatchContent() {
    const container = document.getElementById('tech-watch-content');
    if (!container) return;

    fetch('data/vt-raytracing.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Fichier non trouvé');
            }
            return response.text();
        })
        .then(text => {
            // Parser markdown simple
            let html = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            // Traiter les titres markdown
            html = html
                .replace(/^### (.*?)$/gm, '<h4>$1</h4>')
                .replace(/^## (.*?)$/gm, '<h3>$1</h3>')
                .replace(/^# (.*?)$/gm, '<h2>$1</h2>');

            // Traiter le gras et l'italique
            html = html
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/__(.+?)__/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/_(.+?)_/g, '<em>$1</em>');

            // Split en lignes et traiter
            const lines = html.split('\n');
            const processedLines = [];
            let inList = false;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();

                if (line === '') {
                    if (inList) {
                        processedLines.push('</ul>');
                        inList = false;
                    }
                    processedLines.push('');
                    continue;
                }

                // Détecter les listes
                if (line.match(/^[\*\-\•]\s/)) {
                    if (!inList) {
                        processedLines.push('<ul>');
                        inList = true;
                    }
                    const listItem = line.replace(/^[\*\-\•]\s/, '');
                    processedLines.push(`<li>${listItem}</li>`);
                } else {
                    if (inList) {
                        processedLines.push('</ul>');
                        inList = false;
                    }

                    // Ignorer les titres et en-têtes déjà traités
                    if (!line.match(/^<h[1-4]/)) {
                        if (line.length > 0 && !line.match(/^<\//)) {
                            processedLines.push(`<p>${line}</p>`);
                        } else if (line.match(/^<[h|/]/)) {
                            processedLines.push(line);
                        }
                    } else {
                        processedLines.push(line);
                    }
                }
            }

            if (inList) {
                processedLines.push('</ul>');
            }

            const formattedHtml = processedLines.join('\n');

            container.innerHTML = `<div class="tech-watch-text">${formattedHtml}</div>`;
        })
        .catch(error => {
            // Afficher un message d'erreur formaté
            container.innerHTML = `
                <div class="tech-watch-error">
                    <div class="error-icon">⚠️</div>
                    <h4>Fichier non disponible</h4>
                    <p>Le fichier <strong>"Veille technologique.md"</strong> n'a pas pu être chargé.</p>
                    <p style="font-size: 0.9em; color: #999;">Assurez-vous que le fichier existe dans le dossier <code>data/</code></p>
                </div>
            `;
            console.error('Erreur lors du chargement de la veille technologique:', error);
        });
}
