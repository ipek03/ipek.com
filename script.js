

const cvData = {
  en: {
    nav: [
      { id: 'about',        label: 'About' },
      { id: 'experience',   label: 'Experience' },
      { id: 'education',    label: 'Education' },
      { id: 'projects',     label: 'Projects' },
      { id: 'skills',       label: 'Skills' },
      { id: 'achievements', label: 'Publications' },
      { id: 'achievements', label: 'Certifications' },
      { id: 'languages',    label: 'Languages' },
      { id: 'volunteer',    label: 'Volunteer' },
    ],
    sections: {
      exp:   'Experience',
      edu:   'Education',
      proj:  'Projects',
      skills:'Skills',
      pub:   'Publications',
      cert:  'Certifications & Awards',
      lang:  'Languages',
      vol:   'Volunteer',
    },
    hero: {
      role: 'Computer Engineering Student @ Galatasaray Univ.',
      bio: 'Computer Engineering student with experience in both industry (Siemens, Airties, Intertech) and applied research (TÜBİTAK 2209-A). Key skills: Java/Spring Boot, APIs and testing, AI, Machine Learning, Cloud, IoT & Energy, NLP. Recognized for leadership (Best Team Leader at Huawei) and author of 2 peer-reviewed publications in 2025.',
      stats: [
        { val: '02',  label: 'Publications' },
        { val: '04+', label: 'Internships' },
      ],
    },
    education: [
      {
        role: 'B.Sc. Computer Engineering',
        org: 'Galatasaray University',
        date: '2022 - 2026',
        logo: 'assets/gs_logo2.png',
        bullets: ['Minor in Industrial Engineering (2023 - 2026)'],
      },
      {
        role: 'Erasmus+ Exchange (Computer Science)',
        org: 'Universite de Lille 1',
        date: 'Sep 2024 - Jan 2025',
        logo: 'assets/lille_logo.png',
        bullets: [],
      },
      {
        role: 'High School Diploma (French Bac Equivalent)',
        org: 'Galatasaray High School',
        date: '2017 - 2022',
        logo: 'assets/gs_logo1.png',
        bullets: [],
      },
    ],
    experience: [
      {
        role: 'Part-time Software Engineer Intern',
        org: 'Siemens',
        date: 'Feb 2025 - Present',
        logo: 'assets/siemens_logo.png',
        bullets: [
          'Developing RESTful APIs and microservices using Java and Spring Boot.',
          'Contributing to UI development, cloud deployments, and CI/CD pipelines.',
          'Ensuring software quality through testing, code reviews, and Agile methodologies.'
        ],
        tags: ['Java', 'Spring Boot', 'Angular', 'AWS', 'CI/CD', 'MAS'],
      },
      {
        role: 'Microsoft Learn Student Ambassador (Alpha)',
        org: 'Microsoft',
        date: 'Jan 2024 - Nov 2024',
        logo: 'assets/microsoft_logo.png',
        tags: ['Azure', 'Cloud', 'Community'],
      },
      {
        role: 'R&D Intern',
        org: 'Airties',
        date: 'Jul 2024 - Aug 2024',
        logo: 'assets/airties_logo.png',
        bullets: [
          'Implemented ML/DL models (sliding window, TensorFlow) for network traffic classification and optimization, prioritizing critical flows.',
          'Analyzed time-series data from embedded applications to reduce latency and improve bandwidth utilization in real-world conditions.',
          'Produced reproducible notebooks, structured feature engineering, and a documented training/evaluation pipeline.'
        ],
        tags: ['ML/DL', 'TensorFlow', 'Python', 'Networking'],
      },
      {
        role: 'Business Analyst & Software Engineering Intern',
        org: 'Intertech',
        date: 'Jun 2024 - Jul 2024',
        logo: 'assets/intertech_logo.png',
        bullets: [
          'Collaborated within a team of ~10 people to develop an AI assistant dedicated to complaint classification in digital banking.',
          'Designed an end-to-end NLP pipeline (collection, cleaning, classification, routing) to accelerate processing and improve customer satisfaction.',
          'Applied Agile/Scrum practices: defined user stories, acceptance criteria, regular demonstrations, and continuous improvement retrospectives.'
        ],
        tags: ['NLP', 'Agile', 'Python', 'Banking'],
      },
      {
        role: 'Team Leader',
        org: 'Huawei Tech4Good',
        date: 'Jul 2023',
        logo: 'assets/huawei_logo.png',
        bullets: [
          'Led a 10-person team in developing MetaWell, a VR-based Metaverse application for psychological rehabilitation.',
          'Integrated Cognitive Behavioral Therapy, support groups, and mentorship features into the 3D platform.',
          'Designated "Best Team Leader" during the program.'
        ],
        tags: ['Metaverse', 'VR', 'Leadership'],
      },
    ],
    projects: [
      {
        title: 'Impact of IoT Smart Home Systems on Energy Consumption',
        subtitle: 'TÜBİTAK 2209-A',
        desc: 'Comparative study between a smart office in Bangkok and a traditional university building in Florida, using heterogeneous datasets. ARIMA/SARIMAX modeling demonstrating that smart buildings stabilize consumption against temperature variations.',
        tags: ['IoT', 'ARIMA', 'Python'],
      },
      {
        title: 'DenizŞikayet - Complaint Classification (NLP)',
        subtitle: 'Intertech',
        desc: 'Development of an automated system for ingestion, analysis, classification, and routing of customer complaints in digital banking, for faster and more accurate processing.',
        tags: ['NLP', 'Python', 'Banking'],
      },
      {
        title: 'ECOJOURNEY',
        subtitle: 'Google Game and Application Academy',
        desc: 'Unity game simulating the impacts of terrestrial transport; realistic visual effects, impact dashboard, and an educational component raising awareness among over 1,000 players.',
        tags: ['Unity', 'C#', 'Education'],
      },
      {
        title: 'MetaWell - Rehabilitation via Metaverse',
        subtitle: 'Huawei Tech4Good',
        desc: 'Led a 10-person team to design a VR-based Metaverse platform focusing on psychological rehabilitation. Integrated Cognitive Behavioral Therapy, support groups, and mentorship features into the virtual environment. Designated "Best Team Leader".',
        tags: ['Metaverse', 'VR', 'Leadership'],
      },
      {
        title: 'Ecolgae - Bioremediation (iGEM, MIT)',
        subtitle: 'iGEM',
        desc: 'Design of transgenic E. coli incorporating algae genes for the sustainable removal of heavy metals in aquatic environments.',
        tags: ['Bioremediation', 'Genetics', 'Research'],
      },
    ],
    skills: [
      { name: 'Back-end',        pills: ['Java', 'Spring Boot', 'REST', 'API testing', 'CI/CD', 'Debugging'] },
      { name: 'Data',            pills: ['Python', 'Pandas', 'SQL', 'Data Visualization', 'Statistics', 'Data Analytics', 'Data Science', 'Algorithms'] },
      { name: 'AI & Data Science', pills: ['ML/DL', 'TensorFlow', 'NLP', 'ARIMA/SARIMAX'] },
      { name: 'Cloud & Tools',   pills: ['Azure', 'AWS', 'Git', 'Unity'] },
      { name: 'Soft Skills',     pills: ['Leadership', 'Creativity & Innovation', 'Communication', 'Problem-solving', 'Teamwork', 'Project Management', 'RPA', 'Cybersecurity'] },
    ],
    publications: [
      {
        title: 'Bee Intelligent: AI-Driven Approaches to Hive and Colony Management',
        meta: 'Ünlüakın, İ. (Oct 2025). Proceedings of the FLOTECH-HONEY Next Gen Governance Workshop, Istanbul.',
        url: null,
      },
      {
        title: 'The Impact of IoT-Enabled Smart Home Systems on Energy Consumption',
        meta: 'Unluakin, I., Dündar, A., Özer, Ş. D. İ., Pınarer, O. (2025). Transactions on Computer Science and Applications, 2(2), 40–48.',
        url: '#',
      },
    ],
    certifications: [
      { title: 'IBM AI Literacy; IBM Data Fundamentals', meta: 'IBM · 2025' },
      { title: 'Google Project Management Specialization (ID RR4NPSUQHHXC)', meta: 'Google · 2024' },
      { title: 'Google OUA (ID 74202458579198); IBM Cybersecurity Programme', meta: 'Google / IBM · 2024' },
      { title: 'CySA+, Certified in Cybersecurity', meta: 'Udemy / ISC2 · 2024' },
      { title: 'IBM Python for Data Science, AI & Development (ID VXMPJEKM9G97)', meta: 'IBM · 2023' },
      { title: 'IBM Cybersecurity Fundamentals; YetGen (ID 36621120503111)', meta: 'IBM / YetGen · 2023' },
      { title: 'TU/e Ethics, Tech & Eng', meta: 'TU/e · 2023' },
      { title: 'Stanford Game Theory', meta: 'Stanford · 2023' },
      { title: 'Wesleyan Social Psychology (Honors)', meta: 'Coursera · 2023' },
      { title: 'Politecnico di Milano Ethics of AI', meta: 'Coursera · 2023' },
      { title: 'Yale Intro to Psychology', meta: 'Coursera · 2023' },
    ],
    languages: [
      { name: 'Turkish', level: 'Native' },
      { name: 'French',  level: 'Advanced (C1, DALF)' },
      { name: 'English', level: 'Advanced (C1, TOEFL)' },
      { name: 'German',  level: 'Elementary (A2)' },
      { name: 'Italian', level: 'Beginner (A1)' },
    ],
    volunteer: [
      {
        role: 'Science & Technology Lead',
        org: 'YGA - Global Impact University',
        date: 'Jun 2023 - Jan 2024',
        logo: 'assets/yga_logo.png',
        bullets: [
          'Hosted robotics workshops for children in disaster-stricken and underprivileged regions; logistical coordination, budget management, and field planning.',
          'Science popularization activities (over 2,000 students) and contribution to the organization of the YGA Summit 2023 (over 1,000 participants); improved digital engagement and response times via a dedicated chatbot.'
        ],
      },
      {
        role: 'Volunteer Instructor',
        org: 'TOG',
        date: 'Feb 2023 - May 2023',
        logo: 'assets/tog_logo.png',
        bullets: ['Taught mathematics and science to middle school students from disadvantaged backgrounds; designed interactive sessions and personalized support to consolidate learning.'],
      },
      {
        role: 'Translator',
        org: 'Coursera',
        date: 'Sep 2022 - Present',
        logo: 'assets/coursera_logo.png',
        bullets: ['Translated over 15,000 words EN–TR of academic content to promote global access to educational resources.'],
      },
    ]
  },
  
  fr: {
    nav: [
      { id: 'about',        label: 'À propos' },
      { id: 'experience',   label: 'Expérience' },
      { id: 'education',    label: 'Formation' },
      { id: 'projects',     label: 'Projets' },
      { id: 'skills',       label: 'Compétences' },
      { id: 'achievements', label: 'Publications' },
      { id: 'achievements', label: 'Certifications' },
      { id: 'languages',    label: 'Langues' },
      { id: 'volunteer',    label: 'Bénévolat' },
    ],
    sections: {
      exp:   'Expérience',
      edu:   'Formation',
      proj:  'Projets',
      skills:'Compétences',
      pub:   'Publications',
      cert:  'Certifications & Distinctions',
      lang:  'Langues',
      vol:   'Bénévolat',
    },
    hero: {
      role: 'Étudiante en Génie Informatique @ Univ. Galatasaray',
      bio: 'Étudiante en génie informatique avec une expérience à la fois en industrie (Siemens, Airties, Intertech) et en recherche appliquée (TÜBİTAK 2209-A). Compétences clés : Java/Spring Boot, API et tests, intelligence artificielle, machine learning, Cloud, IoT & énergie, NLP. Leadership reconnu (Best Team Leader chez Huawei) et auteure de 2 publications évaluées par les pairs en 2025.',
      stats: [
        { val: '02',  label: 'Publications' },
        { val: '04+', label: 'Stages' },
      ],
    },
    education: [
      {
        role: 'Licence en Génie Informatique',
        org: 'Université Galatasaray',
        date: '2022 - 2026',
        logo: 'assets/gs_logo2.png',
        bullets: ['Mineure en Génie Industriel (2023 - 2026)'],
      },
      {
        role: 'Échange Erasmus+ (Informatique)',
        org: 'Université de Lille 1',
        date: 'Sep 2024 - Jan 2025',
        logo: 'assets/lille_logo.png',
        bullets: [],
      },
      {
        role: 'Baccalauréat (Équivalent Bac Français)',
        org: 'Lycée Galatasaray',
        date: '2017 - 2022',
        logo: 'assets/gs_logo1.png',
        bullets: [],
      },
    ],
    experience: [
      {
        role: 'Stagiaire Ingénieure Logicielle (temps partiel)',
        org: 'Siemens',
        date: 'Fév 2025 - Présent',
        logo: 'assets/siemens_logo.png',
        bullets: [
          'Développement d\'API REST et de microservices en utilisant Java et Spring Boot.',
          'Contribution au développement de l\'interface utilisateur, aux déploiements cloud et aux pipelines CI/CD.',
          'Assurance de la qualité logicielle via des tests, des revues de code et des méthodologies Agiles.'
        ],
        tags: ['Java', 'Spring Boot', 'Angular', 'AWS', 'CI/CD', 'MAS'],
      },
      {
        role: 'Microsoft Learn Student Ambassador (Alpha)',
        org: 'Microsoft',
        date: 'Jan 2024 - Nov 2024',
        logo: 'assets/microsoft_logo.png',
        tags: ['Azure', 'Cloud', 'Communauté'],
      },
      {
        role: 'Stagiaire R&D',
        org: 'Airties',
        date: 'Juil 2024 - Août 2024',
        logo: 'assets/airties_logo.png',
        bullets: [
          'Implémentation de modèles ML/DL (fenêtre glissante, TensorFlow) pour la classification et l\'optimisation du trafic réseau, en priorisant les flux critiques.',
          'Analyse de séries temporelles issues d\'applications embarquées afin de réduire la latence et améliorer l\'utilisation de la bande passante en conditions réelles.',
          'Production de notebooks reproductibles, ingénierie des caractéristiques structurée et pipeline d\'entraînement/évaluation documenté.'
        ],
        tags: ['ML/DL', 'TensorFlow', 'Python', 'Réseaux'],
      },
      {
        role: 'Stagiaire Analyste Métier & Ingénieure Logicielle',
        org: 'Intertech',
        date: 'Juin 2024 - Juil 2024',
        logo: 'assets/intertech_logo.png',
        bullets: [
          'Collaboration au sein d\'une équipe d\'environ 10 personnes pour développer un assistant IA dédié à la classification des réclamations en banque digitale.',
          'Conception d\'un pipeline NLP de bout en bout (collecte, nettoyage, classification, routage) pour accélérer le traitement et améliorer la satisfaction client.',
          'Application des pratiques Agile/Scrum : définition des user stories, critères d\'acceptation, démonstrations régulières et rétrospectives d\'amélioration continue.'
        ],
        tags: ['NLP', 'Agile', 'Python', 'Banque'],
      },
      {
        role: 'Cheffe d\'Équipe',
        org: 'Huawei Tech4Good',
        date: 'Juil 2023',
        logo: 'assets/huawei_logo.png',
        bullets: [
          'Direction d\'une équipe de 10 personnes pour le développement de MetaWell, une application Métavers basée sur la VR pour la rééducation psychologique.',
          'Intégration de fonctionnalités de thérapie cognitivo-comportementale, de groupes de soutien et de mentorat dans la plateforme 3D.',
          'Désignée « Best Team Leader » lors du programme.'
        ],
        tags: ['Métavers', 'VR', 'Leadership'],
      },
    ],
    projects: [
      {
        title: 'Impact des systèmes domotiques IoT sur la consommation énergétique',
        subtitle: 'TÜBİTAK 2209-A',
        desc: 'Étude comparative entre un bureau intelligent à Bangkok et un bâtiment universitaire traditionnel en Floride, à partir de jeux de données hétérogènes. Modélisation ARIMA/SARIMAX démontrant que les bâtiments intelligents stabilisent la consommation face aux variations de température.',
        tags: ['IoT', 'ARIMA', 'Python'],
      },
      {
        title: 'DenizŞikayet - Classification des réclamations (NLP)',
        subtitle: 'Intertech',
        desc: 'Développement d\'un système automatisé d\'ingestion, d\'analyse, de classification et de routage des réclamations clients en banque digitale, pour un traitement plus rapide et plus précis.',
        tags: ['NLP', 'Python', 'Banque'],
      },
      {
        title: 'ECOJOURNEY',
        subtitle: 'Google Game and Application Academy',
        desc: 'Jeu Unity simulant les impacts du transport terrestre ; effets visuels réalistes, tableau de bord d\'impact et composante éducative sensibilisant plus de 1 000 joueurs.',
        tags: ['Unity', 'C#', 'Éducation'],
      },
      {
        title: 'MetaWell - Rééducation via le Métavers',
        subtitle: 'Huawei Tech4Good',
        desc: 'Direction d\'une équipe de 10 personnes pour concevoir une plateforme Métavers VR axée sur la rééducation psychologique. Intégration de la thérapie cognitivo-comportementale, de groupes de soutien et de mentorat dans l\'environnement virtuel. Désignée « Best Team Leader ».',
        tags: ['Métavers', 'VR', 'Leadership'],
      },
      {
        title: 'Ecolgae - Bioremédiation (iGEM, MIT)',
        subtitle: 'iGEM',
        desc: 'Conception d\'E. coli transgéniques intégrant des gènes d\'algues pour l\'élimination durable des métaux lourds dans les milieux aquatiques.',
        tags: ['Bioremédiation', 'Génétique', 'Recherche'],
      },
    ],
    skills: [
      { name: 'Back-end',          pills: ['Java', 'Spring Boot', 'REST', 'Tests d\'API', 'CI/CD', 'Débogage'] },
      { name: 'Données',           pills: ['Python', 'Pandas', 'SQL', 'Visualisation de données', 'Statistiques', 'Analyse de données', 'Data Science', 'Algorithmes'] },
      { name: 'IA & Data Science', pills: ['ML/DL', 'TensorFlow', 'NLP', 'ARIMA/SARIMAX'] },
      { name: 'Cloud & Outils',    pills: ['Azure', 'AWS', 'Git', 'Unity'] },
      { name: 'Soft Skills',       pills: ['Leadership', 'Créativité & Innovation', 'Communication', 'Résolution de problèmes', 'Travail d\'équipe', 'Gestion de projet', 'RPA', 'Cybersécurité'] },
    ],
    publications: [
      {
        title: 'Bee Intelligent : Approches basées sur l\'IA pour la gestion des ruches et des colonies',
        meta: 'Ünlüakın, İ. (Oct 2025). Actes du colloque FLOTECH-HONEY Next Gen Governance Workshop, Istanbul.',
        url: null,
      },
      {
        title: 'L\'impact des systèmes domotiques IoT sur la consommation énergétique',
        meta: 'Unluakin, I., Dündar, A., Özer, Ş. D. İ., Pınarer, O. (2025). Transactions on Computer Science and Applications, 2(2), 40–48.',
        url: '#',
      },
    ],
    certifications: [
      { title: 'IBM AI Literacy ; IBM Data Fundamentals', meta: 'IBM · 2025' },
      { title: 'Google Project Management Specialization (ID RR4NPSUQHHXC)', meta: 'Google · 2024' },
      { title: 'Google OUA (ID 74202458579198) ; Programme IBM Cybersecurity', meta: 'Google / IBM · 2024' },
      { title: 'CySA+, Certifié en Cybersécurité', meta: 'Udemy / ISC2 · 2024' },
      { title: 'IBM Python pour la Data Science, l\'IA & le Développement (ID VXMPJEKM9G97)', meta: 'IBM · 2023' },
      { title: 'IBM Cybersecurity Fundamentals ; YetGen (ID 36621120503111)', meta: 'IBM / YetGen · 2023' },
      { title: 'TU/e Éthique, Technologie & Ingénierie', meta: 'TU/e · 2023' },
      { title: 'Théorie des jeux — Stanford', meta: 'Stanford · 2023' },
      { title: 'Psychologie sociale — Wesleyan (Mention Très Bien)', meta: 'Coursera · 2023' },
      { title: 'Éthique de l\'IA — Politecnico di Milano', meta: 'Coursera · 2023' },
      { title: 'Introduction à la psychologie — Yale', meta: 'Coursera · 2023' },
    ],
    languages: [
      { name: 'Turc',      level: 'Langue maternelle' },
      { name: 'Français',  level: 'Avancé (C1, DALF)' },
      { name: 'Anglais',   level: 'Avancé (C1, TOEFL)' },
      { name: 'Allemand',  level: 'Élémentaire (A2)' },
      { name: 'Italien',   level: 'Débutant (A1)' },
    ],
    volunteer: [
      {
        role: 'Responsable Science & Technologie',
        org: 'YGA – Global Impact University',
        date: 'Juin 2023 - Jan 2024',
        logo: 'assets/yga_logo.png',
        bullets: [
          'Animation d\'ateliers de robotique pour des enfants dans des régions sinistrées et défavorisées ; coordination logistique, gestion budgétaire et planification de terrain.',
          'Actions de vulgarisation scientifique (plus de 2 000 élèves) et contribution à l\'organisation du YGA Summit 2023 (plus de 1 000 participants) ; amélioration de l\'engagement numérique et des temps de réponse via un chatbot dédié.'
        ],
      },
      {
        role: 'Formatrice Bénévole',
        org: 'TOG',
        date: 'Fév 2023 - Mai 2023',
        logo: 'assets/tog_logo.png',
        bullets: ['Enseignement des mathématiques et des sciences à des collégiens issus de milieux défavorisés ; conception de séances interactives et accompagnement personnalisé pour consolider les acquis.'],
      },
      {
        role: 'Traductrice',
        org: 'Coursera',
        date: 'Sep 2022 - Présent',
        logo: 'assets/coursera_logo.png',
        bullets: ['Traduction de plus de 15 000 mots EN–TR de contenus académiques afin de promouvoir l\'accès mondial aux ressources éducatives.'],
      },
    ]
  }
};




