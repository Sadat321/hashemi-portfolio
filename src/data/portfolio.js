const bi = (en, fa) => ({ en, fa })

export const labels = {
  en: {
    nav: { about: 'About', expertise: 'Expertise', projects: 'Projects', experience: 'Experience', education: 'Education', security: 'Security', contact: 'Contact' },
    connect: "Let's connect",
    menu: 'Menu', close: 'Close',
    language: 'دری', languageLabel: 'Switch language to Dari',
    themeDark: 'Dark', themeLight: 'Light', themeLabelDark: 'Use dark theme', themeLabelLight: 'Use light theme',
    greeting: "Hello, I'm",
    viewWork: 'Explore my work', downloadCV: 'Download CV', whatsapp: 'WhatsApp',
    status: 'Open to technology opportunities', scroll: 'Scroll to discover',
    locationLabel: 'Based in', availabilityLabel: 'Status', semesterLabel: 'Academic level',
    profile: 'Profile', verified: 'Real CV data',
    aboutKicker: '01 — About', aboutTitle: 'A practical mind, shaped by teaching, public service, and code.',
    aboutLead: 'I combine academic study with real responsibility—building websites, teaching computer skills, and coordinating information in public service.',
    timelineLabel: 'My working direction',
    expertiseKicker: '02 — Expertise', expertiseTitle: 'A focused toolkit, not a wall of buzzwords.',
    expertiseIntro: 'Technologies and tools documented in my CV and demonstrated through live work. Levels are stated honestly.',
    level: 'Level',
    projectsKicker: '03 — Selected work', projectsTitle: 'Two real websites, live on the web.',
    projectsIntro: 'I reviewed both public deployments and captured their current interfaces. Each case study describes visible, verifiable work without invented metrics.',
    liveProject: 'Live project', viewCase: 'View case study', visitWebsite: 'Visit live website',
    role: 'Role', technology: 'Technology', year: 'Year', outcome: 'Outcome', overview: 'Overview', objective: 'Objective', solution: 'Delivered experience',
    experienceKicker: '04 — Experience', experienceTitle: 'Experience beyond the screen.',
    experienceIntro: 'Public-service coordination, management systems training, and years of part-time teaching have shaped how I communicate and solve problems.',
    present: 'Present', responsibilities: 'Selected responsibilities',
    educationKicker: '05 — Education', educationTitle: 'Learning across technology, science, and service.',
    educationIntro: 'A Computer Science degree in progress, supported by earlier health-science study and a strong teaching background.',
    field: 'Field', institution: 'Institution', period: 'Period', result: 'Result',
    securityKicker: '06 — Cybersecurity direction', securityTitle: 'Security is a direction—not an inflated title.',
    securityIntro: 'I am developing practical knowledge in cybersecurity fundamentals, networking, wireless security, and ethical testing within controlled learning environments.',
    learningPath: 'Current learning path', safeMode: 'Safe learning simulation',
    languagesKicker: '07 — Languages', languagesTitle: 'Communication across four languages.',
    languagesIntro: 'Language levels below are transcribed from my supplied CV.',
    contactKicker: '08 — Contact', contactTitle: "Let's build something useful.",
    contactIntro: 'For a website, collaboration, training, or technology opportunity—send a message directly.',
    call: 'Call', email: 'Email', copy: 'Copy', copied: 'Copied',
    availableFor: 'Available for', opportunities: 'Web projects · Collaboration · Technology opportunities',
    builtWith: 'Designed with precision. Built with curiosity.', backTop: 'Back to top',
    photoAlt: 'Sayed Masbah Hashimi standing in a Cisco networking academy environment',
    photoCaption: 'Technology & networking environment · Kabul',
    projectScreenshot: 'Live website screenshot captured from the public deployment',
    modalClose: 'Close project details', publishingNote: 'Public deployment reviewed',
  },
  fa: {
    nav: { about: 'درباره من', expertise: 'مهارت‌ها', projects: 'پروژه‌ها', experience: 'تجربه', education: 'تحصیلات', security: 'امنیت', contact: 'تماس' },
    connect: 'ارتباط بگیرید',
    menu: 'فهرست', close: 'بستن',
    language: 'EN', languageLabel: 'تغییر زبان به انگلیسی',
    themeDark: 'تاریک', themeLight: 'روشن', themeLabelDark: 'استفاده از حالت تاریک', themeLabelLight: 'استفاده از حالت روشن',
    greeting: 'سلام، من',
    viewWork: 'مشاهده پروژه‌ها', downloadCV: 'دانلود رزومه', whatsapp: 'واتساپ',
    status: 'آماده فرصت‌های تکنالوژی', scroll: 'برای کشف بیشتر اسکرول کنید',
    locationLabel: 'موقعیت', availabilityLabel: 'وضعیت', semesterLabel: 'سطح تحصیلی',
    profile: 'پروفایل', verified: 'اطلاعات واقعی رزومه',
    aboutKicker: '۰۱ — درباره من', aboutTitle: 'ذهنی عملی؛ شکل‌گرفته با تدریس، خدمت عمومی و کدنویسی.',
    aboutLead: 'تحصیل دانشگاهی را با مسئولیت واقعی ترکیب کرده‌ام؛ از ساخت وب‌سایت و آموزش مهارت‌های کامپیوتری تا هماهنگی اطلاعات در اداره دولتی.',
    timelineLabel: 'مسیر کاری من',
    expertiseKicker: '۰۲ — مهارت‌ها', expertiseTitle: 'مجموعه‌ای متمرکز از مهارت‌ها، بدون اصطلاحات اغراق‌آمیز.',
    expertiseIntro: 'تکنالوژی‌ها و ابزارهایی که در رزومه‌ام ثبت شده و بخشی از آن‌ها در پروژه‌های زنده دیده می‌شود. سطح‌ها صادقانه نوشته شده‌اند.',
    level: 'سطح',
    projectsKicker: '۰۳ — پروژه‌های منتخب', projectsTitle: 'دو وب‌سایت واقعی و فعال در اینترنت.',
    projectsIntro: 'هر دو وب‌سایت فعال را بررسی و از رابط فعلی آن‌ها تصویر تهیه کردم. توضیحات فقط بر اساس کار قابل مشاهده و تأیید است.',
    liveProject: 'پروژه فعال', viewCase: 'مشاهده جزئیات', visitWebsite: 'بازدید وب‌سایت',
    role: 'نقش', technology: 'تکنالوژی', year: 'سال', outcome: 'نتیجه', overview: 'معرفی', objective: 'هدف پروژه', solution: 'راه‌حل ارائه‌شده',
    experienceKicker: '۰۴ — تجربه کاری', experienceTitle: 'تجربه‌ای فراتر از صفحه نمایش.',
    experienceIntro: 'هماهنگی در اداره دولتی، آموزش سیستم‌های مدیریتی و سال‌ها تدریس نیمه‌وقت، روش ارتباط و حل مسئله‌ام را شکل داده است.',
    present: 'اکنون', responsibilities: 'مسئولیت‌های منتخب',
    educationKicker: '۰۵ — تحصیلات', educationTitle: 'یادگیری در تکنالوژی، علوم و خدمت.',
    educationIntro: 'دوره لیسانس علوم کامپیوتر در حال تکمیل است و با تحصیلات قبلی در علوم صحی و تجربه تدریس پشتیبانی می‌شود.',
    field: 'رشته', institution: 'نهاد آموزشی', period: 'دوره', result: 'نتیجه',
    securityKicker: '۰۶ — مسیر امنیت سایبری', securityTitle: 'امنیت یک مسیر است؛ نه یک عنوان اغراق‌آمیز.',
    securityIntro: 'در حال توسعه دانش عملی خود در مبانی امنیت سایبری، شبکه، امنیت بی‌سیم و آزمایش اخلاقی در محیط‌های کنترول‌شده هستم.',
    learningPath: 'مسیر فعلی یادگیری', safeMode: 'شبیه‌سازی آموزشی امن',
    languagesKicker: '۰۷ — زبان‌ها', languagesTitle: 'ارتباط به چهار زبان.',
    languagesIntro: 'سطح زبان‌ها مستقیماً از رزومه ارسال‌شده گرفته شده است.',
    contactKicker: '۰۸ — تماس', contactTitle: 'بیایید چیزی کاربردی بسازیم.',
    contactIntro: 'برای ساخت وب‌سایت، همکاری، آموزش یا فرصت تکنالوژی—مستقیم پیام بفرستید.',
    call: 'تماس', email: 'ایمیل', copy: 'کپی', copied: 'کپی شد',
    availableFor: 'آماده برای', opportunities: 'پروژه‌های وب · همکاری · فرصت‌های تکنالوژی',
    builtWith: 'با دقت طراحی شد؛ با کنجکاوی ساخته شد.', backTop: 'برگشت به بالا',
    photoAlt: 'سید مصباح هاشمی در محیط اکادمی شبکه سیسکو',
    photoCaption: 'محیط تکنالوژی و شبکه · کابل',
    projectScreenshot: 'تصویر فعلی وب‌سایت از نسخه عمومی فعال',
    modalClose: 'بستن جزئیات پروژه', publishingNote: 'نسخه عمومی بررسی شده',
  },
}

