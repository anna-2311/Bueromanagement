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
    }
  ]
};

if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
