# EVO Responsive Sidebar (HOME)

Questo script Tampermonkey è progettato per il sistema di gestione delle presenze EVO (usato su `https://personale-unibo.hrgpi.it/`). Rende responsive il layout della **pagina HOME/Dashboard** su dispositivi mobile, spostando le card della sidebar ("Saldo Ferie" e "Richieste pendenti") sotto il contenuto principale e aumentando significativamente le dimensioni dei font per una migliore leggibilità su smartphone.

**(Versione Script: 2.3)**

## Caratteristiche

* **Layout Responsive per Mobile:**
    * Su dispositivi mobile (smartphone in portrait), il layout passa da 6 colonne a **1 colonna**.
    * Le card **"Saldo Ferie"** e **"Richieste pendenti"** vengono spostate **sotto** il contenuto principale invece che a lato.
    * Il layout desktop rimane invariato - le modifiche si applicano **solo su mobile**.
* **Font Enormi per Leggibilità Mobile:**
    * **Tutti i font vengono raddoppiati** rispetto alla dimensione desktop quando si visualizza su smartphone.
    * Titoli H4: **2.8rem** (es: "Timbrature di giornata", "Anomalie da sanare", "Saldo Ferie")
    * Testo nelle card: **2.2rem**
    * Tabelle: **2rem**
    * Badge: **1.8rem**
    * Icone Material: **3rem**
    * Liste (es: dettagli ferie): **2rem**
    * Progress circle: **3rem** con dimensione di **200px**
    * L'unico elemento con font ridotto è il titolo di benvenuto (H2: **1.75rem**) per mantenere proporzioni equilibrate.
* **Ottimizzazione Elementi Calculator "Ora del Giorno":**
    * Ingrandisce anche tutti gli elementi del calculator generato dall'altro script:
    * Titolo "Ora del Giorno": **2.8rem**
    * Label (Linea oraria, Orario di uscita): **1.8rem**
    * Select fascia oraria: **2rem**
    * Switch 7:12/6:01: **2rem**
    * Box orario di uscita: **2rem** (valore: **2.4rem**)
    * **Angoli arrotondati mantenuti** su tutti gli elementi (border-radius: 8-10px)
* **Rilevamento Intelligente dei Dispositivi:**
    * Utilizza media query multiple per identificare correttamente gli smartphone:
        * Orientamento portrait su schermi fino a 1024px
        * Rilevamento dispositivi touch (hover: none, pointer: coarse)
        * Gestione separata per schermi molto piccoli (<480px)
    * Funziona correttamente su smartphone ad alta risoluzione come **Samsung S24 Ultra** e **S25**.
* **Compatibilità con la Dashboard HOME:**
    * Lo script funziona esclusivamente sulla **pagina Dashboard/Home** del portale EVO.
    * Si attiva automaticamente quando rileva la presenza degli elementi della dashboard.
* **Miglioramenti Spaziatura e Layout:**
    * Padding aumentato nelle card per più respiro visivo.
    * Gap ottimizzato tra gli elementi.
    * Progress circle riorganizzato con layout verticale su mobile.
    * Tabelle con padding maggiore per facilitare la lettura.
* **Design Integrato:**
    * Le modifiche mantengono lo stile e i colori originali della pagina.
    * Gli elementi conservano le loro classi CSS native.
    * Zero conflitti con altri script o stili della pagina.
* **Performance Ottimizzata:**
    * Script leggero che inietta solo CSS (nessuna manipolazione DOM pesante).
    * Caricamento condizionale solo sulla pagina Dashboard.
    * Nessun impatto sulle prestazioni del sito.

## Installazione su Smartphone Android

Per utilizzare questo script su smartphone, è necessario installare Firefox per Android e Tampermonkey. Ecco la procedura completa:

### 1. Installa Firefox per Android

Se non l'hai già installato:

* Apri il **Google Play Store**
* Cerca **"Firefox Browser"**
* Installa l'app ufficiale di Mozilla Firefox

### 2. Abilita le Estensioni su Firefox Android

Firefox per Android supporta le estensioni, ma devi prima abilitarle:

1. Apri **Firefox** sul tuo smartphone
2. Tocca il menu (tre puntini in basso a destra)
3. Vai in **"Impostazioni"**
4. Scorri fino in fondo e tocca **"Informazioni su Firefox"**
5. **Tocca ripetutamente (5 volte) sul logo di Firefox** che appare nella pagina
6. Vedrai comparire un messaggio che conferma l'attivazione della modalità debug
7. Torna indietro alle Impostazioni
8. Ora vedrai apparire una nuova voce **"Componenti aggiuntivi"** nel menu
9. Tocca **"Componenti aggiuntivi"**
10. Tocca **"Gestione componenti aggiuntivi"**

### 3. Installa Tampermonkey

1. Nella sezione "Gestione componenti aggiuntivi" che hai appena aperto
2. Cerca **"Tampermonkey"** nella barra di ricerca
3. Tocca su **Tampermonkey** nei risultati
4. Tocca **"+ Aggiungi"** per installarlo
5. Conferma l'installazione toccando **"Aggiungi"** nel popup

### 4. **DISABILITA/ELIMINA EVENTUALE VECCHIO SCRIPT (IMPORTANTE!)**

Se hai installato versioni precedenti di questo script, è **FONDAMENTALE** che tu le disabiliti o elimini prima di installare questa versione. Lasciarle attive potrebbe causare conflitti.

### 5. Installazione dello Script per Aggiornamenti Automatici

