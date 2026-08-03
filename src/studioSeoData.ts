import { knowledgeSeoPages } from './knowledgeSeoData';

export type StudioSeoPage = {
  path: string;
  title: string;
  description: string;
  schemaType: 'WebPage' | 'Service' | 'CollectionPage' | 'SoftwareApplication' | 'Article';
  eyebrow: string;
  headline: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
  subject: string;
  ctaLabel?: string;
  ctaHref?: string;
  faqs?: readonly { question: string; answer: string }[];
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
  {
    path: '/ai-saas-entwicklung',
    title: 'AI-SaaS-Entwicklung für betreibbare Produkte | filzinger.lab',
    description: 'AI-SaaS-Entwicklung von Produktlogik und Architektur bis Nutzerführung, Betrieb und kontrollierter Weiterentwicklung.',
    schemaType: 'Service',
    eyebrow: 'AI-SaaS-Entwicklung',
    headline: 'AI-SaaS-Produkte entwickeln und verlässlich betreiben',
    intro: 'filzinger.lab entwickelt AI-SaaS-Produkte als zusammenhängende digitale Systeme. Produktlogik, Nutzerführung, Softwarearchitektur und Betrieb werden gemeinsam gestaltet, damit aus einer AI-Funktion ein verständliches, wartbares und real nutzbares Produkt entstehen kann.',
    ctaTitle: 'Ein konkretes AI-SaaS-Produkt besprechen',
    ctaText: 'Sie entwickeln ein AI-SaaS-Produkt oder wollen einen bestehenden Prototyp in ein betreibbares System überführen? Beschreiben Sie Zielgruppe, Produktkern und aktuellen technischen Stand. Gemeinsam lässt sich ein sinnvoll begrenzter nächster Produktschritt einordnen.',
    subject: 'Anfrage zur AI-SaaS-Entwicklung',
    sections: [
      {
        title: 'AI-SaaS ist mehr als ein Modellzugang',
        paragraphs: [
          'Ein AI-SaaS-Produkt verbindet eine dauerhaft erreichbare Software mit einer klaren Aufgabe, Nutzerkonten, Daten und einer kontrollierten AI-Funktion. Der Zugriff auf ein Sprach- oder Analysemodell ist dabei nur ein Baustein. Erst Produktlogik, Interface und ein belastbarer Betrieb machen daraus ein Angebot, das Menschen wiederholt verwenden und in ihren Alltag einordnen können.',
          'Die Entwicklung beginnt deshalb beim Produktproblem. Welche Situation soll verbessert werden, welche Eingaben liegen realistisch vor und welches Ergebnis ist für die Zielgruppe verständlich? Aus diesen Fragen entsteht der zentrale Ablauf. Das Modell wird dort eingesetzt, wo es einen erkennbaren Beitrag leistet. Deterministische Regeln bleiben sinnvoll, wenn feste Berechnungen, Berechtigungen oder eindeutige Zustände erforderlich sind.',
          'filzinger.lab arbeitet als <a href="/product-studio">AI Product Studio</a> an dieser Verbindung von Produkt und Engineering. Der Fokus liegt nicht auf allgemeiner KI-Beratung, sondern auf einem konkreten digitalen Produkt. Entscheidungen müssen sich im Interface, im Code und später im Betrieb bewähren. Eine überzeugende Demo allein beantwortet diese Anforderungen noch nicht.',
        ],
      },
      {
        title: 'Produktlogik mit klaren Grenzen entwerfen',
        paragraphs: [
          'Produktlogik beschreibt, wie Eingaben, Zustände, Regeln und AI-Ausgaben zusammenspielen. Ein Nutzer muss erkennen können, was das System gerade verarbeitet, welches Ergebnis entstanden ist und welche Handlung als Nächstes möglich ist. Unklare Zustände werden nicht durch flüssige Modelltexte gelöst. Sie benötigen eine nachvollziehbare Struktur und eindeutige Übergänge im Produkt.',
          'Bei probabilistischen Ausgaben gehören Unsicherheit und Fehlerfälle zur Konzeption. Eingaben können fehlen, widersprüchlich sein oder außerhalb des vorgesehenen Bereichs liegen. Ein Modell kann unpassende Inhalte erzeugen oder ein erwartetes Format verfehlen. Das Produkt braucht daher Validierung, begrenzte Wiederholungsversuche und verständliche Rückmeldungen, statt jedes Ergebnis ungeprüft als richtig zu behandeln.',
          'Menschliche Kontrolle wird passend zur Tragweite einer Aktion eingeplant. Ein Entwurf darf anders behandelt werden als eine Veröffentlichung oder eine dauerhafte Änderung von Nutzerdaten. Freigaben, Korrekturen und Abbruchmöglichkeiten sind Teil der Produktlogik. Sie werden nicht erst ergänzt, wenn der Kern technisch bereits auf vollständige Automatisierung ausgerichtet wurde.',
        ],
      },
      {
        title: 'Softwarearchitektur für einen fokussierten Produktkern',
        paragraphs: [
          'Die Architektur eines AI-SaaS-Produkts verbindet Frontend, Backend, Datenhaltung, Authentifizierung und externe Modelldienste. Ihre Aufgabe ist nicht, jede denkbare spätere Erweiterung vorwegzunehmen. Sie muss den aktuellen Produktkern sauber tragen und Stellen sichtbar machen, an denen Daten, Modellanbieter oder Produktregeln kontrolliert verändert werden können.',
          'Modellzugriffe gehören auf eine geschützte Serverseite. API-Schlüssel und interne Anweisungen dürfen nicht im Browser offengelegt werden. Eingaben werden nur in dem Umfang weitergegeben, der für die jeweilige Funktion erforderlich ist. Zugriffsrechte, Mandantentrennung und Löschwege richten sich nach den tatsächlich verarbeiteten Daten und dem vorgesehenen Nutzungskontext.',
          'Eine klare Trennung zwischen Produktlogik und Modellintegration reduziert Abhängigkeiten. Prompts, Modellparameter und Ergebnisverarbeitung können sich verändern, ohne dass die gesamte Nutzerführung neu gebaut werden muss. Gleichzeitig bleibt sichtbar, welche Teile zuverlässig getestet werden können und an welchen Stellen Stichproben oder qualitative Prüfungen notwendig sind. Das erleichtert eine kontrollierte Weiterentwicklung.',
        ],
      },
      {
        title: 'Nutzerführung für variable AI-Ergebnisse',
        paragraphs: [
          'Ein gutes Interface erklärt nicht die Technologie, sondern führt durch eine konkrete Aufgabe. Eingabefelder, Beispiele und Einschränkungen helfen Nutzern, geeignete Informationen bereitzustellen. Während der Verarbeitung zeigt das Produkt einen verständlichen Zustand. Anschließend wird das Ergebnis so dargestellt, dass es gelesen, geprüft und bei Bedarf korrigiert werden kann.',
          'AI-Ergebnisse benötigen häufig mehr Kontext als eine gewöhnliche Erfolgsmeldung. Das Interface kann kenntlich machen, auf welchen Eingaben ein Ergebnis beruht oder wo Annahmen enthalten sind. Es sollte keine Sicherheit suggerieren, die das System nicht liefern kann. Hilfreich sind klare Formulierungen, begrenzte Auswahlmöglichkeiten und ein Weg zurück zur Ausgangseingabe.',
          'Wiederkehrende Nutzung stellt andere Anforderungen als ein einmaliger Prototyp. Nutzer müssen frühere Zustände finden, Daten nachvollziehen und ihre Arbeit fortsetzen können. Konsistente Begriffe und stabile Interaktionsmuster werden wichtiger als spektakuläre Einzelantworten. Die <a href="/produktentwicklung">digitale Produktentwicklung</a> betrachtet diese Nutzerführung gemeinsam mit den technischen Folgen jeder Entscheidung.',
        ],
      },
      {
        title: 'Vom MVP zum betreibbaren SaaS-Produkt',
        paragraphs: [
          'Ein MVP begrenzt den Funktionsumfang, nicht die Verantwortung für den vorgesehenen Einsatz. Der zentrale Ablauf muss vollständig nutzbar sein. Dazu können Anmeldung, Datenspeicherung, Fehlerbehandlung und ein geeigneter Schutz sensibler Zugänge gehören. Funktionen ohne direkten Bezug zur wichtigsten Produktannahme bleiben zunächst außen vor.',
          'Die <a href="/ai-mvp-entwicklung">AI-MVP-Entwicklung</a> dient dazu, Produktwert, Verständlichkeit und technische Machbarkeit unter realistischen Bedingungen zu prüfen. Nach dieser Phase werden Beobachtungen getrennt ausgewertet: Liegt ein Problem an der Aufgabe, an der Nutzerführung, an der Modellqualität oder am Betrieb? Erst diese Einordnung liefert eine brauchbare Grundlage für weitere Investitionen.',
          'Der Übergang zu einem dauerhaften SaaS-Produkt erfolgt schrittweise. Priorität haben wiederkehrende Hindernisse im Kernablauf, Stabilität und ein nachvollziehbarer Umgang mit Daten. Rollen, Integrationen oder umfangreiche Administrationsfunktionen folgen nur, wenn der Produktkontext sie tatsächlich verlangt. So bleibt die Architektur proportional und die Bedienung verständlich.',
        ],
      },
      {
        title: 'Betrieb, Beobachtbarkeit und laufende Kosten',
        paragraphs: [
          'AI-SaaS endet nicht mit dem Deployment. Der Betrieb umfasst Verfügbarkeit, Fehlerprotokolle, kontrollierte Releases und die Überwachung zentraler Produktwege. Technische Signale müssen datensparsam erhoben und so aufbereitet werden, dass konkrete Probleme erkennbar sind. Eine Sammlung möglichst vieler Ereignisse ersetzt keine gezielte Beobachtbarkeit.',
          'Modellaufrufe verursachen variable Laufzeiten und Kosten. Deshalb werden Verbrauch, Fehlerquoten und technische Grenzen entlang der realen Funktion betrachtet. Caching, kleinere Modelle oder vorberechnete Ergebnisse können sinnvoll sein, wenn sie zum Produkt passen. Eine Optimierung darf jedoch nicht dazu führen, dass Nutzer veraltete oder für ihren Kontext ungeeignete Ausgaben erhalten.',
          'Änderungen an Modellen oder Prompts werden wie Produktänderungen behandelt. Vergleichbare Testfälle helfen, unerwünschte Abweichungen zu erkennen. Bei wichtigen Funktionen werden neue Varianten kontrolliert eingeführt und beobachtet. Es gibt dennoch keine technische Garantie für vollständig fehlerfreie Modellantworten oder unterbrechungsfreien Betrieb; Produkt und Kommunikation müssen diese Grenzen angemessen berücksichtigen.',
        ],
      },
      {
        title: 'Weiterentwicklung anhand realer Produktfragen',
        paragraphs: [
          'Nach dem Start konkurrieren neue Ideen schnell um Aufmerksamkeit. Eine belastbare Roadmap ordnet sie nach dem Produktproblem, beobachteten Hindernissen und technischem Risiko. Rückmeldungen werden nicht unmittelbar als Feature-Auftrag verstanden. Zuerst wird geklärt, welche Situation dahintersteht und ob eine Änderung den zentralen Ablauf tatsächlich verbessert.',
          'AI-Funktionen werden gemeinsam mit Datenwegen und Interface weiterentwickelt. Eine neue Modellversion allein löst selten jedes Produktproblem. Häufig liegen Verbesserungen in klareren Eingaben, besser strukturierten Ergebnissen oder einer sinnvolleren Kontrolle. Jede Änderung sollte im Zusammenspiel geprüft werden, bevor sie dauerhaft Teil des Produkts wird.',
          'filzinger.lab verbindet dafür Product Discovery und Product Engineering in einem durchgängigen Rahmen. Ein erster Austausch klärt, ob ein neuer Produktkern, ein bestehender Prototyp oder ein laufendes SaaS-System die geeignete Ausgangslage bildet. Daraus entsteht keine Zusage für Markt- oder Geschäftserfolg, sondern ein begründeter nächster Schritt für reale Produktentwicklung.',
          'Zu diesem nächsten Schritt gehört eine klare Verantwortungsverteilung. Fachliche Entscheidungen, Zugang zur Zielgruppe und Prioritäten des Geschäftsmodells bleiben beim Produktverantwortlichen verankert. Das Studio übersetzt diese Voraussetzungen in Produktabläufe und technische Entscheidungen, weist auf Abhängigkeiten hin und macht offene Annahmen sichtbar. Für bestehende Systeme wird außerdem betrachtet, welche Datenwege und Komponenten bereits belastbar sind und wo eine schrittweise Ablösung sinnvoller ist als ein vollständiger Neubau. So entsteht kein pauschaler Technologievorschlag, sondern ein Arbeitsrahmen für das konkrete SaaS-Produkt. Umfang, Mitwirkung und erwartetes Ergebnis werden für jede Phase getrennt beschrieben. Erst nach ihrer Auswertung wird entschieden, ob und in welcher Form die Entwicklung fortgesetzt wird.',
          'Auch die Wahl externer Dienste folgt diesem Rahmen. Modellanbieter, Hosting und weitere Plattformen werden nach Produktanforderungen, Datenkontext, technischer Eignung und Wechselaufwand bewertet. Eine frühe Entscheidung ist nicht automatisch dauerhaft. Schnittstellen und Datenflüsse sollten so dokumentiert sein, dass spätere Anpassungen nachvollziehbar bleiben. Vollständige Unabhängigkeit von Drittanbietern ist bei einem SaaS-Produkt selten realistisch; entscheidend ist ein bewusster Umgang mit diesen Abhängigkeiten.',
        ],
      },
    ],
  },
  {
    path: '/produkte',
    title: 'Produkte aus dem AI Product Studio | filzinger.lab',
    description: 'Produkte von filzinger.lab: WeightCoach AI als Live-Produkt und Fußball Training AI als Produkt in Entwicklung.',
    schemaType: 'CollectionPage',
    eyebrow: 'Produkte',
    headline: 'Reale Produkte aus dem filzinger.lab Product Studio',
    intro: 'filzinger.lab entwickelt eigene digitale Produkte mit einem klaren Problemfokus. WeightCoach AI ist als erstes Produkt live. Fußball Training AI befindet sich in Entwicklung und wird bewusst nicht als fertiges oder verfügbares Produkt dargestellt.',
    ctaTitle: 'Über ein fokussiertes Produktvorhaben sprechen',
    ctaText: 'Sie arbeiten an einer konkreten Produktidee und suchen einen Studio-Partner für Discovery, Prototyping oder Engineering? Beschreiben Sie Problem, Zielgruppe und aktuellen Stand. Der erste Austausch dient der sachlichen Einordnung eines möglichen nächsten Schritts.',
    subject: 'Produktvorhaben für filzinger.lab',
    sections: [
      {
        title: 'Produkte statt abstrakter Technologie-Demos',
        paragraphs: [
          'Die Produktübersicht zeigt nur Vorhaben, an denen filzinger.lab tatsächlich arbeitet. Ein Produkt erhält seinen Platz nicht deshalb, weil eine technische Idee interessant klingt. Es braucht ein benennbares Problem, eine erkennbare Zielgruppe und einen konkreten Status. Live, in Entwicklung und frühe Annahme sind unterschiedliche Zustände und werden entsprechend bezeichnet.',
          'Digitale Produkte bestehen aus mehr als einer einzelnen AI-Funktion. Nutzerführung, Datenstruktur, verständliche Rückmeldungen und ein betreibbarer technischer Rahmen gehören zusammen. Deshalb werden keine losgelösten Modell-Demos als fertige Produkte präsentiert. Eine Demo kann eine Annahme prüfen, bildet aber noch keine verlässliche Nutzung über einen längeren Zeitraum ab.',
          'Diese Haltung gehört zur Arbeit als <a href="/product-studio">Product Studio</a>. Produktideen werden fokussiert, prototypisch geprüft und nur mit begründetem Umfang weiterentwickelt. Nicht jede Idee erreicht denselben Stand. Die Übersicht bleibt deshalb bewusst konkret und unterscheidet ein verfügbares Produkt von einem Produkt, das sich noch in Entwicklung befindet.',
        ],
      },
      {
        title: 'WeightCoach AI: das erste Live-Produkt',
        paragraphs: [
          'WeightCoach AI ist das erste Live-Produkt von filzinger.lab. Es unterstützt dabei, Gewichtsverlauf, Mahlzeiten und Routinen an einem Ort zu dokumentieren und über die Zeit nachvollziehbar zu halten. Der Produktkern liegt in einer übersichtlichen persönlichen Dokumentation, nicht in medizinischer Diagnose, Behandlung oder einem versprochenen körperlichen Ergebnis.',
          'Die wiederkehrende Nutzung prägt die Produktentscheidungen. Eingaben müssen im Alltag verständlich bleiben, gespeicherte Informationen müssen wieder auffindbar sein und Entwicklungen dürfen nicht durch unnötige Komplexität verdeckt werden. Funktionen werden deshalb danach bewertet, ob sie diesen Kern stärken und in eine konsistente Nutzerführung passen.',
          'Weitere Informationen zu Problem, Zielgruppe, Funktionsrahmen und Produktstatus stehen auf der Seite <a href="/produkte/weightcoach-ai">WeightCoach AI</a>. Das Produkt besitzt außerdem eine eigene externe Website unter <a href="https://weightcoach-ai.de" target="_blank" rel="noreferrer">weightcoach-ai.de</a>. Dort befindet sich der direkte Zugang zum aktuellen Produktangebot.',
        ],
      },
      {
        title: 'Fußball Training AI: in Entwicklung',
        paragraphs: [
          'Fußball Training AI befindet sich in Entwicklung. Das Vorhaben beschäftigt sich mit der Strukturierung von Trainingseinheiten, Übungen und Entwicklung im Fußballkontext. Dieser Status bedeutet ausdrücklich, dass hier kein fertiges, öffentlich verfügbares Produkt beschrieben wird. Funktionsumfang, Ausgestaltung und spätere Bereitstellung können sich während der Produktarbeit verändern.',
          'In einer Entwicklungsphase werden Problemverständnis, Datenstruktur und zentrale Abläufe geprüft. Dabei kann sich zeigen, dass Annahmen angepasst, Funktionen verworfen oder Zielgruppen enger gefasst werden müssen. Solche Änderungen sind kein Widerspruch, sondern Teil verantwortlicher Produktentwicklung. Erst ein tatsächlich erreichter Produktstatus wird als solcher kommuniziert.',
          'Für Fußball Training AI werden deshalb weder Nutzungserfolge noch Verfügbarkeit, Veröffentlichungstermine oder Leistungswirkungen behauptet. Die Nennung dokumentiert ein reales Vorhaben im Studio und seinen derzeitigen Stand. Sobald belastbare Produktinformationen vorhanden sind, können sie in einer eigenen Produktdarstellung nachvollziehbar beschrieben werden.',
        ],
      },
      {
        title: 'Wie Produktstatus bei filzinger.lab verstanden wird',
        paragraphs: [
          'Ein Live-Produkt ist erreichbar und kann im vorgesehenen Rahmen genutzt werden. Das sagt noch nichts über Reichweite, wirtschaftlichen Erfolg oder eine bestimmte Wirkung aus. Es beschreibt den operativen Status. Ein Produkt in Entwicklung durchläuft dagegen noch Discovery, Prototyping oder Engineering und wird nicht so dargestellt, als könnten Interessierte bereits auf einen stabilen Leistungsumfang zugreifen.',
          'Diese Trennung sorgt für eine überprüfbare Kommunikation. Produktseiten nennen nur Funktionen und Eigenschaften, die zum aktuellen Stand gehören. Geplante Möglichkeiten werden nicht mit vorhandenen verwechselt. Auch interne Experimente oder noch nicht validierte Ideen werden nicht als Produktportfolio aufgefüllt, nur um eine größere Auswahl zu zeigen.',
          'Status kann sich verändern. Ein Produkt kann weiterentwickelt, enger fokussiert oder auch beendet werden, wenn zentrale Annahmen nicht tragen. Die Entscheidung richtet sich nach Produktproblem, Nutzung und technischem Aufwand. Erfolgsversprechen wären mit diesem offenen Entwicklungsprozess nicht vereinbar und werden daher nicht aus dem Status abgeleitet.',
        ],
      },
      {
        title: 'Was die Produkte über die Studioarbeit zeigen',
        paragraphs: [
          'Eigene Produkte machen Entscheidungen konkret. Eine Idee muss in ein Interface übersetzt, technisch umgesetzt, bereitgestellt und weiter gepflegt werden. Dabei werden Zielkonflikte sichtbar: zusätzliche Funktionen erhöhen den Umfang, Daten benötigen klare Strukturen und jede Vereinfachung hat Auswirkungen auf die Nutzerführung. Diese Erfahrungen lassen sich nicht vollständig durch Konzepte ersetzen.',
          'WeightCoach AI zeigt den Umgang mit wiederkehrender persönlicher Dokumentation und einem fokussierten Produktkern. Fußball Training AI zeigt einen laufenden Entwicklungszustand, in dem Struktur und Ausgestaltung noch nicht als abgeschlossen gelten. Beide Vorhaben werden entsprechend ihrem tatsächlichen Stand eingeordnet, ohne daraus allgemeine Erfolgsbelege abzuleiten.',
          'Diese praktische Perspektive fließt in die <a href="/produktentwicklung">Produktentwicklung</a> ein. Discovery, Prototyping und Engineering werden nicht als getrennte Übergaben betrachtet. Entscheidungen werden entlang des Produkts verfolgt, damit technische Konsequenzen und Nutzererfahrung gemeinsam sichtbar bleiben.',
        ],
      },
      {
        title: 'Von einer Produktannahme zu einem belastbaren Kern',
        paragraphs: [
          'Am Anfang steht eine Annahme über ein Problem und eine Zielgruppe. Product Discovery schärft diese Annahme und identifiziert die wichtigste Unsicherheit. Ein Prototyp kann anschließend einen Ablauf, ein Interface oder eine technische Kernfunktion prüfbar machen. Sein Umfang richtet sich nach der Frage, die beantwortet werden soll.',
          'Ein <a href="/ai-mvp-entwicklung">AI-MVP</a> geht einen Schritt weiter. Er bildet den zentralen Nutzen als zusammenhängendes Produkt unter realistischen Bedingungen ab. Notwendige Datenwege, Nutzerkonten oder Sicherheitsmechanismen werden nicht durch eine Präsentation ersetzt. Gleichzeitig bleiben Funktionen außen vor, die für die Kernannahme noch nicht erforderlich sind.',
          'Nach dieser Prüfung folgt keine automatische Skalierung. Beobachtungen können für Ausbau, neue Fokussierung oder einen bewussten Stopp sprechen. Das Studio behandelt alle drei Ergebnisse als mögliche Produktentscheidungen. Ziel ist ein nachvollziehbarer Umgang mit Unsicherheit und nicht die nachträgliche Rechtfertigung jeder begonnenen Idee.',
        ],
      },
      {
        title: 'Ein Produktvorhaben passend einordnen',
        paragraphs: [
          'filzinger.lab passt zu Vorhaben, bei denen ein digitales Produkt entstehen oder ein vorhandener Produktkern weiterentwickelt werden soll. Ein klar benennbares Problem, Zugang zum fachlichen Kontext und die Bereitschaft zur Priorisierung sind dafür wichtige Voraussetzungen. Eine lange Liste feststehender Funktionen ersetzt diese Grundlage nicht.',
          'Der erste Austausch betrachtet Zielgruppe, Nutzungssituation, aktuellen Stand und offene Annahmen. Daraus kann ein Discovery-Schritt, ein begrenzter Prototyp oder konkretes Product Engineering folgen. Umfang und Ergebnis werden für die jeweilige Phase beschrieben. Eine Aussage über spätere Marktakzeptanz oder wirtschaftlichen Erfolg ist damit nicht verbunden.',
          'Die Produktübersicht bleibt währenddessen eine Darstellung realer Studioarbeit. WeightCoach AI ist live, Fußball Training AI ist in Entwicklung. Weitere Einträge werden erst ergänzt, wenn ein tatsächliches Vorhaben mit einem sinnvoll kommunizierbaren Status vorhanden ist. So bleibt erkennbar, was heute existiert und was sich noch im Aufbau befindet.',
          'Für neue Produktideen bedeutet diese Transparenz, dass auch Zwischenstände sauber benannt werden. Ein klickbarer Prototyp kann einen Ablauf zeigen, ist aber noch kein betriebenes SaaS-Produkt. Ein technischer Versuch kann eine Integration prüfen, beantwortet aber noch nicht die Frage nach verständlicher Nutzung. Ein MVP kann den Kern unter realistischen Bedingungen abbilden, ohne bereits den Umfang eines langfristig ausgebauten Produkts zu besitzen. Diese Begriffe helfen, Erwartungen, Aufwand und Risiken einer Phase einzuordnen. Sie verhindern außerdem, dass unfertige Funktionen als Leistungsbeleg erscheinen. Die <a href="/produkte/weightcoach-ai">Detailseite zum Live-Produkt</a> dokumentiert den heute bekannten Rahmen von WeightCoach AI; für Fußball Training AI bleibt es bei der eindeutigen Kennzeichnung als in Entwicklung.',
          'Die Übersicht ist damit zugleich ein Arbeitsstand und eine Grenze. Sie nennt keine hypothetischen Produktlinien, keine erfundenen Roadmaps und keine Termine ohne belastbare Grundlage. Externe Besucher können den aktuellen Status nachvollziehen, während das Studio intern weiter prüfen und priorisieren kann. Wenn sich ein Status ändert, muss auch seine Darstellung angepasst werden. Produktkommunikation bleibt so an die tatsächliche Entwicklung gebunden.',
        ],
      },
    ],
  },
  {
    path: '/produkte/weightcoach-ai',
    title: 'WeightCoach AI – Produkt aus dem Studio | filzinger.lab',
    description: 'WeightCoach AI ist das Live-Produkt von filzinger.lab für die strukturierte Dokumentation von Gewichtsverlauf, Mahlzeiten und Routinen.',
    schemaType: 'SoftwareApplication',
    eyebrow: 'Live-Produkt',
    headline: 'WeightCoach AI: Gewichtsverlauf, Mahlzeiten und Routinen dokumentieren',
    intro: 'WeightCoach AI ist das erste Live-Produkt von filzinger.lab. Es führt persönliche Einträge zu Gewicht, Mahlzeiten und Routinen in einem fokussierten digitalen Produkt zusammen. Es dient der eigenen Dokumentation und ersetzt keine medizinische Beratung, Diagnose oder Behandlung.',
    ctaTitle: 'Ein eigenes fokussiertes Produktvorhaben besprechen',
    ctaText: 'WeightCoach AI zeigt, wie filzinger.lab einen klaren Produktkern in ein nutzbares Live-Produkt überführt. Wenn Sie an einem eigenen digitalen Produkt arbeiten, beschreiben Sie Zielgruppe, Problem und aktuellen Entwicklungsstand für eine erste Einordnung.',
    subject: 'Produktvorhaben mit filzinger.lab',
    sections: [
      {
        title: 'Das Problem hinter WeightCoach AI',
        paragraphs: [
          'Persönliche Informationen zu Gewicht, Mahlzeiten und Routinen entstehen häufig zu unterschiedlichen Zeitpunkten und in verschiedenen Formen. Ohne eine gemeinsame Struktur ist später schwer nachvollziehbar, was dokumentiert wurde und wie einzelne Einträge zeitlich zusammenhängen. WeightCoach AI bündelt diese Bereiche in einem fokussierten Produkt, das auf wiederkehrende Dokumentation ausgelegt ist.',
          'Das Produkt löst damit kein medizinisches Problem und bewertet keine individuelle Gesundheit. Es schafft einen digitalen Ort für persönliche Aufzeichnungen und deren übersichtliche Betrachtung. Nutzer behalten die Verantwortung dafür, wie sie Informationen einordnen und welche Entscheidungen sie daraus ableiten. Bei gesundheitlichen Fragen ist qualifiziertes medizinisches Fachpersonal die richtige Anlaufstelle.',
          'Der Produktkern bleibt bewusst enger als der allgemeine Anspruch einer umfassenden Gesundheitsplattform. Gewicht, Mahlzeiten und Routinen bilden einen nachvollziehbaren Zusammenhang für die Dokumentation. Weitere Funktionen müssen sich daran messen lassen, ob sie diesen Ablauf verständlicher machen, statt lediglich die Zahl verfügbarer Optionen zu erhöhen.',
        ],
      },
      {
        title: 'Für wen das Produkt gedacht ist',
        paragraphs: [
          'WeightCoach AI richtet sich an Menschen, die ihre persönlichen Einträge zu Gewichtsverlauf, Mahlzeiten und Routinen strukturiert an einem Ort festhalten möchten. Voraussetzung ist keine bestimmte sportliche Erfahrung oder ein vorgegebenes Ziel. Das Produkt stellt die Dokumentation in den Mittelpunkt und schreibt keinen individuellen Lebensstil vor.',
          'Die Nutzung ist persönlich und selbstbestimmt. Einträge können dabei helfen, die eigene Dokumentation über einen Zeitraum konsistent zu halten. Sie sind jedoch keine objektive Bewertung des Gesundheitszustands und liefern keinen Beleg für Ursache oder Wirkung. Veränderungen können viele Gründe haben, die eine Software nicht abschließend einordnen kann.',
          'Für akute Beschwerden, Essstörungen, medizinische Gewichtsfragen oder individuelle Therapieentscheidungen ist WeightCoach AI nicht vorgesehen. Das Produkt ersetzt weder ärztliche Untersuchung noch Ernährungs- oder psychotherapeutische Behandlung. Diese Grenze gehört zur ehrlichen Beschreibung von Zielgruppe und Funktionsrahmen.',
        ],
      },
      {
        title: 'Der funktionale Produktkern',
        paragraphs: [
          'Im Zentrum steht die Dokumentation des Gewichtsverlaufs. Einzelne Einträge werden nicht isoliert betrachtet, sondern in einen zeitlichen Zusammenhang gebracht. Dadurch lässt sich die eigene Aufzeichnung über einen längeren Zeitraum lesen. Das Produkt verspricht daraus weder einen bestimmten Verlauf noch eine automatische Verbesserung.',
          'Mahlzeiten bilden einen zweiten Dokumentationsbereich. Nutzer können festhalten, was für ihre persönliche Aufzeichnung relevant ist. Die Funktion dient nicht dazu, Lebensmittel medizinisch zu bewerten oder eine individuelle Ernährungstherapie zu erstellen. Ihr Wert liegt in der Verbindung mit der übrigen Dokumentation innerhalb desselben Produkts.',
          'Routinen ergänzen die Momentaufnahmen um wiederkehrende Handlungen. Sie machen sichtbar, welche persönlichen Abläufe festgehalten wurden. Gewicht, Mahlzeiten und Routinen bleiben dabei unterscheidbare Informationen, werden aber in einer gemeinsamen Nutzererfahrung zusammengeführt. Weitere Details und der Zugang zum Produkt stehen auf <a href="https://weightcoach-ai.de" target="_blank" rel="noreferrer">weightcoach-ai.de</a>.',
        ],
      },
      {
        title: 'Produktentscheidungen für wiederkehrende Nutzung',
        paragraphs: [
          'Ein Produkt für regelmäßige Dokumentation muss die Hürde für einen neuen Eintrag begrenzen. Jede zusätzliche Auswahl kann zwar Details erfassen, aber auch den Alltag unnötig unterbrechen. Deshalb werden Eingaben, Navigation und Rückblicke als zusammenhängender Ablauf betrachtet. Eine Funktion ist nur dann hilfreich, wenn sie verständlich bleibt und tatsächlich zum Produktkern beiträgt.',
          'Konsistente Begriffe sind besonders wichtig, weil Nutzer über längere Zeit mit denselben Bereichen arbeiten. Zustände und Rückmeldungen müssen wiedererkennbar sein. Änderungen an der Oberfläche werden daher nicht allein nach visueller Neuheit beurteilt, sondern danach, ob vorhandene Informationen weiterhin auffindbar bleiben und neue Einträge klar eingeordnet werden können.',
          'Diese Entscheidungen entsprechen der Arbeitsweise des <a href="/product-studio">Product Studios</a>: Ein konkretes Problem wird fokussiert, in reale Nutzung übersetzt und anschließend weiter beobachtet. WeightCoach AI ist dabei kein erfundener Case und kein bloßes Konzept, sondern das erste Live-Produkt von filzinger.lab. Nutzerzahlen oder Erfolgsaussagen werden daraus nicht abgeleitet.',
        ],
      },
      {
        title: 'Technische Entscheidungen hinter einem Live-Produkt',
        paragraphs: [
          'Die technische Struktur muss wiederkehrende Einträge verlässlich einem Nutzer und einem Zeitpunkt zuordnen. Oberfläche, Datenmodell und Zugriffswege werden deshalb gemeinsam betrachtet. Ein flexibles Interface ohne klare Datenstruktur würde spätere Verläufe unübersichtlich machen; ein detailliertes Datenmodell ohne verständliche Eingabe würde die tatsächliche Nutzung erschweren.',
          'Persönliche Daten erfordern einen angemessenen Umgang mit Zugriff und Speicherung. Technische Entscheidungen orientieren sich am konkreten Funktionsumfang und werden nicht durch pauschale Sicherheitsversprechen ersetzt. Informationen zu den jeweils geltenden Bedingungen und zur Datenverarbeitung stellt die externe Produktwebsite bereit. Nutzer sollten diese Angaben vor der Nutzung prüfen.',
          'Auch ein Live-Produkt bleibt veränderbar. Releases müssen bestehende Abläufe berücksichtigen, Fehler nachvollziehbar machen und Datenmigrationen kontrolliert behandeln. Technischer Betrieb bedeutet deshalb mehr als das einmalige Bereitstellen einer Anwendung. Wartung und fokussierte Weiterentwicklung gehören zur realen <a href="/produktentwicklung">Produktentwicklung</a>.',
        ],
      },
      {
        title: 'Produktstatus und verantwortliche Einordnung',
        paragraphs: [
          'WeightCoach AI ist live. Diese Bezeichnung beschreibt, dass das Produkt bereitgestellt wird. Sie ist keine Aussage über eine bestimmte Zahl von Nutzern, über wirtschaftliche Ergebnisse oder über gesundheitliche Wirkungen. Solche Kennzahlen werden auf dieser Seite weder behauptet noch aus dem Produktstatus abgeleitet.',
          'Der aktuelle Funktionsrahmen kann im Zuge der Weiterentwicklung angepasst werden. Produktentscheidungen richten sich nach Verständlichkeit, technischem Betrieb und der Frage, ob eine Änderung den fokussierten Ablauf unterstützt. Geplante Funktionen werden nicht als bereits verfügbar dargestellt. Maßgeblich für das aktuelle Angebot ist die Produktwebsite.',
          'WeightCoach AI ist Teil der <a href="/produkte">Produktübersicht von filzinger.lab</a>. Dort wird es klar vom zweiten Vorhaben Fußball Training AI unterschieden, das sich noch in Entwicklung befindet. Diese Statusangaben schaffen Transparenz darüber, welches Produkt genutzt werden kann und welches noch keinen fertigen Leistungsumfang besitzt.',
        ],
      },
      {
        title: 'Was die Entwicklung für weitere Produkte bedeutet',
        paragraphs: [
          'Die Arbeit an WeightCoach AI verbindet Product Discovery, Nutzerführung, Datenmodell, Engineering und Betrieb. Entscheidungen können nicht nur im Konzept plausibel wirken; sie müssen in einer laufenden Anwendung bestehen. Dadurch werden Abhängigkeiten sichtbar, die bei einem isolierten Prototyp leicht unbemerkt bleiben, etwa zwischen einfacher Eingabe und langfristig lesbarer Datenstruktur.',
          'Diese Erfahrung ersetzt keine Prüfung eines neuen Produktproblems. Jede Zielgruppe, Datenart und Nutzungssituation benötigt eigene Entscheidungen. Sie prägt aber den Studioansatz: früh fokussieren, den wichtigsten Ablauf real bauen und Erweiterungen anhand konkreter Produktfragen priorisieren. Für neue AI-Produkte kann ein begrenztes <a href="/ai-mvp-entwicklung">AI-MVP</a> der passende Zwischenschritt sein.',
          'Ein Austausch mit filzinger.lab beginnt daher nicht mit einer pauschalen Funktionsliste. Relevant sind Problem, Zielgruppe, vorhandener Stand und die größte offene Annahme. Daraus lässt sich ein geeigneter nächster Schritt für ein digitales Produkt ableiten. WeightCoach AI dient als transparenter Einblick in reale Studioarbeit, nicht als Versprechen eines übertragbaren Erfolgs.',
          'Für die weitere Entwicklung werden Produktfragen und technische Folgen gemeinsam priorisiert. Eine zusätzliche Eingabe beeinflusst nicht nur die Oberfläche, sondern möglicherweise auch Datenmodell, Auswertung und spätere Rückblicke. Eine neue Darstellung kann verständlicher wirken, muss aber mit bereits gespeicherten Informationen umgehen können. Diese Zusammenhänge sprechen für kleine, kontrollierte Änderungen mit einem klaren Bezug zum Produktkern.',
          'Auch AI-Funktionen werden nicht allein nach der Qualität einzelner Beispielausgaben beurteilt. Entscheidend ist, ob sie im vorgesehenen Ablauf verständlich bleiben, geeignete Eingaben erhalten und Fehler angemessen behandeln. Ausgaben dürfen keine medizinische Autorität vortäuschen. Wo eine Einordnung durch Software nicht zuverlässig möglich ist, muss das Produkt Grenzen zeigen und Nutzern die Kontrolle über ihre Dokumentation lassen. Diese produktseitige Zurückhaltung ist Teil einer verantwortlichen Umsetzung und kein Ersatz für individuelle fachliche Beratung.',
          'Der externe Produktauftritt ist für aktuelle Verfügbarkeit, konkrete Nutzungsbedingungen und Datenschutzinformationen maßgeblich. Diese Studioseite ordnet WeightCoach AI als reales Produkt von filzinger.lab ein und beschreibt die dahinterliegenden Entscheidungen. Sie erweitert das Angebot nicht und nennt keine geplanten Funktionen als vorhanden. Wer das Produkt ansehen oder nutzen möchte, gelangt über <a href="https://weightcoach-ai.de" target="_blank" rel="noreferrer">die offizielle WeightCoach-AI-Website</a> zum aktuellen Stand.',
        ],
      },
    ],
  },
  {
    path: '/case-studies/weightcoach-ai',
    title: 'WeightCoach AI Case Study: vom Produktkern zum Live-Produkt',
    description: 'Case Study zur Entwicklung von WeightCoach AI: Produktidee, Zielgruppe, Entscheidungen, technische Umsetzung, Grenzen und nächste Schritte.',
    schemaType: 'Article',
    eyebrow: 'Case Study',
    headline: 'WeightCoach AI: vom fokussierten Problem zum Live-Produkt',
    intro: 'Diese Case Study beschreibt, wie filzinger.lab WeightCoach AI als eigenes digitales Produkt entwickelt. Sie ordnet Ausgangsproblem, Zielgruppe, Produktentscheidungen, technische Umsetzung und Grenzen ein, ohne Nutzerzahlen, Wirkungen oder wirtschaftliche Erfolge zu behaupten.',
    ctaTitle: 'WeightCoach AI im aktuellen Produktstand ansehen',
    ctaText: 'Die Produktwebsite zeigt das derzeit verfügbare Angebot sowie die aktuellen Nutzungs- und Datenschutzinformationen. Die Case Study beschreibt den Entwicklungsweg, erweitert aber nicht den dort ausgewiesenen Funktionsumfang.',
    subject: 'WeightCoach AI ansehen',
    ctaLabel: 'WeightCoach AI ansehen',
    ctaHref: 'https://weightcoach-ai.de',
    sections: [
      {
        title: 'Ausgangsproblem: persönliche Dokumentation bleibt oft verstreut',
        paragraphs: [
          'Informationen zu Gewicht, Mahlzeiten und Routinen entstehen im Alltag zu unterschiedlichen Zeitpunkten. Werden sie in einzelnen Notizen, Tabellen oder voneinander getrennten Anwendungen festgehalten, fehlt häufig ein gemeinsamer zeitlicher Zusammenhang. Rückblicke werden umständlich, Begriffe unterscheiden sich und wiederkehrende Dokumentation verliert schnell ihre klare Struktur.',
          'Die Ausgangsfrage für WeightCoach AI war deshalb nicht, wie möglichst viele Gesundheitsfunktionen in eine Anwendung passen. Sie lautete, wie sich drei zusammengehörige Bereiche in einem fokussierten digitalen Produkt verständlich dokumentieren lassen. Das Produkt sollte Einträge erleichtern, Zusammenhänge lesbar halten und die Rückkehr in den eigenen Verlauf unterstützen.',
          'Diese Problemdefinition setzt zugleich eine Grenze. WeightCoach AI soll keine medizinischen Ursachen feststellen, Diagnosen erstellen oder Behandlungen empfehlen. Eine persönliche Aufzeichnung kann Beobachtungen strukturieren, aber sie belegt keine gesundheitliche Wirkung und erklärt keine Veränderung abschließend. Medizinische Fragen gehören zu qualifiziertem Fachpersonal, nicht in eine allgemeine Produktfunktion.',
        ],
      },
      {
        title: 'Zielgruppe und Nutzungssituation',
        paragraphs: [
          'Das Produkt richtet sich an Menschen, die Gewicht, Mahlzeiten und Routinen für ihre eigene Dokumentation an einem Ort festhalten möchten. Es setzt weder ein bestimmtes Trainingsniveau noch einen vorgegebenen Ernährungsansatz voraus. Entscheidend ist das Bedürfnis nach einer konsistenten persönlichen Aufzeichnung, die über einzelne Momentaufnahmen hinausgeht.',
          'Die typische Nutzung ist wiederkehrend und in den Alltag eingebettet. Ein Eintrag konkurriert mit anderen Aufgaben und darf deshalb nicht unnötig komplex sein. Gleichzeitig müssen gespeicherte Informationen später verständlich bleiben. Diese Spannung zwischen schneller Eingabe und lesbarem Verlauf prägte die Priorisierung stärker als der Wunsch nach einer möglichst langen Funktionsliste.',
          'WeightCoach AI ist nicht für akute Beschwerden, Essstörungen, medizinische Gewichtsfragen oder individuelle Therapieentscheidungen vorgesehen. Die Zielgruppe wird daher über den Dokumentationsbedarf beschrieben und nicht über ein versprochenes Ergebnis. Der aktuelle Produktkontext ist auf der Seite <a href="/produkte/weightcoach-ai">WeightCoach AI</a> zusammengefasst.',
        ],
      },
      {
        title: 'Die Produktidee: drei Bereiche in einem fokussierten Ablauf',
        paragraphs: [
          'Die Produktidee verbindet Gewichtsverlauf, Mahlzeiten und Routinen in einer gemeinsamen Nutzererfahrung. Jeder Bereich besitzt einen eigenen Informationscharakter: Gewicht wird zeitlich fortgeschrieben, Mahlzeiten entstehen situativ und Routinen beschreiben wiederkehrende Handlungen. Die Anwendung muss diese Unterschiede erhalten, ohne sie als vollständig getrennte Produkte erscheinen zu lassen.',
          'Der Wert liegt damit nicht in einer einzelnen spektakulären Funktion. Er entsteht aus dem konsistenten Zusammenspiel von Eingabe, Speicherung und Rückblick. Nutzer sollen erkennen können, was sie dokumentiert haben und wie Einträge zeitlich eingeordnet sind. Das Produkt liefert dafür Struktur, aber keine automatische medizinische Interpretation der persönlichen Daten.',
          'Als eigenes Live-Produkt macht WeightCoach AI die Arbeitsweise des <a href="/product-studio">filzinger.lab Product Studios</a> konkret. Eine Annahme wird nicht bei einem Konzept oder einer vorbereiteten Demo beendet. Sie wird in Interface, Datenmodell, technische Bereitstellung und laufende Weiterentwicklung übersetzt. Erst dadurch werden praktische Abhängigkeiten und Grenzen sichtbar.',
        ],
      },
      {
        title: 'Zentrale Produktentscheidungen',
        paragraphs: [
          'Die wichtigste Entscheidung war die Begrenzung auf einen zusammenhängenden Produktkern. Zusätzliche Ideen wurden nicht allein deshalb aufgenommen, weil sie technisch umsetzbar waren. Jede Erweiterung musste beantworten, welchen Beitrag sie zur Dokumentation oder zum verständlichen Rückblick leistet. So blieb die Nutzerführung gegenüber einer Sammlung unverbundener Einzelfunktionen priorisiert.',
          'Eine zweite Entscheidung betraf die Sprache des Produkts. Begriffe müssen über wiederkehrende Nutzung stabil und eindeutig bleiben. Ein Zustand, eine Eingabe oder ein Rückblick sollte nicht an verschiedenen Stellen unterschiedlich bezeichnet werden. Konsistenz reduziert Erklärungsbedarf und hilft Nutzern, bereits bekannte Abläufe wiederzuerkennen.',
          'Drittens wurde der Live-Betrieb als Teil der Produktentwicklung verstanden. Ein funktionierender Prototyp beantwortet technische und gestalterische Fragen, bildet aber nicht automatisch die langfristige Nutzung ab. Anmeldung, Datenzugriff, Fehlerbehandlung und kontrollierte Änderungen gehören zum realen Produkt. Diese Perspektive verbindet die Case Study mit der allgemeinen <a href="/produktentwicklung">Produktentwicklung</a> im Studio.',
        ],
      },
      {
        title: 'Architektur und technische Umsetzung',
        paragraphs: [
          'Die Architektur verbindet Benutzeroberfläche, Produktlogik und Datenhaltung entlang der zentralen Abläufe. Einträge müssen einem Nutzer, einem Bereich und einem Zeitpunkt nachvollziehbar zugeordnet werden. Das Datenmodell darf dabei nicht nur die aktuelle Eingabemaske spiegeln. Es muss auch Rückblicke und spätere kontrollierte Änderungen unterstützen, ohne die Bedeutung bestehender Informationen zu verlieren.',
          'Frontend und Datenstruktur wurden deshalb nicht als getrennte Aufgaben behandelt. Eine besonders schnelle Eingabe ist wenig hilfreich, wenn gespeicherte Angaben später nicht verständlich dargestellt werden können. Umgekehrt führt ein sehr detailliertes Modell zu unnötiger Reibung, wenn Nutzer für einen alltäglichen Eintrag zu viele Entscheidungen treffen müssen. Product Engineering gleicht beide Seiten fortlaufend ab.',
          'Für den Betrieb sind geschützte Zugriffe, kontrollierte Releases und nachvollziehbare Fehler wichtig. Pauschale Aussagen über vollständige Sicherheit oder permanente Verfügbarkeit wären dennoch unangemessen. Technische Maßnahmen richten sich nach dem jeweiligen Produktstand und den verarbeiteten Daten. Die maßgeblichen aktuellen Hinweise zur Datenverarbeitung stehen auf der externen Produktwebsite.',
          'AI-Funktionen werden als Teil des gesamten Produkts bewertet, nicht als isolierter Modellaufruf. Eingaben, Kontext, Ausgabeformat und Korrekturmöglichkeiten müssen zusammenspielen. Variable Ergebnisse dürfen keine medizinische Gewissheit suggerieren. Wo ein Ergebnis nicht sinnvoll eingeordnet werden kann, braucht das Interface erkennbare Grenzen und die Möglichkeit, bei der eigenen Dokumentation zu bleiben.',
        ],
      },
      {
        title: 'Funktionen und bewusst gesetzte Grenzen',
        paragraphs: [
          'Der belegbare Funktionsrahmen umfasst die Dokumentation von Gewichtsverlauf, Mahlzeiten und Routinen. Gewichtseinträge werden zeitlich eingeordnet, Mahlzeiten können für die persönliche Aufzeichnung festgehalten und Routinen als wiederkehrende Handlungen dokumentiert werden. Diese Bereiche bilden den Kern des aktuell beschriebenen Produkts.',
          'Die Funktionen versprechen keine Gewichtsabnahme, keine Verbesserung einer Erkrankung und keinen bestimmten Trainingserfolg. Aus zeitlich zusammen dargestellten Informationen lässt sich nicht automatisch eine Ursache ableiten. Auch eine AI-gestützte Aufbereitung ersetzt keine fachliche Untersuchung. Nutzer müssen Ergebnisse und Einträge entsprechend ihrem persönlichen Kontext einordnen.',
          'Geplante oder denkbare Erweiterungen werden in dieser Case Study nicht als vorhanden dargestellt. Maßgeblich für den aktuellen Leistungsumfang ist <a href="https://weightcoach-ai.de" target="_blank" rel="noreferrer">weightcoach-ai.de</a>. Dort befinden sich auch die jeweils aktuellen Bedingungen für Nutzung und Datenschutz. Diese Trennung verhindert, dass Entwicklungsüberlegungen mit einem verfügbaren Produktangebot verwechselt werden.',
          'Der Status „live“ bedeutet, dass WeightCoach AI bereitgestellt wird. Er enthält keine Aussage über Nutzerzahl, Umsatz, Bindung oder Wirkung. Solche Kennzahlen werden hier nicht ergänzt, solange keine belastbare und zur Veröffentlichung geeignete Grundlage vorliegt. Die Case Study dokumentiert Produktarbeit und keine nachträglich konstruierte Erfolgsgeschichte.',
        ],
      },
      {
        title: 'Lernprozess: reale Nutzung verändert die Fragen',
        paragraphs: [
          'Mit einem Live-Produkt verschiebt sich die Produktarbeit. Vor dem Launch stehen Annahmen über Abläufe und technische Machbarkeit im Vordergrund. Im Betrieb werden zusätzlich Wartbarkeit, wiederkehrende Nutzung und die Folgen kleiner Änderungen sichtbar. Eine neue Eingabe beeinflusst möglicherweise Datenmodell, Navigation und spätere Rückblicke zugleich.',
          'Der Lernprozess besteht daher nicht aus der ungefilterten Übernahme jedes Funktionswunsches. Beobachtungen werden zunächst dem zugrunde liegenden Problem zugeordnet. Liegt eine Schwierigkeit an unklarer Sprache, zu vielen Schritten, fehlender Information oder einem technischen Fehler? Erst danach lässt sich entscheiden, ob eine Änderung am Interface, an der Logik oder an der Architektur erforderlich ist.',
          'Diese Arbeitsweise entspricht einem fokussierten <a href="/ai-mvp-entwicklung">AI-MVP</a>, auch wenn ein Live-Produkt darüber hinaus fortlaufenden Betrieb benötigt. Eine begrenzte Version soll eine zentrale Annahme prüfbar machen. Sie ist kein verkleinertes Wunschprodukt mit beliebig reduzierter Qualität. Notwendige Datenwege und ein verständlicher Kernablauf müssen tatsächlich funktionieren.',
        ],
      },
      {
        title: 'Nächste Schritte ohne vorweggenommene Roadmap',
        paragraphs: [
          'Die nächsten Schritte für WeightCoach AI werden aus dem aktuellen Produktkern, technischen Anforderungen und nachvollziehbaren Beobachtungen abgeleitet. Diese Case Study veröffentlicht keine feste Roadmap und nennt keine Funktionen, deren Umsetzung oder Termin nicht belastbar feststeht. Produktentwicklung bleibt eine Folge begründeter Entscheidungen statt einer möglichst langen Ankündigungsliste.',
          'Priorität haben Änderungen, die Verständlichkeit, verlässliche Dokumentation oder Betrieb des bestehenden Kerns unterstützen. Neue Möglichkeiten müssen mit vorhandenen Daten und Abläufen vereinbar sein. Bei AI-Funktionen werden neben der Ausgabequalität auch Kosten, Laufzeit, Datenschutz und geeignete menschliche Kontrolle betrachtet. Die Seite <a href="/ai-saas-entwicklung">AI-SaaS-Entwicklung</a> beschreibt diesen Zusammenhang ausführlicher.',
          'WeightCoach AI liefert filzinger.lab reale Erfahrung mit Entwicklung und Betrieb eines eigenen Produkts. Diese Erfahrung wird nicht als Beweis für übertragbaren Markterfolg verwendet. Neue Vorhaben benötigen weiterhin eigene Discovery, Zielgruppenverständnis und technische Prüfung. Sie kann jedoch helfen, relevante Produktfragen früher zu erkennen und abstrakte Entscheidungen an praktischen Folgen zu messen.',
          'Interessierte können WeightCoach AI über die Produktwebsite im aktuellen Stand ansehen. Dort ist ersichtlich, welches Angebot tatsächlich verfügbar ist. Für ein eigenes Produktvorhaben beginnt die Zusammenarbeit mit Problem, Zielgruppe und größter offener Annahme – nicht mit einem versprochenen Ergebnis oder einer kopierten Lösung.',
        ],
      },
    ],
  },
] as const satisfies readonly StudioSeoPage[];

export const seoPages = [...studioSeoPages, ...knowledgeSeoPages] as const;

export function getStudioSeoPage(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  return seoPages.find((page) => page.path === path) ?? null;
}
