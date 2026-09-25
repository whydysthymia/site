(function initI18n(global) {
  const dictionaries = {
    ru: {
      skip: "К содержимому",
      navLabel: "Основная навигация",
      langGroup: "Язык",
      themeToggle: "Включить тёмную тему",
      themeToggleLight: "Включить светлую тему",
      menuToggle: "Открыть меню",
      menuClose: "Закрыть меню",
      navAbout: "Обо мне",
      navSkills: "Навыки",
      navWork: "Работы",
      navContact: "Контакт",
      navCta: "Связаться",
      heroEyebrow: "СПбГУПТД · 4 курс · Frontend",
      heroTitle: "Иван Манылов",
      heroLede:
        "Собираю интерфейсы в коде: вёрстка, UI и Figma. Учебные и pet-проекты — как способ думать формой, ритмом и деталью.",
      ctaPrimary: "Связаться",
      ctaSecondary: "Смотреть работы",
      aboutEyebrow: "Обо мне",
      aboutTitle: "Дизайн в голове, интерфейс в браузере",
      aboutLead:
        "Учусь на направлении «Прикладная информатика в дизайне». Мне интересен фронтенд как место, где типографика, сетка и поведение встречаются в одном экране.",
      aboutNote1Title: "Как работаю",
      aboutNote1Text:
        "Сначала структура и сценарий, потом визуал, потом код. Не рисую «красиво потом прикрутим» — сразу думаю, как это поедет на телефоне.",
      aboutNote2Title: "Сейчас в фокусе",
      aboutNote2Text:
        "Чистый HTML, CSS и JavaScript. Адаптив, доступность, аккуратное движение без лишнего шума.",
      skillsEyebrow: "Навыки",
      skillsTitle: "Инструменты, которыми собираю экран",
      skill1: "Адаптивная вёрстка, Mobile First",
      skill2: "UI-ритм, сетка, типографика",
      skill3: "Figma: макеты и передача в код",
      skill4: "HTML5, CSS3, vanilla JavaScript",
      skill5: "Учебные и pet-проекты под реальное использование",
      skill6: "Светлая / тёмная тема, базовая a11y",
      workEyebrow: "Портфолио",
      workTitle: "Четыре задачи, на которых учился форме",
      p1Meta: "Pet · UI / CSS",
      p1Title: "Ателье «Север»",
      p1Text: "Лендинг мастерской: крупный шрифт, спокойная сетка, ясные CTA.",
      p2Meta: "Учебный · JS",
      p2Title: "Трекер фокуса",
      p2Text: "Небольшой интерфейс сессий: состояния, таймер, аккуратная типографика.",
      p3Meta: "Pet · Figma → код",
      p3Title: "Каталог шрифтов",
      p3Text: "Карточки гарнитур, фильтры настроения, проверка контраста на макете.",
      p4Meta: "Учебный · адаптив",
      p4Title: "Расписание студии",
      p4Text: "Расписание занятий: сложная таблица, которая на телефоне становится стопкой.",
      contactEyebrow: "Контакт",
      contactTitle: "Напишите — отвечу по делу",
      contactAside:
        "Форма на этой странице — прототип без сервера. Дублируйте письмо в почту или мессенджер.",
      labelName: "Имя",
      labelEmail: "Email",
      labelMessage: "Сообщение",
      formSubmit: "Отправить",
      formError: "Заполните имя, корректный email и сообщение.",
      modalTitle: "Сообщение собрано",
      modalText:
        "На сервер ничего не ушло — это демонстрация формы. Напишите напрямую по контактам.",
      modalClose: "Закрыть",
      footerTools:
        "Инструменты: ChatGPT — исходный промпт брифа; Cursor — код и вёрстка.",
      footerTime: "Время работы над кодом: 18.09.2026, ~50 мин.",
      footerJs:
        "JS: тема, язык, меню, якоря, reveal, форма, модальное подтверждение, localStorage.",
      footerReadme: "Существенный запрос, проверка и правки студента — в README.md.",
      pageTitle: "Иван Манылов — Frontend",
      pageDescription:
        "Иван Манылов — frontend-разработчик, студент СПбГУПТД. Вёрстка, UI, Figma.",
    },
    en: {
      skip: "Skip to content",
      navLabel: "Primary navigation",
      langGroup: "Language",
      themeToggle: "Switch to dark theme",
      themeToggleLight: "Switch to light theme",
      menuToggle: "Open menu",
      menuClose: "Close menu",
      navAbout: "About",
      navSkills: "Skills",
      navWork: "Work",
      navContact: "Contact",
      navCta: "Contact",
      heroEyebrow: "SPbSUITD · 4th year · Frontend",
      heroTitle: "Ivan Manylov",
      heroLede:
        "I build interfaces in code: layout, UI, and Figma. Classwork and pet projects are how I think through form, rhythm, and detail.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View work",
      aboutEyebrow: "About",
      aboutTitle: "Design in the head, interface in the browser",
      aboutLead:
        "I study Applied Informatics in Design. Frontend is where type, grid, and behaviour meet on one screen.",
      aboutNote1Title: "How I work",
      aboutNote1Text:
        "Structure and flow first, then visuals, then code. I don't design “pretty, we'll wire it later” — I think about the phone from the start.",
      aboutNote2Title: "In focus now",
      aboutNote2Text:
        "Plain HTML, CSS, and JavaScript. Responsive layout, accessibility, and motion without noise.",
      skillsEyebrow: "Skills",
      skillsTitle: "Tools I use to build a screen",
      skill1: "Responsive layout, mobile first",
      skill2: "UI rhythm, grid, typography",
      skill3: "Figma: mockups and handoff to code",
      skill4: "HTML5, CSS3, vanilla JavaScript",
      skill5: "Classwork and pet projects meant to be used",
      skill6: "Light / dark theme, basic a11y",
      workEyebrow: "Work",
      workTitle: "Four problems I used to learn form",
      p1Meta: "Pet · UI / CSS",
      p1Title: "Atelier Sever",
      p1Text: "A workshop landing page: large type, a calm grid, clear CTAs.",
      p2Meta: "Classwork · JS",
      p2Title: "Focus tracker",
      p2Text: "A small session UI: states, a timer, careful type.",
      p3Meta: "Pet · Figma → code",
      p3Title: "Type catalog",
      p3Text: "Typeface cards, mood filters, contrast checks in the mockup.",
      p4Meta: "Classwork · responsive",
      p4Title: "Studio timetable",
      p4Text: "A dense schedule that collapses into a stack on a phone.",
      contactEyebrow: "Contact",
      contactTitle: "Write — I’ll answer to the point",
      contactAside:
        "The form is a front-end prototype with no server. Also reach me by email or messenger.",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      formSubmit: "Send",
      formError: "Add a name, a valid email, and a message.",
      modalTitle: "Message captured",
      modalText:
        "Nothing was sent to a server — this is a demo form. Use the contact links instead.",
      modalClose: "Close",
      footerTools: "Tools: ChatGPT — original brief prompt; Cursor — code and layout.",
      footerTime: "Time spent on code: 18 Sep 2026, ~50 min.",
      footerJs:
        "JS: theme, language, menu, anchors, reveal, form, success dialog, localStorage.",
      footerReadme: "The substantial prompt, checks, and student edits are in README.md.",
      pageTitle: "Ivan Manylov — Frontend",
      pageDescription:
        "Ivan Manylov — frontend developer, SPbSUITD student. Layout, UI, Figma.",
    },
  };

  function applyLanguage(lang) {
    const dict = dictionaries[lang] || dictionaries.ru;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const key = node.dataset.i18nAria;
      if (dict[key]) {
        node.setAttribute("aria-label", dict[key]);
      }
    });
    const title = dict.pageTitle;
    const description = dict.pageDescription;
    if (title) {
      document.title = title;
    }
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute("content", description);
    }
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
  }

  global.SiteI18n = {
    dictionaries,
    applyLanguage,
  };
})(window);
