/* =========================================================
   EDIT YOUR CONTENT HERE — no need to touch index.html or script.js
   Every text is { en: "...", ar: "..." }.
   Anything marked  (EDIT)  is a placeholder you still need to fill in.
   Source of truth: your resume PDF (Moataz Younes).
   ========================================================= */

const DATA = {
  /* ---------- Personal info ---------- */
  person: {
    name:     { en: "Moataz Younes", ar: "معتز يونس" },
    title:    { en: "Technical Office Engineer | Roads & Infrastructure",
                ar: "مهندس مكتب فني | طرق وبنية تحتية" },
    location: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" },
    email:    "moatazjon@gmail.com",
    phone:    "+20 101 001 2564",
    phone2:   "+20 111 555 6496",
    whatsapp: "201010012564",                                   // digits only, with country code (uses your primary number)
    linkedin: "https://www.linkedin.com/in/moatazyoun/",
    github:   "https://github.com/moatazyoun",
    facebook: "https://www.facebook.com/MOATAZJON",
    cv: { en: "assets/cv/Moataz-Younes-CV.pdf", ar: "" }  // add an Arabic CV later: "assets/cv/....pdf"
  },

  /* ---------- Hero stats ---------- */
  stats: [
    { value: "4+",  label: { en: "Years of experience",       ar: "سنوات خبرة" } },
    { value: "50+", label: { en: "km of paved corridor",      ar: "كم طرق مرصوفة" } },
    { value: "9",   label: { en: "Software products",         ar: "منتجات برمجية" } }
  ],

  /* ---------- About (from your resume summary) ---------- */
  about: {
    paragraphs: [
      { en: "Technical Office Engineer with solid experience in road and infrastructure projects, including urban highways, industrial roads, road maintenance works and public parking facilities.",
        ar: "مهندس مكتب فني بخبرة قوية في مشروعات الطرق والبنية التحتية، تشمل الطرق الحضرية السريعة والطرق الصناعية وأعمال صيانة الطرق ومواقف السيارات العامة." },
      { en: "Strong background in quantity take-offs, BOQ preparation, shop-drawing review, cost estimation and technical coordination with consultants and governmental authorities — supporting large-scale projects in compliance with approved drawings, specifications and applicable codes.",
        ar: "خلفية قوية في حصر الكميات وإعداد جداول الكميات (BOQ) ومراجعة الشوب دروينج وتقدير التكاليف والتنسيق الفني مع الاستشاريين والجهات الحكومية، لدعم المشروعات الكبرى بما يتوافق مع المخططات المعتمدة والمواصفات والأكواد." },
      { en: "I also build software for the construction industry under the younes brand — from an AI-powered CAD to an ERP for road and bridge contractors — because I know first-hand which tools the technical office actually needs.",
        ar: "وبصمم وببني برمجيات لقطاع التشييد تحت براند younes، من CAD بالذكاء الاصطناعي لنظام ERP لمقاولي الطرق والكباري، لأني عارف بنفسي إيه الأدوات اللي المكتب الفني محتاجها فعلًا." }
    ],
    facts: [
      { icon: "pin",    k: { en: "Based in",  ar: "المقر" },      v: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" } },
      { icon: "gov",    k: { en: "Current",   ar: "حاليًا" },     v: { en: "Fawzy Al-Refaey General Contracting & Roads Construction", ar: "فوزي الرفاعي للمقاولات العامة وإنشاء الطرق" } },
      { icon: "cap",    k: { en: "Education", ar: "التعليم" },    v: { en: "B.Sc. Civil Engineering — Alexandria University", ar: "بكالوريوس هندسة مدنية — جامعة الإسكندرية" } },
      { icon: "globe",  k: { en: "Languages", ar: "اللغات" },     v: { en: "Arabic (native), English (professional)", ar: "العربية (لغة أم)، الإنجليزية (احترافي)" } },
      { icon: "shield", k: { en: "Military service", ar: "الخدمة العسكرية" }, v: { en: "Completed", ar: "أُنهيت" } },
      { icon: "arrow",  k: { en: "Open to",   ar: "متاح لـ" },    v: { en: "Opportunities in the Gulf region and Egypt", ar: "فرص في منطقة الخليج ومصر" } }
    ]
  },

  /* ---------- Experience timeline (from your resume) ---------- */
  experience: [
    {
      period: { en: "02/2023 — Present", ar: "02/2023 — الآن" },
      role:   { en: "Technical Office Engineer", ar: "مهندس مكتب فني" },
      org:    { en: "Fawzy Al-Refaey General Contracting & Roads Construction · Egypt", ar: "فوزي الرفاعي للمقاولات العامة وإنشاء الطرق · مصر" },
      points: [
        { en: "Technical Office Engineer on multiple road and infrastructure projects executed by the same contractor at different locations across Egypt, under various governmental authorities.", ar: "مهندس مكتب فني في عدة مشروعات طرق وبنية تحتية نفذها نفس المقاول في مواقع مختلفة بمصر تحت إشراف جهات حكومية متعددة." },
        { en: "Preparing and reviewing BOQs, detailed quantity take-offs and cost estimates.", ar: "إعداد ومراجعة جداول الكميات (BOQ) وحصر الكميات التفصيلي وتقديرات التكاليف." },
        { en: "Reviewing shop drawings, road cross-sections, profiles and pavement structures, plus technical specifications and method statements.", ar: "مراجعة الشوب دروينج والقطاعات العرضية والقطاعات الطولية وطبقات الرصف، والمواصفات الفنية وطرق التنفيذ (Method Statements)." },
        { en: "Preparing as-built drawings, final quantity statements, technical reports, progress documentation and official correspondence.", ar: "إعداد رسومات As-Built والكميات النهائية والتقارير الفنية ومستندات التقدم والمراسلات الرسمية." },
        { en: "Technical coordination with consultants and governmental authorities, ensuring compliance with approved drawings, specifications and Egyptian codes.", ar: "التنسيق الفني مع الاستشاريين والجهات الحكومية، مع ضمان الالتزام بالمخططات المعتمدة والمواصفات والكود المصري." }
      ]
    },
    {
      period: { en: "10/2021 — 12/2022", ar: "10/2021 — 12/2022" },
      role:   { en: "Technical Office Engineer (Military Service)", ar: "مهندس مكتب فني (الخدمة العسكرية)" },
      org:    { en: "Engineering Authority of the Egyptian Armed Forces · Egypt", ar: "الهيئة الهندسية للقوات المسلحة · مصر" },
      points: [
        { en: "Technical office duties on national infrastructure projects.", ar: "مهام المكتب الفني في مشروعات البنية التحتية القومية." },
        { en: "Prepared quantity take-offs, BOQs and detailed technical reports.", ar: "إعداد حصر الكميات وجداول الكميات والتقارير الفنية التفصيلية." },
        { en: "Supported design and execution stages using AutoCAD, Civil 3D and Excel, under strict technical standards and high-pressure conditions.", ar: "دعم مراحل التصميم والتنفيذ باستخدام AutoCAD وCivil 3D وExcel، وفق معايير فنية صارمة وتحت ضغط عمل عالٍ." }
      ]
    },
    {
      period: { en: "Education", ar: "التعليم" },
      role:   { en: "Bachelor of Civil Engineering", ar: "بكالوريوس الهندسة المدنية" },
      org:    { en: "Faculty of Engineering — Alexandria University", ar: "كلية الهندسة — جامعة الإسكندرية" },
      points: [
        { en: "Graduation project: Steel Structure Design — grade Excellent.", ar: "مشروع التخرج: تصميم منشأ معدني — بتقدير ممتاز." }
      ]
    }
  ],

  /* ---------- Skills (from your resume) ---------- */
  skills: [
    { icon: "road", title: { en: "Civil & Roads", ar: "المدني والطرق" },
      items: [
        { en: "Quantity take-off & BOQ preparation", ar: "حصر الكميات وإعداد BOQ" },
        { en: "Cost estimation & final accounts", ar: "تقدير التكاليف والمستخلصات الختامية" },
        { en: "Shop drawings review", ar: "مراجعة الشوب دروينج" },
        { en: "Roads & pavement works", ar: "أعمال الطرق والرصف" },
        { en: "As-built drawings", ar: "رسومات As-Built" },
        { en: "Technical reports & documentation", ar: "التقارير والتوثيق الفني" },
        { en: "Coordination with consultants & authorities", ar: "التنسيق مع الاستشاريين والجهات" },
        { en: "AASHTO standards", ar: "معايير AASHTO" }
      ] },
    { icon: "code", title: { en: "Software & Tools", ar: "البرمجة والأدوات" },
      items: ["AutoCAD", "Civil 3D", "Excel", "Word", "PowerPoint", "Adobe Photoshop", "Rust", "TypeScript", "React", "Node.js", "GIS / KML"] },
    { icon: "people", title: { en: "Strengths", ar: "نقاط القوة" },
      items: [
        { en: "Detail oriented", ar: "دقة في التفاصيل" },
        { en: "Technical & analytical", ar: "قدرة فنية وتحليلية" },
        { en: "Problem solving", ar: "حل المشكلات" },
        { en: "Effective communication", ar: "تواصل فعّال" },
        { en: "Adaptable to large-scale projects", ar: "التكيف مع المشروعات الكبرى" },
        { en: "Arabic (native) · English (professional)", ar: "العربية (لغة أم) · الإنجليزية (احترافي)" }
      ] }
  ],

  /* ---------- Software ----------
     group "line" = the younes product line (big cards); group "tool" = smaller tools.
     wm: ["you","cad"] renders the name in the younes wordmark style.
     image: "" shows a placeholder until you add a screenshot path.                    */
  software: [
    {
      id: "youcad", color: { d: "#A78BFA", l: "#6B46D8" }, group: "line", featured: true, wm: ["you", "cad"],
      title: { en: "youcad", ar: "youcad" },
      tag: { en: "CAD", ar: "رسم هندسي" },
      short: { en: "An AI-powered AutoCAD alternative for Windows and macOS, fast and Mac-styled.", ar: "بديل أوتوكاد بالذكاء الاصطناعي لويندوز وماك، سريع وبواجهة بطابع macOS." },
      status: { key: "dev", en: "In active development", ar: "قيد التطوير النشط" },
      desc: { en: "An AI-powered alternative to AutoCAD, built in Rust for Windows and macOS, with a fast, freeze-free engine and a unified macOS-style interface.",
              ar: "بديل لأوتوكاد بالذكاء الاصطناعي، مبني بلغة Rust لويندوز وماك، بمحرك سريع بدون تهنيج وواجهة موحّدة بطابع macOS." },
      details: { en: "youcad is a CAD application for engineers who want AutoCAD-class drafting without the weight. It is written in Rust with an immediate-mode UI (egui) on top of a GPU renderer (wgpu), so large drawings stay responsive. The interface is being designed as one coherent system that looks and behaves like a native macOS app, on both Windows and macOS.",
                 ar: "youcad برنامج CAD للمهندسين اللي عايزين رسم بمستوى أوتوكاد من غير تقل. مكتوب بلغة Rust بواجهة immediate-mode (egui) فوق محرك رسم بالـ GPU (wgpu)، فالرسومات الكبيرة تفضل سريعة. الواجهة بتتصمم كنظام واحد متماسك شكله وسلوكه شبه تطبيقات macOS الأصلية على ويندوز وماك." },
      features: [
        { en: "AI-powered drafting assistance built into a CAD workflow", ar: "مساعد رسم بالذكاء الاصطناعي مدمج في سير عمل الـ CAD" },
        { en: "One unified UI that matches macOS look and interaction", ar: "واجهة واحدة موحّدة تطابق شكل وتفاعل macOS" },
        { en: "Four identical themes: Normal, Light, Liquid Glass Light and Liquid Glass Dark", ar: "أربع ثيمات بنفس التصميم: Normal وLight وLiquid Glass Light وLiquid Glass Dark" },
        { en: "Unified buttons and concise, re-laid-out menus with only a few editable options", ar: "أزرار موحّدة وقوائم مختصرة معاد ترتيبها بخيارات تعديل قليلة" },
        { en: "Hideable / collapsible menus with defined motion rules for when they show and hide", ar: "قوائم قابلة للإخفاء والطي بقواعد حركة محددة لظهورها واختفائها" },
        { en: "GPU-accelerated rendering with wgpu", ar: "رسم متسارع بالـ GPU عبر wgpu" },
        { en: "Engine and logic changes aimed at fast, freeze-free performance on large drawings", ar: "تعديلات في المحرك والمنطق لأداء سريع بدون تهنيج مع الرسومات الكبيرة" }
      ],
      meta: [
        { k: { en: "Platforms", ar: "المنصات" }, v: { en: "Windows, macOS", ar: "ويندوز، ماك" } },
        { k: { en: "Built with", ar: "المبني بـ" }, v: { en: "Rust, egui, wgpu", ar: "Rust وegui وwgpu" } },
        { k: { en: "My role", ar: "دوري" }, v: { en: "Product design & development", ar: "تصميم المنتج وتطويره" } }
      ],
      stack: ["Rust", "egui", "wgpu", "AI", "Windows", "macOS"],
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "youpharma", color: { d: "#4FC9A0", l: "#0B7A59" }, group: "line", wm: ["you", "pharma"],
      title: { en: "youpharma", ar: "youpharma" },
      tag: { en: "Pharmacy", ar: "صيدلة" },
      short: { en: "Finds medicine and pharmacy offers and gathers them in one place.", ar: "يجيب عروض الأدوية والمنتجات الصيدلية ويجمعها لك في مكان واحد." },
      status: { key: "dev", en: "In development", ar: "قيد التطوير" },
      desc: { en: "An app that finds medicine offers and pharmacy deals and brings them together in one place.",
              ar: "تطبيق بيجيب عروض الأدوية والمنتجات الصيدلية ويجمعها في مكان واحد." },
      details: { en: "youpharma collects medicine offers and similar pharmacy deals in one app, so you do not have to search for them one by one. It is in active development; detailed features, tech stack and screenshots will be added here.",   // (EDIT)
                 ar: "youpharma بيجيب عروض الأدوية وما شابهها من عروض الصيدليات في تطبيق واحد، من غير ما تدوّر عليها واحدة واحدة. تحت التطوير حاليًا، وهتتضاف هنا المميزات التفصيلية والتقنيات ولقطات الشاشة." },
      features: [],                                                                                                   // (EDIT) add features here
      meta: [ { k: { en: "Domain", ar: "المجال" }, v: { en: "Pharmacy offers", ar: "عروض الصيدليات" } } ],
      stack: ["Pharmacy", "Offers"],                                                                                  // (EDIT)
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "youerp", color: { d: "#E3BE4A", l: "#8A6D00" }, group: "line", wm: ["you", "erp"],
      title: { en: "youerp", ar: "youerp" },
      tag: { en: "ERP", ar: "إدارة مشروعات" },
      short: { en: "A construction ERP for Egyptian road and bridge projects, with Gemini AI.", ar: "نظام ERP لإدارة مشروعات الطرق والكباري في مصر مع تكامل Gemini AI." },
      status: { key: "dev", en: "In development", ar: "قيد التطوير" },
      desc: { en: "A construction ERP for managing Egyptian road and bridge projects, with Gemini AI integration.",
              ar: "نظام ERP لإدارة مشروعات الطرق والكباري في مصر مع تكامل مع Gemini AI." },
      details: { en: "youerp (originally named Bunyan / بنيان) is a full-stack web ERP for contractors who build roads and bridges in Egypt. A React + TypeScript frontend talks to a Node.js / Express backend, with Google's Gemini API providing the AI features. The codebase went through a full audit and restructuring and is delivered with zero TypeScript errors.",
                 ar: "youerp (اسمه الأصلي بنيان) نظام ERP متكامل على الويب لمقاولي الطرق والكباري في مصر. واجهة React وTypeScript بتتكلم مع سيرفر Node.js وExpress، وAPI الخاص بـ Gemini من جوجل بيقدّم مميزات الذكاء الاصطناعي. الكود عدّى على مراجعة وإعادة هيكلة شاملة وتم تسليمه بدون أي أخطاء TypeScript." },
      features: [
        { en: "Built for Egyptian road and bridge construction management", ar: "مبني لإدارة مشروعات الطرق والكباري في مصر" },
        { en: "AI features powered by Google Gemini", ar: "مميزات ذكاء اصطناعي بواسطة Google Gemini" },
        { en: "Authentication and protected routes", ar: "تسجيل دخول وحماية للصفحات" },
        { en: "State persistence across all main entities (localStorage), with collision-safe IDs", ar: "حفظ الحالة لكل الكيانات الرئيسية (localStorage) مع معرّفات (IDs) آمنة من التكرار" },
        { en: "Strictly typed TypeScript codebase — zero errors after a full audit", ar: "كود TypeScript بتايبنج صارم — صفر أخطاء بعد مراجعة شاملة" },
        { en: "Deployed on Vercel with PostgreSQL; a desktop version (Electron / Tauri) is being explored", ar: "منشور على Vercel مع PostgreSQL، ونسخة سطح المكتب (Electron / Tauri) تحت الدراسة" }
      ],
      meta: [
        { k: { en: "Frontend", ar: "الواجهة" }, v: { en: "React, TypeScript, Vite", ar: "React وTypeScript وVite" } },
        { k: { en: "Backend", ar: "الخلفية" }, v: { en: "Node.js, Express, PostgreSQL", ar: "Node.js وExpress وPostgreSQL" } },
        { k: { en: "AI", ar: "الذكاء الاصطناعي" }, v: { en: "Google Gemini API", ar: "Google Gemini API" } },
        { k: { en: "Hosting", ar: "الاستضافة" }, v: { en: "Vercel", ar: "Vercel" } }
      ],
      stack: ["React", "Express", "Vite", "TypeScript", "PostgreSQL", "Gemini AI"],
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "youwidget", color: { d: "#E27FD3", l: "#A8329B" }, group: "line", wm: ["you", "widget"],
      title: { en: "youwidget", ar: "youwidget" },
      tag: { en: "Desktop", ar: "سطح المكتب" },
      short: { en: "A custom dock for Windows desktops, in development.", ar: "دوك مخصص لسطح مكتب ويندوز، قيد التطوير حاليًا." },
      status: { key: "dev", en: "In development", ar: "قيد التطوير" },
      desc: { en: "A custom dock for Windows desktops.",                                   // (EDIT) add the real feature list
              ar: "دوك مخصص لسطح مكتب ويندوز." },
      details: { en: "A custom dock for Windows. Detailed features, tech stack and screenshots will be added here.",   // (EDIT)
                 ar: "دوك مخصص لويندوز. هتتضاف هنا المميزات التفصيلية والتقنيات ولقطات الشاشة." },
      features: [],                                                                                                   // (EDIT) add features here
      meta: [ { k: { en: "Platform", ar: "المنصة" }, v: { en: "Windows", ar: "ويندوز" } } ],
      stack: ["Windows", "Desktop"],                                                                                  // (EDIT)
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "youweb", color: { d: "#6C9CFF", l: "#2F5FD0" }, group: "line", featured: true, wm: ["you", "web"],
      title: { en: "youweb", ar: "youweb" },
      tag: { en: "Websites", ar: "مواقع" },
      short: { en: "Responsive bilingual company websites, starting with Kinetic Egypt.", ar: "مواقع شركات متجاوبة وثنائية اللغة، أولها موقع كينيتك مصر." },
      status: { key: "live", en: "Live", ar: "منشور" },
      desc: { en: "Website design and development: responsive, bilingual (Arabic / English) company websites built from scratch.",
              ar: "تصميم وتطوير المواقع: مواقع شركات متجاوبة وثنائية اللغة (عربي / إنجليزي) مبنية من الصفر." },
      details: { en: "Every website I design and build lives under youweb. The first is the corporate site of Kinetic for Engineering & Contracting, an MEP (mechanical, electrical, plumbing) contractor in Alexandria: an Arabic-first RTL site with a full English version, a searchable project portfolio, an employee portal and quality / HSE policy pages.",
                 ar: "كل موقع بصممه وببنيه بيتحط تحت youweb. أول موقع هو موقع شركة كينيتك للهندسة والمقاولات (MEP) بالإسكندرية: موقع عربي RTL بنسخة إنجليزية كاملة، وسابقة أعمال قابلة للبحث، وبوابة للموظفين وصفحات سياسات الجودة والصحة والسلامة." },
      features: [
        { en: "Arabic-first RTL site with a complete English version and a language switch", ar: "موقع عربي RTL بنسخة إنجليزية كاملة وزر تبديل اللغة" },
        { en: "Multi-page structure: home, about, portfolio, contact, employee portal and policy pages", ar: "هيكل متعدد الصفحات: الرئيسية ومن نحن وسابقة الأعمال والتواصل وبوابة الموظفين وصفحات السياسات" },
        { en: "Live portfolio with instant search by client / consultant and filters by discipline (HVAC, plumbing, electrical, fire protection, infrastructure)", ar: "سابقة أعمال بحث فوري بالعميل / الاستشاري وفلاتر حسب التخصص (تكييف وسباكة وكهرباء ومكافحة حريق وشبكات بنية تحتية)" },
        { en: "Services section covering HVAC, BMS & security, plumbing, fire-fighting and electrical works", ar: "قسم خدمات يغطي التكييف وBMS والأمن والسباكة ومكافحة الحريق والأعمال الكهربائية" },
        { en: "Employee portal with company-email setup guides for every platform and direct webmail access", ar: "بوابة موظفين بشرح إعداد بريد الشركة لكل المنصات ودخول مباشر للـ webmail" },
        { en: "Team section, partners logo carousel, vision & mission and a message from the general manager", ar: "قسم الفريق وشريط شعارات الشركاء والرؤية والمهمة وكلمة المدير العام" },
        { en: "Quality and Health & Safety policy pages, contact / quote-request page", ar: "صفحات سياسة الجودة والصحة والسلامة وصفحة تواصل وطلب عرض سعر" },
        { en: "SEO and social-sharing metadata, responsive on all screen sizes", ar: "بيانات SEO ومشاركة اجتماعية، ومتجاوب مع كل الشاشات" }
      ],
      meta: [
        { k: { en: "Client", ar: "العميل" }, v: { en: "Kinetic for Engineering & Contracting (MEP)", ar: "كينيتك للهندسة والمقاولات (MEP)" } },
        { k: { en: "Languages", ar: "اللغات" }, v: { en: "Arabic (RTL) and English", ar: "العربية (RTL) والإنجليزية" } },
        { k: { en: "Built with", ar: "المبني بـ" }, v: { en: "HTML, CSS, JavaScript", ar: "HTML وCSS وJavaScript" } }
      ],
      stack: ["HTML", "CSS", "JavaScript", "RTL / LTR", "SEO"],
      sites: [
        { name: { en: "Kinetic Egypt", ar: "كينيتك مصر" }, url: "https://kineticegypt.com",
          desc: { en: "Bilingual corporate website — MEP contractor, Alexandria", ar: "موقع شركة ثنائي اللغة — مقاولات MEP، الإسكندرية" } }
      ],
      image: "", gallery: [], live: "https://kineticegypt.com", github: ""
    },
    {
      id: "gis", group: "tool", color: { d: "#A6D957", l: "#50700C" }, wm: ["you", "gis"],
      title: { en: "yougis", ar: "yougis" },
      tag: { en: "GIS", ar: "خرائط" },
      short: { en: "Overlays land parcels on KML road plans in the browser, nothing uploaded.", ar: "يركّب قطع الأراضي فوق مخططات الطرق KML داخل المتصفح بدون رفع أي ملفات." },
      status: { key: "dev", en: "In development", ar: "قيد التطوير" },
      desc: { en: "Overlays land-parcel data on KML road plans, entirely in the browser — no files ever leave the device.",
              ar: "تراكب بيانات قطع الأراضي فوق مخططات الطرق بصيغة KML، بالكامل داخل المتصفح ولا يتم رفع أي ملفات." },
      details: { en: "A web GIS tool for road projects: load a KML road plan, overlay land-parcel data on it and see which parcels the alignment touches. Because road plans and parcel files are sensitive governmental data, all processing is client-side only. It was planned before coding, with a full specification (features, edge cases and a phased roadmap).",
                 ar: "أداة GIS على الويب لمشروعات الطرق: بتحمّل مخطط طريق بصيغة KML، وتركّب عليه بيانات قطع الأراضي وتشوف القطع اللي المحور بيمسّها. ولأن مخططات الطرق وملفات القطع بيانات حكومية حساسة، كل المعالجة على جهاز المستخدم فقط. اتخططت قبل البرمجة بمواصفات كاملة (المميزات والحالات الحدّية وخارطة طريق على مراحل)." },
      features: [
        { en: "Overlay of land-parcel data on KML road plans", ar: "تراكب بيانات قطع الأراضي على مخططات الطرق KML" },
        { en: "Interactive web map built on Leaflet", ar: "خريطة تفاعلية على الويب مبنية على Leaflet" },
        { en: "Geometry operations powered by turf.js", ar: "عمليات هندسية مكانية بواسطة turf.js" },
        { en: "100% client-side processing — nothing is uploaded", ar: "معالجة 100% على جهاز المستخدم — لا يتم رفع أي شيء" },
        { en: "Spec-driven build: SPEC.md with edge cases and a phased implementation roadmap", ar: "بناء قائم على مواصفات: ملف SPEC.md بالحالات الحدّية وخارطة تنفيذ على مراحل" }
      ],
      meta: [
        { k: { en: "Built with", ar: "المبني بـ" }, v: { en: "Vite, React, TypeScript, Leaflet, turf.js", ar: "Vite وReact وTypeScript وLeaflet وturf.js" } },
        { k: { en: "Privacy", ar: "الخصوصية" }, v: { en: "Client-side only", ar: "على جهاز المستخدم فقط" } }
      ],
      stack: ["React", "TypeScript", "Leaflet", "turf.js"],
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "sched", group: "tool", color: { d: "#F59E4B", l: "#A35305" }, wm: ["you", "plan"],
      title: { en: "youplan", ar: "youplan" },
      tag: { en: "Scheduling", ar: "جدولة" },
      short: { en: "Arabic multi-project scheduler with Gantt, Egyptian holidays and BOQ tracking.", ar: "جدولة عربية لعدة مشروعات بمخطط Gantt وإجازات مصر الرسمية وتتبع BOQ." },
      status: { key: "live", en: "Ready to use", ar: "جاهز للاستخدام" },
      desc: { en: "Arabic multi-project scheduler with Gantt charts, Egyptian public holidays and BOQ / progress tracking in one HTML file.",
              ar: "جدولة عربية لعدة مشروعات بمخططات Gantt والإجازات الرسمية في مصر وتتبع BOQ والتقدم في ملف HTML واحد." },
      details: { en: "An Arabic construction scheduling web app delivered as a single self-hosted HTML file. It manages several projects at once, draws Gantt charts that understand Egyptian public holidays, and tracks the financial side — BOQ items and progress — alongside the schedule. Data is saved in the browser, so it works offline with no server.",
                 ar: "تطبيق ويب عربي لجدولة مشروعات التشييد في ملف HTML واحد بيتخزّن بنفسك. بيدير أكتر من مشروع في نفس الوقت، وبيرسم مخططات Gantt بتراعي الإجازات الرسمية في مصر، وبيتابع الجانب المالي — بنود الـ BOQ ونسب التقدم — جنب الجدول الزمني. البيانات بتتحفظ في المتصفح فبيشتغل بدون إنترنت وبدون سيرفر." },
      features: [
        { en: "Multiple projects in one app", ar: "عدة مشروعات في تطبيق واحد" },
        { en: "Gantt charts for scheduling and progress", ar: "مخططات Gantt للجدولة والتقدم" },
        { en: "Egyptian public-holiday awareness in working-day calculations", ar: "مراعاة الإجازات الرسمية المصرية في حساب أيام العمل" },
        { en: "Financial tracking of BOQ items and progress", ar: "تتبع مالي لبنود الـ BOQ ونسب التقدم" },
        { en: "Arabic interface; saves data in the browser (localStorage)", ar: "واجهة عربية وحفظ البيانات في المتصفح (localStorage)" },
        { en: "Single HTML file — no server or installation needed", ar: "ملف HTML واحد — بدون سيرفر أو تثبيت" }
      ],
      meta: [
        { k: { en: "Format", ar: "الصيغة" }, v: { en: "Single self-hosted HTML file", ar: "ملف HTML واحد" } },
        { k: { en: "Language", ar: "اللغة" }, v: { en: "Arabic", ar: "العربية" } },
        { k: { en: "Works", ar: "التشغيل" }, v: { en: "Offline", ar: "بدون إنترنت" } }
      ],
      stack: ["HTML", "JavaScript", "Gantt", "localStorage"],
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "ytm-lg", group: "tool", color: { d: "#F2708A", l: "#C2284F" }, wm: ["you", "music"],
      title: { en: "youmusic", ar: "youmusic" },
      tag: { en: "Music", ar: "موسيقى" },
      short: { en: "A custom YouTube Music app for LG webOS TVs, built for the remote.", ar: "يوتيوب ميوزك مخصص لشاشات LG webOS ومصمم للتصفح بالريموت." },
      status: { key: "dev", en: "Custom build", ar: "نسخة مخصصة" },
      desc: { en: "A custom YouTube Music app for LG webOS smart TVs, designed for remote-control navigation.",   // (EDIT) add exact features
              ar: "تطبيق يوتيوب ميوزك مخصص لشاشات LG بنظام webOS، مصمم للتصفح بالريموت." },
      details: { en: "A YouTube Music app made for LG webOS smart TVs, designed around the TV remote and the big screen. Detailed features, install method and screenshots will be added here.",   // (EDIT)
                 ar: "تطبيق يوتيوب ميوزك مصمم لشاشات LG بنظام webOS، مبني حوالين ريموت التلفزيون والشاشة الكبيرة. هتتضاف هنا المميزات التفصيلية وطريقة التثبيت ولقطات الشاشة." },
      features: [],                                                                                          // (EDIT) add features here
      meta: [ { k: { en: "Platform", ar: "المنصة" }, v: { en: "LG webOS smart TVs", ar: "شاشات LG بنظام webOS" } } ],
      stack: ["webOS", "TV UI"],
      image: "", gallery: [], live: "", github: ""
    },
    {
      id: "lg-launcher", group: "tool", color: { d: "#3CCFD0", l: "#0B7F87" }, wm: ["you", "tv"],
      title: { en: "youtv", ar: "youtv" },
      tag: { en: "TV", ar: "تلفزيون" },
      short: { en: "A replacement LG TV launcher: HDMI first, with prayer-times and weather widgets.", ar: "لانشر بديل لشاشات LG يبدأ بـ HDMI مع ودجت الصلاة والطقس." },
      status: { key: "dev", en: "In development", ar: "قيد التطوير" },
      desc: { en: "A custom launcher for LG webOS TVs: HDMI source first with a live mini preview, all installed apps detected, plus prayer-times and weather widgets.",
              ar: "لانشر مخصص لشاشات LG بنظام webOS: مصدر HDMI أولًا مع معاينة مصغرة، واكتشاف كل التطبيقات المثبتة، مع ودجت لمواقيت الصلاة والطقس." },
      details: { en: "A full replacement home screen for LG webOS TVs. It starts in place of the official launcher, finds every installed app (store and non-store), and opens with the HDMI source focused and a small live preview of whatever is connected. The look is a dark, glassy, Arabic-friendly right-to-left interface that keeps each app's official identity in the app bar. Developed and tested on an LG 55UP7760PVB running webOS 6.5.",
                 ar: "شاشة رئيسية بديلة بالكامل لشاشات LG بنظام webOS. بتشتغل بدل اللانشر الرسمي، وبتلاقي كل التطبيقات المثبتة (من المتجر وخارجه)، وبتفتح على مصدر HDMI متركّز عليه مع معاينة مصغرة حية للجهاز المتصل. الشكل واجهة داكنة زجاجية من اليمين لليسار بتحافظ على هوية كل تطبيق في شريط التطبيقات. اتطوّر واتجرّب على LG 55UP7760PVB بنظام webOS 6.5." },
      features: [
        { en: "Starts in place of the official launcher", ar: "بيشتغل بدل اللانشر الرسمي" },
        { en: "Detects all installed apps — store and non-store", ar: "بيكتشف كل التطبيقات المثبتة — من المتجر وخارجه" },
        { en: "HDMI is the first, auto-focused option, with a mini live preview of the connected source", ar: "HDMI أول خيار ومتركّز تلقائيًا مع معاينة مصغرة حية للمصدر المتصل" },
        { en: "Prayer-times widget and weather widget for cities worldwide, especially Egypt", ar: "ودجت مواقيت الصلاة وودجت الطقس لمدن العالم وخصوصًا مصر" },
        { en: "Dark glass, right-to-left interface that keeps official app identities in the app bar", ar: "واجهة داكنة زجاجية من اليمين لليسار بتحافظ على الهوية الرسمية للتطبيقات في شريط التطبيقات" }
      ],
      meta: [
        { k: { en: "Platform", ar: "المنصة" }, v: { en: "LG webOS 6.5 TVs", ar: "شاشات LG بنظام webOS 6.5" } },
        { k: { en: "Tested on", ar: "اتجرّب على" }, v: { en: "LG 55UP7760PVB", ar: "LG 55UP7760PVB" } }
      ],
      stack: ["webOS", "TV UI"],
      image: "", gallery: [], live: "", github: ""
    }
  ],

  /* ---------- Civil projects (from your resume; add photos via image: "...") ---------- */
  civilCategories: [
    { key: "all",        en: "All",                 ar: "الكل" },
    { key: "highway",    en: "Roads & Highways",    ar: "طرق وطرق سريعة" },
    { key: "industrial", en: "Industrial Roads",    ar: "طرق صناعية" },
    { key: "parking",    en: "Parking & Maintenance", ar: "مواقف وصيانة" }
  ],
  civil: [
    { cat: "highway", image: "",
      loc:    { lat: 31.155, lng: 29.885, z: 13, approx: true, place: { en: "Alexandria — Mahmoudia Axis (Rakta canal to Dekheila)", ar: "الإسكندرية — محور المحمودية (من ترعة راكتا حتى الدخيلة)" } },
      name:   { en: "Mahmoudia Axis Development — Alexandria", ar: "تطوير محور المحمودية — الإسكندرية" },
      period: { en: "02/2023 – 06/2024", ar: "02/2023 – 06/2024" },
      client: { en: "Engineering Authority of the Egyptian Armed Forces", ar: "الهيئة الهندسية للقوات المسلحة" },
      scope:  { en: "Urban highway development — major urban traffic corridor", ar: "تطوير طريق حضري سريع — محور مروري رئيسي" },
      role:   { en: "BOQs, quantity take-offs, shop drawings, alignment / level / pavement review", ar: "جداول الكميات وحصر الكميات والشوب دروينج ومراجعة المحاور والمناسيب وطبقات الرصف" } },
    { cat: "highway", image: "",
      loc:    { lat: 30.935, lng: 29.74, z: 12, approx: true, place: { en: "West Alexandria — near Borg El Arab Airport", ar: "غرب الإسكندرية — بالقرب من مطار برج العرب" } },
      name:   { en: "Western Arc — Major General Omar Suleiman Axis", ar: "القوس الغربي — محور اللواء عمر سليمان" },
      period: { en: "06/2024 – 09/2025", ar: "06/2024 – 09/2025" },
      client: { en: "Central Coast Reconstruction Authority", ar: "هيئة تعمير الساحل المركزي" },
      scope:  { en: "Primary road & infrastructure development", ar: "تطوير طريق رئيسي وبنية تحتية" },
      role:   { en: "Quantities, cost estimates, drawing & method review, road geometry and pavement issues", ar: "الكميات وتقدير التكاليف ومراجعة المخططات وطرق التنفيذ ومشكلات هندسة الطريق والرصف" } },
    { cat: "industrial", image: "",
      loc:    { lat: 30.865, lng: 29.585, z: 13, approx: true, place: { en: "Borg El Arab City, Alexandria", ar: "مدينة برج العرب، الإسكندرية" } },
      name:   { en: "Industrial Roads — Borg El Arab City", ar: "الطرق الصناعية — مدينة برج العرب" },
      period: { en: "09/2025 – Present", ar: "09/2025 – الآن" },
      client: { en: "Borg El Arab New City Authority", ar: "جهاز مدينة برج العرب الجديدة" },
      scope:  { en: "Industrial road networks", ar: "شبكات طرق صناعية" },
      role:   { en: "BOQs & tender documents, shop-drawing review, as-built drawings and final quantities", ar: "جداول الكميات ومستندات المناقصات ومراجعة الشوب دروينج ورسومات As-Built والكميات النهائية" } },
    { cat: "parking", image: "",
      loc:    { lat: 30.849, lng: 29.612, z: 14, approx: true, place: { en: "Borg El Arab City, Alexandria", ar: "مدينة برج العرب، الإسكندرية" } },
      name:   { en: "Road Maintenance & Public Parking Garages — Borg El Arab City", ar: "صيانة الطرق ومواقف السيارات العامة — مدينة برج العرب" },
      period: { en: "09/2025 – Present", ar: "09/2025 – الآن" },
      client: { en: "Borg El Arab New City Authority", ar: "جهاز مدينة برج العرب الجديدة" },
      scope:  { en: "Road maintenance works and public parking garages", ar: "أعمال صيانة الطرق ومواقف السيارات العامة" },
      role:   { en: "Technical studies & quantities; participated in garage layouts and traffic circulation design and construction", ar: "الدراسات الفنية والكميات؛ والمشاركة في تصميم وتنفيذ تخطيط الجراجات والحركة المرورية" } }
  ]
};

/* ---------- UI strings ---------- */
const I18N = {
  en: {
    skip: "Skip to content", nav_about: "About", nav_experience: "Experience", nav_skills: "Skills", nav_software: "Software", nav_projects: "Projects", nav_contact: "Contact",
    hero_eyebrow: "Civil Engineer · Software Builder", hero_hi: "Hi, I'm",
    hero_lead: "I deliver BOQs, quantities and shop-drawing reviews for roads and infrastructure — and build the software that makes the technical office faster.",
    hero_open: "Open to opportunities in the Gulf region and Egypt",
    hero_cta1: "View Projects", hero_cta2: "Download CV",
    about_h: "About me", exp_h: "Experience & education", skills_h: "Skills",
    sw_h: "Software I've built", sw_sub: "The younes product line: youpharma, youerp, youcad and more.",
    tools_h: "More tools", feat_h: "Key features",
    pr_h: "Civil engineering projects", cv_h: "Resume",
    cv_text: "Download my full CV for the complete list of projects, responsibilities and qualifications.",
    cv_en: "English CV (PDF)", cv_ar: "Arabic CV (PDF)",
    ct_h: "Let's talk", f_name: "Name", f_email: "Email", f_msg: "Message", f_send: "Send message",
    rights: "All rights reserved.", live: "Live site", code: "Source", details: "Details", sites: "Websites",
    role: "My work", client: "Authority", scope: "Scope", period: "Period", mail_sub: "Message from your portfolio",
    contact_email: "Email", contact_phone: "Phone", contact_phone2: "Secondary phone", contact_wa: "WhatsApp", contact_li: "LinkedIn", contact_gh: "GitHub", contact_fb: "Facebook", contact_loc: "Location",
    soon: "Screenshot coming soon",
    hl_h: "The younes product line", map_m: "Map", map_s: "Satellite", open_map: "Open in Google Maps", loc: "Location", approx: "Approximate location", show_map: "Show on map"
  },
  ar: {
    skip: "تخطي إلى المحتوى", nav_about: "نبذة", nav_experience: "الخبرات", nav_skills: "المهارات", nav_software: "البرمجيات", nav_projects: "المشروعات", nav_contact: "تواصل",
    hero_eyebrow: "مهندس مدني · مطوّر برمجيات", hero_hi: "أهلًا، أنا",
    hero_lead: "بجهّز جداول الكميات وحصر الكميات ومراجعة الشوب دروينج لمشروعات الطرق والبنية التحتية، وببني البرمجيات اللي بتسرّع شغل المكتب الفني.",
    hero_open: "متاح لفرص في منطقة الخليج ومصر",
    hero_cta1: "شاهد المشروعات", hero_cta2: "تحميل السيرة الذاتية",
    about_h: "نبذة عني", exp_h: "الخبرات والتعليم", skills_h: "المهارات",
    sw_h: "البرمجيات اللي عملتها", sw_sub: "خط منتجات younes، مبني للمهندسين والمقاولين.",
    tools_h: "أدوات أخرى", feat_h: "أهم المميزات",
    pr_h: "مشروعات الهندسة المدنية", cv_h: "السيرة الذاتية",
    cv_text: "حمّل سيرتي الذاتية الكاملة لقائمة المشروعات والمسؤوليات والمؤهلات بالتفصيل.",
    cv_en: "السيرة الذاتية بالإنجليزي (PDF)", cv_ar: "السيرة الذاتية بالعربي (PDF)",
    ct_h: "خلّينا نتكلم", f_name: "الاسم", f_email: "البريد الإلكتروني", f_msg: "الرسالة", f_send: "إرسال الرسالة",
    rights: "جميع الحقوق محفوظة.", live: "الموقع", code: "الكود", details: "التفاصيل", sites: "المواقع",
    role: "شغلي", client: "الجهة", scope: "نطاق العمل", period: "المدة", mail_sub: "رسالة من البورتفوليو",
    contact_email: "البريد", contact_phone: "الهاتف", contact_phone2: "هاتف آخر", contact_wa: "واتساب", contact_li: "لينكدإن", contact_gh: "جيت هاب", contact_fb: "فيسبوك", contact_loc: "الموقع",
    soon: "لقطة الشاشة قريبًا",
    hl_h: "خط منتجات younes", map_m: "خريطة", map_s: "قمر صناعي", open_map: "افتح في خرائط جوجل", loc: "الموقع", approx: "الموقع تقريبي", show_map: "اعرض على الخريطة"
  }
};
