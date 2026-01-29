// ==UserScript==
// @name          EVO - Layout Responsive Sidebar
// @namespace     https://unibo.it/
// @version       1.1
// @description   Rende responsive le card "Saldo Ferie" e "Richieste pendenti" su smartphone
// @author        Stefano
// @match         https://personale-unibo.hrgpi.it/*
// @icon          https://www.unibo.it/favicon.ico
// @grant         none
// @run-at        document-end
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Inietta il CSS responsive
     */
    function injectResponsiveCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            /* Media query per dispositivi mobile - usando max-width in combinazione con orientamento */
            /* Copre smartphone in portrait anche con alta risoluzione */
            @media (max-width: 1024px) and (orientation: portrait),
                   (max-width: 768px) {
                /* Modifica il layout della griglia principale */
                .parent {
                    grid-template-columns: repeat(1, 1fr) !important;
                    gap: 1rem !important;
                }

                /* Card di benvenuto occupa tutta la larghezza */
                .welcome {
                    grid-column: span 1 / span 1 !important;
                }

                /* Container del body occupa tutta la larghezza */
                .body-container {
                    grid-column: span 1 / span 1 !important;
                    grid-template-columns: repeat(1, 1fr) !important;
                }

                /* Utils (sidebar) occupa tutta la larghezza e va sotto */
                .utils {
                    grid-column: span 1 / span 1 !important;
                    grid-row: auto !important;
                    grid-column-start: auto !important;
                    grid-row-start: auto !important;
                }

                /* Migliora la visualizzazione della progress-circle su mobile */
                .rights-div {
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                }

                .progress-circle {
                    margin-bottom: 1rem;
                }

                /* Tabella timbrature più compatta su mobile */
                .clockings-table {
                    font-size: 0.875rem !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 0.4rem !important;
                }

                /* Badge più piccoli su mobile */
                .badge {
                    font-size: 0.75rem !important;
                    padding: 0.25rem 0.5rem !important;
                }
            }

            /* Media query per dispositivi in landscape con larghezza ridotta */
            @media (max-width: 1024px) and (orientation: landscape) and (max-height: 600px) {
                .parent {
                    gap: 0.75rem !important;
                }
            }

            /* Media query per dispositivi molto piccoli */
            @media (max-width: 480px), 
                   (max-width: 640px) and (orientation: portrait) {
                .parent {
                    gap: 0.75rem !important;
                }

                .clockings-table {
                    font-size: 0.75rem !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 0.3rem !important;
                }

                /* Progress circle più piccolo su schermi molto piccoli */
                .progress-circle {
                    --size: 100px !important;
                    font-size: 1.2rem !important;
                }

                h4 {
                    font-size: 1.25rem !important;
                }
            }

            /* Aggiunge supporto per touch screen indipendentemente dalla risoluzione */
            @media (hover: none) and (pointer: coarse) {
                .parent {
                    grid-template-columns: repeat(1, 1fr) !important;
                }

                .welcome {
                    grid-column: span 1 / span 1 !important;
                }

                .body-container {
                    grid-column: span 1 / span 1 !important;
                    grid-template-columns: repeat(1, 1fr) !important;
                }

                .utils {
                    grid-column: span 1 / span 1 !important;
                    grid-row: auto !important;
                    grid-column-start: auto !important;
                    grid-row-start: auto !important;
                }
            }
        `;
        document.head.appendChild(style);
        console.log("CSS responsive per sidebar iniettato con successo.");
    }

    // Aspetta che il DOM sia completamente caricato
    const waitForPageLoad = setInterval(() => {
        // Verifica che siamo sulla pagina Dashboard/Home
        const isDashboardPage = document.querySelector('form[name="Dashboard"]') !== null;
        const utilsSection = document.querySelector('.utils');
        
        if (isDashboardPage && utilsSection) {
            clearInterval(waitForPageLoad);
            injectResponsiveCSS();
            console.log("Layout responsive attivato per la sidebar.");
        }
    }, 500);

})();
