// ==UserScript==
// @name          EVO - Layout Responsive Sidebar
// @namespace     https://unibo.it/
// @version       1.2
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

                /* FONT PIÙ GRANDI PER MOBILE */
                /* Titoli principali */
                h2 {
                    font-size: 1.75rem !important;
                }

                h4 {
                    font-size: 1.35rem !important;
                }

                /* Testo generale delle card */
                .card {
                    font-size: 1.1rem !important;
                }

                /* Tabella timbrature con font più grande */
                .clockings-table {
                    font-size: 1rem !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 0.6rem !important;
                }

                /* Badge più grandi e leggibili */
                .badge {
                    font-size: 0.95rem !important;
                    padding: 0.4rem 0.7rem !important;
                }

                /* Liste più grandi */
                .utils ul li {
                    font-size: 1.05rem !important;
                    line-height: 1.6 !important;
                    margin-bottom: 0.5rem !important;
                }

                /* Testo informativo più grande */
                .d-flex.align-items-center.pb-2 {
                    font-size: 1.1rem !important;
                }

                /* Progress circle con testo più grande */
                .progress-circle {
                    font-size: 1.6rem !important;
                }

                /* Icone Material più grandi */
                .material-symbols-outlined {
                    font-size: 1.5rem !important;
                }

                /* Padding maggiore nelle card per mobile */
                .card.p-3 {
                    padding: 1.25rem !important;
                }

                /* Bottoni più grandi */
                .bottone {
                    font-size: 1rem !important;
                    padding: 0.6rem 1rem !important;
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

                /* Font leggermente più piccoli ma comunque leggibili */
                h2 {
                    font-size: 1.5rem !important;
                }

                h4 {
                    font-size: 1.2rem !important;
                }

                .card {
                    font-size: 1rem !important;
                }

                .clockings-table {
                    font-size: 0.95rem !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 0.5rem !important;
                }

                .badge {
                    font-size: 0.85rem !important;
                    padding: 0.35rem 0.6rem !important;
                }

                /* Progress circle proporzionato */
                .progress-circle {
                    --size: 110px !important;
                    font-size: 1.4rem !important;
                }

                .utils ul li {
                    font-size: 0.95rem !important;
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