Ora puoi installare lo script:

[**Clicca qui per installare/aggiornare EVO Responsive Sidebar (HOME)**](https://github.com/stefano-salvatore7/evo-responsive-sidebar-HOME/raw/refs/heads/main/responsive-sidebar-home.user.js)

* Dopo aver cliccato sul link dal tuo smartphone Firefox, Tampermonkey ti mostrerà il codice dello script e ti chiederà di **"Installa"** (se è la prima volta) o **"Aggiorna"** (se stai aggiornando una versione precedente). Conferma l'azione toccando il pulsante **"Installa"**.

### 6. Verifica Aggiornamenti Automatici

Una volta installato tramite il link RAW, Tampermonkey dovrebbe gestire automaticamente gli aggiornamenti:

* Tocca l'icona di Tampermonkey nella barra degli strumenti di Firefox
* Seleziona **"Dashboard"**
* Trova "EVO Responsive Sidebar (HOME)" nell'elenco
* Verifica che la casella "Controlla aggiornamenti" sia spuntata
* Tampermonkey controllerà periodicamente il repository per nuove versioni

## Installazione su PC (Opzionale)

Se vuoi testare lo script anche su PC (verrà applicato solo quando ridimensioni la finestra sotto 768px):

### 1. Installare l'estensione [Tampermonkey](https://www.tampermonkey.net/)

* **[Tampermonkey per Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**
* **[Tampermonkey per Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)**
* **[Tampermonkey per Firefox](https://addons.mozilla.org/it/firefox/addon/tampermonkey/)**

### 2. Installazione dello Script

[**Clicca qui per installare/aggiornare EVO Responsive Sidebar (HOME)**](https://github.com/stefano-salvatore7/evo-responsive-sidebar-HOME/raw/refs/heads/main/responsive-sidebar-home.user.js)

## Utilizzo

Una volta installato, lo script si attiverà automaticamente quando visiterai la pagina Dashboard/Home di EVO su `https://personale-unibo.hrgpi.it/*` dal tuo smartphone.

1. Apri **Firefox** sul tuo smartphone Android
2. Naviga alla **pagina Dashboard/Home** di EVO (`https://personale-unibo.hrgpi.it/`)
3. Effettua il login come al solito
4. La pagina verrà automaticamente ottimizzata per mobile:
   * Le card "Saldo Ferie" e "Richieste pendenti" appariranno **sotto** il contenuto principale
   * Tutti i font saranno **significativamente più grandi** e leggibili
   * Il layout sarà a **colonna singola** per facilitare lo scorrimento
5. Lo script funziona in background senza necessità di configurazione

## Compatibilità

* ✅ **Samsung Galaxy S24 Ultra**
* ✅ **Samsung Galaxy S25**
* ✅ Tutti gli smartphone Android con Firefox
* ✅ Tablet in modalità portrait
* ✅ Dispositivi iOS con Firefox (se disponibile)
* ✅ Desktop (solo a scopo di test, attivazione su finestre <768px)

## Novità Versione 2.3

La versione 2.3 ottimizza ulteriormente l'esperienza mobile:

* ✅ **Titolo benvenuto ridimensionato** (H2: 1.75rem) per proporzioni equilibrate
* ✅ **Tutti gli altri font raddoppiati** per leggibilità ottimale
* ✅ **Angoli arrotondati mantenuti** su switch e box orario
* ✅ **Calculator "Ora del Giorno"** completamente integrato e ingrandito
* ✅ **Progress circle ingrandito** a 200px con font 3rem
* ✅ **Rilevamento touch screen** migliorato per compatibilità universale

## Contributi

Se desideri contribuire a migliorare questo script, sentiti libero di aprire una "Issue" o proporre una "Pull Request" sul repository GitHub.

## Log delle Versioni

### Versione 2.3 (Gennaio 2026)
* Ridotto font titolo benvenuto (H2) a 1.75rem per proporzioni migliori
* Mantenuti tutti gli altri font enormi per leggibilità

### Versione 2.2 (Gennaio 2026)
* Aggiunti border-radius per mantenere angoli arrotondati su mobile
* Ottimizzati switch e box orario del calculator

### Versione 2.1 (Gennaio 2026)
* Ingranditi tutti gli elementi del calculator "Ora del Giorno"
* Migliorata integrazione con lo script del calculator

### Versione 2.0 (Gennaio 2026)
* Font raddoppiati rispetto alla versione precedente
* Tutti i testi portati a dimensioni enormi per leggibilità mobile
* Progress circle ingrandito a 200px
* Padding e spaziature ottimizzate

### Versione 1.1 (Gennaio 2026)
* Migliorato rilevamento dispositivi mobile ad alta risoluzione
* Aggiunto supporto per Samsung S24 Ultra e S25
* Media query ottimizzate con orientamento portrait

### Versione 1.0 (Gennaio 2026)
* Release iniziale
* Layout responsive per sidebar
* Font ingranditi per mobile
* Rilevamento dispositivi touch

---

**Nota:** Questo script è progettato per funzionare in combinazione con lo script "EVO Exit Time Calculator (HOME)" che gestisce il calcolo dell'orario di uscita. Entrambi gli script sono completamente compatibili e si completano a vicenda.

**Compatibilità Script:** Questo script è stato testato e funziona perfettamente insieme a:
* [EVO Exit Time Calculator (HOME)](https://github.com/stefano-salvatore7/evo-exit-time-calc-home) - v2.1 o superiore
