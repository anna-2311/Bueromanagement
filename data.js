/* ==========================================================================
   AKTE // Lernplattform – Inhaltsdaten
   Kauffrau/Kaufmann für Büromanagement – Prüfungsvorbereitung
   ========================================================================== */

const APP_DATA = {
  chapters: [
    // ======================================================================
    // KAPITEL A
    // ======================================================================
    {
      id: "wirtschaft",
      code: "A",
      title: "Ausbildung & Wirtschaft",
      subtitle: "Ausbildungsordnung, Bedürfnisse, Wirtschaftskreislauf, Konjunktur- & Geldpolitik",
      diagrams: [
        {
          title: "Bedürfnispyramide nach Maslow",
          note: "Von der Basis (existenziell) bis zur Spitze (Selbstverwirklichung).",
          svg: `<svg viewBox="0 0 560 320" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <polygon points="46,244 254,244 280,300 20,300" class="df-ink"/>
            <polygon points="72,188 228,188 254,244 46,244" class="df-ink-soft"/>
            <polygon points="98,132 202,132 228,188 72,188" class="df-success"/>
            <polygon points="124,76 176,76 202,132 98,132" class="df-ochre-soft"/>
            <polygon points="150,20 124,76 176,76" class="df-ochre"/>
            <line x1="267" y1="272" x2="296" y2="272" class="ds-border" stroke-width="1.5"/>
            <line x1="241" y1="216" x2="296" y2="216" class="ds-border" stroke-width="1.5"/>
            <line x1="215" y1="160" x2="296" y2="160" class="ds-border" stroke-width="1.5"/>
            <line x1="189" y1="104" x2="296" y2="104" class="ds-border" stroke-width="1.5"/>
            <line x1="163" y1="48" x2="296" y2="48" class="ds-border" stroke-width="1.5"/>
            <text x="302" y="276" class="dt-mono" font-size="12">Physiologische Bedürfnisse</text>
            <text x="302" y="220" class="dt-mono" font-size="12">Sicherheitsbedürfnisse</text>
            <text x="302" y="164" class="dt-mono" font-size="12">Soziale Bedürfnisse</text>
            <text x="302" y="108" class="dt-mono" font-size="12">Wertschätzung</text>
            <text x="302" y="52" class="dt-mono" font-size="12">Selbstverwirklichung</text>
          </svg>`
        },
        {
          title: "Das Magische Viereck",
          note: "Vier Ziele der Wirtschaftspolitik – gestrichelt: typische Zielkonflikte.",
          svg: `<svg viewBox="0 0 480 400" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="240" y1="60" x2="240" y2="320" class="ds-stamp" stroke-width="1.5" stroke-dasharray="4 5"/>
            <line x1="70" y1="190" x2="410" y2="190" class="ds-stamp" stroke-width="1.5" stroke-dasharray="4 5"/>
            <line x1="240" y1="60" x2="410" y2="190" class="ds-border" stroke-width="1.5"/>
            <line x1="410" y1="190" x2="240" y2="320" class="ds-border" stroke-width="1.5"/>
            <line x1="240" y1="320" x2="70" y2="190" class="ds-border" stroke-width="1.5"/>
            <line x1="70" y1="190" x2="240" y2="60" class="ds-border" stroke-width="1.5"/>
            <text x="240" y="196" text-anchor="middle" class="dt-mono" font-size="10">Zielkonflikte</text>
            <circle cx="240" cy="60" r="44" class="df-ink"/>
            <text x="240" y="56" text-anchor="middle" class="dt-white" font-size="11">Preisniveau-</text>
            <text x="240" y="70" text-anchor="middle" class="dt-white" font-size="11">stabilität</text>
            <circle cx="410" cy="190" r="44" class="df-ink"/>
            <text x="410" y="186" text-anchor="middle" class="dt-white" font-size="11">Vollbe-</text>
            <text x="410" y="200" text-anchor="middle" class="dt-white" font-size="11">schäftigung</text>
            <circle cx="240" cy="320" r="44" class="df-ink"/>
            <text x="240" y="316" text-anchor="middle" class="dt-white" font-size="11">Wirtschafts-</text>
            <text x="240" y="330" text-anchor="middle" class="dt-white" font-size="11">wachstum</text>
            <circle cx="70" cy="190" r="44" class="df-ink"/>
            <text x="70" y="180" text-anchor="middle" class="dt-white" font-size="9">Außenwirt-</text>
            <text x="70" y="192" text-anchor="middle" class="dt-white" font-size="9">schaftliches</text>
            <text x="70" y="204" text-anchor="middle" class="dt-white" font-size="9">Gleichgewicht</text>
          </svg>`
        }
      ],
      terms: [
        { word: "AUSBILDUNGSVERTRAG", clue: "Regelt Dauer, Vergütung und Probezeit individuell zwischen Azubi und Betrieb" },
        { word: "BERUFSSCHULE", clue: "Zweiter Lernort der dualen Ausbildung" },
        { word: "BEDUERFNIS", clue: "Wunsch, einen Mangel zu beheben" },
        { word: "PYRAMIDE", clue: "Form des Maslow-Modells der Bedürfnisse" },
        { word: "KREISLAUF", clue: "Modell der Geld- und Güterströme zwischen Wirtschaftssubjekten" },
        { word: "KONJUNKTUR", clue: "Auf und Ab der wirtschaftlichen Gesamtlage" },
        { word: "REZESSION", clue: "Abschwungphase der Konjunktur" },
        { word: "LEITZINS", clue: "Wichtigstes Steuerungsinstrument der EZB" },
        { word: "SUBVENTION", clue: "Finanzielle Hilfe des Staates an Unternehmen" },
        { word: "VIERECK", clue: "Vier teils widersprüchliche Ziele der Wirtschaftspolitik (Magisches ...)" }
      ],
      hangmanTerms: [
        { word: "PROBEZEIT", clue: "Testphase zu Beginn der Ausbildung" },
        { word: "WOHLSTAND", clue: "Ziel des stetigen Wirtschaftswachstums" },
        { word: "PRODUKTIONSFAKTOR", clue: "Boden, Arbeit oder Kapital" },
        { word: "DISPOSITION", clue: "Flexible Ergänzung wiederkehrender Aufgaben" },
        { word: "IMPROVISATION", clue: "Spontane Lösung einer unvorhergesehenen Situation" },
        { word: "FISKALPOLITIK", clue: "Wirtschaftspolitik des Staates über Steuern und Ausgaben" },
        { word: "AUSSENHANDEL", clue: "Export und Import zwischen Ländern" },
        { word: "WACHSTUM", clue: "Vermehrung von Wohlstand und Produktion" }
      ],
      summary: [
        {
          q: "Ausbildungsordnung vs. Ausbildungsvertrag – was regelt was?",
          a: "Die Ausbildungsordnung ist bundesweit einheitlich und rechtsverbindlich: Sie legt Berufsbezeichnung, Ausbildungsdauer, Ausbildungsrahmenplan und Prüfungsanforderungen fest. Der Ausbildungsvertrag dagegen ist individuell zwischen Azubi und Betrieb geschlossen und regelt nach BBiG §11 z. B. Vergütung, Arbeitszeit, Probezeit und Urlaub – auf Basis der Ausbildungsordnung."
        },
        {
          q: "Was bedeutet „duale Ausbildung“?",
          a: "Die parallele Ausbildung an zwei Lernorten: Im Betrieb wird praktisch nach dem Ausbildungsrahmenplan gearbeitet, in der Berufsschule theoretisch nach dem Rahmenlehrplan der Kultusministerkonferenz unterrichtet. Rechtliche Grundlage ist das Berufsbildungsgesetz (BBiG)."
        },
        {
          q: "Wie ist die Bedürfnispyramide nach Maslow aufgebaut?",
          a: "Von unten nach oben: physiologische Bedürfnisse (Luft, Wasser, Nahrung), Sicherheitsbedürfnisse, soziale Bedürfnisse, Wertschätzung, Selbstverwirklichung. Erst wenn eine untere Stufe erfüllt ist, motiviert die nächste Stufe stärker."
        },
        {
          q: "Einfacher vs. erweiterter Wirtschaftskreislauf – was ist der Unterschied?",
          a: "Im einfachen Kreislauf gibt es nur Haushalte und Unternehmen – kein Sparen, keine Banken, kein Staat. Im erweiterten Kreislauf kommen Kapitalsammelstellen (Sparen → Investitionen) und der Staat (Steuern, Transferleistungen, Subventionen) hinzu. Mit Ausland zusätzlich: Export- und Importzahlungen."
        },
        {
          q: "Antizyklische Wirtschaftspolitik – was passiert wann?",
          a: "Ziel ist ein stetiges Wachstum. In der Krise/Depression wird expansiv gesteuert: Staatsausgaben ↑, Steuern ↓, Leitzinsen ↓. Im Boom wird restriktiv gesteuert: Staatsausgaben ↓, Steuern ↑, Leitzinsen ↑ – jeweils entgegengesetzt zur aktuellen Konjunkturlage."
        },
        {
          q: "Was ist das Magische Viereck – und warum „magisch“?",
          a: "Vier gleichzeitig verfolgte, aber sich teils widersprechende Ziele: Preisniveaustabilität, hoher Beschäftigungsgrad, außenwirtschaftliches Gleichgewicht, stetiges Wirtschaftswachstum. „Magisch“, weil man nicht alle vier Ziele gleichzeitig perfekt erreichen kann – es entstehen Zielkonflikte."
        }
      ],
      flashcards: [
        { front: "Nenne 4 Pflichtinhalte eines Ausbildungsvertrags (BBiG §11).", back: "Z. B. Dauer der Ausbildung, tägliche/wöchentliche Arbeitszeit, Vergütung, Dauer der Probezeit, Urlaubstage, Kündigungsbedingungen." },
        { front: "Nenne 3 Rechte des Auszubildenden.", back: "Qualifizierte Ausbildung, Vergütung, Freistellung für Berufsschule und Prüfungen, Ausstellung eines Zeugnisses, Gewährung des Urlaubsanspruchs." },
        { front: "Nenne 3 Pflichten des Auszubildenden.", back: "Lernpflicht, Treuepflicht, Einhaltung der Betriebsordnung, Führen des Berichtshefts, Teilnahme am Berufsschulunterricht." },
        { front: "Was ist Selbstverwirklichung nach Maslow?", back: "Das Bedürfnis, das eigene Potenzial zu maximieren – der Wunsch, das zu werden, was man werden kann." },
        { front: "Existenzbedürfnisse vs. Luxusbedürfnisse?", back: "Existenzbedürfnisse (Primärbedürfnisse) sind notwendig, z. B. saubere Luft. Luxusbedürfnisse (Sekundärbedürfnisse) sind nicht notwendig, z. B. teure Markenkleidung." },
        { front: "Freie Güter vs. wirtschaftliche Güter?", back: "Freie Güter sind unbegrenzt verfügbar und niemandem vorenthalten (Sonne, Luft). Wirtschaftliche Güter sind knapp und müssen erzeugt werden." },
        { front: "Nenne die 3 Eigenschaften des Produktionsfaktors Boden.", back: "Unvermehrbarkeit, Unbeweglichkeit, Unzerstörbarkeit." },
        { front: "Dispositive vs. ausführende Arbeit?", back: "Dispositive Arbeit ordnet, verwaltet, organisiert. Ausführende Arbeit führt die eigentliche Produktion durch." },
        { front: "Was gehört zu den Elementarfaktoren (BWL)?", back: "Objektbezogene menschliche Arbeit, Betriebsmittel, Werkstoffe." },
        { front: "Was gehört zu den dispositiven Faktoren (BWL)?", back: "Planung, Betriebsorganisation, Irrationale Wurzel (Unternehmerintuition)." },
        { front: "Organisation vs. Disposition vs. Improvisation?", back: "Organisation = wiederkehrende Daueraufgaben. Disposition = flexible Ergänzung. Improvisation = spontane Lösung unvorhergesehener Situationen." },
        { front: "Was fehlt im einfachen Wirtschaftskreislauf?", back: "Banken (Sparmöglichkeit), Staat und Investitionen – Haushalte geben ihr ganzes Geld für Konsum aus." },
        { front: "Positiver vs. negativer Außenbeitrag?", back: "Positiv: Exporte > Importe (Geld fließt ins Inland). Negativ: Exporte < Importe (Geld fließt ins Ausland)." },
        { front: "Expansive Fiskalpolitik – 3 Maßnahmen in der Krise?", back: "Staatsausgaben erhöhen, Steuern senken, Subventionen erhöhen (Ziel: Nachfrage ankurbeln)." },
        { front: "Restriktive Geldpolitik – 2 Maßnahmen im Boom?", back: "Leitzinsen erhöhen, Mindestreserve erhöhen (Ziel: Inflation bremsen)." },
        { front: "Wer ist für Preisstabilität zuständig – EZB oder Staat?", back: "Die EZB (Geldpolitik). Der Staat (Fiskalpolitik) kümmert sich um Vollbeschäftigung und Wachstum." },
        { front: "Magisches Sechseck – welche 2 Ziele kommen hinzu?", back: "Umweltschutz und gerechte Einkommensverteilung (qualitative Ziele, zusätzlich zu den 4 quantitativen Zielen)." },
        { front: "Nenne die 4 Ziele des Magischen Vierecks.", back: "Preisniveaustabilität, hoher Beschäftigungsgrad, außenwirtschaftliches Gleichgewicht, stetiges Wirtschaftswachstum." }
      ],
      quiz: [
        { q: "Wie lang darf eine Berufsausbildung laut Ausbildungsordnung höchstens/mindestens dauern?", options: ["1–2 Jahre", "2–3 Jahre", "3–4 Jahre", "Es gibt keine Vorgabe"], correct: 1, explain: "Die Ausbildungsdauer soll nicht mehr als drei und nicht weniger als zwei Jahre betragen." },
        { q: "Wer muss den Ausbildungsvertrag bei Minderjährigen zusätzlich unterschreiben?", options: ["Der Ausbildungsleiter", "Die IHK", "Der gesetzliche Vertreter", "Die Berufsschule"], correct: 2, explain: "Bei Minderjährigen unterschreibt zusätzlich der gesetzliche Vertreter (z. B. ein Elternteil)." },
        { q: "Welche Bedürfnisstufe folgt bei Maslow direkt nach den Sicherheitsbedürfnissen?", options: ["Wertschätzung", "Soziale Bedürfnisse", "Selbstverwirklichung", "Physiologische Bedürfnisse"], correct: 1, explain: "Nach den Sicherheitsbedürfnissen kommen die sozialen Bedürfnisse (Liebe, Zugehörigkeit)." },
        { q: "Sonne, Luft und Licht sind Beispiele für …", options: ["wirtschaftliche Güter", "Investitionsgüter", "freie Güter", "Kollektivbedürfnisse"], correct: 2, explain: "Freie Güter können konsumiert werden, ohne die Verfügbarkeit für andere zu verringern." },
        { q: "Welche Eigenschaft trifft NICHT auf den Produktionsfaktor Boden zu?", options: ["Unvermehrbarkeit", "Unbeweglichkeit", "Vermehrbarkeit nach Bedarf", "Unzerstörbarkeit"], correct: 2, explain: "Boden kann nicht nach Bedarf vermehrt werden – das Gegenteil ist richtig: Unvermehrbarkeit." },
        { q: "Was gibt es im einfachen Wirtschaftskreislauf NICHT?", options: ["Haushalte", "Unternehmen", "Banken zum Sparen", "Konsumgüter"], correct: 2, explain: "Im einfachen Kreislauf fehlen Banken – Haushalte geben ihr gesamtes Geld für Konsum aus." },
        { q: "Was macht der Staat laut expansiver Fiskalpolitik in der Krise?", options: ["Staatsausgaben senken", "Steuern erhöhen", "Staatsausgaben erhöhen", "Subventionen kürzen"], correct: 2, explain: "In der Krise vergibt der Staat mehr Aufträge und erhöht die Ausgaben, um die Nachfrage anzukurbeln." },
        { q: "Welches Ziel gehört NICHT zum Magischen Viereck, sondern erst zum Magischen Sechseck?", options: ["Preisniveaustabilität", "Umweltschutz", "Vollbeschäftigung", "Wirtschaftswachstum"], correct: 1, explain: "Umweltschutz ist eines der zwei zusätzlichen qualitativen Ziele im Magischen Sechseck." },
        { q: "Senkt die EZB in der Krise die Leitzinsen oder erhöht sie sie?", options: ["Sie senkt sie", "Sie erhöht sie", "Sie lässt sie unverändert", "Das entscheidet der Staat"], correct: 0, explain: "In der Krise senkt die EZB die Leitzinsen, damit Kredite günstiger werden (expansive Geldpolitik)." },
        { q: "Wie nennt man Aufgaben, die immer wiederkehren und einer Dauerregelung unterliegen?", options: ["Improvisation", "Disposition", "Organisation", "Innovation"], correct: 2, explain: "Organisation betrifft wiederkehrende Aufgaben wie z. B. die tägliche Postbearbeitung." },
        { q: "Was gehört zu den dispositiven Faktoren nach Gutenberg?", options: ["Werkstoffe", "Betriebsmittel", "Planung", "Ausführende Arbeit"], correct: 2, explain: "Planung, Betriebsorganisation und die irrationale Wurzel zählen zu den dispositiven Faktoren." },
        { q: "Was passiert bei einem positiven Außenbeitrag?", options: ["Importe > Exporte", "Exporte > Importe", "Exporte = Importe", "Es gibt keinen Außenhandel"], correct: 1, explain: "Positiver Außenbeitrag bedeutet Nettoexport – mehr Geld fließt ins Inland als hinaus." }
      ],
      exam: [
        {
          title: "Organisation, Disposition, Improvisation im Büroalltag",
          points: 9,
          task: "Erläutern Sie die Begriffe Organisation, Disposition und Improvisation. Nennen Sie zu jedem Begriff ein passendes Beispiel aus dem Büroalltag.",
          solution: "Organisation: wiederkehrende Aufgaben mit Dauerregelung, z. B. die tägliche Bearbeitung der Eingangspost.\nDisposition: flexible Ergänzung wiederkehrender Aufgaben, z. B. kurzfristige Umverteilung von Aufgaben bei hohem Postaufkommen vor Feiertagen.\nImprovisation: spontane Lösung einer nicht vorhersehbaren Situation, z. B. der Serverausfall am Morgen erfordert eine sofortige, unvorbereitete Ersatzlösung für die Terminplanung."
        },
        {
          title: "Der erweiterte Wirtschaftskreislauf mit Staat",
          points: 8,
          task: "Beschreiben Sie anhand des erweiterten Wirtschaftskreislaufs, wie der Staat auf die Wirtschaft einwirkt. Nennen Sie mindestens vier Geld- bzw. Güterströme, die den Staat betreffen.",
          solution: "Der Staat produziert öffentliche Güter und beeinflusst den Kreislauf über mehrere Ströme:\n1. Haushalte und Unternehmen zahlen Steuern und Abgaben an den Staat.\n2. Der Staat zahlt Transferleistungen an Haushalte (z. B. Sozialleistungen) und Subventionen an Unternehmen.\n3. Der Staat vergibt Aufträge an Unternehmen und zahlt dafür.\n4. Über Kapitalsammelstellen kann sich der Staat zusätzlich verschulden (staatliche Kreditaufnahme) oder Ersparnisse bilden.\nSo greift der Staat aktiv in Angebot, Nachfrage und Einkommensverteilung ein."
        }
      ]
    },

    // ======================================================================
    // KAPITEL B
    // ======================================================================
    {
      id: "recht",
      code: "B",
      title: "Verträge & Beschaffung",
      subtitle: "Geschäftsfähigkeit, Rechtsgeschäfte, Kaufvertragsarten, Kaufvertragsstörungen, Verjährung",
      diagrams: [
        {
          title: "Geschäftsfähigkeit nach Alter",
          note: "Drei Stufen der Geschäftsfähigkeit im Überblick.",
          svg: `<svg viewBox="0 0 560 200" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="70" width="120" height="50" class="df-stamp"/>
            <rect x="160" y="70" width="200" height="50" class="df-ochre"/>
            <rect x="360" y="70" width="160" height="50" class="df-success"/>
            <text x="100" y="90" text-anchor="middle" class="dt-white" font-size="10">geschäfts-</text>
            <text x="100" y="104" text-anchor="middle" class="dt-white" font-size="10">unfähig</text>
            <text x="260" y="100" text-anchor="middle" class="dt-white" font-size="12">beschränkt geschäftsfähig</text>
            <text x="440" y="100" text-anchor="middle" class="dt-white" font-size="12">voll geschäftsfähig</text>
            <text x="40" y="142" class="dt-mono" font-size="11">0</text>
            <text x="140" y="142" class="dt-mono" font-size="11">7 Jahre</text>
            <text x="340" y="142" class="dt-mono" font-size="11">18 Jahre</text>
            <line x1="160" y1="70" x2="160" y2="130" class="ds-border" stroke-width="1.5"/>
            <line x1="360" y1="70" x2="360" y2="130" class="ds-border" stroke-width="1.5"/>
          </svg>`
        },
        {
          title: "Rechte bei Schlechtleistung",
          note: "Nacherfüllung ist vorrangig – erst danach greifen die nachrangigen Rechte.",
          svg: `<svg viewBox="0 0 500 280" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="170" y="10" width="160" height="44" rx="8" class="df-stamp"/>
            <text x="250" y="37" text-anchor="middle" class="dt-white" font-size="13">Mangel entdeckt</text>
            <line x1="250" y1="54" x2="250" y2="80" class="ds-ink" stroke-width="1.5"/>
            <rect x="150" y="80" width="200" height="50" rx="8" class="df-ink"/>
            <text x="250" y="102" text-anchor="middle" class="dt-white" font-size="13">Nacherfüllung</text>
            <text x="250" y="118" text-anchor="middle" class="dt-white-mono" font-size="9">vorrangiges Recht</text>
            <text x="250" y="148" text-anchor="middle" class="dt-mono" font-size="10">bei 2x Fehlschlag / Verweigerung</text>
            <line x1="250" y1="130" x2="250" y2="168" class="ds-ink" stroke-width="1.5"/>
            <line x1="100" y1="168" x2="400" y2="168" class="ds-ink" stroke-width="1.5"/>
            <line x1="100" y1="168" x2="100" y2="188" class="ds-ink" stroke-width="1.5"/>
            <line x1="250" y1="168" x2="250" y2="188" class="ds-ink" stroke-width="1.5"/>
            <line x1="400" y1="168" x2="400" y2="188" class="ds-ink" stroke-width="1.5"/>
            <rect x="30" y="188" width="140" height="50" rx="8" class="df-ochre"/>
            <text x="100" y="216" text-anchor="middle" class="dt-white" font-size="12">Rücktritt</text>
            <rect x="180" y="188" width="140" height="50" rx="8" class="df-ochre"/>
            <text x="250" y="210" text-anchor="middle" class="dt-white" font-size="12">Preis-</text>
            <text x="250" y="224" text-anchor="middle" class="dt-white" font-size="12">minderung</text>
            <rect x="330" y="188" width="140" height="50" rx="8" class="df-ochre"/>
            <text x="400" y="210" text-anchor="middle" class="dt-white" font-size="11">Schaden-</text>
            <text x="400" y="224" text-anchor="middle" class="dt-white" font-size="11">ersatz</text>
            <text x="250" y="262" text-anchor="middle" class="dt-mono" font-size="10">nachrangige Rechte</text>
          </svg>`
        }
      ],
      terms: [
        { word: "KAUFVERTRAG", clue: "Mehrseitig verpflichtendes Rechtsgeschäft zwischen Käufer und Verkäufer" },
        { word: "VERJAEHRUNG", clue: "Verlust des gerichtlichen Durchsetzungsrechts nach Fristablauf" },
        { word: "LIEFERVERZUG", clue: "Ware wird zu spät oder gar nicht geliefert" },
        { word: "ANNAHMEVERZUG", clue: "Kunde nimmt die richtig gelieferte Ware nicht an" },
        { word: "GATTUNGSKAUF", clue: "Kauf einer vertretbaren, ersetzbaren Sache" },
        { word: "STUECKKAUF", clue: "Kauf einer nicht vertretbaren Sache, z. B. ein Gemälde" },
        { word: "RECHTSGESCHAEFT", clue: "Tatbestand aus mind. einer Willenserklärung mit Rechtsfolge" },
        { word: "WILLENSERKLAERUNG", clue: "Äußerung mit dem Ziel, rechtlich etwas zu bewirken" }
      ],
      hangmanTerms: [
        { word: "MINDERJAEHRIG", clue: "Person zwischen 7 und 18 Jahren, beschränkt geschäftsfähig" },
        { word: "GENEHMIGUNG", clue: "Zustimmung NACH Abschluss eines Rechtsgeschäfts" },
        { word: "EINWILLIGUNG", clue: "Zustimmung VOR Abschluss eines Rechtsgeschäfts" },
        { word: "SACHMANGEL", clue: "Ware ist beschädigt oder hat falsche Menge" },
        { word: "RECHTSMANGEL", clue: "Ein Dritter kann Rechte an der Ware geltend machen" },
        { word: "FIXKAUF", clue: "Lieferung muss zu einem exakt vereinbarten Termin erfolgen" },
        { word: "ERFUELLUNGSORT", clue: "Ort, an dem der Schuldner seine Leistung erbringen muss" },
        { word: "NACHERFUELLUNG", clue: "Vorrangiges Recht bei Schlechtleistung" }
      ],
      summary: [
        {
          q: "Die drei Stufen der Geschäftsfähigkeit im Überblick?",
          a: "Geschäftsunfähig (bis 7 Jahre, sowie dauerhaft Geisteskranke): Willenserklärungen sind nichtig. Beschränkt geschäftsfähig (7–18 Jahre): Rechtsgeschäfte sind schwebend unwirksam, bis der gesetzliche Vertreter zustimmt. Voll geschäftsfähig (ab 18 Jahren): Willenserklärungen sind unbeschränkt gültig."
        },
        {
          q: "Einseitiges vs. mehrseitiges Rechtsgeschäft?",
          a: "Beim einseitigen Rechtsgeschäft reicht die Willenserklärung einer Person (z. B. Kündigung, Testament). Beim mehrseitigen Rechtsgeschäft sind Willenserklärungen mehrerer Personen nötig – der Kaufvertrag ist mehrseitig verpflichtend: Verkäufer liefert, Käufer zahlt."
        },
        {
          q: "Wie kommt ein Kaufvertrag rechtlich zustande?",
          a: "Durch zwei übereinstimmende Willenserklärungen: den (verbindlichen) Antrag und die Annahme. Schaufensterauslagen und Werbeprospekte sind rechtlich unverbindlich. Ein Antrag kann durch Freizeichnungsklauseln, rechtzeitigen Widerruf oder Abänderung unwirksam werden."
        },
        {
          q: "Die drei Arten von Kaufvertragsstörungen?",
          a: "Mangelrüge (Schlechtleistung: falsche Ware, Menge oder Beschaffenheit), Schuldnerverzug (nicht rechtzeitige Lieferung oder Zahlung) und Gläubigerverzug (Annahmeverzug: der Kunde nimmt die Ware nicht an)."
        },
        {
          q: "Rechte bei Schlechtleistung – in welcher Reihenfolge?",
          a: "Vorrangig: Nacherfüllung (Nachbesserung oder Ersatzlieferung). Erst wenn diese zweimal fehlschlägt oder verweigert wird, greifen die nachrangigen Rechte: Rücktritt, Preisminderung oder Schadenersatz statt der Leistung."
        },
        {
          q: "Verjährung – Hemmung oder Neubeginn?",
          a: "Bei Hemmung wird die Frist für einen Zeitraum ausgesetzt und am Ende angehängt (z. B. bei Verhandlungen). Beim Neubeginn startet die Frist komplett neu (z. B. nach einem Schuldanerkenntnis). Die Regelverjährung beträgt 3 Jahre."
        }
      ],
      flashcards: [
        { front: "Ab welchem Alter ist man voll geschäftsfähig?", back: "Ab dem vollendeten 18. Lebensjahr – Willenserklärungen sind dann unbeschränkt gültig." },
        { front: "Sind Rechtsgeschäfte von Kindern bis 7 Jahren gültig?", back: "Nein, sie sind grundsätzlich nichtig – Ausnahme: einfache Botengänge." },
        { front: "Nenne 2 Ausnahmen, bei denen beschränkt Geschäftsfähige ohne Zustimmung handeln dürfen.", back: "Geschäfte im Rahmen des Taschengeldes (ohne Sparen) und die Annahme von Geschenken ohne Folgekosten." },
        { front: "Einwilligung vs. Genehmigung?", back: "Einwilligung = Zustimmung VOR Abschluss des Rechtsgeschäfts. Genehmigung = Zustimmung NACH Abschluss." },
        { front: "Rechtsfähigkeit natürlicher Personen – ab wann?", back: "Von der Geburt bis zum Tod." },
        { front: "Was ist ein zweiseitiger Handelskauf?", back: "Ein Kaufvertrag zwischen zwei Kaufleuten (B2B)." },
        { front: "Stückkauf vs. Gattungskauf?", back: "Stückkauf: nicht vertretbare Sache (z. B. Gemälde). Gattungskauf: vertretbare Sache, kann ersetzt werden (z. B. Bücher)." },
        { front: "Was kennzeichnet einen Fixkauf?", back: "Er muss explizit mit „fix“ oder „fest“ gekennzeichnet sein – die Lieferung zum genauen Termin ist Vertragsbestandteil." },
        { front: "Kauf auf Probe vs. Kauf zur Probe?", back: "Kauf auf Probe: Rückgaberecht innerhalb einer Frist. Kauf zur Probe: erst kleine Menge zu Testzwecken kaufen." },
        { front: "Wo liegt der gesetzliche Erfüllungsort für Warenschulden?", back: "Beim Verkäufer – Warenschulden sind Holschulden, der Käufer muss abholen (lassen)." },
        { front: "Was hat Vorrang: Individualabrede oder AGB?", back: "Die individuelle Vereinbarung hat immer Vorrang vor den Allgemeinen Geschäftsbedingungen." },
        { front: "Sachmangel vs. Rechtsmangel?", back: "Sachmangel: z. B. falsche Ware oder Menge, Beschaffenheitsfehler. Rechtsmangel: ein Dritter kann Rechte an der Sache geltend machen (z. B. bei Diebstahl)." },
        { front: "Rügefrist für offene Mängel beim zweiseitigen Handelskauf?", back: "Unverzüglich, also ohne schuldhaftes Zögern." },
        { front: "Wann entfällt die Mahnung beim Lieferverzug?", back: "Bei kalendermäßig bestimmtem Liefertermin (Fixkauf), bestimmbarem Termin oder wenn der Schuldner die Lieferung verweigert." },
        { front: "Was ist die Regelverjährungsfrist in Deutschland?", back: "3 Jahre, wenn keine andere Vereinbarung getroffen wurde." },
        { front: "Nenne 2 Gründe für eine Hemmung der Verjährung.", back: "Laufende Verhandlungen über den Anspruch und höhere Gewalt." },
        { front: "Wer trägt beim Lieferzusatz „ab Werk“ die Transportkosten?", back: "Der Käufer trägt ab dem Werk alle Kosten des Transports." },
        { front: "Was bedeutet Annahmeverzug (Gläubigerverzug)?", back: "Die richtige Ware wurde pünktlich am richtigen Ort geliefert, der Kunde nimmt sie aber nicht an." }
      ],
      quiz: [
        { q: "Ab welchem Alter gilt man als voll geschäftsfähig?", options: ["16 Jahre", "18 Jahre", "21 Jahre", "Es gibt keine feste Altersgrenze"], correct: 1, explain: "Volle Geschäftsfähigkeit beginnt mit dem vollendeten 18. Lebensjahr." },
        { q: "Rechtsgeschäfte von Kindern bis 7 Jahren sind grundsätzlich …", options: ["gültig", "schwebend unwirksam", "nichtig", "genehmigungsfrei"], correct: 2, explain: "Kinder bis 7 Jahre sind geschäftsunfähig – ihre Willenserklärungen sind nichtig." },
        { q: "Eine Kündigung ist eine …", options: ["nicht empfangsbedürftige Willenserklärung", "empfangsbedürftige Willenserklärung", "mehrseitige Willenserklärung", "unverbindliche Anpreisung"], correct: 1, explain: "Die Kündigung wird erst gültig, wenn sie dem Empfänger zugegangen ist." },
        { q: "Ein Kaufvertrag zwischen zwei Kaufleuten heißt …", options: ["bürgerlicher Kauf", "einseitiger Handelskauf", "zweiseitiger Handelskauf", "Verbrauchsgüterkauf"], correct: 2, explain: "Sind beide Vertragspartner Kaufleute, spricht man vom zweiseitigen Handelskauf (B2B)." },
        { q: "Beim Gattungskauf handelt es sich um …", options: ["nicht vertretbare Sachen", "vertretbare Sachen", "nur gebrauchte Waren", "immaterielle Güter"], correct: 1, explain: "Vertretbare Sachen können durch gleichartige Ware ersetzt werden, z. B. Möbel oder Bücher." },
        { q: "Wo liegt der gesetzliche Erfüllungsort für Warenschulden?", options: ["Beim Käufer", "Beim Verkäufer", "Am Sitz des Gerichts", "Frei wählbar"], correct: 1, explain: "Warenschulden sind Holschulden – Erfüllungsort ist der Sitz des Verkäufers." },
        { q: "Was hat Vorrang vor den AGB?", options: ["Nichts, AGB gelten immer", "Individuelle Vereinbarungen", "Die Katalogpreise", "Mündliche Absprachen sind ungültig"], correct: 1, explain: "Individuelle Absprachen haben immer Vorrang vor allgemeinen Geschäftsbedingungen." },
        { q: "Wie lang ist die gesetzliche Regelverjährungsfrist?", options: ["1 Jahr", "2 Jahre", "3 Jahre", "5 Jahre"], correct: 2, explain: "Ohne abweichende Vereinbarung beträgt die Regelverjährung 3 Jahre." },
        { q: "Was passiert bei einer Hemmung der Verjährung?", options: ["Die Frist beginnt komplett neu", "Die Frist wird ausgesetzt und später angehängt", "Der Anspruch erlischt sofort", "Die Frist verkürzt sich"], correct: 1, explain: "Bei Hemmung wird die Verjährung für einen Zeitraum gestoppt; dieser wird am Ende der Frist hinzugerechnet." },
        { q: "Welches Recht steht dem Käufer bei Schlechtleistung zuerst zu?", options: ["Rücktritt", "Preisminderung", "Nacherfüllung", "Schadenersatz statt der Leistung"], correct: 2, explain: "Nacherfüllung (Nachbesserung/Ersatzlieferung) ist vorrangig vor Rücktritt oder Preisminderung." },
        { q: "Wann entfällt beim Lieferverzug die vorherige Mahnung?", options: ["Nie, eine Mahnung ist immer nötig", "Bei einem Fix-Terminkauf", "Nur bei Privatkunden", "Wenn der Käufer im Ausland sitzt"], correct: 1, explain: "Bei kalendermäßig bestimmtem Termin (Fixkauf) ist keine Mahnung erforderlich." },
        { q: "Wer trägt beim Lieferzusatz „ab Werk“ die Transportkosten?", options: ["Der Verkäufer trägt alle Kosten", "Der Käufer trägt alle Kosten ab Werk", "Kosten werden geteilt", "Der Spediteur"], correct: 1, explain: "„Ab Werk“ bedeutet, der Käufer übernimmt sämtliche Transportkosten ab dem Werk des Verkäufers." }
      ],
      exam: [
        {
          title: "Beschränkte Geschäftsfähigkeit prüfen",
          points: 10,
          task: "Ein 16-jähriger Auszubildender kauft ohne Wissen seiner Eltern ein Smartphone in monatlichen Raten. Prüfen Sie schrittweise, ob der Vertrag wirksam ist.",
          solution: "1. Der Auszubildende ist mit 16 Jahren beschränkt geschäftsfähig (7–18 Jahre).\n2. Ein Ratenkauf bringt keinen rein rechtlichen Vorteil, sondern verpflichtet zur Zahlung – daher ist die Einwilligung des gesetzlichen Vertreters notwendig.\n3. Da diese Einwilligung nicht vorlag, ist der Vertrag zunächst schwebend unwirksam.\n4. Ratenkäufe sind laut Regelung ohnehin grundsätzlich zustimmungspflichtig.\n5. Genehmigen die Eltern den Kauf nachträglich innerhalb angemessener Zeit, wird der Vertrag rückwirkend gültig; verweigern oder ignorieren sie ihn, ist der Vertrag endgültig unwirksam."
        },
        {
          title: "Lieferverzug ohne Mahnung",
          points: 8,
          task: "Ein Kunde erhält seine bestellte Ware zwei Wochen zu spät. Es war kein fester Liefertermin (kein Fixkauf) vereinbart und der Kunde hat den Lieferanten nicht gemahnt. Welche Rechte hat der Kunde – und was muss zuerst passieren?",
          solution: "Da es sich nicht um einen Fixkauf handelt, ist eine Mahnung mit Nachfrist erforderlich, damit überhaupt ein Lieferverzug (Schuldnerverzug) eintritt. Der Kunde muss den Lieferanten also zunächst schriftlich mahnen und eine angemessene Nachfrist setzen.\nErst nach erfolglosem Ablauf dieser Nachfrist hat der Kunde die Wahl zwischen:\n– weiterhin Lieferung verlangen (ggf. mit Schadenersatz neben der Leistung), oder\n– Rücktritt vom Kaufvertrag, ggf. verbunden mit Schadenersatz statt der Leistung, wenn ein Verschulden des Lieferanten vorliegt und ein Folgeschaden entstanden ist."
        }
      ]
    },

    // ======================================================================
    // KAPITEL C
    // ======================================================================
    {
      id: "buchfuehrung",
      code: "C",
      title: "Wertströme & Buchführung",
      subtitle: "Bilanz, Bestands- & Erfolgskonten, Umsatzsteuer, Abschreibungen",
      diagrams: [
        {
          title: "Bilanz-Schema",
          note: "Aktiva und Passiva sind immer gleich hoch (Bilanzsumme).",
          svg: `<svg viewBox="0 0 520 300" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="130" y="24" text-anchor="middle" class="dt-mono" font-size="12">AKTIVA</text>
            <text x="390" y="24" text-anchor="middle" class="dt-mono" font-size="12">PASSIVA</text>
            <rect x="20" y="34" width="220" height="150" rx="4" class="df-ink"/>
            <text x="130" y="100" text-anchor="middle" class="dt-white" font-size="13">Anlagevermögen</text>
            <text x="130" y="118" text-anchor="middle" class="dt-white-mono" font-size="10">(langfristig gebunden)</text>
            <rect x="20" y="188" width="220" height="90" rx="4" class="df-ink-soft"/>
            <text x="130" y="228" text-anchor="middle" class="dt-white" font-size="13">Umlaufvermögen</text>
            <text x="130" y="246" text-anchor="middle" class="dt-white-mono" font-size="10">(kurzfristig gebunden)</text>
            <rect x="280" y="34" width="220" height="100" rx="4" class="df-success"/>
            <text x="390" y="80" text-anchor="middle" class="dt-white" font-size="13">Eigenkapital</text>
            <rect x="280" y="138" width="220" height="70" rx="4" class="df-ochre"/>
            <text x="390" y="170" text-anchor="middle" class="dt-white" font-size="12">Langfristige</text>
            <text x="390" y="184" text-anchor="middle" class="dt-white" font-size="12">Verbindlichkeiten</text>
            <rect x="280" y="212" width="220" height="66" rx="4" class="df-stamp"/>
            <text x="390" y="242" text-anchor="middle" class="dt-white" font-size="12">Kurzfristige</text>
            <text x="390" y="256" text-anchor="middle" class="dt-white" font-size="12">Verbindlichkeiten</text>
            <line x1="20" y1="288" x2="240" y2="288" class="ds-border" stroke-width="1.5"/>
            <line x1="280" y1="288" x2="500" y2="288" class="ds-border" stroke-width="1.5"/>
            <text x="130" y="298" text-anchor="middle" class="dt-mono" font-size="10">Bilanzsumme</text>
            <text x="390" y="298" text-anchor="middle" class="dt-mono" font-size="10">Bilanzsumme (gleich hoch)</text>
          </svg>`
        }
      ],
      terms: [
        { word: "BILANZ", clue: "Gegenüberstellung von Vermögen und Kapital zum Stichtag" },
        { word: "AKTIVA", clue: "Linke Seite der Bilanz" },
        { word: "PASSIVA", clue: "Rechte Seite der Bilanz" },
        { word: "SOLL", clue: "Linke Seite eines Kontos" },
        { word: "HABEN", clue: "Rechte Seite eines Kontos" },
        { word: "UMSATZSTEUER", clue: "Steuer, die beim Verkauf anfällt" },
        { word: "VORSTEUER", clue: "Steuer, die beim Einkauf anfällt" },
        { word: "ABSCHREIBUNG", clue: "Wertminderung von Anlagevermögen über die Nutzungsdauer" },
        { word: "SKONTO", clue: "Preisnachlass bei schneller Zahlung" },
        { word: "EIGENKAPITAL", clue: "Vermögen abzüglich Schulden" }
      ],
      hangmanTerms: [
        { word: "BUCHUNGSSATZ", clue: "Formale Anweisung, welches Konto im Soll und Haben bebucht wird" },
        { word: "ANLAGEVERMOEGEN", clue: "Langfristig im Unternehmen gebundenes Vermögen" },
        { word: "UMLAUFVERMOEGEN", clue: "Kurzfristig gebundenes, sich ständig veränderndes Vermögen" },
        { word: "GEWINN", clue: "Entsteht, wenn Erträge größer sind als Aufwendungen" },
        { word: "VERLUST", clue: "Entsteht, wenn Aufwendungen größer sind als Erträge" },
        { word: "ZAHLLAST", clue: "Betrag, der ans Finanzamt gezahlt werden muss" },
        { word: "BESTANDSKONTO", clue: "Erfasst Bestände und deren Veränderung" },
        { word: "ERFOLGSKONTO", clue: "Unterkonto des Eigenkapitals ohne Anfangsbestand" }
      ],
      summary: [
        {
          q: "Wie ist die Bilanz aufgebaut?",
          a: "Links die Aktivseite (Mittelverwendung): Anlagevermögen, dann Umlaufvermögen – nach steigender Liquidität geordnet. Rechts die Passivseite (Mittelherkunft): Eigenkapital, dann Verbindlichkeiten – nach steigender Fälligkeit geordnet. Beide Summen müssen immer gleich sein (Bilanzsumme)."
        },
        {
          q: "Wie funktionieren Aktiv- und Passivkonten?",
          a: "Aktivkonten: Anfangsbestand und Zugänge im Soll, Abgänge im Haben. Passivkonten: Anfangsbestand und Zugänge im Haben, Abgänge im Soll. Die Endbestände wandern ins Schlussbilanzkonto."
        },
        {
          q: "Wie hängen Aufwand, Ertrag, GuV und Eigenkapital zusammen?",
          a: "Aufwendungen mindern, Erträge erhöhen das Eigenkapital. Am Jahresende werden alle Erfolgskonten über das GuV-Konto abgeschlossen: Aufwand im Soll, Ertrag im Haben. Ein Gewinn steht als Saldo im Soll des GuV-Kontos, ein Verlust im Haben. Der Saldo wandert weiter ins Eigenkapitalkonto."
        },
        {
          q: "Umsatzsteuer vs. Vorsteuer – Zahllast oder Überhang?",
          a: "Beim Einkauf zahlt das Unternehmen Vorsteuer (Forderung ans Finanzamt), beim Verkauf nimmt es Umsatzsteuer ein (Verbindlichkeit ans Finanzamt). Ist die Umsatzsteuer größer, entsteht eine Zahllast ans Finanzamt. Ist die Vorsteuer größer, gibt es einen Vorsteuerüberhang, den das Finanzamt erstattet."
        },
        {
          q: "Die vier Arten von Bilanzveränderungen?",
          a: "Aktivtausch (nur Aktivseite, Summe gleich), Passivtausch (nur Passivseite, Summe gleich), Aktiv-Passiv-Mehrung (beide Seiten wachsen um denselben Betrag) und Aktiv-Passiv-Minderung (beide Seiten schrumpfen um denselben Betrag)."
        },
        {
          q: "Wie funktioniert die lineare Abschreibung?",
          a: "Die Anschaffungskosten werden gleichmäßig auf die Nutzungsdauer verteilt: Abschreibungsbetrag = Anschaffungskosten ÷ Nutzungsdauer. Bei Kauf nicht am 1. Januar wird im ersten Jahr monatsgenau (pro rata temporis) abgeschrieben."
        }
      ],
      flashcards: [
        { front: "Was steht auf der Aktivseite der Bilanz?", back: "Anlagevermögen und Umlaufvermögen – geordnet nach steigender Liquidität." },
        { front: "Was steht auf der Passivseite der Bilanz?", back: "Eigenkapital und Verbindlichkeiten (lang- und kurzfristig) – geordnet nach steigender Fälligkeit." },
        { front: "Wie werden Zugänge bei einem Aktivkonto gebucht?", back: "Im Soll (linke Seite)." },
        { front: "Wie werden Zugänge bei einem Passivkonto gebucht?", back: "Im Haben (rechte Seite)." },
        { front: "Wie wirken sich Aufwendungen auf das Eigenkapital aus?", back: "Sie mindern das Eigenkapital (gewinnmindernd)." },
        { front: "Wie wirken sich Erträge auf das Eigenkapital aus?", back: "Sie erhöhen das Eigenkapital (gewinnerhöhend)." },
        { front: "Wo steht ein Gewinn im GuV-Konto?", back: "Als Saldo im Soll des GuV-Kontos." },
        { front: "Wo steht ein Verlust im GuV-Konto?", back: "Als Saldo im Haben des GuV-Kontos." },
        { front: "Wie hoch ist der Regelsteuersatz der Umsatzsteuer in Deutschland?", back: "19 %, ermäßigt 7 % (z. B. für bestimmte Lebensmittel)." },
        { front: "Wann entsteht eine Zahllast?", back: "Wenn die eingenommene Umsatzsteuer größer ist als die gezahlte Vorsteuer – Betrag muss ans Finanzamt überwiesen werden." },
        { front: "Was ist ein Aktivtausch?", back: "Ein Wert wandert von einer Aktivposition zur anderen – die Bilanzsumme bleibt gleich." },
        { front: "Was passiert bei einer Aktiv-Passiv-Mehrung?", back: "Beide Bilanzseiten erhöhen sich um denselben Betrag." },
        { front: "Wie berechnet man die jährliche lineare Abschreibung?", back: "Anschaffungskosten ÷ Nutzungsdauer in Jahren." },
        { front: "Nenne 2 Gründe, warum Anlagen an Wert verlieren.", back: "Gebrauch/Abnutzung, natürlicher Verschleiß, technischer Fortschritt, unvorhergesehene Ereignisse." },
        { front: "Bis zu welchem Wert gilt ein GWG als sofort abschreibbar?", back: "Bis 250 € netto – Sofortaufwand im Jahr des Kaufs." },
        { front: "Was ist eine Privatentnahme buchhalterisch?", back: "Eine umsatzsteuerpflichtige Entnahme, die das Eigenkapital über das Privatkonto mindert." },
        { front: "Wie lange müssen Jahresabschlüsse und Buchungsbelege aufbewahrt werden?", back: "10 Jahre (nach HGB/AO)." },
        { front: "Wofür steht die Eigenkapitalquote?", back: "Eigenkapital × 100 ÷ Bilanzsumme – zeigt den Anteil des Eigenkapitals an der Gesamtfinanzierung." }
      ],
      quiz: [
        { q: "Auf welcher Seite der Bilanz steht das Anlagevermögen?", options: ["Passivseite", "Aktivseite", "Beide Seiten", "Im Anhang"], correct: 1, explain: "Anlage- und Umlaufvermögen stehen auf der Aktivseite (Mittelverwendung)." },
        { q: "Wie werden Zugänge bei einem Aktivkonto verbucht?", options: ["Im Haben", "Im Soll", "Gar nicht", "Im GuV-Konto"], correct: 1, explain: "Bei Aktivkonten stehen Anfangsbestand und Zugänge im Soll." },
        { q: "Wie verändert ein Aktivtausch die Bilanzsumme?", options: ["Sie steigt", "Sie sinkt", "Sie bleibt gleich", "Nur die Aktivseite verändert sich der Höhe nach"], correct: 2, explain: "Beim Aktivtausch verschiebt sich nur ein Wert innerhalb der Aktivseite – die Bilanzsumme bleibt unverändert." },
        { q: "Wie hoch ist der Regelsteuersatz der Umsatzsteuer in Deutschland?", options: ["7 %", "16 %", "19 %", "21 %"], correct: 2, explain: "Der Regelsteuersatz beträgt 19 %, ermäßigt 7 %." },
        { q: "Wie nennt man es, wenn die Umsatzsteuer größer ist als die Vorsteuer?", options: ["Vorsteuerüberhang", "Zahllast", "Bilanzsumme", "Skonto"], correct: 1, explain: "Übersteigt die Umsatzsteuer die Vorsteuer, entsteht eine Zahllast ans Finanzamt." },
        { q: "Wo wird ein Gewinn im GuV-Konto verbucht?", options: ["Als Saldo im Soll", "Als Saldo im Haben", "Gar nicht im GuV-Konto", "Im Wareneingangskonto"], correct: 0, explain: "Ein Gewinn (mehr Erträge als Aufwendungen) steht als Saldo im Soll des GuV-Kontos." },
        { q: "Bis zu welchem Wert kann ein Wirtschaftsgut sofort als GWG abgeschrieben werden?", options: ["100 €", "250 €", "500 €", "1.000 €"], correct: 1, explain: "Bis 250 € netto ist ein Sofortabzug im Jahr der Anschaffung möglich." },
        { q: "Wie berechnet man den jährlichen linearen Abschreibungsbetrag?", options: ["Anschaffungskosten × Nutzungsdauer", "Anschaffungskosten ÷ Nutzungsdauer", "Restbuchwert ÷ 2", "Anschaffungskosten × 20 %"], correct: 1, explain: "Der jährliche Abschreibungsbetrag ergibt sich aus Anschaffungskosten geteilt durch die Nutzungsdauer in Jahren." },
        { q: "Wie lange müssen Buchungsbelege und Jahresabschlüsse aufbewahrt werden?", options: ["3 Jahre", "6 Jahre", "10 Jahre", "Unbegrenzt"], correct: 2, explain: "Für Handelsbücher, Inventare, Bilanzen und Buchungsbelege gilt eine 10-jährige Aufbewahrungspflicht." },
        { q: "Was passiert bei einer Aktiv-Passiv-Mehrung mit der Bilanzsumme?", options: ["Sie sinkt auf beiden Seiten", "Sie bleibt gleich", "Sie steigt auf beiden Seiten um denselben Betrag", "Nur die Aktivseite steigt"], correct: 2, explain: "Bei der Aktiv-Passiv-Mehrung wächst die Bilanzsumme auf beiden Seiten um denselben Betrag." },
        { q: "Wer trägt die Umsatzsteuer wirtschaftlich am Ende?", options: ["Das Unternehmen", "Der Endverbraucher", "Das Finanzamt", "Der Großhändler"], correct: 1, explain: "Für Unternehmen ist die Umsatzsteuer ein durchlaufender Posten – letztlich zahlt sie der Endverbraucher." }
      ],
      exam: [
        {
          title: "Lineare Abschreibung berechnen",
          points: 8,
          task: "Ein Unternehmen kauft eine Maschine für 24.000 € (Anschaffungskosten inkl. aller Nebenkosten) und schreibt sie über 6 Jahre linear ab. Berechnen Sie den jährlichen Abschreibungsbetrag sowie den Buchwert nach 2 vollen Jahren.",
          solution: "Jährlicher Abschreibungsbetrag = 24.000 € ÷ 6 Jahre = 4.000 € pro Jahr.\nBuchwert nach 2 Jahren = 24.000 € − (2 × 4.000 €) = 24.000 € − 8.000 € = 16.000 €."
        },
        {
          title: "Buchungssätze Wareneinkauf mit Skonto",
          points: 9,
          task: "Ein Unternehmen kauft Waren auf Ziel im Wert von 5.000 € netto zzgl. 19 % Umsatzsteuer. Bilden Sie den Buchungssatz für den Einkauf. Bilden Sie anschließend den Buchungssatz für die Zahlung unter Abzug von 2 % Skonto (auf den Bruttobetrag berechnet).",
          solution: "Einkauf:\nAufwendungen für Waren 5.000 € + Vorsteuer 950 € an Verbindlichkeiten aus Lieferung und Leistung 5.950 €.\n\nZahlung mit 2 % Skonto (auf 5.950 € brutto = 119 € Bruttoskonto, davon 100 € Nettoskonto + 19 € Vorsteuerkorrektur):\nVerbindlichkeiten aus Lieferung und Leistung 5.950 € an Bank 5.831 €, Nachlässe von Lieferern 100 €, Vorsteuer 19 €."
        }
      ]
    },

    // ======================================================================
    // KAPITEL D
    // ======================================================================
    {
      id: "kalkulation",
      code: "D",
      title: "Kalkulation & Kosten",
      subtitle: "Vor-/Rückwärtskalkulation, Deckungsbeitrag, Break-Even, Kostenrechnung",
      diagrams: [
        {
          title: "Von der Vorwärtskalkulation zum Verkaufspreis",
          note: "Die wichtigsten Zwischenstopps auf dem Weg vom Einkaufs- zum Verkaufspreis.",
          svg: `<svg viewBox="0 0 560 200" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="70" width="100" height="50" rx="6" class="df-ink"/>
            <text x="60" y="90" text-anchor="middle" class="dt-white" font-size="9">Listeneinkaufs-</text>
            <text x="60" y="103" text-anchor="middle" class="dt-white" font-size="9">preis</text>
            <rect x="125" y="70" width="100" height="50" rx="6" class="df-ink-soft"/>
            <text x="175" y="90" text-anchor="middle" class="dt-white" font-size="10">Bezugs-</text>
            <text x="175" y="103" text-anchor="middle" class="dt-white" font-size="10">preis</text>
            <rect x="240" y="70" width="100" height="50" rx="6" class="df-ochre"/>
            <text x="290" y="90" text-anchor="middle" class="dt-white" font-size="10">Selbst-</text>
            <text x="290" y="103" text-anchor="middle" class="dt-white" font-size="10">kosten</text>
            <rect x="355" y="70" width="100" height="50" rx="6" class="df-success"/>
            <text x="405" y="90" text-anchor="middle" class="dt-white" font-size="9">Barverkaufs-</text>
            <text x="405" y="103" text-anchor="middle" class="dt-white" font-size="9">preis</text>
            <rect x="470" y="70" width="80" height="50" rx="6" class="df-stamp"/>
            <text x="510" y="90" text-anchor="middle" class="dt-white" font-size="8.5">Brutto-</text>
            <text x="510" y="103" text-anchor="middle" class="dt-white" font-size="8.5">verkaufspreis</text>
            <line x1="110" y1="95" x2="125" y2="95" class="ds-ink" stroke-width="1.5"/>
            <line x1="225" y1="95" x2="240" y2="95" class="ds-ink" stroke-width="1.5"/>
            <line x1="340" y1="95" x2="355" y2="95" class="ds-ink" stroke-width="1.5"/>
            <line x1="455" y1="95" x2="470" y2="95" class="ds-ink" stroke-width="1.5"/>
            <text x="117" y="52" text-anchor="middle" class="dt-mono" font-size="8.5">− Rabatt</text>
            <text x="117" y="145" text-anchor="middle" class="dt-mono" font-size="8.5">+ Bezugskosten</text>
            <text x="232" y="52" text-anchor="middle" class="dt-mono" font-size="8.5">+ Handlungs-</text>
            <text x="232" y="62" text-anchor="middle" class="dt-mono" font-size="8.5">kostenzuschlag</text>
            <text x="347" y="52" text-anchor="middle" class="dt-mono" font-size="8.5">+ Gewinn-</text>
            <text x="347" y="62" text-anchor="middle" class="dt-mono" font-size="8.5">zuschlag</text>
            <text x="462" y="52" text-anchor="middle" class="dt-mono" font-size="8.5">+ Skonto</text>
            <text x="462" y="145" text-anchor="middle" class="dt-mono" font-size="8.5">+ USt.</text>
          </svg>`
        },
        {
          title: "Break-Even-Point",
          note: "Dort, wo sich Gesamtkosten und Erlöse schneiden, liegt der Gewinn bei null.",
          svg: `<svg viewBox="0 0 420 320" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="20" x2="60" y2="280" class="ds-ink" stroke-width="1.5"/>
            <line x1="60" y1="280" x2="390" y2="280" class="ds-ink" stroke-width="1.5"/>
            <text x="14" y="24" class="dt-mono" font-size="10">Erlöse/Kosten</text>
            <text x="356" y="298" class="dt-mono" font-size="11">Menge</text>
            <line x1="60" y1="240" x2="390" y2="240" class="ds-border" stroke-width="1.5" stroke-dasharray="3 4"/>
            <text x="64" y="234" class="dt-mono" font-size="9">Fixkosten</text>
            <polyline points="60,240 390,100" fill="none" class="ds-stamp" stroke-width="2"/>
            <text x="392" y="98" class="dt" font-size="11">Gesamtkosten</text>
            <polyline points="60,280 390,60" fill="none" class="ds-success" stroke-width="2"/>
            <text x="392" y="58" class="dt" font-size="11">Erlöse</text>
            <circle cx="225" cy="170" r="4" class="df-ink"/>
            <line x1="225" y1="170" x2="225" y2="280" stroke-dasharray="3 4" class="ds-border" stroke-width="1.5"/>
            <text x="160" y="300" class="dt-mono" font-size="10">Break-Even-Point</text>
          </svg>`
        }
      ],
      terms: [
        { word: "DECKUNGSBEITRAG", clue: "Verkaufspreis minus variable Stückkosten" },
        { word: "SELBSTKOSTEN", clue: "Bezugspreis plus Handlungskostenzuschlag" },
        { word: "GEWINNZUSCHLAG", clue: "Aufschlag auf die Selbstkosten zur Gewinnerzielung" },
        { word: "HANDELSSPANNE", clue: "Anteil des Verkaufspreises, der im Unternehmen verbleibt" },
        { word: "FIXKOSTEN", clue: "Kosten, die unabhängig von der Produktionsmenge anfallen" },
        { word: "KALKULATIONSFAKTOR", clue: "Verhältnis von Listenverkaufspreis zu Bezugspreis" },
        { word: "GEWINNSCHWELLE", clue: "Anderer Begriff für Break-Even-Point" },
        { word: "EINZELKOSTEN", clue: "Kosten, die einem Produkt direkt zurechenbar sind" }
      ],
      hangmanTerms: [
        { word: "BEZUGSPREIS", clue: "Bareinkaufspreis plus Bezugskosten" },
        { word: "LISTENPREIS", clue: "Katalogpreis des Lieferanten ohne Abzüge" },
        { word: "LIEFERRABATT", clue: "Erster Abzug vom Listeneinkaufspreis" },
        { word: "GEMEINKOSTEN", clue: "Kosten, die nur über Schlüssel verteilt werden können" },
        { word: "PREISUNTERGRENZE", clue: "Mindestpreis, den ein Unternehmen verlangen muss" },
        { word: "VORKALKULATION", clue: "Planung der Kosten im Voraus" },
        { word: "NACHKALKULATION", clue: "Kontrolle der Kosten im Nachhinein" },
        { word: "ZUSCHLAGSSATZ", clue: "Prozentualer Aufschlag auf den Bezugspreis" }
      ],
      summary: [
        {
          q: "Wie läuft die Vorwärtskalkulation ab?",
          a: "Vom Listeneinkaufspreis über Lieferrabatt und -skonto zum Bareinkaufspreis, plus Bezugskosten zum Bezugspreis, plus Handlungskostenzuschlag zu den Selbstkosten, plus Gewinnzuschlag zum Barverkaufspreis, plus Kundenskonto und -rabatt zum Nettoverkaufspreis, plus Umsatzsteuer zum Bruttoverkaufspreis."
        },
        {
          q: "Kalkulationsfaktor, -zuschlagssatz und Handelsspanne – was ist der Unterschied?",
          a: "Kalkulationsfaktor: Verhältnis Listenverkaufspreis zu Bezugspreis (multiplikativ). Kalkulationszuschlagssatz: prozentualer Aufschlag auf den Bezugspreis. Handelsspanne: prozentualer Anteil, der vom Listenverkaufspreis im Unternehmen verbleibt."
        },
        {
          q: "Fixe vs. variable Kosten – und was bedeutet das für die Preisuntergrenze?",
          a: "Fixe Kosten fallen unabhängig von der Produktionsmenge an (z. B. Miete), variable Kosten hängen von der Auslastung ab (z. B. Rohstoffe). Die kurzfristige Preisuntergrenze entspricht den variablen Stückkosten, die langfristige Preisuntergrenze den vollen Selbstkosten (fix + variabel)."
        },
        {
          q: "Was sagen Deckungsbeitrag und Break-Even-Point aus?",
          a: "Der Deckungsbeitrag ist der Betrag, den ein Produkt zur Deckung der Fixkosten beiträgt (Preis − variable Stückkosten). Der Break-Even-Point ist die Menge, bei der die Fixkosten genau gedeckt sind (Fixkosten ÷ Stückdeckungsbeitrag) – der Gewinn ist dort null."
        },
        {
          q: "Die drei Stufen der Vollkostenrechnung?",
          a: "1. Kostenartenrechnung: Welche Kosten sind angefallen? 2. Kostenstellenrechnung: Wo sind die Kosten angefallen (Gemeinkostenverteilung)? 3. Kostenträgerrechnung: Wofür sind die Kosten angefallen (Zurechnung auf Produkte)?"
        },
        {
          q: "Gesamtkostenverfahren vs. Umsatzkostenverfahren?",
          a: "Das Gesamtkostenverfahren stellt allen Kosten der Periode alle Leistungen gegenüber (inkl. Bestandsveränderungen). Das Umsatzkostenverfahren stellt nur die Kosten der tatsächlich verkauften Produkte den Umsatzerlösen gegenüber."
        }
      ],
      flashcards: [
        { front: "Was ist der Listeneinkaufspreis?", back: "Der vom Lieferanten berechnete Katalogpreis – ohne Berücksichtigung von Rabatten oder Skonto." },
        { front: "Wie kommt man vom Listeneinkaufspreis zum Bezugspreis?", back: "− Lieferrabatt = Zieleinkaufspreis, − Lieferskonto = Bareinkaufspreis, + Bezugskosten = Bezugs-/Einstandspreis." },
        { front: "Was drückt der Handlungskostenzuschlag aus?", back: "Den Zuschlag für die innerbetrieblichen Kosten (z. B. Verwaltung, Vertrieb), der auf den Bezugspreis aufgeschlagen wird, um die Selbstkosten zu ermitteln." },
        { front: "Wie berechnet man den Kalkulationsfaktor?", back: "Listenverkaufspreis ÷ Bezugspreis." },
        { front: "Wie berechnet man den Kalkulationszuschlagssatz?", back: "(Listenverkaufspreis − Bezugspreis) ÷ Bezugspreis × 100." },
        { front: "Wie berechnet man die Handelsspanne?", back: "(Listenverkaufspreis − Bezugspreis) ÷ Listenverkaufspreis × 100." },
        { front: "Nenne ein Beispiel für Fixkosten.", back: "Miete, Gehälter der Verwaltung, Versicherungen – unabhängig vom Auslastungsgrad." },
        { front: "Nenne ein Beispiel für variable Kosten.", back: "Rohstoffe, Fertigungsmaterial, Stromkosten der Produktion – abhängig vom Auslastungsgrad." },
        { front: "Was ist die kurzfristige Preisuntergrenze?", back: "Die variablen Stückkosten – darunter deckt der Preis nicht einmal die zusätzlichen Kosten der Produktion." },
        { front: "Wie berechnet man den Stückdeckungsbeitrag?", back: "Verkaufspreis − variable Stückkosten." },
        { front: "Wie berechnet man den Break-Even-Point (Menge)?", back: "Fixkosten ÷ Stückdeckungsbeitrag." },
        { front: "Nenne die 3 Stufen der Vollkostenrechnung.", back: "Kostenartenrechnung → Kostenstellenrechnung → Kostenträgerrechnung." },
        { front: "Einzelkosten vs. Gemeinkosten?", back: "Einzelkosten sind einem Produkt direkt zurechenbar (z. B. Material). Gemeinkosten müssen über Schlüssel verteilt werden (z. B. Miete der Fabrikhalle)." },
        { front: "Was unterscheidet Vorkalkulation von Nachkalkulation?", back: "Vorkalkulation: Planung im Voraus (Angebotspreise). Nachkalkulation: Kontrolle im Nachhinein, ob es Abweichungen gab." },
        { front: "Wann macht ein Unternehmen Verlust laut Handelsspanne?", back: "Wenn die Handelsspanne kleiner ist als der Handlungskostenzuschlag." },
        { front: "Was ist der Vorteil der Teilkostenrechnung?", back: "Sie ermöglicht die Ermittlung von Deckungsbeitrag und kurzfristiger Preisuntergrenze." }
      ],
      quiz: [
        { q: "Was wird vom Listeneinkaufspreis zuerst abgezogen?", options: ["Lieferskonto", "Umsatzsteuer", "Lieferrabatt", "Bezugskosten"], correct: 2, explain: "Zuerst wird der Lieferrabatt abgezogen, danach ergibt sich der Zieleinkaufspreis." },
        { q: "Wie berechnet man den Kalkulationsfaktor?", options: ["Bezugspreis ÷ Listenverkaufspreis", "Listenverkaufspreis ÷ Bezugspreis", "Listenverkaufspreis − Bezugspreis", "Bezugspreis × Gewinnzuschlag"], correct: 1, explain: "Der Kalkulationsfaktor ist das Verhältnis von Listenverkaufspreis zu Bezugspreis." },
        { q: "Welche Kosten bleiben in der Gesamtsumme unabhängig von der Produktionsmenge konstant?", options: ["Variable Kosten", "Fixkosten", "Einzelkosten", "Materialkosten"], correct: 1, explain: "Fixkosten fallen unabhängig vom Auslastungsgrad in gleicher Gesamthöhe an." },
        { q: "Was entspricht der kurzfristigen Preisuntergrenze?", options: ["Den gesamten Selbstkosten", "Den variablen Stückkosten", "Dem Verkaufspreis", "Dem Deckungsbeitrag"], correct: 1, explain: "Kurzfristig muss der Preis mindestens die variablen Stückkosten decken." },
        { q: "Wann liegt der Break-Even-Point vor?", options: ["Wenn der Gewinn maximal ist", "Wenn Erlöse und Kosten gleich hoch sind", "Wenn keine Fixkosten anfallen", "Wenn der Deckungsbeitrag negativ ist"], correct: 1, explain: "Am Break-Even-Point sind Kosten und Erlöse gleich – der Gewinn ist genau null." },
        { q: "Was gehört zu den Einzelkosten?", options: ["Die Fabrikmiete", "Rohstoffe für ein bestimmtes Produkt", "Die Geschäftsführergehälter", "Die Stromkosten der Verwaltung"], correct: 1, explain: "Einzelkosten lassen sich einem Kostenträger direkt zurechnen, z. B. das für das Produkt verwendete Material." },
        { q: "Welches Verfahren vergleicht nur die Kosten der verkauften Produkte mit dem Umsatz?", options: ["Gesamtkostenverfahren", "Umsatzkostenverfahren", "Deckungsbeitragsrechnung", "Bezugskalkulation"], correct: 1, explain: "Das Umsatzkostenverfahren stellt nur den verkauften Produkten die zugehörigen Kosten gegenüber." },
        { q: "Ist die Handelsspanne kleiner als der Handlungskostenzuschlag, macht das Unternehmen …", options: ["Gewinn", "Verlust", "Weder Gewinn noch Verlust", "Das lässt sich daraus nicht ableiten"], correct: 1, explain: "In diesem Fall reicht die Spanne nicht aus, um die internen Kosten zu decken – es entsteht ein Verlust." },
        { q: "Wie heißt der erste Schritt der Vollkostenrechnung?", options: ["Kostenträgerrechnung", "Kostenstellenrechnung", "Kostenartenrechnung", "Deckungsbeitragsrechnung"], correct: 2, explain: "Zuerst werden in der Kostenartenrechnung alle Kosten einer Periode systematisch erfasst." },
        { q: "Was sagt der Deckungsbeitrag aus?", options: ["Den Gesamtgewinn des Unternehmens", "Den Beitrag eines Produkts zur Deckung der Fixkosten", "Die Höhe der Umsatzsteuer", "Den Bezugspreis der Ware"], correct: 1, explain: "Der Deckungsbeitrag zeigt, wie viel ein Produkt zur Deckung der fixen Kosten beiträgt." }
      ],
      exam: [
        {
          title: "Vorwärtskalkulation mit Zwischenschritten",
          points: 12,
          task: "Ein Händler kauft Ware zum Listeneinkaufspreis von 500 € netto. Er erhält 15 % Lieferrabatt und bei Zahlung 2 % Lieferskonto. Es fallen 40 € Bezugskosten an. Der Handlungskostenzuschlag beträgt 40 %, der Gewinnzuschlag 20 %. Berechnen Sie den Barverkaufspreis mit allen Zwischenschritten der Vorwärtskalkulation.",
          solution: "Listeneinkaufspreis: 500,00 €\n− Lieferrabatt 15 %: 75,00 €\n= Zieleinkaufspreis: 425,00 €\n− Lieferskonto 2 %: 8,50 €\n= Bareinkaufspreis: 416,50 €\n+ Bezugskosten: 40,00 €\n= Bezugs-/Einstandspreis: 456,50 €\n+ Handlungskostenzuschlag 40 %: 182,60 €\n= Selbstkosten: 639,10 €\n+ Gewinnzuschlag 20 %: 127,82 €\n= Barverkaufspreis: 766,92 €\n\n(Da keine Kundenkonditionen angegeben sind, entspricht der Barverkaufspreis hier dem Nettoverkaufspreis.)"
        },
        {
          title: "Deckungsbeitrag & Break-Even-Point",
          points: 8,
          task: "Ein Produkt wird zu 50 € verkauft, die variablen Stückkosten betragen 30 €. Die Fixkosten des Unternehmens liegen bei 40.000 €. Berechnen Sie den Stückdeckungsbeitrag und die Break-Even-Menge.",
          solution: "Stückdeckungsbeitrag = 50 € − 30 € = 20 €.\nBreak-Even-Menge = 40.000 € ÷ 20 € = 2.000 Stück.\nAb der 2.001. verkauften Einheit erwirtschaftet das Unternehmen Gewinn."
        }
      ]
    },

    // ======================================================================
    // KAPITEL E
    // ======================================================================
    {
      id: "bueroorganisation",
      code: "E",
      title: "Büroprozesse & Arbeitsorganisation",
      subtitle: "Ergonomie, Zeitmanagement, Termine, Aufbewahrungsfristen, Auftragsbearbeitung",
      diagrams: [
        {
          title: "Der ergonomische Arbeitsplatz",
          note: "Bildschirmabstand, Augenhöhe und Sitzwinkel im Überblick.",
          svg: `<svg viewBox="0 0 440 320" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="290" x2="420" y2="290" class="ds-border" stroke-width="1.5"/>
            <rect x="80" y="220" width="70" height="14" rx="4" class="df-ink-soft"/>
            <line x1="150" y1="150" x2="150" y2="220" class="ds-ink" stroke-width="4"/>
            <line x1="85" y1="234" x2="85" y2="290" class="ds-ink" stroke-width="4"/>
            <line x1="145" y1="234" x2="145" y2="290" class="ds-ink" stroke-width="4"/>
            <circle cx="140" cy="120" r="16" class="df-stamp"/>
            <line x1="140" y1="136" x2="140" y2="210" class="ds-stamp" stroke-width="3"/>
            <line x1="140" y1="210" x2="185" y2="210" class="ds-stamp" stroke-width="3"/>
            <line x1="185" y1="210" x2="185" y2="290" class="ds-stamp" stroke-width="3"/>
            <text x="195" y="205" class="dt-mono" font-size="11">90°</text>
            <rect x="185" y="150" width="14" height="140" class="df-ink-soft"/>
            <rect x="185" y="150" width="200" height="10" class="df-ink"/>
            <rect x="230" y="90" width="90" height="60" rx="4" class="df-ink"/>
            <rect x="265" y="150" width="20" height="10" class="df-ink-soft"/>
            <line x1="156" y1="120" x2="230" y2="120" class="ds-border" stroke-width="1.5" stroke-dasharray="3 4"/>
            <text x="193" y="112" text-anchor="middle" class="dt-mono" font-size="9">50–60 cm</text>
            <line x1="100" y1="120" x2="420" y2="120" class="ds-ochre" stroke-width="1.5" stroke-dasharray="2 5"/>
            <text x="330" y="114" class="dt-mono" font-size="9">Augenhöhe</text>
          </svg>`
        },
        {
          title: "Auftragsbearbeitung in 8 Schritten",
          note: "Von der ersten Anfrage bis zur Überweisung.",
          svg: `<svg viewBox="0 0 560 180" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="115" height="50" rx="6" class="df-ink"/>
            <text x="67" y="40" text-anchor="middle" class="dt-white" font-size="11">1. Anfrage</text>
            <rect x="150" y="10" width="115" height="50" rx="6" class="df-ink"/>
            <text x="207" y="40" text-anchor="middle" class="dt-white" font-size="11">2. Angebot</text>
            <rect x="290" y="10" width="115" height="50" rx="6" class="df-ink"/>
            <text x="347" y="34" text-anchor="middle" class="dt-white" font-size="10">3. Bonitäts-</text>
            <text x="347" y="47" text-anchor="middle" class="dt-white" font-size="10">prüfung</text>
            <rect x="430" y="10" width="115" height="50" rx="6" class="df-ink"/>
            <text x="487" y="40" text-anchor="middle" class="dt-white" font-size="11">4. Bestellung</text>
            <line x1="125" y1="35" x2="150" y2="35" class="ds-ink" stroke-width="1.5"/>
            <line x1="265" y1="35" x2="290" y2="35" class="ds-ink" stroke-width="1.5"/>
            <line x1="405" y1="35" x2="430" y2="35" class="ds-ink" stroke-width="1.5"/>
            <line x1="487" y1="60" x2="487" y2="85" class="ds-ink" stroke-width="1.5"/>
            <line x1="487" y1="85" x2="67" y2="85" class="ds-ink" stroke-width="1.5"/>
            <line x1="67" y1="85" x2="67" y2="110" class="ds-ink" stroke-width="1.5"/>
            <rect x="10" y="110" width="115" height="50" rx="6" class="df-ochre"/>
            <text x="67" y="132" text-anchor="middle" class="dt-white" font-size="8.5">5. Auftrags-</text>
            <text x="67" y="145" text-anchor="middle" class="dt-white" font-size="8.5">bestätigung</text>
            <rect x="150" y="110" width="115" height="50" rx="6" class="df-ochre"/>
            <text x="207" y="140" text-anchor="middle" class="dt-white" font-size="11">6. Lieferschein</text>
            <rect x="290" y="110" width="115" height="50" rx="6" class="df-ochre"/>
            <text x="347" y="140" text-anchor="middle" class="dt-white" font-size="11">7. Rechnung</text>
            <rect x="430" y="110" width="115" height="50" rx="6" class="df-success"/>
            <text x="487" y="140" text-anchor="middle" class="dt-white" font-size="10">8. Überweisung</text>
            <line x1="125" y1="135" x2="150" y2="135" class="ds-ink" stroke-width="1.5"/>
            <line x1="265" y1="135" x2="290" y2="135" class="ds-ink" stroke-width="1.5"/>
            <line x1="405" y1="135" x2="430" y2="135" class="ds-ink" stroke-width="1.5"/>
          </svg>`
        }
      ],
      terms: [
        { word: "ERGONOMIE", clue: "Gestaltung der Arbeitsumgebung zur Optimierung und Entlastung" },
        { word: "BUEROSTUHL", clue: "Sollte 5 Abstützpunkte und höhenverstellbare Sitzfläche haben" },
        { word: "BILDSCHIRM", clue: "Abstand von 50-60 cm zum Kopf empfohlen" },
        { word: "ZEITMANAGEMENT", clue: "Methoden wie SMART oder Pareto zur Aufgabenplanung" },
        { word: "TERMINPLANUNG", clue: "Organisation, Koordination und Überwachung von Terminen" },
        { word: "AUFBEWAHRUNGSFRIST", clue: "Gesetzlich vorgeschriebene Dauer der Dokumentenaufbewahrung" },
        { word: "AUFTRAGSBESTAETIGUNG", clue: "5. Schritt der Auftragsbearbeitung" },
        { word: "RAUMKLIMA", clue: "Sollte eine Luftfeuchtigkeit von 40-60 % haben" }
      ],
      hangmanTerms: [
        { word: "AKUSTIK", clue: "Der Schalldruck im Büro soll so niedrig wie möglich sein" },
        { word: "BELEUCHTUNG", clue: "Mindestens 500 Lux in Büroräumen" },
        { word: "PARETOPRINZIP", clue: "20 Prozent der Zeit bringen 80 Prozent der Ergebnisse" },
        { word: "ALPENMETHODE", clue: "Aufgaben auflisten, Länge kalkulieren, Puffer, Entscheidung" },
        { word: "LIEFERSCHEIN", clue: "Wird zur Kontrolle mit der Ware mitgeliefert" },
        { word: "BONITAETSPRUEFUNG", clue: "Prüfung der Zahlungsfähigkeit eines Kunden" },
        { word: "ANFRAGE", clue: "Erster, rechtlich unverbindlicher Schritt der Auftragsbearbeitung" },
        { word: "RECHNUNGSNUMMER", clue: "Muss auf jeder vollständigen Rechnung fortlaufend sein" }
      ],
      summary: [
        {
          q: "Was gehört zu einem ergonomisch gestalteten Arbeitsplatz?",
          a: "Ein höhenverstellbarer Bürostuhl mit 5 Abstützpunkten und einem 90°-Winkel zwischen Ober- und Unterschenkel, ein höhenverstellbarer Tisch (mind. 160 × 80 cm), ein Bildschirm im Abstand von 50–60 cm mit oberster Zeile leicht unterhalb der Augenhöhe sowie eine bewusste Farbgestaltung des Raumes."
        },
        {
          q: "Welche Werte gelten für Akustik, Licht und Raumklima im Büro?",
          a: "Akustik: Der Schalldruck soll so niedrig wie möglich gehalten werden (z. B. durch Schallabschirmung, dämmende Böden/Decken). Licht: mindestens 2 % Tageslicht, 500 Lux Mindestbeleuchtung, Blendung vermeiden. Raumklima: Luftfeuchtigkeit zwischen 40 % und 60 %."
        },
        {
          q: "Welche Zeitmanagement-Methoden gibt es?",
          a: "SMARTE Ziele (spezifisch, messbar, attraktiv, realistisch, terminiert), das Pareto-Prinzip (20 % der Zeit bringen 80 % der Ergebnisse), die ABC-Analyse (Aufgaben nach Wichtigkeit sortieren) und die Alpenmethode (Aufgaben auflisten, Länge kalkulieren, Pufferzeiten reservieren, Entscheidungen nach Prioritäten treffen)."
        },
        {
          q: "Wie läuft die Terminorganisation ab?",
          a: "Planen (Thema, Ziel, Zeitrahmen, Teilnehmer klären), koordinieren (feste und bewegliche Termine ohne Überschneidung einordnen) und überwachen (Zu-/Absagen prüfen, ggf. verschieben). Bei Abweichungen helfen frühzeitige Ausweichtermine und klare Deadlines für Zu-/Absagen."
        },
        {
          q: "Wie lange müssen Geschäftsunterlagen aufbewahrt werden?",
          a: "6 Jahre: empfangene und versandte Handels- bzw. Geschäftsbriefe. 10 Jahre: Bücher, Inventare, Jahresabschlüsse, Lageberichte, Eröffnungsbilanz, Buchungsbelege, Rechnungen, Handelsbücher – Grundlage sind Handelsrecht (HGB) und Steuerrecht (AO)."
        },
        {
          q: "Wie läuft die Auftragsbearbeitung in 8 Schritten ab?",
          a: "1. Anfrage (unverbindlich) → 2. Angebot (verbindlicher Antrag) → 3. Prüfung der Bonität → 4. Bestellung (Annahme) → 5. Auftragsbestätigung → 6. Lieferschein → 7. Ausgangsrechnung → 8. Überweisung/Zahlungskontrolle."
        }
      ],
      flashcards: [
        { front: "Welcher Winkel sollte am Bürostuhl zwischen Ober- und Unterschenkel bestehen?", back: "90°, bei parallel zur Tischfläche stehenden Unterarmen." },
        { front: "Wie viele Abstützpunkte braucht ein kippsicherer Bürostuhl?", back: "5 Abstützpunkte (Rollen oder Gleiter)." },
        { front: "Wie groß sollte eine Tischplatte mindestens sein?", back: "Mindestbreite 160 cm, Mindesttiefe 80 cm." },
        { front: "Welcher Abstand wird zum Bildschirm empfohlen?", back: "Ca. 50–60 cm, oberste Bildschirmzeile leicht unterhalb der Augenhöhe." },
        { front: "Welche Wirkung hat die Farbe Rot im Büro?", back: "Stimulierend, aktivierend, unterstützt Aggressionen." },
        { front: "Welche Wirkung hat die Farbe Blau im Büro?", back: "Hilft bei der Bewältigung von Tagesstress und wirkt regenerativ." },
        { front: "Wie hoch sollte die Mindestbeleuchtung in Büroräumen sein?", back: "Mindestens 500 Lux." },
        { front: "Wie viel Tageslicht sollte mindestens vorhanden sein?", back: "Mindestens 2 %, bei Dachoberlicht mindestens 4 %." },
        { front: "In welchem Bereich sollte die Luftfeuchtigkeit im Büro liegen?", back: "Zwischen 40 % und 60 %." },
        { front: "Wofür stehen die Buchstaben bei SMARTEN Zielen?", back: "Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert." },
        { front: "Was besagt das Pareto-Prinzip?", back: "20 % der eingesetzten Zeit bringen 80 % der Ergebnisse." },
        { front: "Wofür steht die Alpenmethode (Buchstaben)?", back: "Aufgaben auflisten, Länge/Zeitbedarf kalkulieren, Pufferzeiten reservieren, Entscheidungen nach Prioritäten." },
        { front: "Feste vs. bewegliche Termine?", back: "Feste Termine wiederholen sich und werden langfristig eingeplant. Bewegliche Termine werden kurzfristig geplant und mit festen Terminen abgestimmt." },
        { front: "Wie lange müssen empfangene Handelsbriefe aufbewahrt werden?", back: "6 Jahre." },
        { front: "Wie lange müssen Jahresabschlüsse und Buchungsbelege aufbewahrt werden?", back: "10 Jahre." },
        { front: "Was ist der Listeneinkaufspreis?", back: "Der vom Lieferanten berechnete Katalogpreis ohne Berücksichtigung von Rabatten oder Abzügen." },
        { front: "Nenne 3 Pflichtangaben einer vollständigen Rechnung.", back: "Z. B. vollständiger Name und Anschrift beider Parteien, fortlaufende Rechnungsnummer, Ausstellungsdatum, Steuernummer/USt-ID, Entgelt und Steuerbetrag." },
        { front: "Was prüft die Bonitätsprüfung?", back: "Die Zahlungsbereitschaft und -fähigkeit des Kunden, besonders bei Neukunden." },
        { front: "Was enthält der Lieferschein?", back: "Die genaue Beschreibung der Artikel und deren Menge – dient der Kontrolle bei der Lieferung." },
        { front: "Nenne die 8 Schritte der Auftragsbearbeitung.", back: "Anfrage, Angebot, Bonitätsprüfung, Bestellung, Auftragsbestätigung, Lieferschein, Ausgangsrechnung, Überweisung." }
      ],
      quiz: [
        { q: "Welcher Winkel sollte zwischen Ober- und Unterschenkel am Bürostuhl bestehen?", options: ["45°", "70°", "90°", "120°"], correct: 2, explain: "Ein rechter Winkel (90°) zwischen Ober- und Unterschenkel gilt als ergonomisch korrekt." },
        { q: "Wie viele Abstützpunkte soll ein kippsicherer Bürostuhl haben?", options: ["3", "4", "5", "6"], correct: 2, explain: "5 Abstützpunkte (Rollen oder Gleiter) sorgen für Kippsicherheit." },
        { q: "Wie hoch sollte die Mindestbeleuchtung in Büroräumen sein?", options: ["100 Lux", "250 Lux", "500 Lux", "1.000 Lux"], correct: 2, explain: "Büroräume und Arbeitsbereiche sollten mindestens 500 Lux aufweisen." },
        { q: "Welche Farbe wirkt laut Farbwirkungslehre stimulierend und unterstützt Aggressionen?", options: ["Blau", "Grün", "Rot", "Weiß"], correct: 2, explain: "Rot hat eine stimulierende, aktivierende Wirkung." },
        { q: "In welchem Bereich sollte die ideale Luftfeuchtigkeit im Büro liegen?", options: ["10–20 %", "40–60 %", "70–90 %", "Über 90 %"], correct: 1, explain: "40–60 % Luftfeuchtigkeit beugt Atemwegserkrankungen vor." },
        { q: "Wofür steht das „M“ in SMARTEN Zielen?", options: ["Motivierend", "Messbar", "Machbar", "Modern"], correct: 1, explain: "SMART steht u. a. für messbar – Ziele sollen überprüfbar formuliert sein." },
        { q: "Was besagt das Pareto-Prinzip?", options: ["50 % Zeit = 50 % Ergebnis", "20 % Zeit = 80 % Ergebnis", "80 % Zeit = 20 % Ergebnis", "Zeit und Ergebnis sind unabhängig"], correct: 1, explain: "20 % der eingesetzten Zeit bringen häufig 80 % der Ergebnisse." },
        { q: "Wie lange müssen empfangene Handels- oder Geschäftsbriefe aufbewahrt werden?", options: ["2 Jahre", "6 Jahre", "10 Jahre", "20 Jahre"], correct: 1, explain: "Für Handels- bzw. Geschäftsbriefe gilt eine Aufbewahrungspflicht von 6 Jahren." },
        { q: "Wie lange müssen Jahresabschlüsse und Buchungsbelege aufbewahrt werden?", options: ["3 Jahre", "6 Jahre", "10 Jahre", "Unbegrenzt"], correct: 2, explain: "Für Jahresabschlüsse und Buchungsbelege gilt eine 10-jährige Aufbewahrungspflicht." },
        { q: "Was ist der erste Schritt der Auftragsbearbeitung?", options: ["Angebot", "Anfrage", "Bestellung", "Lieferschein"], correct: 1, explain: "Die (rechtlich unverbindliche) Anfrage steht am Anfang der Auftragsbearbeitung." },
        { q: "Was wird bei der Bonitätsprüfung untersucht?", options: ["Die Produktqualität", "Die Zahlungsfähigkeit und -bereitschaft des Kunden", "Die Lieferzeit", "Der Marktpreis"], correct: 1, explain: "Die Bonitätsprüfung untersucht, ob und wie zuverlässig ein Kunde zahlt." },
        { q: "Was wird mit dem Lieferschein zur Kontrolle mitgeliefert?", options: ["Die Rechnung", "Die Artikelbeschreibung und Menge", "Der Kaufvertrag", "Die AGB"], correct: 1, explain: "Der Lieferschein enthält Artikel und Menge zur Kontrolle bei der Lieferung." }
      ],
      exam: [
        {
          title: "Auftragsbearbeitung am Beispiel Büromaterial",
          points: 10,
          task: "Ein Kunde möchte Büromaterial bestellen. Beschreiben Sie den Ablauf der Auftragsbearbeitung anhand der 8 Schritte – von der ersten Kontaktaufnahme bis zum Zahlungseingang.",
          solution: "1. Anfrage: Der Kunde bittet unverbindlich um Informationen zu Produkten, Preisen und Lieferbedingungen.\n2. Angebot: Das Unternehmen unterbreitet einen verbindlichen Antrag mit Art, Menge, Preis, Liefer- und Zahlungsbedingungen sowie einer Bindefrist.\n3. Prüfung der Bonität: Vor allem bei Neukunden wird die Zahlungsfähigkeit geprüft.\n4. Bestellung: Der Kunde nimmt das Angebot unverändert an.\n5. Auftragsbestätigung: Das Unternehmen bestätigt Artikel, Preise, Versandkosten sowie Liefer-/Zahlungsbedingungen.\n6. Lieferschein: Wird der Lieferung beigelegt und dient der Kontrolle der gelieferten Menge.\n7. Ausgangsrechnung: Wird erstellt und an den Kunden versendet.\n8. Überweisung: Der Zahlungseingang wird überprüft bzw. der Betrag eingezogen."
        },
        {
          title: "Ergonomische Ursachen von Kopfschmerzen im Büro",
          points: 8,
          task: "Ein Mitarbeiter klagt über Kopfschmerzen und Konzentrationsschwierigkeiten. Analysieren Sie mögliche ergonomische Ursachen und schlagen Sie konkrete Verbesserungen vor.",
          solution: "Mögliche Ursachen: unzureichende Beleuchtung (unter 500 Lux oder Blendung durch Sonnenlicht), falscher Bildschirmabstand oder falsche Bildschirmhöhe, hoher Lärmpegel ohne Schallabschirmung, ungünstiges Raumklima (Luftfeuchtigkeit außerhalb 40–60 %).\nVerbesserungsvorschläge: Beleuchtung auf mindestens 500 Lux prüfen und ggf. nachrüsten, Blendschutz/Rollos einsetzen und den Bildschirm parallel zum Fenster ausrichten, Bildschirmabstand auf 50–60 cm einstellen, Lärmquellen auslagern oder Schallabschirmungen einbauen, Luftbefeuchter bzw. Pflanzen zur Regulierung des Raumklimas nutzen."
        }
      ]
    },

    // ======================================================================
    // KAPITEL F
    // ======================================================================
    {
      id: "marketing",
      code: "F",
      title: "Kundenakquise & Marketing",
      subtitle: "Marketingmix, Produktlebenszyklus, Preis- & Kommunikationspolitik, Angebot & Nachfrage, Marktformen",
      terms: [
        { word: "MARKETINGMIX", clue: "Zusammenspiel aus Produkt-, Preis-, Kommunikations- und Distributionspolitik" },
        { word: "PRODUKTLEBENSZYKLUS", clue: "Von der Innovation bis zur Elimination eines Produkts" },
        { word: "PREISPOLITIK", clue: "Legt den Verkaufspreis in Abhängigkeit von Kosten und Markt fest" },
        { word: "MARKTDURCHDRINGUNG", clue: "Preisstrategie: erst niedrig, dann Preis erhöhen" },
        { word: "NACHFRAGE", clue: "Sinkt laut Gesetz bei steigendem Preis" },
        { word: "ANGEBOT", clue: "Steigt laut Gesetz bei steigendem Preis" },
        { word: "GLEICHGEWICHTSPREIS", clue: "Preis, bei dem sich Angebot und Nachfrage entsprechen" },
        { word: "POLYPOL", clue: "Marktform mit vielen Anbietern und vielen Nachfragern" }
      ],
      hangmanTerms: [
        { word: "PRODUKTPOLITIK", clue: "Umfasst alle Entscheidungen zum Leistungsangebot" },
        { word: "DISTRIBUTIONSPOLITIK", clue: "Regelt die Absatzwege eines Produkts" },
        { word: "WERBUNG", clue: "Teil der Kommunikationspolitik nach dem AIDA-Prinzip" },
        { word: "SALESPROMOTION", clue: "Förderung von Verkäufern, Händlern und Verbrauchern" },
        { word: "HANDELSVERTRETER", clue: "Selbstständiger Vertreter, der für mehrere Firmen arbeiten kann" },
        { word: "MONOPOL", clue: "Marktform mit nur einem Anbieter" },
        { word: "MELKKUH", clue: "BCG-Begriff für hohen Marktanteil, geringes Wachstum" },
        { word: "FRAGEZEICHEN", clue: "BCG-Begriff für geringen Marktanteil, hohes Wachstum" }
      ],
      diagrams: [
        {
          title: "BCG-Matrix (Portfolio-Analyse)",
          note: "Einordnung von Produkten nach Marktwachstum und relativem Marktanteil.",
          svg: `<svg viewBox="0 0 480 420" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="40" width="180" height="160" class="df-ochre-soft"/>
            <rect x="260" y="40" width="180" height="160" class="df-success-soft"/>
            <rect x="80" y="200" width="180" height="160" class="df-stamp-soft"/>
            <rect x="260" y="200" width="180" height="160" class="df-paper-dim"/>
            <text x="170" y="110" text-anchor="middle" class="dt" font-size="15" font-weight="600">Question Marks</text>
            <text x="170" y="130" text-anchor="middle" class="dt-mono" font-size="10">hohes Wachstum, geringer Anteil</text>
            <text x="350" y="110" text-anchor="middle" class="dt" font-size="15" font-weight="600">Stars</text>
            <text x="350" y="130" text-anchor="middle" class="dt-mono" font-size="10">hohes Wachstum, hoher Anteil</text>
            <text x="170" y="270" text-anchor="middle" class="dt" font-size="15" font-weight="600">Poor Dogs</text>
            <text x="170" y="290" text-anchor="middle" class="dt-mono" font-size="10">geringes Wachstum, geringer Anteil</text>
            <text x="350" y="270" text-anchor="middle" class="dt" font-size="15" font-weight="600">Cash Cows</text>
            <text x="350" y="290" text-anchor="middle" class="dt-mono" font-size="10">geringes Wachstum, hoher Anteil</text>
            <line x1="80" y1="40" x2="80" y2="360" class="ds-ink" stroke-width="1.5"/>
            <line x1="80" y1="360" x2="440" y2="360" class="ds-ink" stroke-width="1.5"/>
            <text x="40" y="200" text-anchor="middle" class="dt-mono" font-size="11" transform="rotate(-90 40 200)">Marktwachstum</text>
            <text x="260" y="386" text-anchor="middle" class="dt-mono" font-size="11">Relativer Marktanteil</text>
          </svg>`
        },
        {
          title: "Angebot, Nachfrage & Gleichgewichtspreis",
          note: "Wo sich Angebots- und Nachfragekurve schneiden, entsteht der Marktpreis.",
          svg: `<svg viewBox="0 0 420 340" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="60" y1="20" x2="60" y2="300" class="ds-ink" stroke-width="1.5"/>
            <line x1="60" y1="300" x2="390" y2="300" class="ds-ink" stroke-width="1.5"/>
            <text x="26" y="24" class="dt-mono" font-size="11">Preis</text>
            <text x="356" y="318" class="dt-mono" font-size="11">Menge</text>
            <polyline points="90,60 220,165 350,260" fill="none" class="ds-stamp" stroke-width="2"/>
            <text x="352" y="256" class="dt" font-size="11">Nachfrage</text>
            <polyline points="90,270 220,165 350,70" fill="none" class="ds-success" stroke-width="2"/>
            <text x="352" y="68" class="dt" font-size="11">Angebot</text>
            <line x1="220" y1="165" x2="220" y2="300" stroke-dasharray="3 4" class="ds-border" stroke-width="1.5"/>
            <line x1="60" y1="165" x2="220" y2="165" stroke-dasharray="3 4" class="ds-border" stroke-width="1.5"/>
            <circle cx="220" cy="165" r="4" class="df-ink"/>
            <text x="64" y="158" class="dt-mono" font-size="10">Gleichgewichtspreis</text>
            <text x="168" y="316" class="dt-mono" font-size="10">Gleichgewichtsmenge</text>
          </svg>`
        }
      ],
      summary: [
        {
          q: "Was umfasst der Marketingmix?",
          a: "Das Zusammenspiel der vier Marketinginstrumente: Produktpolitik (Leistungsangebot), Preispolitik (Verkaufspreis), Kommunikationspolitik (Werbung, PR, Salespromotion) und Distributionspolitik (Absatzwege). Zusammen legen sie fest, wie ein Produkt vermarktet wird."
        },
        {
          q: "Wie verläuft der Produktlebenszyklus – und was sagt die BCG-Matrix dazu?",
          a: "Vom Innovation über Variation, Differenzierung und Diversifikation bis zur Elimination. Die BCG-Matrix ordnet Produkte nach Marktwachstum und relativem Marktanteil ein: Question Marks (hohe Wachstumsrate, geringer Marktanteil), Stars (beides hoch), Cash Cows (hoher Marktanteil, geringes Wachstum) und Poor Dogs (beides gering)."
        },
        {
          q: "Welche drei Ansätze der Preispolitik gibt es?",
          a: "Kostenorientiert (Handelskalkulation ausgehend vom Einkaufspreis), konkurrenzorientiert (Mittel-, Hochpreis-, Marktdurchdringungs- oder Marktabschöpfungsstrategie) und nachfrageorientiert (der Preis wird so gewählt, dass der Gewinn maximal ist)."
        },
        {
          q: "Aus welchen Bausteinen besteht die Kommunikationspolitik?",
          a: "Werbung (Einführungs-, Expansions-, Erinnerungswerbung; Werbegrundsätze nach AIDA), Salespromotion (Verkäufer-, Händler-, Verbraucherpromotion) und Öffentlichkeitsarbeit (Sponsoring, Spenden, Tag der offenen Tür) – ergänzt durch moderne Formen wie Social Media."
        },
        {
          q: "Direkter vs. indirekter Absatz – und Reisender vs. Handelsvertreter?",
          a: "Direkter Absatz läuft ohne Zwischenstufen (eigener Laden, Onlineshop). Indirekter Absatz nutzt selbstständige Zwischenstufen (Einzel-/Großhandel). Der Reisende ist fest angestellt und weisungsgebunden, der Handelsvertreter ist selbstständig und kann für mehrere Unternehmen tätig sein."
        },
        {
          q: "Wie hängen Angebot, Nachfrage und Marktformen zusammen?",
          a: "Steigt der Preis, sinkt die Nachfrage und steigt das Angebot – am Gleichgewichtspreis stimmen beide überein. Je nach Anzahl der Anbieter/Nachfrager unterscheidet man Marktformen wie Polypol (viele/viele), Monopol (ein Anbieter) oder Oligopol (wenige Anbieter)."
        }
      ],
      flashcards: [
        { front: "Nenne die 4 Instrumente des Marketingmix.", back: "Produktpolitik, Preispolitik, Kommunikationspolitik, Distributionspolitik." },
        { front: "Nenne 3 Bestandteile der Produktpolitik.", back: "Z. B. Produktgestaltung, Verpackung, Marke (Branding), Service, Patente." },
        { front: "Nenne die Phasen des Produktlebenszyklus.", back: "Produktinnovation, Produktvariation, Produktdifferenzierung, Produktdiversifikation, Elimination." },
        { front: "Was sind „Stars“ in der BCG-Matrix?", back: "Produkte mit hohem relativem Marktanteil UND hoher Wachstumsrate – Investitionen lohnen sich." },
        { front: "Was sind „Cash Cows“ (Melkkühe) in der BCG-Matrix?", back: "Hoher Marktanteil, aber geringes Wachstum – abschöpfen, nicht mehr groß investieren." },
        { front: "Was sind „Poor Dogs“ in der BCG-Matrix?", back: "Geringer Marktanteil und geringes Wachstum – sollten meist vom Markt genommen werden." },
        { front: "Was ist die Mittelpreisstrategie?", back: "Die eigenen Preise entsprechen den Preisen der Konkurrenz – Dumpingpreise sind verboten." },
        { front: "Was ist die Marktdurchdringungsstrategie?", back: "Zuerst niedrige Preise, um das Produkt bekannt zu machen – danach werden die Preise erhöht." },
        { front: "Was ist die Marktabschöpfungsstrategie?", back: "Bei Markteinführung hohe Preise verlangen, danach schrittweise an die Konkurrenz anpassen." },
        { front: "Wofür steht AIDA in der Werbung?", back: "Attention (Aufmerksamkeit), Interest (Interesse), Desire (Kaufwunsch), Action (Kauf)." },
        { front: "Nenne die 4 Werbegrundsätze.", back: "Werbewirksamkeit, Werbeklarheit, Werbewahrheit, Werbewirtschaftlichkeit." },
        { front: "Nenne die 3 Zielgruppen der Salespromotion.", back: "Verkäuferpromotion, Händlerpromotion, Verbraucherpromotion." },
        { front: "Direkter vs. indirekter Absatz?", back: "Direkt: ohne Zwischenstufen (z. B. eigener Onlineshop). Indirekt: über selbstständige Zwischenstufen (z. B. Großhandel)." },
        { front: "Reisender vs. Handelsvertreter?", back: "Reisender: fest angestellt, weisungsgebunden, festes Gehalt. Handelsvertreter: selbstständig, kann für mehrere Unternehmen arbeiten." },
        { front: "Was besagt das Gesetz der Nachfrage?", back: "Bei steigendem Preis sinkt die Nachfrage, bei sinkendem Preis steigt sie." },
        { front: "Was besagt das Gesetz des Angebots?", back: "Bei steigendem Preis steigt das Angebot, bei sinkendem Preis sinkt es." },
        { front: "Wann entsteht ein Angebotsüberschuss?", back: "Wenn der Marktpreis über dem Gleichgewichtspreis liegt – es wird mehr angeboten als nachgefragt." },
        { front: "Wann entsteht ein Nachfrageüberschuss?", back: "Wenn der Marktpreis unter dem Gleichgewichtspreis liegt – es wird mehr nachgefragt als angeboten." },
        { front: "Was ist ein Polypol?", back: "Eine Marktform mit vielen Anbietern und vielen Nachfragern." },
        { front: "Käufermarkt vs. Verkäufermarkt?", back: "Käufermarkt: Käufer hat die Marktmacht (Angebotsüberschuss). Verkäufermarkt: Verkäufer hat die Marktmacht (Nachfrageüberschuss)." }
      ],
      quiz: [
        { q: "Welche 4 Instrumente gehören zum Marketingmix?", options: ["Produkt-, Preis-, Kommunikations-, Distributionspolitik", "Werbung, PR, Sponsoring, Social Media", "Einkauf, Verkauf, Lager, Logistik", "Planung, Organisation, Kontrolle, Führung"], correct: 0, explain: "Der Marketingmix besteht aus Produkt-, Preis-, Kommunikations- und Distributionspolitik." },
        { q: "Wie werden Produkte mit hohem Marktanteil, aber geringem Wachstum in der BCG-Matrix genannt?", options: ["Stars", "Question Marks", "Cash Cows", "Poor Dogs"], correct: 2, explain: "Cash Cows (Melkkühe) haben einen hohen Marktanteil bei geringem Wachstum – sie sollten abgeschöpft werden." },
        { q: "Welche Preisstrategie setzt zunächst niedrige Preise an, um später zu erhöhen?", options: ["Hochpreisstrategie", "Marktabschöpfungsstrategie", "Marktdurchdringungsstrategie", "Mittelpreisstrategie"], correct: 2, explain: "Die Marktdurchdringungsstrategie startet niedrig, um Bekanntheit zu schaffen, und erhöht später die Preise." },
        { q: "Wofür steht das letzte „A“ in AIDA?", options: ["Attention", "Aktivität", "Action", "Anerkennung"], correct: 2, explain: "AIDA: Attention – Interest – Desire – Action (der tatsächliche Kauf)." },
        { q: "Welche Werbeart wird für ein neues, noch nicht etabliertes Produkt eingesetzt?", options: ["Erinnerungswerbung", "Einführungswerbung", "Expansionswerbung", "Vergleichswerbung"], correct: 1, explain: "Einführungswerbung wird eingesetzt, wenn ein Produkt noch keinen Umsatz erzielt hat." },
        { q: "Was kennzeichnet den direkten Absatz?", options: ["Verkauf über den Großhandel", "Verkauf ohne Einschaltung von Zwischenstufen", "Verkauf nur im Ausland", "Verkauf ausschließlich über Handelsvertreter"], correct: 1, explain: "Beim direkten Absatz verkauft das Unternehmen ohne rechtlich selbstständige Zwischenstufen." },
        { q: "Ist ein Handelsvertreter selbstständig oder angestellt?", options: ["Fest angestellt", "Selbstständig", "Beamter", "Ehrenamtlich tätig"], correct: 1, explain: "Der Handelsvertreter ist selbstständig und per Vertrag an ein oder mehrere Unternehmen gebunden." },
        { q: "Was passiert mit der Nachfrage laut dem Gesetz der Nachfrage bei steigendem Preis?", options: ["Sie steigt", "Sie sinkt", "Sie bleibt gleich", "Das lässt sich nicht sagen"], correct: 1, explain: "Bei steigendem Preis sinkt die Nachfrage – und umgekehrt." },
        { q: "Wann entsteht ein Angebotsüberschuss?", options: ["Wenn der Preis unter dem Gleichgewichtspreis liegt", "Wenn der Preis über dem Gleichgewichtspreis liegt", "Wenn Angebot und Nachfrage exakt übereinstimmen", "Nur bei Monopolen"], correct: 1, explain: "Liegt der Preis über dem Gleichgewichtspreis, wird mehr angeboten als nachgefragt." },
        { q: "Wie heißt die Marktform mit vielen Anbietern und vielen Nachfragern?", options: ["Monopol", "Oligopol", "Polypol", "Duopol"], correct: 2, explain: "Beim Polypol treffen viele Anbieter auf viele Nachfrager." },
        { q: "Wer hat beim Käufermarkt die größere Marktmacht?", options: ["Der Verkäufer", "Der Käufer", "Der Staat", "Keiner von beiden"], correct: 1, explain: "Auf einem Käufermarkt (Angebotsüberschuss) kann der Käufer das Marktgeschehen bestimmen." }
      ],
      exam: [
        {
          title: "AIDA und Preisstrategie für ein neues Produkt",
          points: 10,
          task: "Ein Unternehmen bringt ein innovatives, aber noch unbekanntes Produkt auf den Markt. Erläutern Sie anhand der AIDA-Formel, wie die Werbung aufgebaut sein sollte. Schlagen Sie außerdem eine passende Preisstrategie vor und begründen Sie Ihre Wahl.",
          solution: "AIDA-Aufbau der Werbung:\nAttention: Auffälliger Werbespot/Anzeige, um überhaupt wahrgenommen zu werden.\nInterest: Konkrete Vorteile und Alleinstellungsmerkmale des Produkts hervorheben.\nDesire: Emotionale Ansprache, die einen Kaufwunsch weckt (z. B. Testimonials, Vorher-Nachher).\nAction: Klarer Handlungsaufruf mit einfachem Kaufweg (z. B. Rabattcode, Bestell-Button).\n\nPreisstrategie: Da das Produkt neu und unbekannt ist, bietet sich die Marktdurchdringungsstrategie an – ein niedriger Einführungspreis senkt die Hemmschwelle zum Ausprobieren und verschafft schnell Marktanteile. Sobald das Produkt bekannt ist, können die Preise schrittweise erhöht werden."
        },
        {
          title: "Produktportfolio nach der BCG-Matrix",
          points: 8,
          task: "Ein Unternehmen hat zwei Produkte: Produkt A hat einen hohen Marktanteil, aber nur noch geringes Marktwachstum. Produkt B hat einen geringen Marktanteil, aber ein hohes Marktwachstum. Ordnen Sie beide Produkte der BCG-Matrix zu und leiten Sie jeweils eine strategische Empfehlung ab.",
          solution: "Produkt A (hoher Marktanteil, geringes Wachstum) = Cash Cow (Melkkuh). Empfehlung: Abschöpfungsstrategie – das Produkt weiterhin verkaufen und Gewinne abschöpfen, aber nicht mehr stark investieren.\n\nProdukt B (geringer Marktanteil, hohes Wachstum) = Question Mark (Fragezeichen). Empfehlung: Offensivstrategie – gezielt investieren, um Marktanteile auszubauen, bevor sich entscheidet, ob das Produkt zum Star oder zum Poor Dog wird."
        }
      ]
    },

    // ======================================================================
    // KAPITEL G
    // ======================================================================
    {
      id: "kommunikation",
      code: "G",
      title: "Gesprächssituationen & Kommunikation",
      subtitle: "4 Seiten einer Nachricht, Sender-Empfänger-Modell, Fragetypen, Konfliktgespräche",
      terms: [
        { word: "KOMMUNIKATION", clue: "Austausch von Informationen auf verschiedene Arten" },
        { word: "SACHINHALT", clue: "Ebene der Nachricht: worüber ich informiere" },
        { word: "SELBSTKUNDGABE", clue: "Ebene der Nachricht: was ich von mir zeige" },
        { word: "BEZIEHUNG", clue: "Ebene der Nachricht: was ich vom anderen halte" },
        { word: "APPELL", clue: "Ebene der Nachricht: was ich erreichen möchte" },
        { word: "SENDER", clue: "Person, die eine Nachricht übermittelt" },
        { word: "EMPFAENGER", clue: "Person, die eine Nachricht empfängt und interpretiert" },
        { word: "GESCHLOSSENEFRAGE", clue: "Frage, die nur mit Ja oder Nein beantwortet wird" }
      ],
      hangmanTerms: [
        { word: "KONFLIKTGESPRAECH", clue: "Gespräch zur Klärung von Meinungsverschiedenheiten" },
        { word: "EISBERGMODELL", clue: "Nur ein kleiner Teil eines Konflikts ist sichtbar" },
        { word: "KONTROLLFRAGE", clue: "Überprüft, ob man inhaltlich übereinstimmt" },
        { word: "ALTERNATIVFRAGE", clue: "Lässt dem Gesprächspartner zwei Antwortmöglichkeiten" },
        { word: "ICHBOTSCHAFT", clue: "Eigene Sichtweise offen ansprechen im Konfliktgespräch" },
        { word: "KOERPERSPRACHE", clue: "Sichtbarer Teil der Kommunikation über der Wasserlinie" },
        { word: "OFFENEFRAGE", clue: "Fordert den Gesprächspartner zum Erzählen auf" },
        { word: "ZUHOEREN", clue: "Wichtige Aufgabe des Empfängers B im Sender-Empfänger-Modell" }
      ],
      diagrams: [
        {
          title: "Die 4 Seiten einer Nachricht",
          note: "Modell nach Schulz von Thun – jede Nachricht hat 4 Ebenen.",
          svg: `<svg viewBox="0 0 480 420" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="240" y1="80" x2="240" y2="165" class="ds-border" stroke-width="1.5"/>
            <line x1="240" y1="235" x2="240" y2="320" class="ds-border" stroke-width="1.5"/>
            <line x1="150" y1="200" x2="170" y2="200" class="ds-border" stroke-width="1.5"/>
            <line x1="310" y1="200" x2="330" y2="200" class="ds-border" stroke-width="1.5"/>
            <rect x="170" y="20" width="140" height="60" rx="8" class="df-success"/>
            <text x="240" y="46" text-anchor="middle" class="dt-white" font-size="13">Sachinhalt</text>
            <text x="240" y="64" text-anchor="middle" class="dt-white-mono" font-size="9">worüber ich informiere</text>
            <rect x="170" y="165" width="140" height="70" rx="8" class="df-ink"/>
            <text x="240" y="205" text-anchor="middle" class="dt-white" font-size="15">Nachricht</text>
            <rect x="20" y="165" width="130" height="70" rx="8" class="df-ochre"/>
            <text x="85" y="192" text-anchor="middle" class="dt-white" font-size="12">Selbstkundgabe</text>
            <text x="85" y="212" text-anchor="middle" class="dt-white-mono" font-size="9">was ich von mir zeige</text>
            <rect x="330" y="165" width="130" height="70" rx="8" class="df-ink-soft"/>
            <text x="395" y="192" text-anchor="middle" class="dt-white" font-size="13">Appell</text>
            <text x="395" y="212" text-anchor="middle" class="dt-white-mono" font-size="9">was ich erreichen will</text>
            <rect x="170" y="320" width="140" height="60" rx="8" class="df-stamp"/>
            <text x="240" y="346" text-anchor="middle" class="dt-white" font-size="13">Beziehung</text>
            <text x="240" y="364" text-anchor="middle" class="dt-white-mono" font-size="9">was ich von dir halte</text>
          </svg>`
        },
        {
          title: "Das Eisbergmodell",
          note: "Nur ein kleiner Teil eines Konflikts ist sichtbar – der Rest liegt unter der Oberfläche.",
          svg: `<svg viewBox="0 0 420 280" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="140" width="420" height="140" class="df-paper-dim"/>
            <line x1="0" y1="140" x2="420" y2="140" class="ds-ink" stroke-width="1.5"/>
            <polygon points="170,70 250,70 225,140 195,140" class="df-card" stroke="var(--ink)" stroke-width="1.5"/>
            <polygon points="195,140 225,140 300,258 260,272 160,272 120,258" class="df-ink-soft"/>
            <text x="210" y="30" text-anchor="middle" class="dt" font-size="12" font-weight="600">Verhalten, Worte, Taten,</text>
            <text x="210" y="46" text-anchor="middle" class="dt-mono" font-size="10">Körpersprache (bewusst)</text>
            <text x="210" y="200" text-anchor="middle" class="dt-white" font-size="12" font-weight="600">Motive, Bedürfnisse,</text>
            <text x="210" y="218" text-anchor="middle" class="dt-white" font-size="12" font-weight="600">Emotionen, Normen</text>
            <text x="210" y="234" text-anchor="middle" class="dt-white-mono" font-size="10">(unbewusst)</text>
          </svg>`
        }
      ],
      summary: [
        {
          q: "Was besagt das Modell der 4 Seiten einer Nachricht (Schulz von Thun)?",
          a: "Jede Nachricht hat vier Ebenen: Sachebene (worüber ich informiere), Selbstkundgabe (was ich von mir preisgebe), Beziehungsebene (was ich vom anderen halte) und Appellseite (was ich erreichen möchte). Der Empfänger hört mit vier „Ohren“ – je nachdem, welches Ohr dominiert, kann dieselbe Nachricht ganz unterschiedlich ankommen."
        },
        {
          q: "Wie funktioniert das Sender-Empfänger-Modell nach Stuart Hall?",
          a: "Der Sender hat eine Absicht, übersetzt sie in Worte, spricht sie aus, die Nachricht wird übermittelt, der Empfänger hört sie, übersetzt und interpretiert sie. Entscheidend ist nicht nur die Absicht des Senders, sondern die tatsächliche Wirkung beim Empfänger – deshalb müssen beide Seiten aktiv an klarer Kommunikation mitarbeiten."
        },
        {
          q: "Offene, geschlossene, Alternativ- und Kontrollfrage – wann setze ich was ein?",
          a: "Offene Frage: für ausführliche Antworten und Meinungen. Geschlossene Frage: für klare Ja/Nein-Antworten. Alternativfrage: gibt zwei Antwortmöglichkeiten vor und erleichtert Entscheidungen. Kontrollfrage: prüft, ob Übereinstimmung besteht – zu viele davon wirken aber wie ein Verhör."
        },
        {
          q: "Was zeigt das Eisbergmodell im Konflikt?",
          a: "Über der Wasseroberfläche liegt das Sichtbare: Verhalten, Worte, Körpersprache. Darunter, unsichtbar, liegen die eigentlichen Ursachen: Motive, Erfahrungen, Emotionen, Bedürfnisse und Normen – sie treiben das sichtbare Verhalten an, sind aber schwer direkt zugänglich."
        },
        {
          q: "Wie läuft ein gutes Konfliktgespräch ab?",
          a: "1. Eigene Sichtweise mit Ich-Botschaft offen ansprechen. 2. Eigene Konsequenzen beschreiben. 3. Sichtweise des anderen erfragen und akzeptieren. 4. Gemeinsame Ziele/Kompromisse formulieren. 5. Kriterien für Verbesserung festlegen. 6. Mögliche Hindernisse bedenken. 7. Konkrete Vereinbarung treffen."
        },
        {
          q: "Wie lässt sich Konflikten vorbeugen?",
          a: "Gemeinsam Regeln formulieren und einhalten, auf Kompromisse eingehen und potenzielle Konfliktursachen frühzeitig minimieren – bevor aus kleinen Reibungen größere Konflikte entstehen."
        }
      ],
      flashcards: [
        { front: "Was beschreibt die Sachebene einer Nachricht?", back: "Worüber ich informiere – die reine Sachinformation." },
        { front: "Was beschreibt die Selbstkundgabe?", back: "Was ich von mir selbst preisgebe (z. B. Stimmung, Werte)." },
        { front: "Was beschreibt die Beziehungsebene?", back: "Was ich vom anderen halte und wie ich zu ihm stehe." },
        { front: "Was beschreibt die Appellseite?", back: "Was ich beim Empfänger erreichen möchte." },
        { front: "Nenne die 4 „Ohren“ des Empfängers.", back: "Sach-Ohr, Appell-Ohr, Beziehungs-Ohr, Selbstkundgabe-Ohr." },
        { front: "Wer entwickelte das Sender-Empfänger-Modell?", back: "Stuart Hall." },
        { front: "Was ist wichtiger als die Absicht des Senders?", back: "Die tatsächliche Wirkung, die die Worte beim Empfänger erzielen." },
        { front: "Wofür eignet sich eine offene Frage?", back: "Um ausführliche Informationen, Meinungen oder Erzählungen zu erhalten." },
        { front: "Wofür eignet sich eine geschlossene Frage?", back: "Um etwas klar auf den Punkt zu bringen (Ja/Nein-Antwort)." },
        { front: "Was ist der Vorteil einer Alternativfrage?", back: "Sie gibt dem Gesprächspartner eine erste Orientierung und erleichtert die Entscheidung." },
        { front: "Wozu dient eine Kontrollfrage?", back: "Zu überprüfen, ob der Gesprächspartner inhaltlich mit einem übereinstimmt." },
        { front: "Was ist der Nachteil zu vieler Kontrollfragen?", back: "Der Gesprächspartner fühlt sich nicht ernst genommen – es entsteht ein Verhöreindruck." },
        { front: "Was liegt beim Eisbergmodell ÜBER der Wasseroberfläche?", back: "Das Sichtbare: Verhalten, Worte, Taten, Körpersprache." },
        { front: "Was liegt beim Eisbergmodell UNTER der Wasseroberfläche?", back: "Motive, Erfahrungen, Emotionen, Bedürfnisse, Normen – der eigentliche Handlungsantrieb." },
        { front: "Was ist der erste Schritt eines Konfliktgesprächs?", back: "Die eigene Sichtweise mit einer Ich-Botschaft offen ansprechen." },
        { front: "Was ist der letzte Schritt eines Konfliktgesprächs?", back: "Eine konkrete Vereinbarung treffen." },
        { front: "Nenne 2 Maßnahmen zur Konfliktprävention.", back: "Gemeinsam Regeln formulieren und einhalten, auf Kompromisse eingehen, Konfliktursachen frühzeitig minimieren." },
        { front: "Was ist eine Ich-Botschaft?", back: "Eine Aussage aus der eigenen Perspektive („Ich fühle …“), die Vorwürfe vermeidet und Eskalation verhindert." }
      ],
      quiz: [
        { q: "Wer entwickelte das Modell der 4 Seiten einer Nachricht?", options: ["Stuart Hall", "Sigmund Freud", "Friedemann Schulz von Thun", "Abraham Maslow"], correct: 2, explain: "Das Kommunikationsmodell der 4 Seiten einer Nachricht stammt von Friedemann Schulz von Thun." },
        { q: "Welche Ebene sagt aus, was ich von einer Person halte?", options: ["Sachebene", "Beziehungsebene", "Appellseite", "Selbstkundgabe"], correct: 1, explain: "Die Beziehungsebene zeigt, wie der Sender zum Empfänger steht." },
        { q: "Mit welchem „Ohr“ interpretiert der Empfänger, was er tun soll?", options: ["Sach-Ohr", "Beziehungs-Ohr", "Appell-Ohr", "Selbstkundgabe-Ohr"], correct: 2, explain: "Das Appell-Ohr hört heraus, was der Sender vom Empfänger erreichen möchte." },
        { q: "Wer entwickelte das Sender-Empfänger-Modell?", options: ["Stuart Hall", "Schulz von Thun", "Karl Bühler", "Paul Watzlawick"], correct: 0, explain: "Das Sender-Empfänger-Modell in dieser Form stammt von Stuart Hall." },
        { q: "Was ist laut Sender-Empfänger-Modell wichtiger als die Absicht des Senders?", options: ["Die Lautstärke", "Die Wirkung beim Empfänger", "Die Wortwahl", "Der Zeitpunkt"], correct: 1, explain: "Entscheidend ist, wie die Nachricht beim Empfänger tatsächlich ankommt und wirkt." },
        { q: "Welche Frageart lässt sich meist nur mit Ja oder Nein beantworten?", options: ["Offene Frage", "Geschlossene Frage", "Alternativfrage", "Kontrollfrage"], correct: 1, explain: "Geschlossene Fragen sind auf eine Ja/Nein-Antwort ausgelegt." },
        { q: "Welche Frage gibt dem Gesprächspartner bereits zwei Antwortmöglichkeiten vor?", options: ["Offene Frage", "Kontrollfrage", "Alternativfrage", "Geschlossene Frage"], correct: 2, explain: "Die Alternativfrage lässt zwischen zwei vorgegebenen Optionen wählen." },
        { q: "Wozu dient eine Kontrollfrage vor allem?", options: ["Um neue Themen einzuleiten", "Um zu prüfen, ob Übereinstimmung besteht", "Um Small Talk zu führen", "Um Zeit zu gewinnen"], correct: 1, explain: "Kontrollfragen überprüfen, ob beide Gesprächspartner inhaltlich übereinstimmen." },
        { q: "Was liegt laut Eisbergmodell UNTER der Wasseroberfläche?", options: ["Sichtbares Verhalten", "Körpersprache", "Motive und Bedürfnisse", "Gesprochene Worte"], correct: 2, explain: "Unter der Oberfläche liegen die unsichtbaren Antriebe: Motive, Emotionen, Bedürfnisse, Normen." },
        { q: "Was ist der erste Schritt eines Konfliktgesprächs?", options: ["Eine Vereinbarung treffen", "Die eigene Sichtweise mit Ich-Botschaft schildern", "Schweigen", "Sofort einen Kompromiss vorschlagen"], correct: 1, explain: "Zunächst wird die eigene Sichtweise offen über eine Ich-Botschaft angesprochen." },
        { q: "Was passiert bei zu vielen Kontrollfragen im Gespräch?", options: ["Der Gesprächspartner fühlt sich wertgeschätzt", "Es entsteht ein Verhöreindruck", "Das Gespräch wird automatisch kürzer", "Nichts, Kontrollfragen sind immer positiv"], correct: 1, explain: "Zu viele Kontrollfragen wirken wie ein Verhör und lassen den Gesprächspartner sich missverstanden fühlen." }
      ],
      exam: [
        {
          title: "Die 4 Seiten einer Nachricht anwenden",
          points: 9,
          task: "Der Ausbilder sagt zum Azubi: „Die Post ist heute aber spät dran.“ Analysieren Sie diese Aussage anhand der 4 Seiten einer Nachricht nach Schulz von Thun (Sachebene, Selbstkundgabe, Beziehungsebene, Appellseite).",
          solution: "Sachebene: Die Post wurde heute später als sonst bearbeitet – eine reine Sachinformation.\nSelbstkundgabe: Der Ausbilder ist möglicherweise gestresst oder unter Zeitdruck.\nBeziehungsebene: Je nach Tonfall kann es wie Vorwurf oder Enttäuschung wirken – der Ausbilder traut dem Azubi eigentlich mehr zu.\nAppellseite: Der eigentliche Appell könnte lauten „Bitte bearbeite die Post künftig früher“ – auch wenn das nicht wörtlich gesagt wurde.\nDas Beispiel zeigt: Je nachdem, mit welchem „Ohr“ der Azubi zuhört, kann dieselbe Aussage ganz unterschiedlich ankommen – rein sachlich oder als persönlicher Vorwurf."
        },
        {
          title: "Konfliktgespräch planen",
          points: 10,
          task: "Ein Kollege fühlt sich bei der letzten Aufgabenverteilung übergangen und ist seitdem einsilbig. Entwerfen Sie ein Konfliktgespräch anhand der 7 Schritte.",
          solution: "1. Eigene Sichtweise mit Ich-Botschaft schildern: „Mir ist aufgefallen, dass du seit der Aufgabenverteilung zurückhaltender bist – das beschäftigt mich.“\n2. Eigene Auswirkungen beschreiben: Die Zusammenarbeit im Team leidet, Absprachen werden schwieriger.\n3. Sichtweise des Kollegen erfragen und akzeptieren: Aktiv zuhören, warum er sich übergangen fühlt.\n4. Gemeinsame Ziele/Kompromisse formulieren: Klären, wie Aufgaben künftig fair verteilt werden.\n5. Kriterien für Verbesserung festlegen: z. B. Aufgaben künftig im Team gemeinsam besprechen.\n6. Mögliche Hindernisse bedenken: Zeitdruck, unterschiedliche Prioritäten.\n7. Konkrete Vereinbarung treffen: Feste Regel, dass Aufgaben ab sofort in der Teambesprechung verteilt werden."
        }
      ]
    },

    // ======================================================================
    // KAPITEL H
    // ======================================================================
    {
      id: "personal",
      code: "H",
      title: "Personalwirtschaft",
      subtitle: "Personalbedarf & -beschaffung, Arbeitszeitgesetz, Lohn & Gehalt, Kündigung, Sozialversicherung",
      diagrams: [
        {
          title: "Ermittlung des Personalbedarfs",
          note: "So berechnet sich der Nettopersonalbedarf.",
          svg: `<svg viewBox="0 0 560 140" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="40" width="100" height="50" rx="6" class="df-ink"/>
            <text x="60" y="62" text-anchor="middle" class="dt-white" font-size="8.5">Soll-Personal-</text>
            <text x="60" y="75" text-anchor="middle" class="dt-white" font-size="8.5">bestand</text>
            <text x="122" y="70" text-anchor="middle" class="dt" font-size="16">−</text>
            <rect x="134" y="40" width="90" height="50" rx="6" class="df-ink-soft"/>
            <text x="179" y="62" text-anchor="middle" class="dt-white" font-size="8.5">Ist-Personal-</text>
            <text x="179" y="75" text-anchor="middle" class="dt-white" font-size="8.5">bestand</text>
            <text x="236" y="70" text-anchor="middle" class="dt" font-size="16">+</text>
            <rect x="248" y="40" width="80" height="50" rx="6" class="df-stamp"/>
            <text x="288" y="70" text-anchor="middle" class="dt-white" font-size="10">Abgänge</text>
            <text x="340" y="70" text-anchor="middle" class="dt" font-size="16">−</text>
            <rect x="352" y="40" width="80" height="50" rx="6" class="df-success"/>
            <text x="392" y="70" text-anchor="middle" class="dt-white" font-size="10">Zugänge</text>
            <text x="444" y="70" text-anchor="middle" class="dt" font-size="16">=</text>
            <rect x="456" y="40" width="95" height="50" rx="6" class="df-ochre"/>
            <text x="503" y="62" text-anchor="middle" class="dt-white" font-size="8">Netto-Personal-</text>
            <text x="503" y="75" text-anchor="middle" class="dt-white" font-size="8">bedarf</text>
          </svg>`
        },
        {
          title: "Sozialversicherungsbeiträge",
          note: "Alle vier Zweige werden je zur Hälfte von Arbeitgeber und Arbeitnehmer getragen.",
          svg: `<svg viewBox="0 0 480 260" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="220" x2="440" y2="220" class="ds-ink" stroke-width="1.5"/>
            <rect x="60" y="103" width="60" height="117" class="df-ink"/>
            <line x1="60" y1="161" x2="120" y2="161" class="ds-border" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="90" y="238" text-anchor="middle" class="dt-mono" font-size="10">KV 14,6%</text>
            <rect x="160" y="191" width="60" height="29" class="df-ochre"/>
            <line x1="160" y1="205" x2="220" y2="205" class="ds-border" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="190" y="238" text-anchor="middle" class="dt-mono" font-size="10">PV 3,6%</text>
            <rect x="260" y="199" width="60" height="21" class="df-success"/>
            <line x1="260" y1="209" x2="320" y2="209" class="ds-border" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="290" y="238" text-anchor="middle" class="dt-mono" font-size="10">AV 2,6%</text>
            <rect x="360" y="71" width="60" height="149" class="df-stamp"/>
            <line x1="360" y1="145" x2="420" y2="145" class="ds-border" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="390" y="238" text-anchor="middle" class="dt-mono" font-size="10">RV 18,6%</text>
            <text x="20" y="55" class="dt-mono" font-size="10">je 50% Arbeitgeber</text>
            <text x="20" y="69" class="dt-mono" font-size="10">und Arbeitnehmer</text>
          </svg>`
        }
      ],
      terms: [
        { word: "PERSONALBEDARF", clue: "Ermittlung der benötigten Mitarbeiterzahl" },
        { word: "PERSONALBESCHAFFUNG", clue: "Deckung des festgestellten Personalbedarfs" },
        { word: "ARBEITSZEITGESETZ", clue: "Regelt Höchstarbeitszeit und Ruhepausen" },
        { word: "KUENDIGUNGSFRIST", clue: "Zeitraum, der bei ordentlicher Kündigung eingehalten werden muss" },
        { word: "ARBEITSVERTRAG", clue: "Schriftstück, das das Arbeitsverhältnis festigt" },
        { word: "ARBEITSZEUGNIS", clue: "Wird bei Ausscheiden aus dem Unternehmen ausgestellt" },
        { word: "LOHNSTEUERKLASSE", clue: "Bestimmt die Höhe der steuerlichen Abzüge" },
        { word: "PROBEZEIT", clue: "Anfangsphase eines Arbeitsverhältnisses" }
      ],
      hangmanTerms: [
        { word: "KUENDIGUNGSSCHUTZ", clue: "Schützt Arbeitnehmer ab 6 Monaten Betriebszugehörigkeit" },
        { word: "ABMAHNUNG", clue: "Vor einer verhaltensbedingten Kündigung meist erforderlich" },
        { word: "RENTENVERSICHERUNG", clue: "Beitragssatz von 18,6 % des Bruttolohns" },
        { word: "KRANKENVERSICHERUNG", clue: "Beitragssatz von 14,6 % des Bruttolohns" },
        { word: "GLEITZEIT", clue: "Arbeitszeitmodell mit festen Kernstunden" },
        { word: "VERTRAUENSARBEITSZEIT", clue: "Mitarbeiter legt Arbeitszeit eigenverantwortlich fest" },
        { word: "FUEHRUNGSSTIL", clue: "Autoritär oder kooperativ" },
        { word: "SOZIALVERSICHERUNG", clue: "Umfasst KV, PV, AV und RV" }
      ],
      summary: [
        {
          q: "Welche Arten von Personalbedarf gibt es?",
          a: "Ersatzbedarf entsteht durch Fluktuation (Rente, Kündigung), Zusatzbedarf durch vorübergehenden Mehrbedarf (z. B. Auftragsspitzen) und Neubedarf durch Unternehmenserweiterung (z. B. neuer Standort). Der Nettopersonalbedarf errechnet sich aus Soll-Bestand minus Ist-Bestand plus Abgänge minus Zugänge."
        },
        {
          q: "Interne vs. externe Personalbeschaffung – Vor- und Nachteile?",
          a: "Intern: Mitarbeiter kennt das Unternehmen bereits, höhere Identifikation, geringerer Einarbeitungsaufwand, motiviert durch Aufstiegschance. Extern: größere Auswahl, neue Ideen kommen ins Unternehmen, geringere Fehlbesetzungsgefahr durch gezielte Auswahl nach Qualifikation."
        },
        {
          q: "Was regelt das Arbeitszeitgesetz (ArbZG)?",
          a: "Die tägliche Arbeitszeit beträgt grundsätzlich 8 Stunden, kann aber im 6-Monats-Durchschnitt auf bis zu 10 Stunden ausgedehnt werden. Nach Arbeitsende gilt eine ununterbrochene Ruhepause von 11 Stunden. Die Pause während der Arbeit beträgt 30 Minuten (bei 6–9 Stunden Arbeitszeit) bzw. 45 Minuten (bei über 9 Stunden)."
        },
        {
          q: "Lohn vs. Gehalt – was ist der Unterschied?",
          a: "Lohn wird meist an Arbeiter gezahlt und richtet sich nach der tatsächlich geleisteten Arbeit (Stunde, Stück, Akkord) – er kann monatlich schwanken. Gehalt wird meist an Angestellte gezahlt, ist ein monatlich festes Entgelt unabhängig von der geleisteten Arbeitsmenge; Überstunden werden auf ein Gleitzeitkonto gebucht statt direkt ausgezahlt."
        },
        {
          q: "Welche Kündigungsarten und -gründe gibt es?",
          a: "Ordentliche Kündigung: fristgerecht, mit Angabe eines Grundes (personen-, verhaltens- oder betriebsbedingt). Außerordentliche Kündigung: fristlos bei einem wichtigen Grund (z. B. Diebstahl). Das Kündigungsschutzgesetz schützt Arbeitnehmer, die länger als 6 Monate beschäftigt sind, vor sozial ungerechtfertigter Kündigung."
        },
        {
          q: "Wie setzen sich die Sozialversicherungsbeiträge zusammen?",
          a: "Krankenversicherung 14,6 % (je zur Hälfte AG/AN, plus Zusatzbeitrag), Pflegeversicherung 3,6 % (+0,6 % für Kinderlose über 23), Arbeitslosenversicherung 2,6 %, Rentenversicherung 18,6 % – jeweils hälftig von Arbeitgeber und Arbeitnehmer getragen."
        }
      ],
      flashcards: [
        { front: "Was ist Ersatzbedarf?", back: "Personalbedarf aufgrund von Fluktuation, z. B. Rente oder Kündigungen." },
        { front: "Was ist Zusatzbedarf?", back: "Vorübergehender Personalbedarf aufgrund eines Arbeitsanstiegs." },
        { front: "Was ist Neubedarf?", back: "Personalbedarf aufgrund von Unternehmenserweiterung, z. B. Eröffnung eines neuen Standorts." },
        { front: "Wie berechnet man den Nettopersonalbedarf?", back: "Soll-Personalbestand − Ist-Personalbestand + Abgänge − Zugänge." },
        { front: "Nenne einen Vorteil der internen Personalbeschaffung.", back: "Der Mitarbeiter kennt das Unternehmen bereits, geringerer Einarbeitungsaufwand." },
        { front: "Nenne einen Vorteil der externen Personalbeschaffung.", back: "Größere Auswahlmöglichkeit, neue Ideen kommen ins Unternehmen." },
        { front: "Wie lang ist die tägliche Arbeitszeit nach ArbZG grundsätzlich?", back: "8 Stunden – im 6-Monats-Durchschnitt auf bis zu 10 Stunden ausdehnbar." },
        { front: "Wie lang muss die Ruhepause nach Arbeitsende mindestens sein?", back: "11 Stunden ununterbrochen." },
        { front: "Wie lang ist die Pause bei einer Arbeitszeit von über 9 Stunden?", back: "45 Minuten." },
        { front: "Was ist Gleitarbeitszeit?", back: "Frei geregelte Arbeitszeit innerhalb eines Rahmens mit festen Kernstunden, Anfang/Ende flexibel." },
        { front: "Was ist Vertrauensarbeitszeit?", back: "Der Mitarbeiter legt seine Arbeitszeit eigenverantwortlich fest, ohne betriebliche Zeitmessung." },
        { front: "Wer erhält typischerweise Lohn – Arbeiter oder Angestellte?", back: "Arbeiter – der Lohn richtet sich nach der tatsächlich geleisteten Arbeit." },
        { front: "Welche Steuerklasse gilt für Alleinerziehende?", back: "Steuerklasse 2." },
        { front: "Wann werden die Steuerklassen 3 und 5 kombiniert?", back: "Bei Ehepaaren mit unterschiedlich hohem Einkommen (höheres Einkommen = Klasse 3, niedrigeres = Klasse 5)." },
        { front: "Muss eine ordentliche Kündigung begründet werden?", back: "Ja – im Gegensatz zur außerordentlichen Kündigung muss der Grund genannt werden." },
        { front: "Nenne die 3 Arten von Kündigungsgründen.", back: "Personenbedingt, verhaltensbedingt, betriebsbedingt." },
        { front: "Ab wann greift das Kündigungsschutzgesetz?", back: "Nach mehr als 6 Monaten Beschäftigung im Betrieb." },
        { front: "Wie hoch ist der Beitragssatz der Rentenversicherung?", back: "18,6 % des Bruttolohns, je zur Hälfte von Arbeitgeber und Arbeitnehmer." },
        { front: "Was ist Job-Rotation?", back: "Der Mitarbeiter wird an mehreren Arbeitsplätzen angelernt, um monotone Arbeit zu vermeiden." },
        { front: "Was ist Job-Enrichment?", back: "Der Mitarbeiter erhält mehr Verantwortung, der Arbeitsinhalt wird qualitativ verbessert." },
        { front: "Autoritäre vs. kooperative Führung?", back: "Autoritär: Entscheidungen werden zentral von oben getroffen. Kooperativ: Mitarbeiter werden an Entscheidungen beteiligt." }
      ],
      quiz: [
        { q: "Wie nennt man Personalbedarf, der durch Fluktuation wie Kündigungen oder Renteneintritt entsteht?", options: ["Zusatzbedarf", "Neubedarf", "Ersatzbedarf", "Grundbedarf"], correct: 2, explain: "Ersatzbedarf entsteht, wenn Mitarbeiter das Unternehmen verlassen und ersetzt werden müssen." },
        { q: "Wie lang muss die Ruhepause nach Ende der täglichen Arbeitszeit mindestens sein?", options: ["8 Stunden", "9 Stunden", "11 Stunden", "12 Stunden"], correct: 2, explain: "Nach dem ArbZG gilt eine ununterbrochene Ruhepause von mindestens 11 Stunden." },
        { q: "Auf wie viele Stunden darf die tägliche Arbeitszeit im Durchschnitt ausgedehnt werden?", options: ["9 Stunden", "10 Stunden", "12 Stunden", "14 Stunden"], correct: 1, explain: "Im 6-Monats-Durchschnitt darf die tägliche Arbeitszeit bis zu 10 Stunden betragen." },
        { q: "Wie lang ist die Pause bei einer Arbeitszeit von über 9 Stunden vorgeschrieben?", options: ["15 Minuten", "30 Minuten", "45 Minuten", "60 Minuten"], correct: 2, explain: "Bei mehr als 9 Stunden Arbeitszeit sind mindestens 45 Minuten Pause vorgeschrieben." },
        { q: "Wer erhält typischerweise Lohn statt Gehalt?", options: ["Angestellte", "Arbeiter", "Geschäftsführer", "Auszubildende immer"], correct: 1, explain: "Lohn wird in der Regel an Arbeiter gezahlt und richtet sich nach der geleisteten Arbeit." },
        { q: "Welche Steuerklasse gilt typischerweise für Alleinerziehende?", options: ["Steuerklasse 1", "Steuerklasse 2", "Steuerklasse 4", "Steuerklasse 6"], correct: 1, explain: "Steuerklasse 2 gilt für Alleinerziehende bzw. getrennt lebende Personen." },
        { q: "Muss eine ordentliche Kündigung begründet werden?", options: ["Nein, nie", "Ja, immer", "Nur bei Azubis", "Nur mündlich"], correct: 1, explain: "Bei der ordentlichen (fristgerechten) Kündigung muss der Kündigungsgrund angegeben werden." },
        { q: "Wie lang ist die gesetzliche Grundkündigungsfrist für Arbeitnehmer?", options: ["2 Wochen", "4 Wochen zum 15. oder Monatsende", "3 Monate", "6 Monate"], correct: 1, explain: "Die Grundkündigungsfrist beträgt 4 Wochen zum 15. eines Monats oder zum Monatsende." },
        { q: "Wie hoch ist der Beitragssatz der Rentenversicherung vom Bruttolohn?", options: ["2,6 %", "3,6 %", "14,6 %", "18,6 %"], correct: 3, explain: "Die Rentenversicherung beträgt 18,6 % des Bruttolohns, hälftig geteilt zwischen AG und AN." },
        { q: "Was beschreibt Job-Rotation?", options: ["Mehr Verantwortung für den Mitarbeiter", "Wechsel zwischen mehreren Arbeitsplätzen", "Zwei Mitarbeiter teilen sich eine Stelle", "Mehr gleichartige Aufgaben für den Mitarbeiter"], correct: 1, explain: "Bei Job-Rotation wird der Mitarbeiter an mehreren Arbeitsplätzen eingesetzt, um Monotonie zu vermeiden." },
        { q: "Wie nennt man den Führungsstil, bei dem Entscheidungen zentral von oben getroffen werden?", options: ["Kooperative Führung", "Laissez-faire-Führung", "Autoritäre Führung", "Delegative Führung"], correct: 2, explain: "Bei der autoritären Führung trifft die Führungskraft die Entscheidungen allein." },
        { q: "Ab welcher Beschäftigungsdauer greift der Kündigungsschutz?", options: ["Sofort ab Vertragsbeginn", "Nach 3 Monaten", "Nach mehr als 6 Monaten", "Erst nach 2 Jahren"], correct: 2, explain: "Das Kündigungsschutzgesetz greift bei einer Beschäftigung von mehr als 6 Monaten." }
      ],
      exam: [
        {
          title: "Nettopersonalbedarf berechnen",
          points: 8,
          task: "Ein Unternehmen benötigt laut Personalplanung 60 Mitarbeiter (Soll). Aktuell sind 45 Mitarbeiter beschäftigt (Ist). Es werden 6 Abgänge (z. B. Renteneintritte) und 3 bereits feststehende Zugänge erwartet. Berechnen Sie den Nettopersonalbedarf.",
          solution: "Nettopersonalbedarf = Soll-Personalbestand − Ist-Personalbestand + Abgänge − Zugänge\n= 60 − 45 + 6 − 3\n= 18\n\nEs werden also noch 18 zusätzliche Mitarbeiter benötigt."
        },
        {
          title: "Kündigungsfrist berechnen",
          points: 7,
          task: "Ein Mitarbeiter mit 6 Jahren Betriebszugehörigkeit wird vom Arbeitgeber betriebsbedingt gekündigt. Bestimmen Sie die gesetzliche Kündigungsfrist und erläutern Sie kurz, warum bei dieser Kündigung ein Grund angegeben werden muss.",
          solution: "Bei einer Betriebszugehörigkeit von mindestens 5 (aber unter 8) Jahren beträgt die gesetzliche Kündigungsfrist für den Arbeitgeber 2 Monate zum Ende eines Kalendermonats.\n\nDa es sich um eine ordentliche (fristgerechte) Kündigung handelt, muss der Arbeitgeber den Kündigungsgrund angeben – hier: betriebsbedingt, z. B. wegen dringender betrieblicher Erfordernisse wie Auftragsmangel. Außerdem greift ab 6 Monaten Betriebszugehörigkeit der Kündigungsschutz, sodass die Kündigung sozial gerechtfertigt sein muss."
        }
      ]
    },

    // ======================================================================
    // KAPITEL I
    // ======================================================================
    {
      id: "finanzierung",
      code: "I",
      title: "Liquidität & Finanzierung",
      subtitle: "Investition vs. Finanzierung, Goldene Finanzregel, Leasing, Factoring, Kreditsicherheiten, Darlehen",
      diagrams: [
        {
          title: "Finanzierungsarten im Überblick",
          note: "Eigen- und Fremdfinanzierung mit ihren wichtigsten Unterformen.",
          svg: `<svg viewBox="0 0 560 240" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="220" y="10" width="120" height="44" rx="8" class="df-ink"/>
            <text x="280" y="37" text-anchor="middle" class="dt-white" font-size="13">Finanzierung</text>
            <line x1="280" y1="54" x2="280" y2="75" class="ds-ink" stroke-width="1.5"/>
            <line x1="140" y1="75" x2="420" y2="75" class="ds-ink" stroke-width="1.5"/>
            <line x1="140" y1="75" x2="140" y2="95" class="ds-ink" stroke-width="1.5"/>
            <line x1="420" y1="75" x2="420" y2="95" class="ds-ink" stroke-width="1.5"/>
            <rect x="60" y="95" width="160" height="44" rx="8" class="df-success"/>
            <text x="140" y="122" text-anchor="middle" class="dt-white" font-size="12">Eigenfinanzierung</text>
            <rect x="340" y="95" width="160" height="44" rx="8" class="df-stamp"/>
            <text x="420" y="122" text-anchor="middle" class="dt-white" font-size="12">Fremdfinanzierung</text>
            <line x1="140" y1="139" x2="140" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="60" y1="155" x2="220" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="60" y1="155" x2="60" y2="175" class="ds-ink" stroke-width="1.5"/>
            <line x1="220" y1="155" x2="220" y2="175" class="ds-ink" stroke-width="1.5"/>
            <rect x="10" y="175" width="100" height="50" rx="6" class="df-success-soft"/>
            <text x="60" y="195" text-anchor="middle" class="dt" font-size="10">Beteiligungs-</text>
            <text x="60" y="209" text-anchor="middle" class="dt" font-size="10">finanzierung</text>
            <rect x="170" y="175" width="100" height="50" rx="6" class="df-success-soft"/>
            <text x="220" y="195" text-anchor="middle" class="dt" font-size="10">Selbst-</text>
            <text x="220" y="209" text-anchor="middle" class="dt" font-size="10">finanzierung</text>
            <line x1="420" y1="139" x2="420" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="340" y1="155" x2="500" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="340" y1="155" x2="340" y2="175" class="ds-ink" stroke-width="1.5"/>
            <line x1="500" y1="155" x2="500" y2="175" class="ds-ink" stroke-width="1.5"/>
            <rect x="290" y="175" width="100" height="50" rx="6" class="df-stamp-soft"/>
            <text x="340" y="195" text-anchor="middle" class="dt" font-size="10">Kredit-</text>
            <text x="340" y="209" text-anchor="middle" class="dt" font-size="10">finanzierung</text>
            <rect x="450" y="175" width="100" height="50" rx="6" class="df-stamp-soft"/>
            <text x="500" y="195" text-anchor="middle" class="dt" font-size="9">Rückstellungs-</text>
            <text x="500" y="209" text-anchor="middle" class="dt" font-size="9">finanzierung</text>
          </svg>`
        },
        {
          title: "Die Goldene Finanzregel",
          note: "Fristigkeit von Vermögen und Kapital müssen übereinstimmen.",
          svg: `<svg viewBox="0 0 480 200" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="180" height="50" rx="8" class="df-ink"/>
            <text x="100" y="42" text-anchor="middle" class="dt-white" font-size="11">Langfristiges</text>
            <text x="100" y="58" text-anchor="middle" class="dt-white" font-size="11">Vermögen</text>
            <text x="228" y="52" text-anchor="middle" class="dt" font-size="18">=</text>
            <rect x="266" y="20" width="180" height="50" rx="8" class="df-ink-soft"/>
            <text x="356" y="42" text-anchor="middle" class="dt-white" font-size="11">Langfristiges</text>
            <text x="356" y="58" text-anchor="middle" class="dt-white" font-size="11">Kapital</text>
            <rect x="10" y="120" width="180" height="50" rx="8" class="df-ochre"/>
            <text x="100" y="142" text-anchor="middle" class="dt-white" font-size="11">Kurzfristiges</text>
            <text x="100" y="158" text-anchor="middle" class="dt-white" font-size="11">Vermögen</text>
            <text x="228" y="152" text-anchor="middle" class="dt" font-size="18">=</text>
            <rect x="266" y="120" width="180" height="50" rx="8" class="df-success"/>
            <text x="356" y="142" text-anchor="middle" class="dt-white" font-size="11">Kurzfristiges</text>
            <text x="356" y="158" text-anchor="middle" class="dt-white" font-size="11">Kapital</text>
          </svg>`
        }
      ],
      terms: [
        { word: "LEASING", clue: "Rechtlich ein Mietvertrag über einen Gegenstand" },
        { word: "FACTORING", clue: "Verkauf von Forderungen an ein spezialisiertes Unternehmen" },
        { word: "BUERGSCHAFT", clue: "Personalsicherheit, bei der ein Dritter für die Schuld haftet" },
        { word: "GRUNDPFANDRECHT", clue: "Realsicherheit, eingetragen im Grundbuch" },
        { word: "KONTOKORRENTKREDIT", clue: "Klassischer kurzfristiger Überziehungskredit" },
        { word: "ANNUITAETENDARLEHEN", clue: "Gleichbleibende Rate, Zinsanteil sinkt, Tilgung steigt" },
        { word: "EIGENTUMSVORBEHALT", clue: "Verkäufer bleibt Eigentümer bis zur vollständigen Bezahlung" },
        { word: "ZESSION", clue: "Andere Bezeichnung für Forderungsabtretung" }
      ],
      hangmanTerms: [
        { word: "INVESTITION", clue: "Verwendung finanzieller Mittel, steht auf der Aktivseite" },
        { word: "FINANZIERUNG", clue: "Beschaffung finanzieller Mittel, steht auf der Passivseite" },
        { word: "FINANZREGEL", clue: "Fordert Fristenkongruenz von Mittelverwendung und -beschaffung" },
        { word: "SELBSTFINANZIERUNG", clue: "Kapital aus gebildeten Gewinnrücklagen" },
        { word: "LOMBARDKREDIT", clue: "Kurzfristiger Kredit gegen Verpfändung von Wertpapieren" },
        { word: "KREDITSICHERHEIT", clue: "Sichert den Gläubiger vor Verlusten aus dem Kredit ab" },
        { word: "DARLEHEN", clue: "Wird oft als Unterbegriff des Kredits verwendet" },
        { word: "AUSSENFINANZIERUNG", clue: "Kapital, das von außerhalb des Unternehmens kommt" }
      ],
      summary: [
        {
          q: "Investition vs. Finanzierung – wie hängen sie zusammen?",
          a: "Sie stehen sich spiegelbildlich gegenüber: Finanzierung ist die Beschaffung finanzieller Mittel (Passivseite der Bilanz), Investition ist deren Verwendung (Aktivseite). Finanzierung ist Voraussetzung für Investitionen."
        },
        {
          q: "Was besagt die Goldene Finanzregel?",
          a: "Die Verwendung finanzieller Mittel soll mit ihrer Fristigkeit übereinstimmen (Fristenkongruenz). Die goldene Bilanzregel konkretisiert das: langfristig gebundenes Vermögen sollte langfristig finanziert sein, kurzfristiges Vermögen kurzfristig – sonst drohen Finanzierungsprobleme."
        },
        {
          q: "Eigen- vs. Fremdfinanzierung, Innen- vs. Außenfinanzierung?",
          a: "Eigenfinanzierung: Kapital von den Eigentümern (Beteiligung oder Selbstfinanzierung aus Gewinnrücklagen). Fremdfinanzierung: Kapital von Dritten (Kredite, Rückstellungen). Außenfinanzierung kommt von außerhalb des Unternehmens (Beteiligung, Kredit), Innenfinanzierung entsteht im Unternehmen selbst (Selbstfinanzierung, Rückstellungen)."
        },
        {
          q: "Was ist Leasing – Vorteile und Nachteile?",
          a: "Leasing ist rechtlich ein Mietvertrag: Der Leasinggeber vermietet ein Gut gegen monatliche Raten. Vorteil: keine sofortige Liquiditätsbelastung, feste Raten, Steuerersparnis. Nachteil: geringe Flexibilität während der Laufzeit, insgesamt meist höhere Gesamtkosten."
        },
        {
          q: "Wie funktioniert Factoring?",
          a: "Ein Unternehmen verkauft seine Forderungen an ein Factoring-Unternehmen, das dafür sofort einen Großteil der Summe auszahlt und die Beitreibung übernimmt. Vorteil: schnelle Liquidität, keine Beitreibungsgebühren. Nachteil: meist nur Gesamtforderungsbestände abtretbar, kann als Zeichen wirtschaftlicher Schwäche gelten."
        },
        {
          q: "Personalsicherheiten vs. Realsicherheiten bei Krediten?",
          a: "Personalsicherheiten: Absicherung durch andere Personen (Bürgschaft, Garantie, Schuldübernahme). Realsicherheiten: Absicherung durch Sachen (Eigentumsvorbehalt, Grundpfandrecht, Lombardkredit, Sicherungsübereignung, Zession)."
        }
      ],
      flashcards: [
        { front: "Auf welcher Bilanzseite steht eine Investition?", back: "Auf der Aktivseite (Mittelverwendung)." },
        { front: "Auf welcher Bilanzseite steht eine Finanzierung?", back: "Auf der Passivseite (Mittelherkunft)." },
        { front: "Was fordert die Goldene Finanzregel?", back: "Übereinstimmung der Fristigkeit von Kapitalverwendung und Kapitalbeschaffung (Fristenkongruenz)." },
        { front: "Was ist Beteiligungsfinanzierung?", back: "Eigenkapital wird dem Unternehmen durch Eigentümer als Einlage zur Verfügung gestellt." },
        { front: "Was ist Selbstfinanzierung?", back: "Kapital wird durch Bildung von Gewinnrücklagen zur Verfügung gestellt – eine Form der Innenfinanzierung." },
        { front: "Ist Leasing rechtlich ein Kauf- oder ein Mietvertrag?", back: "Ein Mietvertrag zwischen Leasingnehmer und Leasinggeber." },
        { front: "Nenne einen Vorteil von Leasing.", back: "Keine sofortige Liquiditätsbelastung, da der Gegenstand nicht im Voraus bezahlt werden muss." },
        { front: "Direktes vs. indirektes Leasing?", back: "Direktes Leasing: über den Hersteller. Indirektes Leasing: über eine eigenständige Leasinggesellschaft." },
        { front: "Was passiert beim Factoring mit den Forderungen?", back: "Sie werden an ein Factoring-Unternehmen verkauft, das zur Beitreibung und zum neuen Gläubiger wird." },
        { front: "Nenne einen Nachteil von Factoring.", back: "Meist können nur Gesamtforderungsbestände abgetreten werden – keine Auswahl einzelner Forderungen." },
        { front: "Was ist eine Bürgschaft?", back: "Ein Dritter haftet vertraglich für die Verbindlichkeit des eigentlichen Kreditnehmers – eine Personalsicherheit." },
        { front: "Was ist ein Grundpfandrecht?", back: "Ein Pfandrecht an Grundstücken zur Sicherung von Forderungen, eingetragen im Grundbuch – eine Realsicherheit." },
        { front: "Was ist ein Lombardkredit?", back: "Ein kurzfristiger Kredit gegen Verpfändung von Wertpapieren, Bankguthaben oder Sachwerten (Faustpfand)." },
        { front: "Was passiert bei einer Sicherungsübereignung?", back: "Vermögensgegenstände gehen zur Kreditsicherung ins Eigentum des Kreditgebers über, der Kreditnehmer bleibt aber Besitzer." },
        { front: "Was ist eine Zession?", back: "Forderungsabtretung: Der Kreditnehmer überträgt Forderungen an Dritte vertraglich an den Kreditgeber." },
        { front: "Was ist ein Kontokorrentkredit?", back: "Der klassische kurzfristige „Überziehungskredit“ (Dispo)." },
        { front: "Wie funktioniert ein Annuitätendarlehen?", back: "Es wird in gleichbleibenden Raten (Annuitäten) getilgt – der Zinsanteil sinkt, der Tilgungsanteil steigt kontinuierlich." },
        { front: "Was besagt der Eigentumsvorbehalt?", back: "Der Lieferer behält sich das Eigentum an der Ware bis zur vollständigen Bezahlung vor; der Käufer wird nur Besitzer." }
      ],
      quiz: [
        { q: "Auf welcher Bilanzseite steht eine Investition?", options: ["Passivseite", "Aktivseite", "Beide Seiten gleichzeitig", "Im Anhang"], correct: 1, explain: "Investitionen zeigen die Mittelverwendung und stehen auf der Aktivseite." },
        { q: "Was fordert die Goldene Finanzregel?", options: ["Maximale Fremdfinanzierung", "Übereinstimmung der Fristigkeit von Mittelverwendung und -beschaffung", "Nur Eigenkapital einzusetzen", "Kredite immer kurzfristig aufzunehmen"], correct: 1, explain: "Langfristiges Vermögen sollte langfristig finanziert sein – und umgekehrt (Fristenkongruenz)." },
        { q: "Ist Leasing rechtlich gesehen ein …", options: ["Kaufvertrag", "Mietvertrag", "Darlehensvertrag", "Bürgschaftsvertrag"], correct: 1, explain: "Leasing ist rechtlich ein Mietvertrag zwischen Leasinggeber und -nehmer." },
        { q: "Was passiert beim Factoring?", options: ["Der Kredit wird verpfändet", "Forderungen werden an ein Factoring-Unternehmen verkauft", "Eine Maschine wird geleast", "Ein Grundstück wird belastet"], correct: 1, explain: "Beim Factoring verkauft ein Unternehmen seine offenen Forderungen." },
        { q: "Eine Bürgschaft zählt zu den …", options: ["Realsicherheiten", "Personalsicherheiten", "Innenfinanzierungen", "Leasingarten"], correct: 1, explain: "Bürgschaften sichern über eine dritte Person ab – Personalsicherheit." },
        { q: "Ein Grundpfandrecht zählt zu den …", options: ["Personalsicherheiten", "Realsicherheiten", "Beteiligungsfinanzierungen", "Kontokorrentkrediten"], correct: 1, explain: "Grundpfandrechte sichern über eine Sache (Grundstück) ab – Realsicherheit." },
        { q: "Wie nennt man den klassischen „Überziehungskredit“?", options: ["Avalkredit", "Kontokorrentkredit", "Lombardkredit", "Lieferantenkredit"], correct: 1, explain: "Der Kontokorrentkredit (Dispo) ist der klassische kurzfristige Überziehungskredit." },
        { q: "Bei welcher Darlehensart bleibt die Rate über die Laufzeit gleich, während sich Zins- und Tilgungsanteil verschieben?", options: ["Fälligkeitsdarlehen", "Abzahlungsdarlehen", "Annuitätendarlehen", "Kündigungsdarlehen"], correct: 2, explain: "Beim Annuitätendarlehen bleibt die Gesamtrate gleich, der Tilgungsanteil steigt, der Zinsanteil sinkt." },
        { q: "Ist Selbstfinanzierung eine Innen- oder Außenfinanzierung?", options: ["Außenfinanzierung", "Innenfinanzierung", "Weder noch", "Beides gleichzeitig"], correct: 1, explain: "Selbstfinanzierung entsteht im Unternehmen selbst (Gewinnrücklagen) – Innenfinanzierung." },
        { q: "Was behält der Verkäufer beim Eigentumsvorbehalt bis zur vollständigen Bezahlung?", options: ["Den Besitz der Ware", "Das Eigentum an der Ware", "Nichts, der Käufer übernimmt sofort alles", "Das Nutzungsrecht"], correct: 1, explain: "Beim Eigentumsvorbehalt bleibt der Verkäufer Eigentümer, der Käufer wird nur Besitzer." }
      ],
      exam: [
        {
          title: "Leasing oder Kredit für eine neue Maschine?",
          points: 9,
          task: "Ein Unternehmen möchte eine neue Maschine anschaffen, verfügt aber nur über wenig liquide Mittel. Vergleichen Sie Leasing und Kreditfinanzierung als Alternativen und geben Sie eine begründete Empfehlung.",
          solution: "Leasing: Die Maschine muss nicht sofort bezahlt werden, es fallen feste monatliche Raten an – das schont die Liquidität. Nachteile: geringere Flexibilität während der Laufzeit, insgesamt meist höhere Gesamtkosten (Verwaltungskosten, Gewinn der Leasinggesellschaft), am Ende gehört die Maschine oft nicht dem Unternehmen.\n\nKreditfinanzierung: Die Maschine wird sofort Eigentum des Unternehmens, es fallen Zinsen und Tilgung an; erfordert aber i. d. R. Sicherheiten und eine höhere Kreditwürdigkeit.\n\nEmpfehlung: Da das Unternehmen aktuell wenig liquide Mittel hat, ist Leasing die sinnvollere Wahl, um die Liquidität zu schonen und dennoch investieren zu können – vorausgesetzt, die Maschine muss nicht dauerhaft Eigentum des Unternehmens werden."
        },
        {
          title: "Factoring bei Liquiditätsengpass",
          points: 8,
          task: "Erklären Sie anhand eines Beispiels, wie Factoring abläuft, und nennen Sie je einen Vor- und Nachteil für ein Unternehmen mit akutem Liquiditätsengpass.",
          solution: "Beispiel: Ein Unternehmen hat offene Kundenforderungen in Höhe von 50.000 € mit 30 Tagen Zahlungsziel. Es verkauft diese Forderungen an ein Factoring-Unternehmen, das umgehend einen Großteil der Summe auszahlt (abzüglich Gebühr) und die Forderungen selbst beim Kunden eintreibt.\n\nVorteil: Das Unternehmen erhält sofort Liquidität, statt 30 Tage auf die Zahlung der Kunden warten zu müssen – wichtig bei einem akuten Engpass.\n\nNachteil: Meist müssen ganze Forderungsbestände abgetreten werden, und die Nutzung von Factoring kann von Geschäftspartnern als Zeichen wirtschaftlicher Schwäche gedeutet werden."
        }
      ]
    },

    // ======================================================================
    // KAPITEL J
    // ======================================================================
    {
      id: "geschaeftsprozesse",
      code: "J",
      title: "Geschäftsprozesse & Organisation",
      subtitle: "Aufbau- & Ablauforganisation, Stellenarten, Leitungssysteme, Flowchart & EPK",
      terms: [
        { word: "AUFBAUORGANISATION", clue: "Legt fest, wer welche Aufgaben übernimmt" },
        { word: "ABLAUFORGANISATION", clue: "Regelt, wie und wann Aufgaben erledigt werden" },
        { word: "STABSTELLE", clue: "Beratende Hilfsstelle ohne Weisungsbefugnis" },
        { word: "INSTANZ", clue: "Stelle mit Anordnungs- und Entscheidungsbefugnis" },
        { word: "EINLINIENSYSTEM", clue: "Jede Stelle hat nur einen Vorgesetzten" },
        { word: "MEHRLINIENSYSTEM", clue: "Eine Stelle kann mehrere Vorgesetzte haben" },
        { word: "MATRIXORGANISATION", clue: "Leitungsfunktion auf zwei gleichberechtigte Ebenen verteilt" },
        { word: "FLOWCHART", clue: "Grafische Darstellung eines Ablaufs mit Oval, Rechteck, Karo" }
      ],
      hangmanTerms: [
        { word: "SPARTENORGANISATION", clue: "Gliederung nach Produkten oder Produktgruppen" },
        { word: "GESCHAEFTSPROZESS", clue: "Zusammenfassung von Aufgaben zur Erreichung eines Ziels" },
        { word: "KERNPROZESS", clue: "Hat direkten Bezug zum Kunden und zur Wertschöpfung" },
        { word: "EREIGNIS", clue: "In der EPK durch ein Sechseck dargestellt" },
        { word: "FUNKTION", clue: "In der EPK durch ein abgerundetes Rechteck dargestellt" },
        { word: "PROZESSKETTE", clue: "Andere Bezeichnung für die ereignisgesteuerte EPK" },
        { word: "ORGANISATIONSEINHEIT", clue: "In der EPK durch ein Oval dargestellt" },
        { word: "PARALLELISIERUNG", clue: "Maßnahme zur Prozessoptimierung: Vorgänge gleichzeitig ablaufen lassen" }
      ],
      diagrams: [
        {
          title: "Einliniensystem vs. Mehrliniensystem",
          note: "Einliniensystem: ein Vorgesetzter pro Stelle. Mehrliniensystem: mehrere Vorgesetzte möglich (rot = doppelte Weisungslinie).",
          svg: `<svg viewBox="0 0 560 260" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="280" y1="10" x2="280" y2="250" class="ds-border" stroke-width="1.5" stroke-dasharray="3 4"/>
            <line x1="130" y1="48" x2="60" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="130" y1="48" x2="200" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="60" y1="122" x2="60" y2="164" class="ds-ink" stroke-width="1.5"/>
            <line x1="200" y1="122" x2="200" y2="164" class="ds-ink" stroke-width="1.5"/>
            <rect x="90" y="16" width="80" height="32" rx="6" class="df-ink"/>
            <text x="130" y="37" text-anchor="middle" class="dt-white" font-size="12">Leitung</text>
            <rect x="20" y="90" width="80" height="32" rx="6" class="df-ink-soft"/>
            <text x="60" y="111" text-anchor="middle" class="dt-white" font-size="11">Abt. A</text>
            <rect x="160" y="90" width="80" height="32" rx="6" class="df-ink-soft"/>
            <text x="200" y="111" text-anchor="middle" class="dt-white" font-size="11">Abt. B</text>
            <rect x="20" y="164" width="80" height="32" rx="6" class="df-ochre"/>
            <text x="60" y="185" text-anchor="middle" class="dt-white" font-size="11">Team 1</text>
            <rect x="160" y="164" width="80" height="32" rx="6" class="df-ochre"/>
            <text x="200" y="185" text-anchor="middle" class="dt-white" font-size="11">Team 2</text>
            <text x="130" y="226" text-anchor="middle" class="dt-mono" font-size="11">Einliniensystem</text>
            <line x1="430" y1="48" x2="360" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="430" y1="48" x2="500" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="360" y1="122" x2="380" y2="164" class="ds-stamp" stroke-width="1.5"/>
            <line x1="500" y1="122" x2="420" y2="164" class="ds-stamp" stroke-width="1.5"/>
            <rect x="390" y="16" width="80" height="32" rx="6" class="df-ink"/>
            <text x="430" y="37" text-anchor="middle" class="dt-white" font-size="12">Leitung</text>
            <rect x="320" y="90" width="80" height="32" rx="6" class="df-ink-soft"/>
            <text x="360" y="111" text-anchor="middle" class="dt-white" font-size="10">Fachbereich</text>
            <rect x="460" y="90" width="80" height="32" rx="6" class="df-ink-soft"/>
            <text x="500" y="111" text-anchor="middle" class="dt-white" font-size="11">Projekt</text>
            <rect x="360" y="164" width="100" height="32" rx="6" class="df-stamp"/>
            <text x="410" y="185" text-anchor="middle" class="dt-white" font-size="10">Mitarbeiter</text>
            <text x="430" y="226" text-anchor="middle" class="dt-mono" font-size="11">Mehrliniensystem</text>
          </svg>`
        }
      ],
      summary: [
        {
          q: "Aufbauorganisation vs. Ablauforganisation?",
          a: "Die Aufbauorganisation legt die Rahmenbedingungen fest: Wer übernimmt was, wie sind Stellen und Hierarchie aufgebaut? Die Ablauforganisation regelt die Arbeits- und Informationsprozesse innerhalb dieser Struktur: Wie und wann wird eine Aufgabe erledigt?"
        },
        {
          q: "Was ist das Analyse-Synthese-Konzept?",
          a: "Die Gesamtaufgabe wird in Elementaraufgaben zerlegt (nach Verrichtung, Objekt oder Rang). Die Aufgabensynthese fasst sie zu Stellen/Abteilungen zusammen (→ Aufbauorganisation), die Arbeitssynthese zu Arbeitsprozessen (→ Ablauforganisation)."
        },
        {
          q: "Welche Stellenarten gibt es?",
          a: "Ausführende Stellen (ohne Leitungsbefugnis, z. B. Sachbearbeiter), Instanzen (mit Anordnungsbefugnis, z. B. Abteilungsleiter) und Stabstellen (beratende Hilfsstellen ohne Weisungsrecht, z. B. Rechtsabteilung)."
        },
        {
          q: "Welche Leitungssysteme gibt es?",
          a: "Einliniensystem (jede Stelle hat nur einen Vorgesetzten), Mehrliniensystem (mehrere Vorgesetzte möglich), Stabliniensystem (Einliniensystem plus beratende Stäbe), Matrixorganisation (zwei gleichberechtigte Hierarchieebenen) und Spartenorganisation (Gliederung nach Produkten/Produktgruppen)."
        },
        {
          q: "Kern- vs. Unterstützungsprozesse – und wie werden sie optimiert?",
          a: "Kerngeschäftsprozesse erbringen die Hauptleistung mit direktem Kundenbezug (z. B. Vertrieb). Unterstützungsprozesse ergänzen sie indirekt (z. B. IT, Buchhaltung). Optimierung erfolgt z. B. durch Weglassen, Zusammenfassen, Aufteilen, Umsortieren oder Parallelisieren von Vorgängen."
        },
        {
          q: "Flowchart vs. Ereignisgesteuerte Prozesskette (EPK)?",
          a: "Das Flowchart zeigt den logischen Ablauf einfach mit Oval (Start/Stopp), Rechteck (Bearbeitung) und Karo (Entscheidung). Die EPK ist umfassender: Sechseck = Ereignis, abgerundetes Rechteck = Funktion, Oval = Organisationseinheit, Rechteck = Informationsobjekt. Eine EPK startet und endet immer mit einem Ereignis."
        }
      ],
      flashcards: [
        { front: "Was regelt die Aufbauorganisation?", back: "Wer übernimmt was – die Gliederung von Aufgaben, Stellen und der Unternehmenshierarchie." },
        { front: "Was regelt die Ablauforganisation?", back: "Wie und wann eine Aufgabe im Detail erfüllt wird – die Arbeits- und Informationsprozesse." },
        { front: "Woraus entsteht die Aufbauorganisation im Analyse-Synthese-Konzept?", back: "Aus der Aufgabensynthese – dem Zusammenfassen von Elementaraufgaben zu Stellen und Abteilungen." },
        { front: "Nenne die 3 Zerlegungskriterien im Analyse-Synthese-Konzept.", back: "Nach Verrichtung (was wird getan), nach Objekt (woran), nach Rang (Entscheidung oder Ausführung)." },
        { front: "Was ist eine ausführende Stelle?", back: "Eine Stelle ohne Leitungsbefugnisse, z. B. Sachbearbeiter oder Schreibkraft." },
        { front: "Was ist eine Instanz?", back: "Eine Stelle mit Anordnungs- und Entscheidungsbefugnis gegenüber rangniedrigeren Stellen, z. B. Abteilungsleiter." },
        { front: "Was ist eine Stabstelle?", back: "Eine beratende Hilfsstelle einer Instanz ohne Weisungsbefugnis, z. B. Rechtsabteilung." },
        { front: "Was kennzeichnet das Einliniensystem?", back: "Jede Stelle erhält Weisungen nur von einer einzigen übergeordneten Stelle." },
        { front: "Was kennzeichnet das Mehrliniensystem?", back: "Mindestens eine Stelle erhält Weisungen von mehreren übergeordneten Stellen (mehrere Vorgesetzte)." },
        { front: "Was kennzeichnet die Matrixorganisation?", back: "Die Leitungsfunktion wird auf zwei gleichberechtigte, unabhängige Dimensionen verteilt." },
        { front: "Was kennzeichnet die Spartenorganisation?", back: "Eine Spezialisierung nach Produkten oder Produktgruppen (divisionale Organisation)." },
        { front: "Nenne ein Beispiel für einen Kerngeschäftsprozess.", back: "Einkauf, Vertrieb oder Logistik – direkter Bezug zum Kunden und zur Wertschöpfung." },
        { front: "Nenne ein Beispiel für einen Unterstützungsprozess.", back: "Personaleinstellung, IT oder Buchhaltung – indirekter Beitrag zur Wertschöpfung." },
        { front: "Nenne 3 Maßnahmen zur Optimierung von Geschäftsprozessen.", back: "Z. B. Weglassen von Vorgängen, Zusammenfassen von Vorgängen, Parallelisierung von Vorgängen." },
        { front: "Wofür steht ein Oval im Flowchart?", back: "Für Start bzw. Stopp – Anfangs- und Endpunkt des Arbeitsablaufs." },
        { front: "Wofür steht ein Karo im Flowchart?", back: "Für einen Entscheidungsschritt mit Abzweigungen." },
        { front: "Wofür steht ein Sechseck in der EPK?", back: "Für ein Ereignis – was sich ereignet hat." },
        { front: "Womit startet und endet eine EPK immer?", back: "Mit Ereignissen – Ereignisse und Funktionen wechseln sich dabei immer ab." }
      ],
      quiz: [
        { q: "Was regelt die Aufbauorganisation?", options: ["Wie eine Aufgabe erledigt wird", "Wer welche Aufgaben übernimmt und wie die Hierarchie aufgebaut ist", "Nur die Buchhaltung", "Die Entlohnung der Mitarbeiter"], correct: 1, explain: "Die Aufbauorganisation legt Stellen, Aufgabenverteilung und Hierarchie fest." },
        { q: "Stellen ohne Leitungsbefugnis nennt man …", options: ["Instanzen", "Stabstellen", "Ausführende Stellen", "Führungsstellen"], correct: 2, explain: "Ausführende Stellen wie Sachbearbeiter haben keine Leitungsbefugnisse." },
        { q: "Beratende Hilfsstellen ohne Weisungsbefugnis heißen …", options: ["Instanzen", "Stabstellen", "Linienstellen", "Zentralstellen"], correct: 1, explain: "Stabstellen (z. B. Rechtsabteilung) beraten, dürfen aber keine Weisungen erteilen." },
        { q: "Beim Einliniensystem erhält eine Stelle Weisungen von …", options: ["mehreren übergeordneten Stellen", "nur einer übergeordneten Stelle", "gar keiner Stelle", "der Belegschaft direkt"], correct: 1, explain: "Charakteristisch für das Einliniensystem ist genau ein Vorgesetzter pro Stelle." },
        { q: "Was ist typisch für die Matrixorganisation?", options: ["Nur eine Hierarchieebene", "Mitarbeiter haben zwei Vorgesetzte", "Keine Weisungsbefugnisse", "Nur für kleine Betriebe geeignet"], correct: 1, explain: "In der Matrixorganisation unterstehen Mitarbeiter zwei gleichberechtigten Dimensionen (z. B. Funktion und Produkt)." },
        { q: "Kerngeschäftsprozesse zeichnen sich aus durch …", options: ["Indirekten Kundenbezug", "Direkten Bezug zur Wertschöpfung und zum Kunden", "Ausschließlich interne Verwaltung", "Keine Bedeutung für den Erfolg"], correct: 1, explain: "Kerngeschäftsprozesse wie Vertrieb haben direkten Bezug zur Wertschöpfung." },
        { q: "Welche Maßnahme gehört NICHT zur Prozessoptimierung?", options: ["Weglassen von Vorgängen", "Parallelisierung von Vorgängen", "Zufällige Reihenfolge beibehalten", "Zusammenfassen von Vorgängen"], correct: 2, explain: "Prozessoptimierung zielt gerade auf eine durchdachte, nicht zufällige Reihenfolge ab." },
        { q: "Im Flowchart steht ein Oval für …", options: ["Bearbeitung", "Entscheidung", "Start/Stopp", "Dokument"], correct: 2, explain: "Das Oval markiert Anfang und Ende eines Arbeitsablaufs." },
        { q: "Im Flowchart steht ein Karo für …", options: ["Start/Stopp", "Bearbeitung", "Entscheidungsschritt mit Abzweigen", "Organisationseinheit"], correct: 2, explain: "Das Karo kennzeichnet Verzweigungen bei Entscheidungen." },
        { q: "In der EPK steht ein Sechseck für …", options: ["Funktion", "Ereignis", "Organisationseinheit", "Informationsobjekt"], correct: 1, explain: "Das Sechseck steht für ein Ereignis – was passiert ist." },
        { q: "Womit beginnt und endet eine EPK immer?", options: ["Mit Funktionen", "Mit Organisationseinheiten", "Mit Ereignissen", "Mit Informationsobjekten"], correct: 2, explain: "Eine EPK beginnt und endet stets mit Ereignissen, die sich mit Funktionen abwechseln." }
      ],
      exam: [
        {
          title: "Aufbau- vs. Ablauforganisation im Büroalltag",
          points: 8,
          task: "Erklären Sie den Unterschied zwischen Aufbau- und Ablauforganisation anhand eines Beispiels aus einem Bürobetrieb (z. B. Bearbeitung von Kundenanfragen).",
          solution: "Die Aufbauorganisation legt fest, WER die Kundenanfragen bearbeitet – z. B. gibt es eine eigene Abteilung „Kundenservice“ mit einer Abteilungsleitung (Instanz) und mehreren Sachbearbeitern (ausführende Stellen).\n\nDie Ablauforganisation legt fest, WIE der Prozess im Detail abläuft: Die Anfrage geht per E-Mail ein, wird von einem Sachbearbeiter geprüft, innerhalb von 24 Stunden beantwortet und bei Bedarf an eine Fachabteilung weitergeleitet. Aufbauorganisation schafft also die Struktur, Ablauforganisation den konkreten Prozess innerhalb dieser Struktur."
        },
        {
          title: "Prozessoptimierung Rechnungsprüfung",
          points: 7,
          task: "Ein Unternehmen möchte den Prozess der Rechnungsprüfung optimieren. Schlagen Sie anhand von 3 der genannten Optimierungsmaßnahmen konkrete Verbesserungen vor.",
          solution: "1. Weglassen von Vorgängen: Eine doppelte manuelle Prüfung durch zwei verschiedene Mitarbeiter wird auf eine Prüfung reduziert, wenn die zweite keinen echten Mehrwert bringt.\n2. Parallelisierung von Vorgängen: Die rechnerische Prüfung und die inhaltliche Freigabe durch die Fachabteilung laufen gleichzeitig statt nacheinander.\n3. Zusammenfassen von Vorgängen: Rechnungsprüfung und Zahlungsfreigabe werden in einem Arbeitsschritt gebündelt, statt sie an zwei verschiedenen Tagen von unterschiedlichen Personen durchführen zu lassen."
        }
      ]
    },

    // ======================================================================
    // KAPITEL K
    // ======================================================================
    {
      id: "veranstaltungen",
      code: "K",
      title: "Veranstaltungen & Geschäftsreisen",
      subtitle: "Protokolle, Checklisten, Sitzung vs. Besprechung, Reiseplanung, Reisekostenabrechnung",
      diagrams: [
        {
          title: "Ablauf einer Geschäftsreise",
          note: "5 Schritte von der Genehmigung bis zur Abrechnung.",
          svg: `<svg viewBox="0 0 560 140" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="40" width="100" height="50" rx="6" class="df-ink"/>
            <text x="55" y="62" text-anchor="middle" class="dt-white" font-size="8.5">1. Genehmi-</text>
            <text x="55" y="75" text-anchor="middle" class="dt-white" font-size="8.5">gung</text>
            <rect x="120" y="40" width="100" height="50" rx="6" class="df-ink"/>
            <text x="170" y="62" text-anchor="middle" class="dt-white" font-size="8.5">2. Reise-</text>
            <text x="170" y="75" text-anchor="middle" class="dt-white" font-size="8.5">profil</text>
            <rect x="235" y="40" width="100" height="50" rx="6" class="df-ink"/>
            <text x="285" y="62" text-anchor="middle" class="dt-white" font-size="8.5">3. Vergleich</text>
            <text x="285" y="75" text-anchor="middle" class="dt-white" font-size="8.5">&amp; Auswahl</text>
            <rect x="350" y="40" width="100" height="50" rx="6" class="df-ink"/>
            <text x="400" y="62" text-anchor="middle" class="dt-white" font-size="8.5">4. Reise-</text>
            <text x="400" y="75" text-anchor="middle" class="dt-white" font-size="8.5">dokumente</text>
            <rect x="465" y="40" width="90" height="50" rx="6" class="df-success"/>
            <text x="510" y="62" text-anchor="middle" class="dt-white" font-size="8">5. Reisekosten-</text>
            <text x="510" y="75" text-anchor="middle" class="dt-white" font-size="8">abrechnung</text>
            <line x1="105" y1="65" x2="120" y2="65" class="ds-ink" stroke-width="1.5"/>
            <line x1="220" y1="65" x2="235" y2="65" class="ds-ink" stroke-width="1.5"/>
            <line x1="335" y1="65" x2="350" y2="65" class="ds-ink" stroke-width="1.5"/>
            <line x1="450" y1="65" x2="465" y2="65" class="ds-ink" stroke-width="1.5"/>
          </svg>`
        },
        {
          title: "Bestandteile der Reisekostenabrechnung",
          note: "Vier Kostenblöcke ergeben zusammen die Reisekostenabrechnung.",
          svg: `<svg viewBox="0 0 480 260" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="240" y="20" text-anchor="middle" class="dt-mono" font-size="11">REISEKOSTENABRECHNUNG</text>
            <rect x="20" y="34" width="200" height="80" rx="8" class="df-ink"/>
            <text x="120" y="70" text-anchor="middle" class="dt-white" font-size="13">Fahrtkosten</text>
            <text x="120" y="88" text-anchor="middle" class="dt-white-mono" font-size="9">z. B. 0,30 €/km</text>
            <rect x="260" y="34" width="200" height="80" rx="8" class="df-ochre"/>
            <text x="360" y="62" text-anchor="middle" class="dt-white" font-size="11">Verpflegungs-</text>
            <text x="360" y="78" text-anchor="middle" class="dt-white" font-size="11">mehraufwand</text>
            <text x="360" y="94" text-anchor="middle" class="dt-white-mono" font-size="9">12 € / 24 € Pauschale</text>
            <rect x="20" y="130" width="200" height="80" rx="8" class="df-success"/>
            <text x="120" y="166" text-anchor="middle" class="dt-white" font-size="13">Übernachtungs-</text>
            <text x="120" y="184" text-anchor="middle" class="dt-white" font-size="13">kosten</text>
            <rect x="260" y="130" width="200" height="80" rx="8" class="df-stamp"/>
            <text x="360" y="166" text-anchor="middle" class="dt-white" font-size="13">Reisenebenkosten</text>
            <text x="360" y="184" text-anchor="middle" class="dt-white-mono" font-size="9">Taxi, Parkgebühren, Porto</text>
          </svg>`
        }
      ],
      terms: [
        { word: "VOLLPROTOKOLL", clue: "Hält den genauen Wortlaut einer Sitzung fest" },
        { word: "ERGEBNISPROTOKOLL", clue: "Hält nur Kernaussagen und Entscheidungen fest" },
        { word: "REISEKOSTENABRECHNUNG", clue: "Letzter Schritt der Geschäftsreiseplanung" },
        { word: "GESCHAEFTSREISE", clue: "Wird in 5 Schritten geplant, beginnend mit dem Reiseantrag" },
        { word: "CHECKLISTE", clue: "Hilfsmittel zur Vorbereitung einer Veranstaltung" },
        { word: "SITZUNG", clue: "Formal geplantes Treffen mit Einladung und Protokoll" },
        { word: "BESPRECHUNG", clue: "Informeller Austausch einer kleinen Gruppe" },
        { word: "VERPFLEGUNGSMEHRAUFWAND", clue: "Pauschale für Abwesenheit auf Geschäftsreisen" }
      ],
      hangmanTerms: [
        { word: "VERLAUFSPROTOKOLL", clue: "Gibt den Ablauf einer Sitzung zusammengefasst wieder" },
        { word: "KILOMETERPAUSCHALE", clue: "Beträgt 0,30 Euro pro gefahrenem Kilometer" },
        { word: "REISENEBENKOSTEN", clue: "Zum Beispiel Taxi, Parkgebühren oder Porto" },
        { word: "VERANSTALTUNGSHAFTPFLICHT", clue: "Versicherung gegen Schadenersatzansprüche bei Events" },
        { word: "TAGUNGSRAUM", clue: "Muss bei der Planung einer Veranstaltung reserviert werden" },
        { word: "REISEPROFIL", clue: "Umfasst Reisemittel, Unterbringung und Formalitäten" },
        { word: "GENEHMIGUNG", clue: "Erster Schritt bei der Planung einer Geschäftsreise" },
        { word: "UEBERNACHTUNGSKOSTEN", clue: "Bestandteil der Reisekostenabrechnung" }
      ],
      summary: [
        {
          q: "Die drei Protokollarten im Überblick?",
          a: "Vollprotokoll (Wortprotokoll): hält den genauen Wortlaut fest, sehr aufwändig. Verlaufsprotokoll: gibt den Ablauf zusammengefasst, aber nachvollziehbar wieder. Ergebnisprotokoll: hält nur Kernaussagen und Entscheidungen fest, keine Redebeiträge."
        },
        {
          q: "Was gehört zur Vorbereitung einer betrieblichen Veranstaltung?",
          a: "Eine Checkliste mit Terminabsprache, Raum und Unterbringung, Kostenübernahme, Referenten, Programm, Einladungsschreiben und Unterlagen. Zusätzlich müssen rechtliche Vorschriften und Versicherungen bedacht werden, z. B. Veranstaltungshaftpflicht- sowie Brand- und Diebstahlversicherung."
        },
        {
          q: "Sitzung vs. Besprechung?",
          a: "Eine Sitzung ist vorab geplant und mit Formalitäten verbunden (Einladung, Tagesordnung, Protokoll). Bei einer Besprechung tauscht nur eine kleine Gruppe informell Informationen aus – ohne Formalitäten."
        },
        {
          q: "Wie läuft die Planung einer Geschäftsreise ab?",
          a: "1. Genehmigung per Geschäftsreiseantrag, 2. Ermittlung des Reiseprofils (Reisemittel, Unterbringung, Formalitäten), 3. Vergleich und Auswahl, 4. Erstellung der Reisedokumente, 5. Reisekostenabrechnung im Anschluss."
        },
        {
          q: "Was gehört zur Reisekostenabrechnung?",
          a: "Fahrtkosten (z. B. 0,30 €/km beim PKW), Verpflegungsmehraufwand (pauschal, gestaffelt nach Abwesenheitsdauer), Übernachtungskosten sowie Reisenebenkosten (Taxi, Parkgebühren, Porto). Bußgelder zählen ausdrücklich NICHT zu den Reisekosten."
        },
        {
          q: "Wie hoch sind die Pauschalen für Verpflegungsmehraufwand?",
          a: "Bei einer Abwesenheit von mehr als 8 bis unter 24 Stunden: 12 €. Bei einer vollen Abwesenheit von 24 Stunden: 24 €. Wird eine Mahlzeit vom Arbeitgeber gestellt (z. B. Hotelfrühstück), wird ein entsprechender Betrag abgezogen (Frühstück 4,80 €)."
        }
      ],
      flashcards: [
        { front: "Was ist ein Vollprotokoll?", back: "Ein „Wortprotokoll“, das den genauen Wortlaut der Sitzung festhält – sehr aufwändig, aber lückenlos." },
        { front: "Was ist ein Verlaufsprotokoll?", back: "Der vollständige Verlauf wird knapper und sachlicher als beim Vollprotokoll wiedergegeben." },
        { front: "Was ist ein Ergebnisprotokoll?", back: "Nur Kernaussagen und Entscheidungen werden festgehalten – keine einzelnen Redebeiträge." },
        { front: "Nenne 4 Pflichtinhalte eines Protokolls.", back: "Titel der Veranstaltung, Datum/Ort, Beginn und Ende, Angaben zu Teilnehmern/Leiter, Ergebnisse, Unterschrift." },
        { front: "Sitzung vs. Besprechung?", back: "Sitzung: formal geplant, mit Einladung, Tagesordnung und Protokoll. Besprechung: informeller Austausch einer kleinen Gruppe." },
        { front: "Nenne die 5 Schritte der Geschäftsreiseplanung.", back: "Genehmigung/Reiseantrag, Ermittlung des Reiseprofils, Vergleich und Auswahl, Erstellung der Reisedokumente, Reisekostenabrechnung." },
        { front: "Nenne 4 Bestandteile der Reisekostenabrechnung.", back: "Fahrtkosten, Verpflegungsmehraufwand, Übernachtungskosten, Reisenebenkosten." },
        { front: "Wie hoch ist die Kilometerpauschale für PKW-Fahrten?", back: "0,30 € pro Kilometer." },
        { front: "Wie hoch ist der Verpflegungsmehraufwand bei Abwesenheit über 8 bis unter 24 Stunden?", back: "12 €." },
        { front: "Wie hoch ist der Verpflegungsmehraufwand bei 24 Stunden Abwesenheit?", back: "24 €." },
        { front: "Was zählt NICHT zu den Reisekosten?", back: "Verwarnungs- und Bußgelder." },
        { front: "Wofür braucht man eine Veranstaltungshaftpflichtversicherung?", back: "Zum Schutz vor Schadenersatzansprüchen im Rahmen einer betrieblichen Veranstaltung." }
      ],
      quiz: [
        { q: "Welches Protokoll hält den genauen Wortlaut fest?", options: ["Ergebnisprotokoll", "Verlaufsprotokoll", "Vollprotokoll", "Kurzprotokoll"], correct: 2, explain: "Das Vollprotokoll (Wortprotokoll) hält jede Aussage wortgetreu fest." },
        { q: "Welches Protokoll hält nur Kernaussagen und Entscheidungen fest?", options: ["Vollprotokoll", "Verlaufsprotokoll", "Ergebnisprotokoll", "Detailprotokoll"], correct: 2, explain: "Beim Ergebnisprotokoll zählt nur das Ergebnis, nicht der Weg dahin." },
        { q: "Was unterscheidet eine Sitzung von einer Besprechung?", options: ["Kein Unterschied", "Eine Sitzung ist formal geplant, eine Besprechung informell", "Besprechungen sind immer größer", "Sitzungen brauchen kein Protokoll"], correct: 1, explain: "Sitzungen sind mit Formalitäten wie Einladung und Protokoll verbunden, Besprechungen nicht." },
        { q: "Wie hoch ist die Kilometerpauschale für PKW-Fahrten?", options: ["0,20 €/km", "0,25 €/km", "0,30 €/km", "0,35 €/km"], correct: 2, explain: "Die gängige Pauschale beträgt 0,30 € pro gefahrenem Kilometer." },
        { q: "Wie hoch ist der Verpflegungsmehraufwand bei einer Abwesenheit von über 8 bis unter 24 Stunden?", options: ["6 €", "12 €", "18 €", "24 €"], correct: 1, explain: "Für diese Abwesenheitsdauer gilt eine Pauschale von 12 €." },
        { q: "Wie hoch ist der Verpflegungsmehraufwand bei voller 24-Stunden-Abwesenheit?", options: ["12 €", "18 €", "24 €", "30 €"], correct: 2, explain: "Für einen vollen Abwesenheitstag (24 Std.) gilt eine Pauschale von 24 €." },
        { q: "Zählen Verwarnungs- und Bußgelder zu den Reisekosten?", options: ["Ja, immer", "Nein", "Nur bei Dienstwagen", "Nur im Ausland"], correct: 1, explain: "Bußgelder sind ausdrücklich von den erstattungsfähigen Reisekosten ausgeschlossen." },
        { q: "Was ist der erste Schritt bei der Planung einer Geschäftsreise?", options: ["Reisekostenabrechnung", "Genehmigung mittels Geschäftsreiseantrag", "Buchung des Hotels", "Erstellung der Reisedokumente"], correct: 1, explain: "Zuerst muss die Reise genehmigt und der Bedarf erfasst werden." },
        { q: "Was gehört zu den Reisenebenkosten?", options: ["Übernachtungskosten", "Taxi- und Parkgebühren", "Fahrtkosten mit dem PKW", "Verpflegungsmehraufwand"], correct: 1, explain: "Reisenebenkosten umfassen z. B. Taxi, Mietwagen, Porto und Parkgebühren." },
        { q: "Warum wird bei einem inkludierten Hotelfrühstück ein Betrag vom Verpflegungsmehraufwand abgezogen?", options: ["Aus steuerlichen Gründen ohne Zusammenhang", "Weil die Mahlzeit bereits vom Arbeitgeber gestellt wurde", "Weil Frühstück nie erstattet wird", "Nur bei Auslandsreisen"], correct: 1, explain: "Wird eine Mahlzeit vom Arbeitgeber gestellt, darf dafür kein zusätzlicher Verpflegungsmehraufwand geltend gemacht werden." }
      ],
      exam: [
        {
          title: "Checkliste für eine betriebliche Tagung",
          points: 8,
          task: "Planen Sie eine betriebliche Tagung anhand einer Checkliste. Nennen Sie mindestens 5 relevante Punkte, die vorab geklärt werden müssen.",
          solution: "1. Terminabsprache mit allen relevanten Personen.\n2. Tagungsraum und Unterbringung der Teilnehmer klären.\n3. Kostenübernahme und Budget festlegen.\n4. Referenten einladen und Programm erstellen.\n5. Einladungsschreiben an die Teilnehmer versenden.\n6. Benötigte Unterlagen zusammenstellen.\n7. Relevante Versicherungen prüfen (z. B. Veranstaltungshaftpflicht) und gesetzliche Vorschriften (z. B. Versammlungsstättenverordnung) beachten."
        },
        {
          title: "Reisekostenabrechnung berechnen",
          points: 10,
          task: "Eine Mitarbeiterin tritt eine zweitägige Geschäftsreise an: Abreise am 1. Tag um 7:00 Uhr, Rückkehr am 2. Tag um 20:00 Uhr. Sie fährt insgesamt 320 km mit dem privaten PKW (Hin- und Rückfahrt). Im Hotel ist das Frühstück (4,80 €) bereits inklusive. Berechnen Sie die Gesamterstattung aus Fahrtkosten und Verpflegungsmehraufwand.",
          solution: "Fahrtkosten: 320 km × 0,30 € = 96,00 €.\n\nVerpflegungsmehraufwand:\nTag 1 (7:00–24:00 Uhr = 17 Std., also über 8 bis unter 24 Std.): 12,00 €\nTag 2 (0:00–20:00 Uhr = 20 Std., ebenfalls über 8 bis unter 24 Std.): 12,00 €\nZwischensumme: 24,00 €\n− Kürzung für das im Hotel enthaltene Frühstück: 4,80 €\n= Verpflegungsmehraufwand gesamt: 19,20 €\n\nGesamterstattung = 96,00 € + 19,20 € = 115,20 € (zzgl. der separat abgerechneten Hotelkosten)."
        }
      ]
    },

    // ======================================================================
    // KAPITEL L
    // ======================================================================
    {
      id: "projektmanagement",
      code: "L",
      title: "Projektplanung & -durchführung",
      subtitle: "Projektmerkmale, Goldenes Dreieck, Projektorganisation, PSP, Angebotsvergleich, Gantt-Diagramm",
      terms: [
        { word: "PROJEKTSTRUKTURPLAN", clue: "Hierarchische Top-Down-Darstellung aller Projektarbeiten" },
        { word: "GANTTDIAGRAMM", clue: "Horizontales Balkendiagramm zur Zeitplanung" },
        { word: "SACHZIEL", clue: "Ziel des Goldenen Dreiecks: was soll erreicht werden" },
        { word: "KOSTENZIEL", clue: "Ziel des Goldenen Dreiecks: Budget des Projekts" },
        { word: "TERMINZIEL", clue: "Ziel des Goldenen Dreiecks: zeitlicher Rahmen" },
        { word: "MEILENSTEIN", clue: "Wichtiger Eckpunkt im Projektverlauf" },
        { word: "PROJEKTORGANISATION", clue: "Reine, Linien-, Stabs- oder Matrixform" },
        { word: "ANGEBOTSVERGLEICH", clue: "Quantitativ oder qualitativ nach Kriterien" }
      ],
      hangmanTerms: [
        { word: "MAXIMALPRINZIP", clue: "Größtmöglicher Erfolg mit gegebenen Mitteln" },
        { word: "MINIMALPRINZIP", clue: "Ziel mit geringstmöglichem Mitteleinsatz erreichen" },
        { word: "ARBEITSPAKET", clue: "Kleinstes Element im Projektstrukturplan" },
        { word: "STABSORGANISATION", clue: "Projektleiter hat nur koordinierende Funktion" },
        { word: "PROJEKTABSCHLUSS", clue: "Letzte Phase eines Projekts" },
        { word: "LINIENORGANISATION", clue: "Projekt läuft innerhalb einer bestehenden Abteilung" },
        { word: "ZUSTANDEKOMMEN", clue: "Ein Kaufvertrag entsteht durch Antrag und Annahme" },
        { word: "KOMPROMISS", clue: "Muss bei mindestens einem Ziel des Goldenen Dreiecks eingegangen werden" }
      ],
      diagrams: [
        {
          title: "Das Goldene Dreieck des Projektmanagements",
          note: "Sach-, Kosten- und Terminziel stehen in Konkurrenz zueinander.",
          svg: `<svg viewBox="0 0 420 380" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <polygon points="210,60 66,318 354,318" fill="none" class="ds-border" stroke-width="2"/>
            <text x="210" y="238" text-anchor="middle" class="dt" font-size="13" font-weight="600">Projekt-</text>
            <text x="210" y="256" text-anchor="middle" class="dt" font-size="13" font-weight="600">erfolg</text>
            <circle cx="210" cy="60" r="46" class="df-ink"/>
            <text x="210" y="56" text-anchor="middle" class="dt-white" font-size="12">Sachziel</text>
            <text x="210" y="72" text-anchor="middle" class="dt-white-mono" font-size="9">Leistung/Qualität</text>
            <circle cx="66" cy="318" r="46" class="df-success"/>
            <text x="66" y="314" text-anchor="middle" class="dt-white" font-size="12">Kostenziel</text>
            <text x="66" y="330" text-anchor="middle" class="dt-white-mono" font-size="9">Budget</text>
            <circle cx="354" cy="318" r="46" class="df-stamp"/>
            <text x="354" y="314" text-anchor="middle" class="dt-white" font-size="12">Terminziel</text>
            <text x="354" y="330" text-anchor="middle" class="dt-white-mono" font-size="9">Zeitrahmen</text>
          </svg>`
        },
        {
          title: "Gantt-Diagramm (Beispiel)",
          note: "Balken zeigen Dauer und Reihenfolge der Arbeitsschritte auf der Zeitachse.",
          svg: `<svg viewBox="0 0 560 226" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="24" class="dt-mono" font-size="11">Aufgabe</text>
            <text x="171" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 1</text>
            <text x="234" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 2</text>
            <text x="297" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 3</text>
            <text x="360" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 4</text>
            <text x="423" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 5</text>
            <text x="486" y="24" text-anchor="middle" class="dt-mono" font-size="10">KW 6</text>
            <g class="ds-border" stroke-width="1">
              <line x1="140" y1="34" x2="140" y2="214"/>
              <line x1="203" y1="34" x2="203" y2="214"/>
              <line x1="266" y1="34" x2="266" y2="214"/>
              <line x1="329" y1="34" x2="329" y2="214"/>
              <line x1="392" y1="34" x2="392" y2="214"/>
              <line x1="455" y1="34" x2="455" y2="214"/>
              <line x1="518" y1="34" x2="518" y2="214"/>
            </g>
            <text x="10" y="66" class="dt" font-size="11">Konzept</text>
            <rect x="140" y="52" width="126" height="20" rx="4" class="df-ochre"/>
            <text x="10" y="106" class="dt" font-size="11">Umsetzung</text>
            <rect x="266" y="92" width="126" height="20" rx="4" class="df-success"/>
            <text x="10" y="146" class="dt" font-size="11">Testing</text>
            <rect x="392" y="132" width="63" height="20" rx="4" class="df-ink-soft"/>
            <text x="10" y="186" class="dt" font-size="11">Rollout</text>
            <rect x="455" y="172" width="63" height="20" rx="4" class="df-ink"/>
            <polygon points="518,168 528,182 518,196 508,182" class="df-stamp"/>
            <text x="525" y="150" class="dt-mono" font-size="9">Meilenstein</text>
          </svg>`
        }
      ],
      summary: [
        {
          q: "Was macht ein Projekt aus?",
          a: "Die Einmaligkeit der Rahmenbedingungen: eine zeitliche Begrenzung (fester Start- und Endtermin), ein klares Ziel, eine projektspezifische (vorübergehende) Organisation und meist eine finanzielle Begrenzung. Routinearbeiten sind daher per Definition keine Projekte."
        },
        {
          q: "Was ist das Goldene Dreieck des Projektmanagements?",
          a: "Drei teils konkurrierende Ziele: Sachziel (Was soll erreicht werden – Leistung/Qualität), Kostenziel (Budget) und Terminziel (zeitlicher Rahmen). Bei mindestens einem Ziel muss meist ein Kompromiss eingegangen werden – „schnell, billig oder gut: wählen Sie zwei“."
        },
        {
          q: "Welche Projektorganisationsformen gibt es?",
          a: "Reine Projektorganisation (Projektleiter mit vollem Weisungsrecht, neue Infrastruktur), Linienorganisation (Projekt läuft innerhalb einer Abteilung), Stabsorganisation (Projektleiter koordiniert nur, ohne Weisungsrecht) und Matrixorganisation (Projektleiter hat Weisungsbefugnis, Mitarbeiter haben zwei Vorgesetzte)."
        },
        {
          q: "Was ist ein Projektstrukturplan (PSP)?",
          a: "Eine hierarchische Top-Down-Darstellung aller Arbeiten, die zur Zielerreichung nötig sind. Die 100 %-Regel besagt: Jede Ebene bildet die Arbeit der darunterliegenden Ebene vollständig ab. Ein guter PSP fokussiert auf Ergebnisse, nicht auf bloße Aktivitäten."
        },
        {
          q: "Wie funktioniert der Angebotsvergleich – und was ist das ökonomische Prinzip?",
          a: "Quantitativer Vergleich: anhand des Preises (Einkaufskalkulation). Qualitativer Vergleich: Kriterien werden gewichtet, jedes Angebot wird bewertet (1–5 Punkte) und die gewichteten Punkte werden addiert. Das ökonomische Prinzip fordert dabei entweder maximalen Erfolg bei gegebenen Mitteln (Maximalprinzip) oder minimalen Mitteleinsatz bei festem Ziel (Minimalprinzip)."
        },
        {
          q: "Was zeigt ein Gantt-Diagramm?",
          a: "Ein horizontales Balkendiagramm, das den Projektplan auf einer Zeitachse abbildet: Zeitspanne und Dauer jeder Aufgabe, Reihenfolge und Abhängigkeiten, Fortschritt sowie Meilensteine. Es dient der Planung, Überwachung und Kommunikation im Projektverlauf."
        }
      ],
      flashcards: [
        { front: "Nenne die 4 Rahmenbedingungen eines Projekts.", back: "Zeitliche Begrenzung, klares Ziel, projektspezifische Organisation, oft finanzielle Begrenzung." },
        { front: "Nenne die 3 Ziele des Goldenen Dreiecks.", back: "Sachziel, Kostenziel, Terminziel." },
        { front: "Was beschreibt das Sachziel eines Projekts?", back: "Was geplant und erreicht werden soll – die Leistung bzw. Qualität des Ergebnisses." },
        { front: "Was beschreibt das Terminziel eines Projekts?", back: "Den zeitlichen Rahmen mit Fristen und Deadlines." },
        { front: "Was ist ein Vorteil der reinen Projektorganisation?", back: "Hohe Konzentration auf das Projekt und kurze Kommunikationswege." },
        { front: "Was ist ein Nachteil der reinen Projektorganisation?", back: "Die Rückkehr der Mitarbeiter in ihre alten Positionen nach Projektende ist oft schwierig." },
        { front: "Was ist ein Nachteil der Matrixorganisation im Projekt?", back: "Mitarbeiter haben zwei Vorgesetzte (Projekt und ursprüngliche Abteilung) – hoher Kommunikationsaufwand." },
        { front: "Was besagt die 100 %-Regel im PSP?", back: "Jede Ebene des PSP muss die Arbeit der darunterliegenden Ebene vollständig (zu 100 %) abbilden." },
        { front: "Worauf sollte ein guter PSP fokussieren?", back: "Auf Ergebnisse (was soll entstehen), nicht auf bloße Aktivitäten (was tun wir)." },
        { front: "Nenne 2 Qualitätsmerkmale eines guten PSP.", back: "Verwaltbar/verantwortlich (klare Zuständigkeit) und schätzbar (Dauer und Kosten bezifferbar)." },
        { front: "Was besagt das Maximalprinzip?", back: "Mit den gegebenen Mitteln soll der größtmögliche Erfolg erzielt werden." },
        { front: "Was besagt das Minimalprinzip?", back: "Ein geplanter Erfolg soll mit dem geringstmöglichen Mitteleinsatz erzielt werden." },
        { front: "Wie läuft der qualitative Angebotsvergleich ab?", back: "Kriterien aufstellen, gewichten (insgesamt 100 %), jedes Angebot bewerten (1–5 Punkte), Erfüllungsgrad × Prozentsatz, Ergebnisse addieren – höchste Punktzahl gewinnt." },
        { front: "Was zeigt die Länge der Balken im Gantt-Diagramm?", back: "Wie viel Zeit für eine Aufgabe eingeplant ist (Dauer)." },
        { front: "Wofür wird das Gantt-Diagramm im Projektverlauf genutzt?", back: "Zur Planung, Überwachung des Fortschritts und Kommunikation des Status an das Team." }
      ],
      quiz: [
        { q: "Welches Merkmal kennzeichnet KEIN Projekt?", options: ["Zeitliche Begrenzung", "Ein klares Ziel", "Beliebige Wiederholbarkeit als Routinearbeit", "Eine projektspezifische Organisation"], correct: 2, explain: "Projekte sind einmalig – Routinearbeiten zählen per Definition nicht als Projekt." },
        { q: "Nenne die 3 Ziele des Goldenen Dreiecks.", options: ["Sach-, Kosten-, Terminziel", "Qualität, Quantität, Zeit", "Personal, Budget, Ort", "Planung, Kontrolle, Steuerung"], correct: 0, explain: "Das Goldene Dreieck besteht aus Sachziel, Kostenziel und Terminziel." },
        { q: "Bei der reinen Projektorganisation hat der Projektleiter …", options: ["kein Weisungsrecht", "volles Weisungsrecht bis Projektende", "nur beratende Funktion", "Weisungsrecht nur über sich selbst"], correct: 1, explain: "In der reinen Projektorganisation besitzt der Projektleiter volles Weisungsrecht über die Projektmitarbeiter." },
        { q: "Was ist typisch für Mitarbeiter in der Matrixorganisation eines Projekts?", options: ["Sie haben keinen Vorgesetzten", "Sie haben zwei Vorgesetzte", "Sie arbeiten nur remote", "Sie sind immer freigestellt"], correct: 1, explain: "In der Matrixorganisation unterstehen Mitarbeiter sowohl der Projektleitung als auch ihrer Fachabteilung." },
        { q: "Was besagt die 100 %-Regel im Projektstrukturplan?", options: ["Jedes Arbeitspaket kostet gleich viel", "Jede Ebene bildet die darunterliegende Ebene vollständig ab", "Das Projekt muss zu 100 % im Budget bleiben", "Alle Mitarbeiter müssen zu 100 % ausgelastet sein"], correct: 1, explain: "Die Summe der untergeordneten Elemente muss immer genau das übergeordnete Element ergeben." },
        { q: "Worauf sollte sich ein guter PSP konzentrieren?", options: ["Auf Aktivitäten", "Auf Ergebnisse", "Auf Personalkosten", "Auf Meetings"], correct: 1, explain: "Ein guter PSP beschreibt, was entstehen soll (Ergebnisse), nicht nur was getan wird." },
        { q: "Was besagt das Minimalprinzip?", options: ["Maximaler Erfolg mit gegebenen Mitteln", "Ein Ziel mit geringstmöglichem Mitteleinsatz erreichen", "Immer die billigste Option wählen", "Kosten sind irrelevant"], correct: 1, explain: "Das Minimalprinzip fordert, ein geplantes Ziel mit möglichst wenig Mitteleinsatz zu erreichen." },
        { q: "Wie läuft der qualitative Angebotsvergleich grundsätzlich ab?", options: ["Nur der günstigste Preis zählt", "Kriterien werden gewichtet und bewertet, Punkte addiert", "Zufällige Auswahl", "Nur die Lieferzeit wird verglichen"], correct: 1, explain: "Kriterien werden gewichtet, jedes Angebot bewertet, die gewichteten Punkte werden addiert." },
        { q: "Was zeigt ein Gantt-Diagramm NICHT direkt?", options: ["Dauer von Aufgaben", "Reihenfolge von Aufgaben", "Die genaue Rechtsform des Unternehmens", "Meilensteine"], correct: 2, explain: "Ein Gantt-Diagramm zeigt Zeitspannen, Dauer, Reihenfolge und Meilensteine – keine Rechtsformen." },
        { q: "Was ist die letzte Phase eines Projekts?", options: ["Projektstrukturplan", "Projektabschluss", "Projektstart", "Angebotsvergleich"], correct: 1, explain: "Der Projektabschluss bildet die letzte Phase und berücksichtigt die Interessen aller Beteiligten." }
      ],
      exam: [
        {
          title: "Projektstrukturplan für eine Firmenfeier",
          points: 9,
          task: "Erstellen Sie in Textform einen einfachen Projektstrukturplan für die Planung einer Firmenfeier mit mindestens 3 Teilprojekten und je 2 Arbeitspaketen.",
          solution: "Projekt: Firmenfeier\n\nTeilprojekt 1 – Location & Catering:\n– Arbeitspaket: Räumlichkeiten anfragen und buchen\n– Arbeitspaket: Catering-Angebote einholen und beauftragen\n\nTeilprojekt 2 – Programm & Unterhaltung:\n– Arbeitspaket: Ablaufplan erstellen\n– Arbeitspaket: Musik/Unterhaltung organisieren\n\nTeilprojekt 3 – Einladung & Kommunikation:\n– Arbeitspaket: Einladungen gestalten und versenden\n– Arbeitspaket: Rückmeldungen erfassen und Teilnehmerliste pflegen\n\n(Gemäß 100 %-Regel decken die Arbeitspakete jeweils vollständig das zugehörige Teilprojekt ab.)"
        },
        {
          title: "Qualitativer Angebotsvergleich",
          points: 9,
          task: "Ein Unternehmen vergleicht zwei Lieferantenangebote anhand der Kriterien Qualität (Gewichtung 60 %) und Preis (Gewichtung 40 %). Angebot A erfüllt die Qualität voll (5 Punkte) und den Preis nur teilweise (3 Punkte). Angebot B erfüllt die Qualität teilweise (3 Punkte) und den Preis voll (5 Punkte). Berechnen Sie die gewichteten Punktzahlen und geben Sie eine Empfehlung ab.",
          solution: "Angebot A: (60 % × 5) + (40 % × 3) = 3,0 + 1,2 = 4,2 Punkte\nAngebot B: (60 % × 3) + (40 % × 5) = 1,8 + 2,0 = 3,8 Punkte\n\nEmpfehlung: Angebot A erzielt mit 4,2 Punkten die höhere Gesamtbewertung und sollte gewählt werden, da die Qualität hier stärker gewichtet ist und Angebot A in diesem wichtigeren Kriterium besser abschneidet."
        }
      ]
    },

    // ======================================================================
    // KAPITEL M
    // ======================================================================
    {
      id: "rechtsformen",
      code: "M",
      title: "Firma & Rechtsformen",
      subtitle: "Handelsregister, Einzelunternehmen, OHG, KG, GmbH, AG, Prokura, Kaufmannsarten",
      diagrams: [
        {
          title: "Rechtsformen im Überblick",
          note: "Von Einzelunternehmen über Personen- bis zu Kapitalgesellschaften.",
          svg: `<svg viewBox="0 0 580 220" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <rect x="220" y="10" width="120" height="44" rx="8" class="df-ink"/>
            <text x="280" y="37" text-anchor="middle" class="dt-white" font-size="12">Rechtsformen</text>
            <line x1="280" y1="54" x2="280" y2="70" class="ds-ink" stroke-width="1.5"/>
            <line x1="80" y1="70" x2="480" y2="70" class="ds-ink" stroke-width="1.5"/>
            <line x1="80" y1="70" x2="80" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="280" y1="70" x2="280" y2="90" class="ds-ink" stroke-width="1.5"/>
            <line x1="480" y1="70" x2="480" y2="90" class="ds-ink" stroke-width="1.5"/>
            <rect x="10" y="90" width="140" height="50" rx="8" class="df-success"/>
            <text x="80" y="112" text-anchor="middle" class="dt-white" font-size="11">Einzelunter-</text>
            <text x="80" y="127" text-anchor="middle" class="dt-white" font-size="11">nehmen</text>
            <rect x="210" y="90" width="140" height="50" rx="8" class="df-ochre"/>
            <text x="280" y="112" text-anchor="middle" class="dt-white" font-size="11">Personen-</text>
            <text x="280" y="127" text-anchor="middle" class="dt-white" font-size="11">gesellschaften</text>
            <rect x="410" y="90" width="140" height="50" rx="8" class="df-stamp"/>
            <text x="480" y="112" text-anchor="middle" class="dt-white" font-size="11">Kapital-</text>
            <text x="480" y="127" text-anchor="middle" class="dt-white" font-size="11">gesellschaften</text>
            <line x1="280" y1="140" x2="280" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="230" y1="155" x2="330" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="230" y1="155" x2="230" y2="170" class="ds-ink" stroke-width="1.5"/>
            <line x1="330" y1="155" x2="330" y2="170" class="ds-ink" stroke-width="1.5"/>
            <rect x="190" y="170" width="80" height="40" rx="6" class="df-ochre-soft"/>
            <text x="230" y="194" text-anchor="middle" class="dt" font-size="12">OHG</text>
            <rect x="290" y="170" width="80" height="40" rx="6" class="df-ochre-soft"/>
            <text x="330" y="194" text-anchor="middle" class="dt" font-size="12">KG</text>
            <line x1="480" y1="140" x2="480" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="430" y1="155" x2="530" y2="155" class="ds-ink" stroke-width="1.5"/>
            <line x1="430" y1="155" x2="430" y2="170" class="ds-ink" stroke-width="1.5"/>
            <line x1="530" y1="155" x2="530" y2="170" class="ds-ink" stroke-width="1.5"/>
            <rect x="390" y="170" width="80" height="40" rx="6" class="df-stamp-soft"/>
            <text x="430" y="194" text-anchor="middle" class="dt" font-size="12">GmbH</text>
            <rect x="490" y="170" width="80" height="40" rx="6" class="df-stamp-soft"/>
            <text x="530" y="194" text-anchor="middle" class="dt" font-size="12">AG</text>
          </svg>`
        }
      ],
      terms: [
        { word: "HANDELSREGISTER", clue: "Öffentliches Register, Abteilung A und B" },
        { word: "EINZELUNTERNEHMEN", clue: "Ein Inhaber haftet unbeschränkt mit seinem Vermögen" },
        { word: "PROKURA", clue: "Umfassende, ins Handelsregister eingetragene Vollmacht" },
        { word: "AKTIENGESELLSCHAFT", clue: "Grundkapital von mindestens 50.000 Euro, in Aktien zerlegt" },
        { word: "AUFSICHTSRAT", clue: "Überwacht und bestellt den Vorstand der AG" },
        { word: "VORSTAND", clue: "Führt die Geschäfte der Aktiengesellschaft" },
        { word: "FIRMENGRUNDSATZ", clue: "Regel wie Firmenwahrheit oder Firmenöffentlichkeit" },
        { word: "GESELLSCHAFTSVERTRAG", clue: "Notariell zu beurkunden bei Gründung einer AG" }
      ],
      hangmanTerms: [
        { word: "KOMPLEMENTAER", clue: "Vollhaftender Gesellschafter der KG" },
        { word: "KOMMANDITIST", clue: "Teilhaftender Gesellschafter der KG" },
        { word: "HANDLUNGSVOLLMACHT", clue: "Erlaubnis, in fremdem Namen Rechtsgeschäfte abzuschließen" },
        { word: "GESAMTPROKURA", clue: "Mehrere Prokuristen müssen gemeinschaftlich handeln" },
        { word: "EINZELPROKURA", clue: "Ein Prokurist darf allein handeln" },
        { word: "ISTKAUFMANN", clue: "Auch ohne Handelsregistereintrag Kaufmann" },
        { word: "KANNKAUFMANN", clue: "Kann sich freiwillig ins Handelsregister eintragen lassen" },
        { word: "FIKTIVKAUFMANN", clue: "Versehentlich eingetragen, eigentlich kein Kaufmann" }
      ],
      summary: [
        {
          q: "Was ist die „Firma“ eines Kaufmanns – und welche Grundsätze gelten?",
          a: "Die Firma ist der Handelsname, unter dem ein Kaufmann seine Geschäfte betreibt (Personen-, Sach-, Fantasie- oder Mischfirma). Die Firmengrundsätze aus dem HGB: Firmenöffentlichkeit (Handelsregistereintrag), Firmenbeständigkeit, Firmenunterscheidbarkeit und Firmenwahrheit."
        },
        {
          q: "Handelsregister – Abteilung A vs. B?",
          a: "Abteilung A: Einzelkaufleute und Personengesellschaften (z. B. OHG, KG). Abteilung B: ausschließlich Kapitalgesellschaften (z. B. GmbH, AG). Das Handelsregister ist öffentlich einsehbar."
        },
        {
          q: "Einzelunternehmen, OHG und KG im Vergleich?",
          a: "Einzelunternehmen: ein Inhaber, unbeschränkte Haftung. OHG: mind. 2 Gesellschafter, alle haften unbeschränkt und solidarisch. KG: mind. 2 Gesellschafter – der Komplementär haftet unbeschränkt und führt die Geschäfte, der Kommanditist haftet nur mit seiner Einlage und ist von der Geschäftsführung ausgeschlossen."
        },
        {
          q: "GmbH vs. AG – die wichtigsten Eckdaten?",
          a: "GmbH: Mindestkapital 25.000 €, davon mind. 12.500 € bar einzuzahlen, Haftung nur mit dem Gesellschaftsvermögen, Gründung ab 1 Person möglich. AG: Mindestkapital 50.000 € (Grundkapital, aufgeteilt in Aktien), Organe sind Vorstand, Aufsichtsrat und Hauptversammlung."
        },
        {
          q: "Prokura vs. einfache Handlungsvollmacht?",
          a: "Prokura wird ins Handelsregister eingetragen und berechtigt umfassend (u. a. Grundstückserwerb, Personal einstellen/kündigen, Darlehen aufnehmen) – aber NICHT zum Verkauf des Unternehmens oder zur Insolvenzanmeldung. Handlungsvollmacht ist enger gefasst (General-, Art- oder Einzelhandlungsvollmacht) und muss nicht ins Handelsregister eingetragen werden."
        },
        {
          q: "Die vier Kaufmannsarten?",
          a: "Ist-Kaufmann (auch ohne Eintrag Kaufmann, Eintrag deklaratorisch), Form-Kaufmann (kraft Rechtsform, Eintrag konstitutiv), Fiktiv-Kaufmann (versehentlich eingetragen, eigentlich kein Kaufmann) und Kann-Kaufmann (freiwillige Eintragung möglich, dann konstitutiv)."
        }
      ],
      flashcards: [
        { front: "Was ist die „Firma“ eines Kaufmanns?", back: "Der Name, unter dem der Kaufmann seine Geschäfte betreibt – der Handelsname." },
        { front: "Nenne die 4 Firmengrundsätze.", back: "Firmenöffentlichkeit, Firmenbeständigkeit, Firmenunterscheidbarkeit, Firmenwahrheit." },
        { front: "Was wird in Handelsregister-Abteilung A eingetragen?", back: "Einzelkaufleute und Personengesellschaften." },
        { front: "Was wird in Handelsregister-Abteilung B eingetragen?", back: "Ausschließlich Kapitalgesellschaften." },
        { front: "Wie haftet ein Einzelunternehmer?", back: "Unbeschränkt mit Privat- und Geschäftsvermögen." },
        { front: "Wie viele Gesellschafter braucht eine OHG mindestens?", back: "Mindestens 2." },
        { front: "Wie haften die Gesellschafter einer OHG?", back: "Unmittelbar, solidarisch und unbeschränkt mit dem Privatvermögen." },
        { front: "Komplementär vs. Kommanditist bei der KG?", back: "Komplementär: Vollhafter, führt die Geschäfte. Kommanditist: Teilhafter, haftet nur mit seiner Einlage, keine Geschäftsführung." },
        { front: "Wie hoch ist das gesetzliche Mindestkapital einer GmbH?", back: "25.000 €, davon mind. 12.500 € bar einzuzahlen." },
        { front: "Wie haftet eine GmbH?", back: "Nur mit dem Gesellschaftsvermögen (den Einlagen)." },
        { front: "Wie hoch ist das Mindestkapital (Grundkapital) einer AG?", back: "50.000 €, zerlegt in Aktien." },
        { front: "Nenne die 3 Organe einer AG.", back: "Vorstand, Aufsichtsrat, Hauptversammlung." },
        { front: "Wer überwacht den Vorstand einer AG?", back: "Der Aufsichtsrat – er bestellt und beruft den Vorstand ab." },
        { front: "Darf ein Prokurist das Unternehmen verkaufen?", back: "Nein – das gehört nicht zu den Befugnissen der Prokura." },
        { front: "Einzelprokura vs. Gesamtprokura?", back: "Einzelprokura: der Prokurist darf allein handeln. Gesamtprokura: mehrere Prokuristen müssen gemeinschaftlich handeln." },
        { front: "Was ist ein Ist-Kaufmann?", back: "Ein Kaufmann auch ohne Handelsregistereintrag – der Eintrag ist deklaratorisch (rechtserklärend), aber verpflichtend." },
        { front: "Was ist ein Kann-Kaufmann?", back: "Kann sich freiwillig ins Handelsregister eintragen lassen – der Eintrag ist dann konstitutiv (rechtsbegründend)." },
        { front: "Was ist ein Fiktiv-Kaufmann?", back: "Eine Person, die sich versehentlich hat eintragen lassen – kein echter Kaufmann nach HGB, Eintrag jederzeit löschbar." }
      ],
      quiz: [
        { q: "Was versteht man unter der „Firma“ eines Kaufmanns?", options: ["Das Betriebsgebäude", "Den Handelsnamen, unter dem er Geschäfte betreibt", "Die Rechtsform", "Das Startkapital"], correct: 1, explain: "Die Firma ist der Name, mit dem der Kaufmann im Geschäftsverkehr auftritt." },
        { q: "In welcher Handelsregisterabteilung werden Kapitalgesellschaften eingetragen?", options: ["Abteilung A", "Abteilung B", "Abteilung C", "Es gibt keine Abteilungen"], correct: 1, explain: "Abteilung B ist ausschließlich Kapitalgesellschaften vorbehalten." },
        { q: "Wie haftet der Einzelunternehmer?", options: ["Nur mit der Einlage", "Unbeschränkt mit Privat- und Geschäftsvermögen", "Gar nicht", "Nur mit dem halben Vermögen"], correct: 1, explain: "Der Einzelunternehmer haftet unbeschränkt, auch mit seinem Privatvermögen." },
        { q: "Wie viele Gesellschafter braucht eine OHG mindestens?", options: ["1", "2", "3", "5"], correct: 1, explain: "Eine OHG erfordert mindestens 2 Gesellschafter." },
        { q: "Bei der KG haftet der Kommanditist …", options: ["unbeschränkt", "nur mit seiner Einlage", "gar nicht", "wie der Komplementär"], correct: 1, explain: "Der Kommanditist ist Teilhafter und haftet nur bis zur Höhe seiner Einlage." },
        { q: "Wie hoch ist das gesetzliche Mindestkapital einer GmbH?", options: ["12.500 €", "25.000 €", "50.000 €", "100.000 €"], correct: 1, explain: "Das Mindestkapital einer GmbH beträgt 25.000 €." },
        { q: "Wie hoch ist das Mindestkapital (Grundkapital) einer AG?", options: ["25.000 €", "50.000 €", "100.000 €", "250.000 €"], correct: 1, explain: "Das Grundkapital einer AG beträgt mindestens 50.000 €." },
        { q: "Wer überwacht den Vorstand einer AG?", options: ["Die Hauptversammlung direkt", "Der Aufsichtsrat", "Das Handelsregister", "Die IHK"], correct: 1, explain: "Der Aufsichtsrat bestellt, überwacht und beruft den Vorstand ab." },
        { q: "Darf ein Prokurist Bilanzen unterschreiben?", options: ["Ja, immer", "Nein", "Nur mit Zustimmung der IHK", "Nur bei kleinen Unternehmen"], correct: 1, explain: "Das Unterschreiben von Bilanzen/Steuererklärungen gehört nicht zu den Befugnissen der Prokura." },
        { q: "Was ist ein Kann-Kaufmann?", options: ["Muss sich zwingend eintragen lassen", "Kann sich freiwillig eintragen lassen", "Ist nie Kaufmann", "Ist automatisch Kaufmann ohne Eintrag"], correct: 1, explain: "Der Kann-Kaufmann kann sich freiwillig eintragen lassen – der Eintrag ist dann konstitutiv." },
        { q: "Was bedeutet „deklaratorisch“ bei einem Handelsregistereintrag?", options: ["Rechtsbegründend", "Rechtserklärend/bekundend, ohne die Rechtskraft zu erzeugen", "Ungültig", "Nur für GmbHs relevant"], correct: 1, explain: "Deklaratorisch bedeutet rechtserklärend – die Rechtskraft besteht bereits vorher (z. B. beim Ist-Kaufmann)." }
      ],
      exam: [
        {
          title: "Einzelunternehmen oder GmbH?",
          points: 10,
          task: "Ein Existenzgründer überlegt, ob er sein risikoreiches Geschäftsmodell als Einzelunternehmen oder als GmbH gründen soll. Vergleichen Sie beide Rechtsformen hinsichtlich Haftung und Mindestkapital und geben Sie eine begründete Empfehlung.",
          solution: "Einzelunternehmen: Keine Mindestkapitalanforderung, einfache und schnelle Gründung. Der Unternehmer haftet jedoch unbeschränkt – auch mit seinem gesamten Privatvermögen. Bei einem risikoreichen Geschäftsmodell ist das gefährlich, da im Fall von Verlusten das Privatvermögen (Haus, Ersparnisse) angreifbar ist.\n\nGmbH: Erfordert ein Mindestkapital von 25.000 € (mind. 12.500 € bar), zudem höheren Gründungsaufwand (notarielle Beurkundung, Handelsregistereintrag). Dafür haftet die Gesellschaft nur mit dem Gesellschaftsvermögen – das Privatvermögen des Gründers bleibt geschützt.\n\nEmpfehlung: Bei einem risikoreichen Geschäftsmodell ist die GmbH trotz höherem Gründungsaufwand vorzuziehen, da die Haftungsbeschränkung das persönliche finanzielle Risiko des Gründers deutlich reduziert."
        },
        {
          title: "Prokura vs. Handlungsvollmacht",
          points: 8,
          task: "Erklären Sie den Unterschied zwischen Prokura und einfacher Handlungsvollmacht anhand von 2 Beispielen: Was darf ein Prokurist, was ein einfacher Handlungsbevollmächtigter nicht darf?",
          solution: "Die Prokura ist wesentlich umfassender als eine einfache Handlungsvollmacht und wird ins Handelsregister eingetragen.\n\nBeispiel 1: Ein Prokurist darf Grundstücke für das Unternehmen erwerben – ein Handlungsbevollmächtigter mit einfacher Arthandlungsvollmacht (z. B. nur für den Einkauf) darf das in der Regel nicht, da dies außerhalb seines zugewiesenen Geschäftsbereichs liegt.\n\nBeispiel 2: Ein Prokurist darf Personal einstellen oder kündigen – ein Handlungsbevollmächtigter mit Einzelhandlungsvollmacht (nur für ein einzelnes Rechtsgeschäft bevollmächtigt, z. B. den Abschluss eines bestimmten Kaufvertrags) hat dafür überhaupt keine Befugnis, da seine Vollmacht auf dieses eine Geschäft begrenzt ist."
        }
      ]
    },

    // ======================================================================
    // KAPITEL N
    // ======================================================================
    {
      id: "datenschutz",
      code: "N",
      title: "Datenschutz & Datensicherung",
      subtitle: "Personenbezogene Daten, Rechte der Betroffenen, technische Datensicherung",
      diagrams: [
        {
          title: "Die 5 Rechte der Betroffenen",
          note: "Alle Rechte, die Personen gegenüber Unternehmen bei ihren gespeicherten Daten haben.",
          svg: `<svg viewBox="0 0 440 440" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
            <line x1="220" y1="220" x2="220" y2="70" class="ds-border" stroke-width="1.5"/>
            <line x1="220" y1="220" x2="363" y2="174" class="ds-border" stroke-width="1.5"/>
            <line x1="220" y1="220" x2="308" y2="341" class="ds-border" stroke-width="1.5"/>
            <line x1="220" y1="220" x2="132" y2="341" class="ds-border" stroke-width="1.5"/>
            <line x1="220" y1="220" x2="77" y2="174" class="ds-border" stroke-width="1.5"/>
            <circle cx="220" cy="220" r="62" class="df-ink"/>
            <text x="220" y="215" text-anchor="middle" class="dt-white" font-size="12">Rechte der</text>
            <text x="220" y="231" text-anchor="middle" class="dt-white" font-size="12">Betroffenen</text>
            <circle cx="220" cy="70" r="46" class="df-success"/>
            <text x="220" y="66" text-anchor="middle" class="dt-white" font-size="10">Auskunfts-</text>
            <text x="220" y="80" text-anchor="middle" class="dt-white" font-size="10">recht</text>
            <circle cx="363" cy="174" r="46" class="df-ochre"/>
            <text x="363" y="170" text-anchor="middle" class="dt-white" font-size="9">Berichtigungs-</text>
            <text x="363" y="184" text-anchor="middle" class="dt-white" font-size="9">recht</text>
            <circle cx="308" cy="341" r="46" class="df-stamp"/>
            <text x="308" y="337" text-anchor="middle" class="dt-white" font-size="10">Löschungs-</text>
            <text x="308" y="351" text-anchor="middle" class="dt-white" font-size="10">recht</text>
            <circle cx="132" cy="341" r="46" class="df-ink-soft"/>
            <text x="132" y="333" text-anchor="middle" class="dt-white" font-size="8.5">Benachrichti-</text>
            <text x="132" y="345" text-anchor="middle" class="dt-white" font-size="8.5">gungsrecht</text>
            <circle cx="77" cy="174" r="46" class="df-success-soft"/>
            <text x="77" y="170" text-anchor="middle" class="dt-white" font-size="10">Sperrungs-</text>
            <text x="77" y="184" text-anchor="middle" class="dt-white" font-size="10">recht</text>
          </svg>`
        }
      ],
      terms: [
        { word: "DATENSCHUTZ", clue: "Schutz personenbezogener Daten vor Missbrauch" },
        { word: "AUSKUNFTSRECHT", clue: "Recht zu erfahren, wer welche Daten besitzt" },
        { word: "BERICHTIGUNGSRECHT", clue: "Recht auf Korrektur unrichtiger Daten" },
        { word: "LOESCHUNGSRECHT", clue: "Recht auf Entfernung unzulässig gespeicherter Daten" },
        { word: "SPERRUNGSRECHT", clue: "Greift, wenn Daten nicht mehr benötigt werden" },
        { word: "DATENSICHERUNG", clue: "Technischer Schutz vor Verlust und unerlaubtem Zugriff" }
      ],
      hangmanTerms: [
        { word: "BENACHRICHTIGUNGSRECHT", clue: "Information bei erstmaliger Speicherung der Daten" },
        { word: "DATENSCHUTZBEAUFTRAGTER", clue: "Überwacht die Einhaltung der Vorschriften im Unternehmen" },
        { word: "PERSONENBEZOGEN", clue: "Angaben über Alter, Gesundheit oder Vermögen einer Person" },
        { word: "ZUGRIFFSSCHUTZ", clue: "Nur berechtigte Mitarbeiter dürfen sensible Daten einsehen" },
        { word: "BACKUP", clue: "Regelmäßige Sicherungskopie digitaler Daten" },
        { word: "BDSG", clue: "Abkürzung des deutschen Gesetzes zum Datenschutz" }
      ],
      summary: [
        {
          q: "Was ist Datenschutz – und welches Gesetz regelt ihn?",
          a: "Datenschutz umfasst alle Maßnahmen zum Schutz personenbezogener Daten vor Missbrauch durch unberechtigte Übertragung, Weitergabe oder unberechtigten Zugriff. In Deutschland regelt das Bundesdatenschutzgesetz (BDSG) den Umgang, die Erhebung und Verarbeitung dieser Daten."
        },
        {
          q: "Welche Rechte haben Betroffene?",
          a: "Auskunftsrecht (wer besitzt welche Daten und an wen werden sie weitergegeben?), Berichtigungsrecht (unrichtige Daten korrigieren), Löschungsrecht (unzulässig gespeicherte Daten löschen), Benachrichtigungsrecht (Information bei erstmaliger Speicherung) und Sperrungsrecht (wenn Daten nicht mehr für den ursprünglichen Zweck nötig sind)."
        },
        {
          q: "Datenschutz vs. Datensicherung – wo liegt der Unterschied?",
          a: "Datenschutz regelt RECHTLICH, wer welche personenbezogenen Daten wie verarbeiten darf. Datensicherung sorgt TECHNISCH dafür, dass gespeicherte Daten vor Verlust, Beschädigung, Verfälschung oder unerlaubtem Zugriff geschützt sind – physisch wie digital."
        },
        {
          q: "Was zählt zu personenbezogenen Daten?",
          a: "Einzelangaben über persönliche Verhältnisse (z. B. Alter, Gesundheit) und über sachliche Verhältnisse (z. B. Vermögen, Schulden) einer bestimmten oder bestimmbaren natürlichen Person."
        },
        {
          q: "Welche Rolle spielt der Datenschutzbeauftragte?",
          a: "Er überwacht im Unternehmen die Einhaltung der Datenschutzvorschriften und ist Ansprechpartner für Betroffene und Behörden bei Fragen zum Umgang mit personenbezogenen Daten."
        }
      ],
      flashcards: [
        { front: "Was umfasst Datenschutz?", back: "Alle Maßnahmen zum Schutz personenbezogener Daten vor Missbrauch durch unberechtigte Übertragung, Weitergabe oder Zugriff." },
        { front: "Welches Gesetz regelt in Deutschland den Datenschutz?", back: "Das Bundesdatenschutzgesetz (BDSG)." },
        { front: "Was besagt das Auskunftsrecht?", back: "Betroffene dürfen erfahren, wer welche Daten über sie besitzt und an wen sie weitergegeben werden." },
        { front: "Was besagt das Berichtigungsrecht?", back: "Unrichtige personenbezogene Daten müssen korrigiert werden." },
        { front: "Was besagt das Löschungsrecht?", back: "Unzulässig gespeicherte Daten müssen gelöscht werden." },
        { front: "Was besagt das Benachrichtigungsrecht?", back: "Betroffene müssen informiert werden, wenn erstmalig personenbezogene Daten über sie gespeichert werden." },
        { front: "Was besagt das Sperrungsrecht?", back: "Daten müssen gesperrt werden, wenn sie für den ursprünglichen Zweck nicht mehr erforderlich sind." },
        { front: "Nenne 2 Beispiele für personenbezogene Daten.", back: "Z. B. Alter, Gesundheitsdaten, Vermögen oder Schulden einer Person." },
        { front: "Was schützt die Datensicherung?", back: "Gespeicherte Daten vor Verlust, Beschädigung, Verfälschung und unerlaubtem Zugriff – physisch und digital." },
        { front: "Datenschutz vs. Datensicherung – kurz erklärt?", back: "Datenschutz regelt rechtlich den Umgang mit personenbezogenen Daten, Datensicherung schützt technisch vor Verlust/Missbrauch." },
        { front: "Wer überwacht die Einhaltung des Datenschutzes im Unternehmen?", back: "Der Datenschutzbeauftragte." },
        { front: "Darf der Zugang zu personenbezogenen Daten physisch ODER digital unbefugt erfolgen?", back: "Nein – weder physisch (z. B. Aktenzugriff vor Ort) noch digital darf ein unbefugter Zugang möglich sein." }
      ],
      quiz: [
        { q: "Welches Gesetz regelt in Deutschland den Umgang mit personenbezogenen Daten?", options: ["HGB", "BBiG", "BDSG", "ArbZG"], correct: 2, explain: "Das Bundesdatenschutzgesetz (BDSG) regelt Erhebung und Verarbeitung personenbezogener Daten." },
        { q: "Welches Recht ermöglicht zu erfahren, wer welche Daten über eine Person besitzt?", options: ["Löschungsrecht", "Auskunftsrecht", "Sperrungsrecht", "Berichtigungsrecht"], correct: 1, explain: "Das Auskunftsrecht gibt Betroffenen Einblick, wer welche Daten über sie gespeichert hat." },
        { q: "Welches Recht verlangt die Korrektur falscher Daten?", options: ["Berichtigungsrecht", "Benachrichtigungsrecht", "Auskunftsrecht", "Löschungsrecht"], correct: 0, explain: "Unrichtige Daten müssen laut Berichtigungsrecht korrigiert werden." },
        { q: "Welches Recht fordert die Entfernung unzulässig gespeicherter Daten?", options: ["Sperrungsrecht", "Löschungsrecht", "Auskunftsrecht", "Berichtigungsrecht"], correct: 1, explain: "Das Löschungsrecht verlangt die Entfernung unzulässig gespeicherter Daten." },
        { q: "Wann greift laut Text das Sperrungsrecht?", options: ["Wenn Daten fehlerhaft sind", "Wenn Daten für den ursprünglichen Zweck nicht mehr erforderlich sind", "Immer nach einem Jahr", "Nur bei Kündigung"], correct: 1, explain: "Sind Daten für den ursprünglichen Zweck nicht mehr nötig, greift das Sperrungsrecht." },
        { q: "Was schützt die Datensicherung?", options: ["Nur den Datenschutzbeauftragten", "Vor Verlust, Beschädigung, Verfälschung und unerlaubtem Zugriff", "Nur digitale Daten", "Nur physische Akten"], correct: 1, explain: "Datensicherung schützt umfassend – sowohl physisch als auch digital." },
        { q: "Wer überwacht im Unternehmen die Einhaltung der Datenschutzvorschriften?", options: ["Die IHK", "Der Datenschutzbeauftragte", "Der Betriebsrat", "Das Finanzamt"], correct: 1, explain: "Der Datenschutzbeauftragte ist für die Einhaltung der Vorschriften im Unternehmen zuständig." },
        { q: "Ist das Alter einer Person ein personenbezogenes Datum?", options: ["Nein, nie", "Ja", "Nur bei Minderjährigen", "Nur mit Zustimmung"], correct: 1, explain: "Angaben zu persönlichen Verhältnissen wie das Alter zählen zu den personenbezogenen Daten." }
      ],
      exam: [
        {
          title: "Auskunfts- und Löschungsrecht anwenden",
          points: 8,
          task: "Ein Kunde bittet ein Unternehmen um Auskunft, welche Daten über ihn gespeichert sind, und verlangt zusätzlich die Löschung veralteter Einträge. Erklären Sie, welche Rechte hier greifen und wie das Unternehmen reagieren muss.",
          solution: "Es greifen zwei Rechte: Das Auskunftsrecht verpflichtet das Unternehmen, dem Kunden mitzuteilen, welche personenbezogenen Daten über ihn gespeichert sind und an wen diese ggf. weitergegeben wurden.\nDas Löschungsrecht verpflichtet das Unternehmen zusätzlich dazu, veraltete bzw. unzulässig gespeicherte Daten tatsächlich zu löschen, sofern kein gesetzlicher Aufbewahrungsgrund entgegensteht (z. B. Aufbewahrungsfristen für Rechnungen).\nDas Unternehmen muss also zeitnah und vollständig Auskunft erteilen und alle Daten löschen, die nicht mehr benötigt werden oder deren Speicherung unzulässig war."
        },
        {
          title: "Maßnahmen der Datensicherung im Büro",
          points: 7,
          task: "Nennen und erläutern Sie 3 technische oder organisatorische Maßnahmen der Datensicherung in einem Büro.",
          solution: "1. Zugriffsbeschränkung: Nur berechtigte Mitarbeiter erhalten Zugang zu sensiblen Daten, z. B. durch Passwortschutz oder abgeschlossene Aktenschränke.\n2. Regelmäßige Datensicherung (Backups): Digitale Daten werden in regelmäßigen Abständen auf einem separaten System gesichert, um sie bei Verlust wiederherstellen zu können.\n3. Physischer Schutz: Serverräume und Aktenarchive werden gegen unbefugten Zutritt gesichert (z. B. abschließbare Türen, Alarmanlagen), um sowohl digitalen als auch physischen unerlaubten Zugriff zu verhindern."
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
