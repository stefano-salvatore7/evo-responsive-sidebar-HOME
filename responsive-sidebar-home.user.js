// ==UserScript==
// @name          EVO - Layout Responsive Sidebar
// @namespace     https://unibo.it/
// @version       2.1
// @description   Rende responsive le card "Saldo Ferie" e "Richieste pendenti" su smartphone con font enormi (2x desktop)
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
            /* ESCLUDE esplicitamente schermi desktop grandi */
            @media (max-width: 1024px) and (orientation: portrait),
                   (max-width: 768px) and (orientation: landscape) {
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
                    margin-bottom: 1.5rem;
                }

                /* FONT ENORMI PER MOBILE - IL DOPPIO DELLA VERSIONE PRECEDENTE */
                /* Titoli principali */
                h2 {
                    font-size: 3.5rem !important;
                    line-height: 1.3 !important;
                }

                h4 {
                    font-size: 2.8rem !important;
                    line-height: 1.4 !important;
                    margin-bottom: 1rem !important;
                }

                /* Testo generale delle card */
                .card {
                    font-size: 2.2rem !important;
                    line-height: 1.6 !important;
                }

                /* Tabella timbrature con font enormi */
                .clockings-table {
                    font-size: 2rem !important;
                    line-height: 1.5 !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 1.2rem !important;
                }

                /* Badge enormi e leggibili */
                .badge {
                    font-size: 1.8rem !important;
                    padding: 0.8rem 1.4rem !important;
                }

                /* Liste enormi */
                .utils ul li {
                    font-size: 2rem !important;
                    line-height: 1.8 !important;
                    margin-bottom: 0.8rem !important;
                }

                /* Testo informativo enorme */
                .d-flex.align-items-center.pb-2 {
                    font-size: 2.2rem !important;
                    line-height: 1.6 !important;
                }

                /* Progress circle con testo enorme */
                .progress-circle {
                    font-size: 3rem !important;
                    --size: 200px !important;
                }

                /* Icone Material enormi */
                .material-symbols-outlined {
                    font-size: 3rem !important;
                }

                /* Padding maggiore nelle card per mobile */
                .card.p-3 {
                    padding: 2rem !important;
                }

                .welcome {
                    padding: 2rem !important;
                }

                /* Bottoni enormi */
                .bottone {
                    font-size: 2rem !important;
                    padding: 1.2rem 2rem !important;
                }

                /* Link enormi */
                a {
                    font-size: 2rem !important;
                }

                /* Testo generale del body enorme */
                body, .form-mw {
                    font-size: 2rem !important;
                    line-height: 1.6 !important;
                }

                /* Testo in grassetto */
                b, strong {
                    font-size: inherit !important;
                }

                /* STILI PER IL CALCULATOR "ORA DEL GIORNO" */
                #evoCalculatorContainerHome h4 {
                    font-size: 2.8rem !important;
                    line-height: 1.4 !important;
                    margin-bottom: 1rem !important;
                }

                .evo-label-home {
                    font-size: 1.8rem !important;
                    margin-bottom: 0.8rem !important;
                }

                #fasciaOrariaSelectorHome {
                    font-size: 2rem !important;
                    padding: 1rem !important;
                    width: auto !important;
                    min-width: 200px !important;
                    height: auto !important;
                }

                .calc-mode-switch-home {
                    font-size: 2rem !important;
                    padding: 0.5rem !important;
                    width: auto !important;
                    min-width: 200px !important;
                    height: auto !important;
                }

                .calc-mode-switch-segment-home {
                    font-size: 2rem !important;
                    padding: 0.8rem 1.2rem !important;
                    line-height: 1.4 !important;
                }

                #compactExitTimeBoxHome {
                    font-size: 2rem !important;
                    padding: 1rem 1.5rem !important;
                    width: auto !important;
                    min-width: 180px !important;
                    height: auto !important;
                }

                #compactExitTimeBoxHome .exit-label {
                    font-size: 2rem !important;
                }

                #compactExitTimeBoxHome .value {
                    font-size: 2.4rem !important;
                    font-weight: bold !important;
                }

                .evo-content-wrapper-home {
                    gap: 2rem !important;
                }

                .evo-group-wrapper-home {
                    gap: 1rem !important;
                }

                #evoCalculatorContainerHome {
                    padding: 2rem !important;
                    margin-bottom: 2rem !important;
                }
            }

            /* Media query per dispositivi in landscape con larghezza ridotta (SOLO MOBILE) */
            @media (max-width: 1024px) and (orientation: landscape) and (max-height: 600px) and (hover: none) {
                .parent {
                    gap: 0.75rem !important;
                }
                
                /* Font ridotti per landscape mobile */
                body, .form-mw {
                    font-size: 1.4rem !important;
                }
                
                h2 {
                    font-size: 2.2rem !important;
                }
                
                h4 {
                    font-size: 1.8rem !important;
                }
            }

            /* Media query per dispositivi molto piccoli */
            @media (max-width: 480px) and (orientation: portrait), 
                   (max-width: 640px) and (orientation: portrait) and (max-height: 800px) {
                .parent {
                    gap: 1rem !important;
                }

                /* Font enormi anche su schermi piccoli */
                h2 {
                    font-size: 3rem !important;
                    line-height: 1.3 !important;
                }

                h4 {
                    font-size: 2.4rem !important;
                    line-height: 1.4 !important;
                }

                .card {
                    font-size: 2rem !important;
                    line-height: 1.6 !important;
                }

                .clockings-table {
                    font-size: 1.8rem !important;
                    line-height: 1.5 !important;
                }

                .clockings-table th,
                .clockings-table td {
                    padding: 1rem !important;
                }

                .badge {
                    font-size: 1.6rem !important;
                    padding: 0.7rem 1.2rem !important;
                }

                /* Progress circle proporzionato */
                .progress-circle {
                    --size: 180px !important;
                    font-size: 2.6rem !important;
                }

                .utils ul li {
                    font-size: 1.9rem !important;
                    line-height: 1.7 !important;
                }

                .material-symbols-outlined {
                    font-size: 2.6rem !important;
                }

                body, .form-mw {
                    font-size: 1.9rem !important;
                    line-height: 1.6 !important;
                }

                .bottone {
                    font-size: 1.8rem !important;
                    padding: 1rem 1.6rem !important;
                }

                a {
                    font-size: 1.9rem !important;
                }

                /* STILI PER IL CALCULATOR "ORA DEL GIORNO" SU SCHERMI PICCOLI */
                #evoCalculatorContainerHome h4 {
                    font-size: 2.4rem !important;
                }

                .evo-label-home {
                    font-size: 1.6rem !important;
                }

                #fasciaOrariaSelectorHome {
                    font-size: 1.8rem !important;
                    padding: 0.9rem !important;
                }

                .calc-mode-switch-home {
                    font-size: 1.8rem !important;
                }

                .calc-mode-switch-segment-home {
                    font-size: 1.8rem !important;
                    padding: 0.7rem 1rem !important;
                }

                #compactExitTimeBoxHome {
                    font-size: 1.8rem !important;
                    padding: 0.9rem 1.3rem !important;
                }

                #compactExitTimeBoxHome .exit-label {
                    font-size: 1.8rem !important;
                }

                #compactExitTimeBoxHome .value {
                    font-size: 2.2rem !important;
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
