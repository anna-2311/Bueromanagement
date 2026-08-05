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
    },

    // ======================================================================
    // KAPITEL E
    // ======================================================================
    {
      id: "bueroorganisation",
      code: "E",
      title: "Büroprozesse & Arbeitsorganisation",
      subtitle: "Ergonomie, Zeitmanagement, Termine, Aufbewahrungsfristen, Auftragsbearbeitung",
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
    }
  ]
};

if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