let lang  = 'en';

document.addEventListener('DOMContentLoaded', () => {
  restorePrefs();
  renderAll();
  initNativeSnapScroll(); 
  document.getElementById('lang-btn').addEventListener('click', toggleLang);
});

function toggleLang() {
  lang = lang === 'en' ? 'fr' : 'en';
  document.getElementById('lang-btn').textContent = lang === 'en' ? 'FR' : 'EN';
  document.documentElement.setAttribute('lang', lang);
  renderAll();
  localStorage.setItem('lang', lang);
}

function restorePrefs() {
  const sl = localStorage.getItem('lang');
  if (sl) {
    lang = sl;
    document.getElementById('lang-btn').textContent = lang==='en' ? 'FR' : 'EN';
    document.documentElement.setAttribute('lang', lang);
  }
}

function getInitials(name) {
  return name ? name.substring(0,2).toUpperCase() : 'IU';
}

function renderTimelineItem(item) {
  const logoHTML = item.logo 
    ? `<img class="tl-logo" src="${item.logo}" alt="${item.org}" loading="lazy" onerror="this.outerHTML='<div class=\\'tl-badge\\'>${getInitials(item.org)}</div>'" />`
    : `<div class="tl-badge">${getInitials(item.org)}</div>`;

  return `
    <div class="tl-item">
      <div class="tl-logo-wrap">${logoHTML}</div>
      <div class="tl-content">
        <div class="tl-header">
          <div>
            <div class="tl-role">${item.role}</div>
            <div class="tl-org">${item.org}</div>
          </div>
          <div class="tl-date">${item.date}</div>
        </div>
        ${item.bullets ? `<ul class="tl-bullets">${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
        ${item.tags ? `<div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>
  `;
}

function renderAll() {
  const d = cvData[lang];

  
  document.getElementById('exp-title').textContent = d.sections.exp;
  document.getElementById('edu-title').textContent = d.sections.edu;
  document.getElementById('proj-title').textContent = d.sections.proj;
  document.getElementById('skills-title').textContent = d.sections.skills;
  const pubTitle = document.getElementById('pub-title');
  if(pubTitle) pubTitle.textContent = d.sections.pub;
  const certTitle = document.getElementById('cert-title');
  if(certTitle) certTitle.textContent = d.sections.cert;
  const langTitle = document.getElementById('lang-title');
  if(langTitle) langTitle.textContent = d.sections.lang;
  const volTitle = document.getElementById('vol-title');
  if(volTitle) volTitle.textContent = d.sections.vol;

  document.getElementById('nav-links').innerHTML = d.nav.map(n => 
    `<li><a class="nav-link" href="#${n.id}" data-target="${n.id}">${n.label}</a></li>`
  ).join('');

  document.getElementById('mobile-nav-links').innerHTML = d.nav.map(n => 
    `<li><a class="mobile-nav-link" href="#${n.id}" onclick="closeMobileMenu()">${n.label}</a></li>`
  ).join('');

  
  document.getElementById('hero-role').textContent = d.hero.role;
  document.getElementById('about-text').textContent = d.hero.bio;
  document.getElementById('stat-1-val').textContent = d.hero.stats[0].val;
  document.getElementById('stat-1-label').textContent = d.hero.stats[0].label;
  document.getElementById('stat-2-val').textContent = d.hero.stats[1].val;
  document.getElementById('stat-2-label').textContent = d.hero.stats[1].label;

  
  document.getElementById('timeline-exp').innerHTML = d.experience.map(renderTimelineItem).join('');
  document.getElementById('timeline-edu').innerHTML = d.education.map(renderTimelineItem).join('');
  
  const timelineVol = document.getElementById('timeline-vol');
  if(timelineVol) {
    timelineVol.innerHTML = d.volunteer.map(renderTimelineItem).join('');
  }

  
  document.getElementById('projects-grid').className = 'projects-accordion-list';
  document.getElementById('projects-grid').innerHTML = d.projects.map((p, i) => `
    <div class="project-accordion-item" onclick="this.classList.toggle('expanded')">
      <div class="accordion-header">
        <div class="accordion-title">
          <span class="proj-title">${p.title}</span>
          <span class="proj-sub-inline">${p.subtitle}</span>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="proj-desc-content">
        <p>${p.desc}</p>
        ${p.tags ? `<div class="tags-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>
  `).join('');

  
  document.getElementById('skills-grid').innerHTML = d.skills.map(s => `
    <div class="skill-group">
      <div class="skill-title">${s.name}</div>
      <div class="tags">${s.pills.map(p => `<span class="tag">${p}</span>`).join('')}</div>
    </div>
  `).join('');

  const heroSocial = document.getElementById('hero-social');
  if(heroSocial) {
    heroSocial.innerHTML = `
      ${d.hero.github ? `<a href="${d.hero.github}" target="_blank">GitHub</a>` : ''}
      ${d.hero.linkedin ? `<a href="${d.hero.linkedin}" target="_blank">LinkedIn</a>` : ''}
    `;
  }

  
  document.getElementById('publications-list').innerHTML = d.publications.map(p => `
    <div class="list-row">
      <div class="list-title">${p.url ? `<a href="${p.url}" target="_blank">${p.title} ↗</a>` : p.title}</div>
      <div class="list-meta">${p.meta}</div>
    </div>
  `).join('');

  document.getElementById('cert-list').innerHTML = d.certifications.map(c => `
    <div class="list-row">
      <div class="list-title">${c.title}</div>
      <div class="list-meta">${c.meta}</div>
    </div>
  `).join('');

  
  document.getElementById('languages-grid').innerHTML = d.languages.map(l => `
    <div class="lang-item">
      <div class="lang-name">${l.name}</div>
      <div class="lang-lvl">${l.level}</div>
    </div>
  `).join('');
}





function initNativeSnapScroll() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const indicatorContainer = document.getElementById('slide-indicators');
  
  if(indicatorContainer) {
    indicatorContainer.innerHTML = slides.map((slide, i) => 
      `<a href="#${slide.id}" class="indicator-dot" data-target="${slide.id}"></a>`
    ).join('');
  }

  const observerOptions = {
    root: document.getElementById('fullpage-wrapper'),
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-target') === currentId);
        });
        document.querySelectorAll('.indicator-dot').forEach(dot => {
          dot.classList.toggle('active', dot.getAttribute('data-target') === currentId);
        });
      }
    });
  }, observerOptions);

  slides.forEach(slide => observer.observe(slide));
}

function openProjectModal(index) {
  const p = cvData[lang].projects[index];
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-subtitle').textContent = p.subtitle;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-tags').innerHTML = p.tags ? p.tags.map(t => `<span class="tag">${t}</span>`).join('') : '';
  document.getElementById('project-modal').classList.add('active');
}

function closeModal(event) {
  if (event && event.target.id !== 'project-modal' && !event.target.classList.contains('modal-close')) return;
  document.getElementById('project-modal').classList.remove('active');
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('active');
  document.getElementById('hamburger-btn').classList.toggle('active');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('active');
  document.getElementById('hamburger-btn').classList.remove('active');
}
