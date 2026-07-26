/*
 * Lightweight EN/DE toggle for the static PARAB site.
 *
 * English lives in the HTML as the default. Every translatable element carries
 * a `data-i18n="key"` attribute; German strings are kept in the `de` map below.
 * Form placeholders use `data-i18n-ph="key"`. Switching back to English restores
 * the element's original markup, so English never needs to be duplicated here.
 * The chosen language is remembered in localStorage.
 */
(function () {
  const de = {
    // Navigation
    "nav-lectures": "Vorlesungsreihe",
    "nav-newsletter": "Newsletter",
    "nav-spsn": "SPSN",
    "nav-socials": "Social Media",
    "nav-contact": "Kontakt",

    // Shared buttons
    "learn-more": "Mehr erfahren",
    "view-here": "Hier ansehen",
    "join-here": "Hier beitreten",
    "full-article": "Ganzer Artikel",
    "send-message": "Nachricht senden",
    "contact-title": "<strong>Kontaktiere uns!</strong>",

    // index.html – welcome
    "welcome-title": "<strong>Willkommen!</strong>",
    "welcome-body":
      "<strong>&nbsp;Wir sind die Psychedelic Awareness &amp; Research " +
      "Association Basel, kurz PARAB.<br /></strong>" +
      "Wir sind eine multidisziplinäre Studierendenorganisation mit dem Ziel, " +
      "das Wissen über den therapeutischen Einsatz von Psychedelika zu fördern. " +
      "Wir informieren sowohl Fachleute als auch die Öffentlichkeit und " +
      "unterstützen den Aufbau einer Gemeinschaft rund um evidenzbasierte " +
      "psychedelische Forschung und Therapie. So ebnen wir den Weg für hilfreiche " +
      "psychedelische Erfahrungen – sicher, legal und zugänglich.<br />" +
      "Hier findest du Ankündigungen zukünftiger Veranstaltungen, vergangene " +
      "Aufzeichnungen, Neuigkeiten aus der Forschung und weitere interessante " +
      "Informationen – oder tritt unserer WhatsApp-Community bei.",

    // index.html – feature cards
    "card-insta-title": "<strong>Instagram/News</strong>",
    "card-insta-body":
      "Bevorstehende Veranstaltungen von PARAB oder assoziierten " +
      "Organisationen in der Region Basel",
    "card-lecture-title": "<strong>Vorlesungsreihe <br> Herbst 2026</strong>",
    "card-lecture-body":
      "Aktuelle Informationen zu unserer laufenden Vorlesungsreihe<br>",
    "card-recordings-title": "<strong>Aufzeichnungen von Veranstaltungen&nbsp;</strong>",
    "card-recordings-body":
      "Eine Veranstaltung verpasst?<br />Alle aufgezeichneten Veranstaltungen " +
      "findest du auf YouTube",
    "card-support-title": "<strong>Unterstütze uns!&nbsp;</strong>",
    "card-support-body":
      "Wenn du unsere Arbeit mit einer kleinen Spende unterstützen möchtest, " +
      "kannst du das hier tun. Vielen Dank!",
    "card-whatsapp-title": "<strong>PARAB WhatsApp-Community</strong>",
    "card-whatsapp-body":
      "Erhalte deine PARAB-News direkt in deinem WhatsApp<br>",

    // index.html – talk recaps
    "talkrecap-title": "<strong>Vortragsrückblick</strong>",
    "talkrecap1-title": "<strong>Vortragsrückblick 04.11.2025</strong>",
    "talkrecap1-body":
      "Klinische Studien mit LSD, Psilocybin und MDMA in Basel von " +
      "PD Dr. med. Felix Müller",
    "talkrecap2-title": "<strong>Vortragsrückblick 21.10.2025</strong>",
    "talkrecap2-body":
      "Rewriting the Psychedelic Story von PhD-Kandidat David Elmiger",
    "talkrecap3-title": "<strong>Vortragsrückblick 06.10.2025</strong>",
    "talkrecap3-body":
      "A Superficial Deep Dive into Psychedelic Research von " +
      "PhD-Kandidat Morten Lietz",

    // index.html – SPSN newsletter
    "spsn-title": "<strong>SPSN Newsletter</strong>",
    "spsn-body":
      "Das SPSN ist ein Zusammenschluss aller Schweizer " +
      "Studierendenvereinigungen, die sich der psychedelischen Forschung widmen. " +
      "Bleib auf dem Laufenden über unsere neuesten Veranstaltungen und Projekte " +
      "rund um psychedelische Forschung und Therapie. Wir freuen uns, dich in " +
      "unserer Community begrüssen zu dürfen! Danke für deine Anmeldung. Wir " +
      "halten dich gerne auf dem Laufenden. 🌱",
    "spsn-join": "SPSN-Newsletter abonnieren",
    "spsn-members-title":
      "<strong>Weitere Mitglieder des Swiss Psychedelic Student Network</strong>",
    "related-orgs-title": "<strong>Verwandte Organisationen</strong>",

    // LSHS2026.html – header
    "lshs-title": "<strong>Unsere Vorlesungsreihe Herbst 2026</strong>",
    "lshs-intro":
      "Diese Vorlesungsreihe stellt aktuelle Forschung und Entwicklungen im " +
      "Bereich der psychedelischen Wissenschaft vor, mit Schwerpunkt auf ihren " +
      "klinischen Anwendungen und pharmakologischen Mechanismen. Eingeladene " +
      "Referentinnen und Referenten präsentieren neue Erkenntnisse aus " +
      "präklinischer und klinischer Forschung. Die Themen umfassen die " +
      "Neurobiologie und Pharmakologie von Psychedelika, ihre therapeutischen " +
      "Anwendungen in der Psychiatrie, aktuelle klinische Forschung, relevante " +
      "chemische Perspektiven sowie ihren historischen und rechtlichen Kontext.",
    "lshs-coursedir": "Vorlesungsverzeichnis der Universität Basel",
    "lshs-location":
      "<strong>Alle unsere Vorlesungen in diesem Herbst finden am Departement " +
      "Pharmazeutische Wissenschaften, Klingelbergstrasse 50, 4056 Basel von " +
      "17:15 bis 18:15 Uhr statt</strong>",

    // LSHS2026.html – lecture cards
    "lec-14-09-title": "<strong>Vorlesung am Montag, 14.09.2026&nbsp;</strong>",
    "lec-14-09-body":
      "PhD-Kandidat Morten Lietz<br />Modulübersicht/Einführung + kleiner Apéro",
    "lec-21-09-title": "<strong>Vorlesung am Montag, 21.09.2026&nbsp;</strong>",
    "lec-21-09-body":
      "Dr. Friederike Holze<br />Aktueller Stand der psychedelischen Forschung " +
      "mit Fokus auf Klinische Pharmakologie & Toxikologie",
    "lec-28-09-title": "<strong>Vorlesung am Montag, 28.09.2026&nbsp;</strong>",
    "lec-28-09-body":
      "PhD-Kandidat Livio Erne, PhD-Kandidat Jan Valenta, PhD-Kandidat " +
      "Hector Taylor<br />Titel werden noch bekannt gegeben",
    "lec-05-10-title": "<strong>Vorlesung am Montag, 05.10.2026&nbsp;</strong>",
    "lec-05-10-body":
      "PhD-Kandidat David Elminger<br />Rewriting the Psychedelic History",
    "lec-12-10-title": "<strong>Vorlesung am Montag, 12.10.2026&nbsp;</strong>",
    "lec-12-10-body":
      "PhD-Kandidatin Anna Müller<br />Titel wird noch bekannt gegeben",
    "lec-19-10-title": "<strong>Vorlesung am Montag, 19.10.2026&nbsp;</strong>",
    "lec-19-10-body":
      "Prof. Dr. Linda Simmler<br />Neurowissenschaft der Psychedelika",
    "lec-02-11-title": "<strong>Vorlesung am Montag, 02.11.2026&nbsp;</strong>",
    "lec-02-11-body": "Johannes Jungwirt<br />Titel wird noch bekannt gegeben",
    "lec-09-11-title": "<strong>Vorlesung am Montag, 09.11.2026&nbsp;</strong>",
    "lec-09-11-body": "Manvir Singh<br />Titel wird noch bekannt gegeben",
    "lec-16-11-title": "<strong>Vorlesung am Montag, 16.11.2026&nbsp;</strong>",
    "lec-16-11-body":
      "PhD-Kandidat Moritz Spangermacher<br />Titel wird noch bekannt gegeben",
    "lec-23-11-title":
      "<strong>Studierendenpräsentation am Montag, 23.11.2026&nbsp;</strong>",
    "lec-23-11-body":
      "Studierendenpräsentation<br />Anwesenheitspflicht für Kreditpunkte",
    "lec-30-11-title":
      "<strong>Studierendenpräsentation am Montag, 30.11.2026&nbsp;</strong>",
    "lec-30-11-body":
      "Flex-Termin<br />Zweite Chance für Studierendenpräsentation",
  };

  const phDe = {
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
  };

  const originalHtml = new WeakMap();
  const originalPh = new WeakMap();

  function apply(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
      const key = el.getAttribute("data-i18n");
      el.innerHTML =
        lang === "de" && de[key] != null ? de[key] : originalHtml.get(el);
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      if (!originalPh.has(el))
        originalPh.set(el, el.getAttribute("placeholder") || "");
      const key = el.getAttribute("data-i18n-ph");
      el.setAttribute(
        "placeholder",
        lang === "de" && phDe[key] != null ? phDe[key] : originalPh.get(el)
      );
    });

    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.textContent = lang === "de" ? "English" : "Deutsch";
    });
    try {
      localStorage.setItem("parab-lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  window.toggleLang = function () {
    const current = document.documentElement.lang === "de" ? "de" : "en";
    apply(current === "de" ? "en" : "de");
  };

  document.addEventListener("DOMContentLoaded", function () {
    let lang = "en";
    try {
      lang = localStorage.getItem("parab-lang") || "en";
    } catch (e) {
      /* ignore */
    }
    apply(lang);
  });
})();
