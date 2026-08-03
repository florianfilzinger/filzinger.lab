export type StudioSeoPage = {
  path: string;
  title: string;
  description: string;
  schemaType: 'WebPage' | 'Service';
  eyebrow: string;
  headline: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
  subject: string;
  sections: readonly { title: string; paragraphs: readonly string[] }[];
};

export const studioSeoPages = [
  {
    path: '/product-studio',
    title: 'AI Product Studio für digitale Produkte | filzinger.lab',
    description: 'filzinger.lab entwickelt fokussierte AI-Produkte: von Product Discovery und Prototyp über validiertes MVP bis zum betreibbaren SaaS-Produkt.',
    schemaType: 'WebPage',
    eyebrow: 'AI Product Studio',
    headline: 'Product Studio für fokussierte AI-Produkte',
    intro: 'filzinger.lab entwickelt eigene und fokussierte digitale Produkte mit AI. Aus einem klar beschriebenen Problem entsteht über Product Discovery, Prototyping und Product Engineering ein nutzbares System, das unter realen Bedingungen geprüft und weiterentwickelt werden kann.',
    ctaTitle: 'Eine Produktidee mit Substanz besprechen',
    ctaText: 'Sie arbeiten an einer klaren Produktidee oder suchen einen technischen Produktpartner? Beschreiben Sie Problem, Zielgruppe und aktuellen Stand. Im ersten Austausch klären wir, ob das Vorhaben zur Arbeitsweise von filzinger.lab passt.',
    subject: 'Produktidee für filzinger.lab',
    sections: [
      {
        title: 'Was ein Product Studio auszeichnet',
        paragraphs: [
          'Ein Product Studio entwickelt nicht nur einzelne Funktionen. Es verbindet Produktstrategie, Design, Engineering und Betrieb zu einem durchgängigen Entwicklungsprozess. Ausgangspunkt ist ein konkretes Problem, das für eine klar beschriebene Nutzergruppe relevant ist. Technologie folgt dieser Aufgabe. Sie wird danach ausgewählt, welchen Beitrag sie zum Produkt leistet und wie verlässlich sie im Alltag eingesetzt werden kann.',
          'filzinger.lab konzentriert sich auf digitale Produkte, bei denen AI einen sinnvollen Teil der Nutzererfahrung oder Produktlogik übernimmt. Das kann die Strukturierung von Eingaben, die Aufbereitung von Informationen oder eine unterstützende Interaktion sein. AI wird nicht als dekoratives Feature ergänzt. Ihr Einsatz muss im Produkt verständlich bleiben und durch geeignete Regeln, Datenflüsse und Interfaces begrenzt werden.',
          'Die Arbeit endet nicht bei einer Präsentation oder einem isolierten Prototyp. Ein Produkt benötigt eine klare Oberfläche, belastbare Datenwege, einen technischen Betrieb und einen Weg für Weiterentwicklung. Genau diese Verbindung unterscheidet reale Produktentwicklung von einem Experiment, das nur unter vorbereiteten Bedingungen funktioniert.',
        ],
      },
      {
        title: 'Von der Produktidee zu einer prüfbaren Annahme',
        paragraphs: [
          'Viele Produktideen starten zu breit. Sie beschreiben eine Branche, eine Technologie oder eine lange Funktionsliste, aber noch kein präzises Nutzerproblem. Product Discovery reduziert diese Breite. Wer soll das Produkt verwenden? Welche Aufgabe wird heute unzureichend gelöst? In welcher Situation entsteht der Bedarf? Und woran lässt sich erkennen, ob ein neuer Ansatz tatsächlich verständlicher oder hilfreicher ist?',
          'Aus diesen Fragen entsteht keine endgültige Spezifikation, sondern eine priorisierte Annahme. Sie verbindet Zielgruppe, Problem und einen möglichen Produktkern. Unbekannte Punkte werden ausdrücklich festgehalten. So wird sichtbar, was durch Gespräche, einen klickbaren Ablauf, technische Versuche oder einen begrenzten funktionsfähigen Prototyp geprüft werden muss.',
          'Eine gute Discovery schützt das Produkt vor unnötiger Entwicklung. Sie kann zeigen, dass eine Idee noch zu viele Zielgruppen vermischt, dass wichtige Daten fehlen oder dass ein vorhandenes Werkzeug das Problem bereits ausreichend löst. Diese Erkenntnisse sind Teil produktorientierter Arbeit. Weitere Details beschreibt die Seite <a href="/produktentwicklung">Produktentwicklung</a>.',
        ],
      },
      {
        title: 'Prototypen als Werkzeug für Entscheidungen',
        paragraphs: [
          'Ein Prototyp beantwortet eine konkrete Frage. Für eine neue Nutzerführung kann eine klickbare Oberfläche genügen. Bei einem AI-Kern muss möglicherweise geprüft werden, ob Eingaben zuverlässig strukturiert werden können. Bei einem SaaS-Produkt kann die wichtigste Unsicherheit in Datenmodell, Mandantentrennung oder Bedienbarkeit liegen. Umfang und technische Tiefe richten sich nach der offenen Annahme.',
          'Prototyping ist deshalb keine verkürzte Produktentwicklung ohne Qualitätsanspruch. Es ist eine bewusst begrenzte Form des Lernens. Nicht benötigte Funktionen bleiben außen vor, während der entscheidende Ablauf realistisch genug umgesetzt wird, um brauchbare Rückmeldungen zu erhalten. Grenzen und vereinfachte Bereiche werden dokumentiert, damit ein Versuch nicht mit einem produktionsreifen System verwechselt wird.',
          'Bei AI-Produkten gehören auch schwierige Eingaben in den Test. Leere, widersprüchliche oder ungewöhnlich formulierte Angaben zeigen, ob das Produkt Unsicherheit verständlich behandelt. Eine überzeugende Modellantwort allein ist kein Produktbeleg. Entscheidend ist, wie das gesamte System mit Fehlern, Korrekturen und Erwartungen der Nutzer umgeht.',
        ],
      },
      {
        title: 'MVPs mit einem klaren Produktkern',
        paragraphs: [
          'Ein Minimum Viable Product ist die kleinste Produktversion, die einen zusammenhängenden Nutzen unter realen Bedingungen prüfen kann. „Minimum“ bedeutet nicht beliebig oder unfertig. Anmeldung, Datenverarbeitung, zentrale Nutzerführung und notwendige Sicherheitsmechanismen müssen für den vorgesehenen Einsatz funktionieren. Weggelassen werden Funktionen, die für die zentrale Annahme noch nicht erforderlich sind.',
          'Der MVP-Umfang entsteht aus Priorisierung. Welche Handlung muss ein Nutzer vollständig durchführen können? Welche Information braucht das Produkt dafür? Welche Rückmeldung macht das Ergebnis verständlich? Funktionen wie umfangreiche Konfiguration, zusätzliche Rollen oder zahlreiche Integrationen können später folgen, wenn der Kern tatsächlich genutzt und verstanden wird.',
          'Die Seite <a href="/ai-mvp-entwicklung">AI-MVP-Entwicklung</a> beschreibt diesen Weg ausführlicher. Sie zeigt auch, warum Modellqualität, Interface und technische Betriebsfähigkeit gemeinsam betrachtet werden müssen. Ein AI-MVP ist keine Modell-Demo mit Login, sondern eine begrenzte Produktversion mit echter Nutzerführung.',
        ],
      },
      {
        title: 'Product Engineering für AI und SaaS',
        paragraphs: [
          'Product Engineering verbindet Produktentscheidungen mit technischer Architektur. Datenmodell, Frontend, Backend, Authentifizierung und externe Dienste werden nicht isoliert geplant. Sie bilden gemeinsam den Produktablauf. Eine Architektur muss den aktuellen MVP tragen, ohne jede hypothetische spätere Funktion vorwegzunehmen. Gleichzeitig darf sie zentrale Anforderungen wie Datenschutz, Zugriffsschutz und Fehlerbehandlung nicht auf später verschieben.',
          'Bei AI-Funktionen kommen zusätzliche Fragen hinzu. Welche Eingaben werden an ein Modell übertragen? Wie wird Kontext ausgewählt? Wie erkennt das System fehlende oder ungeeignete Ergebnisse? Welche Schritte lassen sich reproduzierbar testen? Das Interface muss Unsicherheit und Bearbeitungszustände so darstellen, dass Nutzer das Ergebnis angemessen einordnen können.',
          'Für SaaS-Produkte gehören Betrieb und Weiterentwicklung von Beginn an zum Engineering. Deployment, Umgebungen, Protokollierung und ein kontrollierter Umgang mit Änderungen sind Teil des Produkts. Ziel ist keine unnötig komplexe Plattform, sondern eine technische Grundlage, die den validierten Produktkern verlässlich ausliefert.',
        ],
      },
      {
        title: 'Reale Produktentwicklung statt Feature-Sammlung',
        paragraphs: [
          'Ein Produkt wird nicht automatisch besser, wenn seine Funktionsliste wächst. Jede neue Funktion verändert Bedienung, Daten und Wartung. Deshalb werden Entscheidungen am Produktproblem und an beobachtbarer Nutzung ausgerichtet. Rückmeldungen werden nicht ungefiltert in Anforderungen übersetzt. Zuerst wird geprüft, welches zugrunde liegende Problem sie sichtbar machen.',
          'WeightCoach AI ist das erste Live-Produkt von filzinger.lab. Es verbindet Gewichtsverlauf, Mahlzeiten und Routinen in einem fokussierten digitalen System. Die Produktarbeit daran liefert praktische Erfahrung mit Nutzerführung, Datenstrukturen, wiederkehrender Nutzung und der Frage, wie ein Produkt trotz wachsender Möglichkeiten verständlich bleibt.',
          'Diese reale Produktperspektive prägt auch neue Vorhaben. Entscheidungen müssen nicht nur im Konzept plausibel sein, sondern in Code, Interface und Betrieb bestehen. Es werden keine Kunden, Reichweiten oder Erfolgskennzahlen erfunden. Produkte und Case Studies werden erst dann als Beleg dargestellt, wenn entsprechende Erfahrungen tatsächlich vorliegen.',
        ],
      },
      {
        title: 'Wann filzinger.lab der passende Rahmen ist',
        paragraphs: [
          'filzinger.lab passt zu Vorhaben mit einem fokussierbaren digitalen Produktproblem und der Bereitschaft, Annahmen schrittweise zu prüfen. Das kann eine eigene Produktlinie, ein gemeinsam entwickeltes SaaS-Konzept oder ein klar abgegrenzter AI-Produktkern sein. Wichtig ist, dass ein Produkt entstehen soll – nicht lediglich eine allgemeine technische Machbarkeitsstudie ohne Nutzerkontext.',
          'Der Studio-Ansatz ist weniger passend, wenn bereits eine vollständig spezifizierte Website nur umgesetzt werden soll oder wenn das Ziel ausschließlich aus einer langen Liste vorgegebener Features besteht. Produktentwicklung braucht Raum für Priorisierung, Tests und Entscheidungen. Gleichzeitig bleibt der Rahmen konkret: Jede Phase besitzt eine Frage, einen begrenzten Umfang und ein überprüfbares Ergebnis.',
          'Der erste Austausch dient der Einordnung. Er klärt Problem, Zielgruppe, aktuellen Stand, zentrale Unsicherheiten und mögliche nächste Schritte. Daraus entsteht keine Erfolgszusage. Es wird geprüft, ob Discovery, Prototyp oder ein begrenzter MVP der angemessene nächste Schritt ist und ob das Vorhaben zur Ausrichtung des Studios passt.',
          'Eine mögliche Zusammenarbeit wird entlang klarer Produktphasen strukturiert. Zu Beginn steht fest, welche Frage beantwortet werden soll, welche Mitwirkung erforderlich ist und welches Ergebnis die Phase liefert. Das kann ein geschärfter Produktkern, ein getesteter Prototyp oder eine belastbare technische Grundlage für den MVP sein. Umfang und nächste Entscheidung bleiben dadurch transparent.',
          'Produktverantwortung lässt sich nicht vollständig an ein Studio auslagern. Fachliches Wissen, Zugang zur Zielgruppe und Entscheidungen über den Markt bleiben wichtige Beiträge des Produktverantwortlichen. filzinger.lab übernimmt Produktdesign und Engineering im vereinbarten Rahmen und macht technische sowie konzeptionelle Konsequenzen sichtbar. Diese Zusammenarbeit verbindet die Nähe zum Problem mit der Fähigkeit, daraus ein reales digitales Produkt zu bauen.',
        ],
      },
    ],
  },
  {
    path: '/produktentwicklung',
    title: 'Produktentwicklung für AI- und SaaS-Produkte | filzinger.lab',
    description: 'Digitale Produktentwicklung von Discovery und Prototyping bis Product Engineering, MVP, Launch und kontinuierlicher Weiterentwicklung.',
    schemaType: 'Service',
    eyebrow: 'Produktentwicklung',
    headline: 'Digitale Produktentwicklung von der Idee bis zum Live-Produkt',
    intro: 'filzinger.lab entwickelt fokussierte AI- und SaaS-Produkte entlang eines durchgängigen Produktprozesses. Product Discovery, Prototyping, Design und Engineering greifen ineinander, damit aus einer Annahme ein nutzbares, prüfbares und betreibbares digitales Produkt wird.',
    ctaTitle: 'Den nächsten Produktschritt klären',
    ctaText: 'Sie haben ein konkretes Produktproblem, einen bestehenden Prototyp oder ein MVP, das technisch und konzeptionell weiterentwickelt werden soll? Senden Sie eine kurze Beschreibung von Zielgruppe, Produktkern und aktuellem Stand.',
    subject: 'Anfrage zur Produktentwicklung',
    sections: [
      {
        title: 'Produktentwicklung beginnt vor dem ersten Feature',
        paragraphs: [
          'Am Anfang eines digitalen Produkts steht selten eine vollständige und belastbare Spezifikation. Meist gibt es eine Beobachtung, ein eigenes Problem oder eine Idee für einen besseren Ablauf. Produktentwicklung übersetzt diesen Ausgangspunkt in prüfbare Annahmen. Sie klärt, wer das Produkt nutzen soll, welche Situation verbessert werden soll und welches Verhalten den Produktwert sichtbar macht.',
          'Eine frühe Funktionsliste kann dabei hinderlich sein. Sie legt Lösungen fest, bevor das Problem ausreichend verstanden ist. Stattdessen werden gewünschte Ergebnisse, Nutzungskontext und Einschränkungen beschrieben. Daraus entsteht ein Produktkern, der klein genug für einen realistischen Test und vollständig genug für eine zusammenhängende Nutzererfahrung ist.',
          'filzinger.lab verbindet diese konzeptionelle Arbeit direkt mit Design und Engineering. Dadurch werden Produktideen früh auf technische Konsequenzen geprüft. Gleichzeitig bestimmt nicht die bequemste technische Umsetzung allein das Produkt. Die Lösung muss für Nutzer verständlich sein und unter realen Bedingungen einen klaren Zweck erfüllen.',
        ],
      },
      {
        title: 'Product Discovery schafft einen belastbaren Fokus',
        paragraphs: [
          'Product Discovery sammelt nicht möglichst viele Ideen. Sie reduziert Unsicherheit. Gespräche, Prozessbeobachtung, vorhandene Daten und Wettbewerbsumfeld können zeigen, wie Nutzer ein Problem heute lösen. Dabei wird zwischen geäußerten Wünschen und dem zugrunde liegenden Bedarf unterschieden. Ein gewünschtes Feature ist oft nur ein erster Lösungsvorschlag.',
          'Die Discovery formuliert zentrale Annahmen: zur Zielgruppe, zum Problem, zur Nutzungssituation und zum möglichen Produktwert. Für jede Annahme wird ein angemessener Test gesucht. Manche Fragen lassen sich durch Recherche oder Gespräche klären, andere benötigen eine Oberfläche oder technische Interaktion. Nicht jede Unsicherheit rechtfertigt bereits vollständige Entwicklung.',
          'Das Ergebnis ist ein priorisierter Produktumfang mit bekannten offenen Punkten. Ebenso wichtig ist die Entscheidung, was bewusst nicht gebaut wird. Diese Begrenzung erleichtert die spätere Bewertung. Wenn ein Produkt zu viele unterschiedliche Aufgaben gleichzeitig lösen soll, bleibt unklar, welcher Teil tatsächlich nützlich ist.',
        ],
      },
      {
        title: 'UX und Interface als Teil der Produktlogik',
        paragraphs: [
          'Ein digitales Produkt kommuniziert seine Funktionsweise über das Interface. Nutzer müssen erkennen, welche Eingaben erforderlich sind, was das System gerade tut und wie ein Ergebnis weiterverwendet werden kann. Besonders bei AI-Funktionen sind Ladezustände, Unsicherheit, Korrekturmöglichkeiten und Grenzen keine Nebendetails. Sie bestimmen, ob das Produkt angemessen verstanden wird.',
          'Design beginnt deshalb mit dem zentralen Ablauf und nicht mit dekorativen Screens. Informationsarchitektur, Sprache, Eingabestruktur und Rückmeldung werden gemeinsam entwickelt. Ein Prototyp kann zeigen, ob Nutzer den vorgesehenen Weg finden, bevor Datenbank und Backend vollständig umgesetzt sind. Erkenntnisse fließen direkt in den Produktumfang ein.',
          'Das Ziel ist eine ruhige und fokussierte Oberfläche. Zusätzliche Optionen werden nur ergänzt, wenn sie eine relevante Aufgabe unterstützen. Ein Interface darf komplexe technische Arbeit im Hintergrund vereinfachen, sollte aber Unsicherheit oder wichtige Entscheidungen nicht verdecken. Klarheit ist ein Produktmerkmal, kein rein visueller Stil.',
        ],
      },
      {
        title: 'Prototyping zwischen Design und Technik',
        paragraphs: [
          'Prototypen können unterschiedliche Formen haben. Ein klickbarer Ablauf prüft Navigation und Informationsstruktur. Ein technischer Spike untersucht eine riskante Integration oder Modellfunktion. Ein funktionaler Prototyp verbindet ausgewählte Teile zu einer ersten realistischen Nutzung. Die Form folgt immer der Frage, die beantwortet werden soll.',
          'Bei AI-Produkten ist diese Trennung besonders wichtig. Eine Modellantwort in einer Entwicklungsumgebung sagt wenig über das spätere Produkt aus. Erst im Zusammenhang mit Eingaben, Kontext, Wartezeit, Fehlern und Nutzerreaktion wird sichtbar, ob die Funktion tragfähig ist. Prototyping verbindet daher technische Ergebnisqualität mit der konkreten Produkterfahrung.',
          'Ein Prototyp wird nicht stillschweigend zum Produkt erklärt. Vereinfachungen, manuelle Zwischenschritte und fehlende Sicherheitsmechanismen werden benannt. Wenn die Annahme bestätigt wird, folgt eine bewusste Engineering-Phase. Dabei können Teile verworfen oder neu aufgebaut werden, wenn sie nur für den schnellen Test geeignet waren.',
        ],
      },
      {
        title: 'Product Engineering mit angemessener Architektur',
        paragraphs: [
          'In der Engineering-Phase wird aus dem validierten Ablauf ein betreibbares System. Frontend, Backend, Datenmodell und externe Dienste werden so strukturiert, dass der Produktkern zuverlässig funktioniert. Architekturentscheidungen berücksichtigen reale Anforderungen und bekannte nächste Schritte, ohne eine hypothetische Großplattform vorwegzunehmen.',
          'Für SaaS-Produkte gehören Authentifizierung, Rollen, Datenzugriffe und Zustände zum Grundgerüst. Bei AI-Funktionen kommen Modellzugriff, Kontextaufbereitung, Ausgabeprüfung und Kostenkontrolle hinzu. Fehler müssen einen verständlichen Weg besitzen. Eine technische Ausnahme darf nicht dazu führen, dass Nutzer einen Vorgang unbemerkt doppelt auslösen oder Daten verlieren.',
          'Engineering umfasst auch Deployment, Konfiguration und Beobachtbarkeit. Ein Produkt muss aktualisiert und untersucht werden können. Protokolle werden passend zum Datenschutz gestaltet. Geheimnisse gehören nicht in den Quellcode. Abhängigkeiten werden bewusst gewählt, damit die Lösung wartbar bleibt und nicht durch unnötige Werkzeuge komplizierter wird.',
        ],
      },
      {
        title: 'MVP, Launch und reale Nutzung',
        paragraphs: [
          'Ein <a href="/ai-mvp-entwicklung">AI-MVP</a> bringt den fokussierten Produktkern in eine reale Nutzungssituation. Dafür müssen die entscheidenden Wege vollständig genug sein: Einstieg, zentrale Handlung, Ergebnis und notwendige Korrektur. Nicht benötigte Erweiterungen bleiben zurückgestellt. Der MVP dient nicht dazu, jede langfristige Produktidee gleichzeitig abzubilden.',
          'Vor dem Launch werden normale, unvollständige und fehlerhafte Fälle getestet. Bei AI-Funktionen zählen nicht nur gute Ausgaben. Das Produkt muss auch schwache Ergebnisse, fehlende Daten und technische Ausfälle angemessen behandeln. Hinweise und Grenzen werden so formuliert, dass Nutzer keine Sicherheit annehmen, die das System nicht bieten kann.',
          'Nach dem Launch beginnt eine neue Phase der Produktentwicklung. Reale Nutzung zeigt, wo Erklärungen fehlen, welche Schritte wiederholt werden und welche Funktionen kaum relevant sind. Diese Beobachtungen werden in Produktentscheidungen übersetzt. Es gibt keine pauschale Zusage, dass ein MVP Markterfolg erreicht. Es schafft eine bessere Grundlage für die nächste Entscheidung.',
        ],
      },
      {
        title: 'Kontinuierliche Weiterentwicklung ohne Feature-Druck',
        paragraphs: [
          'Ein Live-Produkt benötigt Pflege. Browser, Betriebssysteme, externe Schnittstellen und Modellanbieter verändern sich. Gleichzeitig entstehen neue Nutzeranforderungen. Weiterentwicklung priorisiert deshalb Stabilität, Verständlichkeit und Produktwert. Nicht jede neue technische Möglichkeit muss in das Produkt aufgenommen werden.',
          'Rückmeldungen werden nach Mustern ausgewertet. Ein einzelner Wunsch kann auf ein breiteres Problem hinweisen, muss aber nicht direkt als neue Einstellung umgesetzt werden. Kleine Änderungen am Ablauf oder an der Sprache können wirksamer sein als zusätzliche Funktionen. Product Engineering und Design bleiben auch nach dem Launch eng verbunden.',
          'Als <a href="/product-studio">Product Studio</a> bringt filzinger.lab eigene Produkterfahrung in diese Entscheidungen ein. WeightCoach AI dient als reales Live-Produkt, an dem Produktkern, Datenstruktur und wiederkehrende Nutzung weiterentwickelt werden. Neue Vorhaben werden mit derselben Aufmerksamkeit für Fokus, Betrieb und nachvollziehbare Produktentscheidungen aufgebaut.',
          'Zur Weiterentwicklung gehört eine verlässliche Übergabe. Quellcode, Umgebungen, zentrale Architekturentscheidungen und bekannte Einschränkungen werden nachvollziehbar dokumentiert. Dadurch bleibt erkennbar, welche Bestandteile zum stabilen Produktkern gehören und an welchen Stellen spätere Änderungen besondere Prüfung benötigen. Eine Dokumentation ersetzt keine Zusammenarbeit, verhindert aber unnötiges Wissen in einzelnen Köpfen.',
          'Auch Produktverantwortung und technische Verantwortung werden eindeutig verteilt. Wer priorisiert Anforderungen, wer gibt einen Release frei und wer reagiert auf betriebliche Störungen? Diese Fragen werden passend zur Produktphase beantwortet. Bei einem frühen MVP kann der Rahmen klein sein; mit realer Nutzung steigen Anforderungen an Support, Datenschutz, Monitoring und verlässliche Release-Prozesse.',
          'Eine Produktphase endet mit einer bewussten Entscheidung. Das Ergebnis kann in die nächste Entwicklungsstufe übergehen, zunächst weiter beobachtet oder neu fokussiert werden. Nicht jede Erkenntnis führt zu zusätzlicher Software. Manchmal verbessert eine klarere Nutzerführung den Produktkern stärker als ein neues Feature. Diese Offenheit schützt Fokus und technische Wartbarkeit.',
          'Für bestehende Produkte kann der Einstieg auch mit einer Bestandsaufnahme beginnen. Nutzerführung, Architektur, Datenmodell und offene Produktannahmen werden gemeinsam betrachtet. Daraus entsteht keine pauschale Neubauempfehlung. Ziel ist zu erkennen, welche vorhandenen Teile tragfähig sind und welche begrenzte Änderung den nächsten Produktschritt am besten unterstützt.',
        ],
      },
    ],
  },
  {
    path: '/ai-mvp-entwicklung',
    title: 'AI-MVP-Entwicklung: vom Prototyp zum Produkt | filzinger.lab',
    description: 'AI-MVP entwickeln: Produktannahmen validieren, AI-Prototypen testen und einen fokussierten, nutzbaren SaaS-Produktkern technisch umsetzen.',
    schemaType: 'Service',
    eyebrow: 'AI-MVP-Entwicklung',
    headline: 'AI-MVP entwickeln und Produktannahmen realistisch validieren',
    intro: 'Ein AI-MVP verbindet einen klaren Produktkern mit einer begrenzten, überprüfbaren AI-Funktion. filzinger.lab entwickelt Prototypen und MVPs, die nicht nur eine Modelldemo zeigen, sondern Nutzerführung, Daten, technische Grenzen und realen Betrieb gemeinsam prüfen.',
    ctaTitle: 'Den Kern Ihres AI-MVPs schärfen',
    ctaText: 'Sie haben eine AI-Produktidee, einen technischen Versuch oder einen bestehenden Prototyp? Senden Sie Zielgruppe, Problem, wichtigste Annahme und aktuellen Stand. Gemeinsam lässt sich ein angemessener nächster Produktschritt einordnen.',
    subject: 'Anfrage zur AI-MVP-Entwicklung',
    sections: [
      {
        title: 'Was ein AI-MVP tatsächlich leisten soll',
        paragraphs: [
          'Ein AI-MVP ist eine begrenzte Produktversion, die eine zentrale Annahme unter realistischen Bedingungen prüft. Es geht nicht darum, eine möglichst eindrucksvolle Modellantwort zu präsentieren. Nutzer müssen einen vollständigen Kernablauf durchlaufen können. Eingaben, Verarbeitung, Ergebnis und Korrektur gehören zusammen und müssen für den vorgesehenen Kontext verständlich sein.',
          'Die AI-Funktion besitzt dabei eine klare Aufgabe. Sie kann Inhalte strukturieren, Vorschläge erzeugen oder Informationen in einer neuen Form zugänglich machen. Der Produktwert entsteht aber nicht allein aus dem Modell. Interface, Datenbasis, Geschwindigkeit, Grenzen und der anschließende Handlungsschritt entscheiden darüber, ob die Funktion tatsächlich nutzbar ist.',
          '„Minimum“ beschreibt die begrenzte Breite, nicht fehlende Verantwortung. Notwendige Sicherheits-, Datenschutz- und Zugriffsthemen werden passend zum Einsatz berücksichtigt. Ein MVP darf Funktionen weglassen, aber er sollte Nutzer nicht über seinen Reifegrad oder die Verlässlichkeit von Ergebnissen täuschen.',
        ],
      },
      {
        title: 'Die wichtigste Produktannahme auswählen',
        paragraphs: [
          'Eine AI-Produktidee enthält oft mehrere unbekannte Faktoren. Benötigt die Zielgruppe diese Unterstützung überhaupt? Liegen geeignete Eingaben vor? Liefert das Modell eine ausreichende Qualität? Verstehen Nutzer das Ergebnis? Passt der Ablauf in ihren Alltag? Ein MVP kann nicht alle Fragen gleichzeitig mit derselben Tiefe beantworten.',
          'Product Discovery ordnet die Unsicherheiten nach Bedeutung. Wenn das Problem selbst nicht bestätigt ist, sollte zunächst die Nutzungssituation untersucht werden. Ist die technische Kernfunktion fraglich, kann ein fokussierter Prototyp sinnvoll sein. Erst wenn Problem und mögliche Lösung ausreichend plausibel sind, lohnt sich ein zusammenhängender MVP.',
          'Die Seite <a href="/produktentwicklung">Produktentwicklung</a> beschreibt den übergeordneten Prozess. Für einen AI-MVP wird daraus ein konkreter Testplan: zentrale Annahme, benötigte Produktfunktionen, geeignete Beispiele, Bewertungsmaßstab und bewusste Grenzen. Dieser Fokus verhindert, dass eine allgemeine Plattform gebaut wird, bevor der eigentliche Produktkern verstanden ist.',
        ],
      },
      {
        title: 'Vom technischen Experiment zum Produktprototyp',
        paragraphs: [
          'Ein technisches Experiment kann zeigen, dass ein Modell grundsätzlich eine bestimmte Art von Eingabe verarbeitet. Es beantwortet jedoch noch nicht, wie Nutzer Daten bereitstellen, wie Kontext ausgewählt wird und was bei ungeeigneten Ergebnissen geschieht. Der Produktprototyp ergänzt genau diese Umgebung. Er macht die Funktion als Ablauf erfahrbar.',
          'Dabei werden realistische Varianten verwendet. Ideale Beispiele allein erzeugen ein verzerrtes Bild. Kurze, lange, unvollständige oder widersprüchliche Eingaben zeigen, welche Vorverarbeitung und Rückfragen notwendig sind. Das Interface muss deutlich machen, ob ein Ergebnis noch bearbeitet, geprüft oder ergänzt werden sollte.',
          'Der Prototyp bleibt bewusst begrenzt. Teile können manuell unterstützt oder vereinfacht sein, solange dies dokumentiert wird und die zu prüfende Annahme nicht verfälscht. Nach dem Test wird entschieden, welche Bestandteile produktionsreif neu umgesetzt werden müssen und welche Idee verworfen werden kann.',
        ],
      },
      {
        title: 'Modell, Daten und Kontext als Produktentscheidung',
        paragraphs: [
          'Die Auswahl eines Modells folgt der Produktaufgabe. Ergebnisqualität, Antwortzeit, Kosten, Datenschutzanforderungen und technische Integrationsmöglichkeiten spielen zusammen. Das größte Modell ist nicht automatisch die beste Produktentscheidung. Für einen eng definierten Schritt kann ein kleinerer oder stärker strukturierter Ansatz geeigneter sein.',
          'Kontext bestimmt, welche Informationen das Modell für eine Aufgabe erhält. Zu wenig Kontext führt zu unvollständigen Ergebnissen, zu viel Kontext kann Kosten, Laufzeit und Unübersichtlichkeit erhöhen. Unternehmens- oder Produktwissen muss aktuell, freigegeben und für den jeweiligen Nutzer zugänglich sein. Ein MVP sollte diese Datenwege explizit abbilden.',
          'Ausgaben werden soweit möglich strukturiert. Kategorien, Felder oder nachvollziehbare Quellenhinweise erleichtern Prüfung und Weiterverwendung. Freie Texte bleiben sinnvoll, wenn sie zum Produktziel gehören, benötigen aber klare Erwartungen und Korrekturmöglichkeiten. Kein Prompt beseitigt grundsätzlich alle Modellfehler.',
        ],
      },
      {
        title: 'Human in the Loop sinnvoll gestalten',
        paragraphs: [
          'Menschliche Kontrolle ist nicht nur ein zusätzlicher Bestätigungsbutton. Nutzer müssen verstehen, was sie prüfen sollen und welche Grundlage dafür verfügbar ist. Das Produkt zeigt Eingabe, Ergebnis und relevante Quellen oder Annahmen in einer Form, die einen tatsächlichen Vergleich ermöglicht. Andernfalls wird eine Freigabe schnell zur bedeutungslosen Routine.',
          'Welche Kontrolle notwendig ist, hängt von den Folgen eines Ergebnisses ab. Ein persönlicher Entwurf kann anders behandelt werden als eine Veröffentlichung oder eine Änderung an wichtigen Daten. Der MVP definiert diese Grenzen früh, damit die spätere Architektur nicht auf einer unrealistischen vollständigen Automatisierung beruht.',
          'Gute Korrekturmöglichkeiten liefern zugleich Produktwissen. Sie zeigen, welche Fehlerarten häufig auftreten und wo Eingaben oder Erklärungen verbessert werden können. Diese Erkenntnisse sollten datensparsam und transparent erhoben werden. Sie dienen der Produktverbesserung, nicht der Sammlung möglichst vieler Nutzerdaten.',
        ],
      },
      {
        title: 'SaaS-Grundlagen für einen betreibbaren MVP',
        paragraphs: [
          'Ein AI-MVP benötigt je nach Produkt Anmeldung, Nutzerkonten, Datenhaltung und eine klare Trennung von Zugriffsbereichen. Diese Grundlagen dürfen klein umgesetzt sein, müssen aber zum tatsächlichen Einsatz passen. Ein öffentlicher Demo-Link ist kein Ersatz für ein angemessen geschütztes SaaS-Produkt, sobald echte Nutzer- oder Geschäftsdaten verarbeitet werden.',
          'Deployment und Umgebungen werden so eingerichtet, dass Änderungen kontrolliert ausgeliefert werden können. Fehlerprotokolle und grundlegende Überwachung helfen, technische Probleme zu erkennen. Modellzugriffe, API-Schlüssel und andere Geheimnisse werden serverseitig geschützt. Laufende Dienste und Nutzungskosten werden sichtbar gemacht, bevor der MVP erweitert wird.',
          'Die Architektur bleibt proportional. Ein früher MVP benötigt selten alle Mechanismen einer großen Plattform. Gleichzeitig sollten zentrale Daten- und Sicherheitsentscheidungen nicht durch schnelle Abkürzungen unbrauchbar werden. <a href="/product-studio">filzinger.lab als Product Studio</a> verbindet diesen technischen Rahmen mit der Produktpriorisierung.',
        ],
      },
      {
        title: 'Validierung ohne erfundene Erfolgssignale',
        paragraphs: [
          'Ein MVP validiert nicht automatisch ein Geschäftsmodell. Er erzeugt eine bessere Grundlage für Entscheidungen. Vor dem Test wird festgelegt, welche Beobachtungen relevant sind: Verstehen Nutzer den Kernablauf? Können sie ein sinnvolles Ergebnis erreichen? Wo brechen sie ab? Welche Korrekturen sind notwendig? Diese Fragen sind konkreter als eine allgemeine Bewertung, ob die Idee „gut ankommt“.',
          'Qualitative Rückmeldungen und beobachtete Nutzung werden zusammen betrachtet. Einzelne positive Aussagen ersetzen keine belastbare Nachfrage. Ebenso bedeutet ein technischer Fehler nicht zwangsläufig, dass das Produktproblem ungeeignet ist. Die Auswertung trennt Produktwert, Bedienung und technische Qualität, damit die nächste Entscheidung auf dem richtigen Problem ansetzt.',
          'filzinger.lab verspricht keine bestimmten Nutzerzahlen, Finanzierungsresultate oder Markterfolge. Der Wert einer strukturierten MVP-Entwicklung liegt in der Reduktion von Unsicherheit und im Aufbau eines real nutzbaren Produktkerns. Danach kann das Produkt gezielt weiterentwickelt, neu fokussiert oder bewusst beendet werden.',
          'Die Entscheidung nach dem MVP berücksichtigt mehrere Ebenen. Produktseitig wird geprüft, ob Nutzer den Kernablauf verstehen und wiederverwenden möchten. Technisch zählen Stabilität, Ergebnisqualität und der Aufwand für Betrieb und Kontrolle. Wirtschaftlich werden reale Kosten und ein plausibler weiterer Einsatz betrachtet, ohne aus wenigen frühen Rückmeldungen eine allgemeine Marktprognose abzuleiten.',
          'Wenn die zentrale Annahme trägt, folgt keine automatische Vollausstattung. Die nächste Version konzentriert sich auf die größten Hindernisse im validierten Ablauf. Das können bessere Eingaben, verständlichere Ergebnisse, stabilere Datenwege oder ausgewählte SaaS-Funktionen sein. Jede Erweiterung erhält einen Bezug zur Nutzung und wird nicht nur aufgenommen, weil sie technisch verfügbar ist.',
          'Wenn die Annahme nicht trägt, wird unterschieden, ob Problem, Zielgruppe, Interface oder technische Umsetzung die Ursache sind. Ein begründeter Stopp kann die richtige Produktentscheidung sein. Ebenso kann ein kleinerer, anders fokussierter Produktkern entstehen. Dokumentierte Erkenntnisse verhindern, dass dieselben offenen Fragen in einer späteren Version lediglich mit mehr Funktionen überdeckt werden.',
          'Der MVP bleibt dabei ein Mittel zur Produktentscheidung und kein Selbstzweck. Zeit und Engineering fließen bevorzugt in den Ablauf, der die wichtigste Annahme sichtbar macht. Technische Nebenprojekte, umfangreiche Administrationsbereiche oder mehrere Zielgruppen werden zurückgestellt, wenn sie für diese Prüfung nicht notwendig sind. So bleibt die Auswertung verständlich und der nächste Schritt lässt sich auf konkrete Beobachtungen stützen.',
        ],
      },
    ],
  },
] as const satisfies readonly StudioSeoPage[];

export function getStudioSeoPage(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  return studioSeoPages.find((page) => page.path === path) ?? null;
}