export const portfolio = {
  personal: {
    name: bi('Sayed Masbah Hashimi', 'سید مصباح هاشمی'),
    initials: 'SMH',
    role: bi('Computer Science & IT Student', 'دانشجوی علوم کامپیوتر و تکنالوژی معلوماتی'),
    secondRole: bi('Web Developer · Software & Cybersecurity Learner', 'توسعه‌دهنده وب · در مسیر نرم‌افزار و امنیت سایبری'),
    headlineLead: bi('I build', 'من'),
    headlineAccent: bi('useful digital experiences', 'تجربه‌های دیجیتال کاربردی'),
    headlineTail: bi('and explore secure systems.', 'می‌سازم و سیستم‌های امن را بررسی می‌کنم.'),
    statement: bi(
      'Motivated Computer Science and IT student combining web development, teaching, public-service experience, and a growing focus on cybersecurity.',
      'دانشجوی باانگیزه علوم کامپیوتر و تکنالوژی معلوماتی؛ با ترکیبی از توسعه وب، تدریس، تجربه خدمت عمومی و تمرکز رو‌به‌رشد بر امنیت سایبری.'
    ),
    biography: bi(
      'I study Information Technology at Gharjistan University, with growing interests in software engineering, web and mobile development, and cybersecurity. Alongside two live web projects, I have trained staff in management information systems, taught English and computer skills, and coordinated digital information between government institutions. I value clear communication, useful interfaces, continuous learning, and security-aware development.',
      'در دانشگاه غرجستان در رشته تکنالوژی معلوماتی تحصیل می‌کنم و به مهندسی نرم‌افزار، توسعه وب و موبایل و امنیت سایبری علاقه رو‌به‌رشد دارم. در کنار دو پروژه زنده وب، کارمندان را در سیستم‌های معلوماتی مدیریت آموزش داده‌ام، انگلیسی و مهارت‌های کامپیوتری تدریس کرده‌ام و جریان اطلاعات دیجیتال میان نهادهای دولتی را هماهنگ ساخته‌ام. ارتباط روشن، رابط‌های کاربردی، یادگیری پیوسته و توسعه آگاه از امنیت برایم ارزشمند است.'
    ),
    location: bi('Kabul, Afghanistan', 'کابل، افغانستان'),
    academicLevel: bi('7th Semester', 'سمستر هفتم'),
    availability: bi('Open to collaboration', 'آماده همکاری'),
    email: 'hashemiwebdevelopment@gmail.com',
    phone: '+93773298456',
    phoneDisplay: '+93 773 298 456',
    whatsapp: 'https://wa.me/93773298456',
    resumeUrl: '/documents/Sayed-Masbah-Hashimi-CV.pdf',
    portrait: '/assets/sayed-masbah-hashimi.webp',
  },

  nav: [
    { id: 'about', label: 'about' },
    { id: 'expertise', label: 'expertise' },
    { id: 'projects', label: 'projects' },
    { id: 'experience', label: 'experience' },
    { id: 'education', label: 'education' },
    { id: 'security', label: 'security' },
    { id: 'contact', label: 'contact' },
  ],

  aboutFacts: [
    { value: bi('2 live', '۲ فعال'), label: bi('Web projects', 'پروژه وب') },
    { value: bi('Since 2020', 'از ۲۰۲۰'), label: bi('Teaching & service', 'تدریس و خدمت') },
    { value: bi('4 languages', '۴ زبان'), label: bi('Communication', 'ارتباط') },
  ],

  journey: [
    bi('Learn the fundamentals', 'یادگیری مبانی'),
    bi('Build for real users', 'ساخت برای کاربران واقعی'),
    bi('Communicate clearly', 'ارتباط روشن'),
    bi('Improve with security in mind', 'بهبود با نگاه امنیتی'),
  ],

  expertise: [
    {
      number: '01',
      title: bi('Web development', 'توسعه وب'),
      description: bi('Responsive, content-led interfaces built for real organizations and services.', 'رابط‌های واکنش‌گرا و محتوامحور برای سازمان‌ها و خدمات واقعی.'),
      level: bi('Hands-on', 'تجربه عملی'),
      tools: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      number: '02',
      title: bi('Programming', 'برنامه‌نویسی'),
      description: bi('Developing programming foundations through academic study and practical exercises.', 'توسعه مبانی برنامه‌نویسی از طریق تحصیل دانشگاهی و تمرین‌های عملی.'),
      level: bi('Developing', 'در حال توسعه'),
      tools: ['Python · pre-intermediate', 'Java · pre-intermediate'],
    },
    {
      number: '03',
      title: bi('Workflow & version control', 'روند کار و کنترول نسخه'),
      description: bi('Publishing, maintaining, and organizing web projects with modern source-control workflows.', 'انتشار، نگهداری و تنظیم پروژه‌های وب با روندهای مدرن کنترول نسخه.'),
      level: bi('Practical', 'عملی'),
      tools: ['Git', 'GitHub', 'GitHub Pages'],
    },
    {
      number: '04',
      title: bi('Office & research', 'ابزارهای اداری و تحقیق'),
      description: bi('Digital documentation, presentations, data collection, and research organization.', 'مستندسازی دیجیتال، ارائه‌ها، جمع‌آوری داده و تنظیم تحقیقات.'),
      level: bi('Applied', 'کاربردی'),
      tools: ['Word', 'Excel', 'PowerPoint', 'Google Forms', 'EndNote', 'OneNote'],
    },
    {
      number: '05',
      title: bi('Networking & security', 'شبکه و امنیت'),
      description: bi('CCNA and cybersecurity fundamentals, with wireless security and ethical testing as active learning areas.', 'مبانی CCNA و امنیت سایبری؛ با تمرکز فعلی بر امنیت بی‌سیم و آزمایش اخلاقی.'),
      level: bi('Learning path', 'مسیر یادگیری'),
      tools: ['CCNA fundamentals', 'Cybersecurity fundamentals', 'Wireless security'],
    },
  ],

  projects: [
    {
      id: '01',
      title: bi('Hashemi Web Development', 'توسعه وب هاشمی'),
      category: bi('Web services portfolio', 'پورتفولیوی خدمات وب'),
      year: bi('1402 · 2023/24', '۱۴۰۲'),
      url: 'https://hashimi-web.github.io/HWD/',
      image: '/assets/hashimi-web-screenshot.webp',
      alt: bi('Hashemi Web Development website homepage screenshot', 'تصویر صفحه اصلی وب‌سایت توسعه وب هاشمی'),
      summary: bi(
        'A service-focused portfolio presenting web design packages, capabilities, recent projects, and direct contact options.',
        'یک پورتفولیوی خدمات‌محور برای معرفی بسته‌های طراحی وب، توانایی‌ها، پروژه‌های اخیر و راه‌های تماس مستقیم.'
      ),
      overview: bi(
        'The public website introduces Hashemi Web Development through a hero presentation, service packages, a project gallery, team positioning, a contact form, and social channels.',
        'نسخه عمومی، توسعه وب هاشمی را با بخش معرفی، بسته‌های خدمات، گالری پروژه، معرفی تیم، فرم تماس و شبکه‌های اجتماعی ارائه می‌کند.'
      ),
      objective: bi(
        'Create one clear online destination for presenting web-development services and helping potential clients make contact.',
        'ایجاد یک مقصد آنلاین روشن برای معرفی خدمات توسعه وب و آسان‌سازی ارتباط مشتریان احتمالی.'
      ),
      solution: bi(
        'A responsive promotional experience with service explanations, portfolio previews, contact capture, and direct social routes.',
        'یک تجربه تبلیغاتی واکنش‌گرا با توضیح خدمات، نمونه پروژه‌ها، فرم تماس و مسیرهای مستقیم شبکه‌های اجتماعی.'
      ),
      role: bi('Designer & front-end developer', 'طراح و توسعه‌دهنده فرانت‌اند'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      outcome: bi('Publicly deployed and accessible online.', 'به‌صورت عمومی منتشر شده و آنلاین در دسترس است.'),
    },
    {
      id: '02',
      title: bi('Blue Ship Cargo', 'بلوشیپ کارگو'),
      category: bi('Cargo company website', 'وب‌سایت شرکت کارگو'),
      year: bi('1403 · 2024/25', '۱۴۰۳'),
      url: 'https://blueship-cargo.github.io/Bluship-Cargo/',
      image: '/assets/blueship-cargo-screenshot.webp',
      alt: bi('Blue Ship Cargo company website homepage screenshot', 'تصویر صفحه اصلی وب‌سایت شرکت بلوشیپ کارگو'),
      summary: bi(
        'A public information website for cargo services, service coverage, workflow imagery, branches, and customer contact.',
        'وب‌سایت اطلاع‌رسانی عمومی برای خدمات کارگو، مناطق تحت پوشش، تصاویر جریان کار، شعبه‌ها و تماس مشتریان.'
      ),
      overview: bi(
        'The deployed site presents Blue Ship Cargo in Dari and English, describes domestic and international shipping, displays operational imagery, lists service locations, and offers translation and social contact tools.',
        'نسخه فعال، بلوشیپ کارگو را به دری و انگلیسی معرفی می‌کند، انتقالات داخلی و بین‌المللی را توضیح می‌دهد، تصاویر عملیاتی و آدرس شعبه‌ها را نمایش می‌دهد و ابزار ترجمه و تماس اجتماعی دارد.'
      ),
      objective: bi(
        'Give customers an accessible place to understand cargo coverage, process, services, locations, and contact routes.',
        'فراهم‌کردن یک مرجع در دسترس برای شناخت پوشش کارگو، جریان کار، خدمات، موقعیت‌ها و راه‌های تماس.'
      ),
      solution: bi(
        'A content-led company website with prominent service messaging, a visual workflow gallery, branch information, and multilingual support.',
        'یک وب‌سایت شرکتی محتوامحور با پیام روشن خدمات، گالری تصویری جریان کار، معلومات شعبه‌ها و پشتیبانی چندزبانه.'
      ),
      role: bi('Designer & front-end developer', 'طراح و توسعه‌دهنده فرانت‌اند'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Translate', 'GitHub Pages'],
      outcome: bi('Live company information hub on GitHub Pages.', 'مرکز معلومات آنلاین شرکت روی GitHub Pages.'),
    },
  ],

  experience: [
    {
      period: bi('Mar 2024 — Present', 'مارچ ۲۰۲۴ — اکنون'),
      role: bi('Plenipotentiary Representative of MAIL to MoIC', 'نماینده باصلاحیت وزارت زراعت در وزارت صنعت و تجارت'),
      organization: bi('Ministry of Agriculture, Irrigation and Livestock', 'وزارت زراعت، آبیاری و مالداری افغانستان'),
      location: bi('Kabul · Government administration', 'کابل · اداره دولتی'),
      details: [
        bi('Coordinate official communication and digital information exchange between MAIL and MoIC.', 'هماهنگی ارتباطات رسمی و تبادل اطلاعات دیجیتال میان وزارت زراعت و وزارت صنعت و تجارت.'),
        bi('Monitor applications, documents, and assigned cases through digital management and communication systems.', 'پیگیری درخواست‌ها، اسناد و قضایا از طریق سیستم‌های مدیریت و ارتباط دیجیتال.'),
        bi('Maintain accurate documentation and timely inter-ministerial follow-up.', 'حفظ مستندسازی دقیق و پیگیری به‌موقع میان وزارت‌ها.'),
      ],
    },
    {
      period: bi('Jan 2023 — Mar 2024', 'جنوری ۲۰۲۳ — مارچ ۲۰۲۴'),
      role: bi('Management Trainer', 'آموزگار مدیریت'),
      organization: bi('Ministry of Agriculture, Irrigation and Livestock', 'وزارت زراعت، آبیاری و مالداری افغانستان'),
      location: bi('Kabul · Government administration', 'کابل · اداره دولتی'),
      details: [
        bi('Delivered training in management information systems.', 'آموزش سیستم‌های معلوماتی مدیریت به کارمندان.'),
        bi('Independently taught English language and computer skills to staff.', 'تدریس مستقل زبان انگلیسی و مهارت‌های کامپیوتری برای کارمندان.'),
      ],
    },
    {
      period: bi('2020 — 2024 · Part-time', '۲۰۲۰ — ۲۰۲۴ · نیمه‌وقت'),
      role: bi('English & Computer Instructor', 'آموزگار انگلیسی و کامپیوتر'),
      organization: bi('Challenger, Ferdows & Star Educational Centers', 'مراکز آموزشی چلنجر، فردوس و ستاره'),
      location: bi('Kabul · Education', 'کابل · آموزش'),
      details: [
        bi('Taught English and computer classes with a structured, learner-focused approach.', 'تدریس انگلیسی و کامپیوتر با روش منظم و متمرکز بر یادگیرنده.'),
        bi('Offered free classes in Windows, Microsoft Office, web-design fundamentals, Photoshop, and competitive subjects.', 'ارائه صنف‌های رایگان ویندوز، مایکروسافت آفیس، مبانی طراحی وب، فتوشاپ و مضامین رقابتی.'),
      ],
    },
  ],

  education: [
    {
      degree: bi('Bachelor of Science in Computer Science', 'لیسانس علوم کامپیوتر'),
      field: bi('Information Technology', 'تکنالوژی معلوماتی'),
      institution: bi('Gharjistan University', 'دانشگاه غرجستان'),
      period: bi('Jun 2023 — Present', 'جون ۲۰۲۳ — اکنون'),
      result: bi('7th semester · In progress', 'سمستر هفتم · در حال تحصیل'),
    },
    {
      degree: bi('Associate Degree in Pharmacy', 'دیپلوم علوم فارمسی'),
      field: bi('Pharmacy', 'فارمسی'),
      institution: bi('Jamal Al-Shefa Institute', 'انستیتوت جمال‌الشفا'),
      period: bi('Dec 2021 — Jun 2023', 'دسمبر ۲۰۲۱ — جون ۲۰۲۳'),
      result: bi('Final grade: 92.25', 'نمره نهایی: ۹۲٫۲۵'),
    },
    {
      degree: bi('High School Diploma', 'دیپلوم مکتب'),
      field: bi('General education', 'تعلیمات عمومی'),
      institution: bi('Mohammad Asef Mayel High School', 'لیسه محمد آصف مایل'),
      period: bi('Completed 2023', 'فراغت ۲۰۲۳'),
      result: bi('Final grade: 84.24', 'نمره نهایی: ۸۴٫۲۴'),
    },
  ],

  security: {
    topics: [
      bi('Cybersecurity fundamentals', 'مبانی امنیت سایبری'),
      bi('CCNA & networking fundamentals', 'مبانی CCNA و شبکه'),
      bi('Wireless security · developing', 'امنیت بی‌سیم · در حال توسعه'),
      bi('Ethical testing · controlled labs', 'آزمایش اخلاقی · محیط کنترول‌شده'),
      bi('Security-aware web development', 'توسعه وب آگاه از امنیت'),
    ],
    terminal: {
      welcome: bi('SAFE_LEARNING_ENV initialized', 'محیط آموزشی امن فعال شد'),
      notice: bi('Portfolio simulation only. No system commands are executed.', 'فقط شبیه‌سازی پورتفولیو؛ هیچ دستور سیستمی اجرا نمی‌شود.'),
    },
  },

  languages: [
    { name: bi('Dari', 'دری'), level: bi('Mother tongue', 'زبان مادری'), detail: bi('Native communication', 'ارتباط بومی') },
    { name: bi('English', 'انگلیسی'), level: bi('Advanced communication', 'ارتباط پیشرفته'), detail: bi('Listening C1 · Reading C1 · Writing B1 · Spoken C1', 'شنیدن C1 · خواندن C1 · نوشتن B1 · گفتار C1') },
    { name: bi('Pashto', 'پشتو'), level: bi('Working proficiency', 'توانایی کاری'), detail: bi('Listening C1 · Reading C2 · Writing A1 · Interaction B2', 'شنیدن C1 · خواندن C2 · نوشتن A1 · مکالمه B2') },
    { name: bi('Arabic', 'عربی'), level: bi('Pre-intermediate', 'پیش‌متوسط'), detail: bi('Developing reading, writing, and listening', 'در حال توسعه خواندن، نوشتن و شنیدن') },
  ],

  social: [
    { label: bi('WhatsApp', 'واتساپ'), value: '+93 773 298 456', url: 'https://wa.me/93773298456' },
    { label: bi('Email', 'ایمیل'), value: 'hashemiwebdevelopment@gmail.com', url: 'mailto:hashemiwebdevelopment@gmail.com' },
    { label: bi('GitHub', 'گیت‌هاب'), value: 'github.com/hashimi-web', url: 'https://github.com/hashimi-web' },
    { label: bi('Phone', 'تماس'), value: '+93 773 298 456', url: 'tel:+93773298456' },
  ],

  meta: {
    siteUrl: 'https://hashimi-web.github.io/cinematic-portfolio/',
    year: 2026,
  },
}

export const text = (value, language) => {
  if (value == null) return ''
  if (typeof value === 'object' && ('en' in value || 'fa' in value)) return value[language] ?? value.en ?? value.fa
  return value
}
