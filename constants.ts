import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  "personal": {
    "name": "Poletto Théo",
    "title": "Développeur Full Stack",
    "status": "Étudiant en Master 2 MIAGE-SID",
    "objective": "Recherche un poste en CDI pour mettre en valeur mes compétences et apprendre de nouvelles technologies",
    "description": "Actuellement en dernière année de Master 2 MIAGE spécialité SID, je recherche un poste en CDI pour appliquer mes compétences et continuer à apprendre. J'ai une expérience en gestion de projets, et je prépare le certificat AWS Certified Cloud Practitioner (CLF-C02)",
    "avatar": "/assets/image/avatar.png"
  },
  "projects": [
{
      "id": 1,
      "title": "TRD - Paris Sportifs (Microservices)",
      "images": [
        "/assets/image/trd/trdpr1.png",
        "/assets/image/trd/trdpr2.png",
        "/assets/image/trd/trdpr3.png",
        "/assets/image/trd/trd2.png",
        "/assets/image/trd/trd1.png",
        "/assets/image/trd/trd3.png",
        "/assets/image/trd/trd6.png",
        "/assets/image/trd/trd5.png",
        "/assets/image/trd/trd4.png"
      ],
      "description": "Conception et développement d'une architecture distribuée pour une application de paris sportifs (Coupe du Monde 2026).",
      "technologies": [".NET 10", "Blazor", "Java-Springboot", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ", "DDD"],
      "achievements": [
        "Architecture en Microservices suivant l'approche Domain-Driven Design (DDD)",
        "Conteneurisation complète de l'infrastructure backend avec Docker",
        "Mise en place d'APIs REST performantes et communication asynchrone",
        "Gestion de la cohérence des données et déploiement CI/CD"
      ]
    },

 {
      "id": 2,
      "title": "MByte - Intégration de Stockage Externe",
      "images": [
        "/assets/image/mbyte/mbytepr1.png",
        "/assets/image/mbyte/mbytepr2.png",
        "/assets/image/mbyte/mbytepr3.png",
        "/assets/image/mbyte/mbytepr4.png",
        "/assets/image/mbyte/mbytepr5.png",
        "/assets/image/mbyte/mbytepr6.png",
        "/assets/image/mbyte/mbytepr7.png",
        "/assets/image/mbyte/mbytepr8.png",
        "/assets/image/mbyte/mbyte1.png",
        "/assets/image/mbyte/mbyte2.png",
        "/assets/image/mbyte/mbyte3.png",
        "/assets/image/mbyte/mbyte4.png",
        "/assets/image/mbyte/mbyte5.png"
      ],
      "description": "Intégration transparente de stockages externes (S3, WebDAV) avec chiffrement des données.",
      "technologies": ["S3", "WebDAV", "Encryption", "Backend"],
      "achievements": [
        "Intégration d'Amazon S3 et WebDAV pour une flexibilité de stockage multi-backend",
        "Implémentation du chiffrement des fichiers avant stockage externe pour la sécurité",
        "Gestion transparente des fichiers sur plusieurs solutions de stockage",
        "Architecture multi-backend avec redondance et load balancing",
        "Stockage intelligent et récupération optimale pour performance et fiabilité"
      ]
    }

    ,
{
      "id": 3,
      "title": "Esiway",
      "images": [
        "/assets/image/esiway/es01.png",
        "/assets/image/esiway/es04.png",
        "/assets/image/esiway/es07.png",
        "/assets/image/esiway/es08.png",
        "/assets/image/esiway/es09.png",
        "/assets/image/esiway/es10.png",
        "/assets/image/esiway/es13.png",
        "/assets/image/esiway/es14.png",
        "/assets/image/esiway/es21.jpg",
        "/assets/image/esiway/svg/w1.svg",
        "/assets/image/esiway/svg/w2.svg",
        "/assets/image/esiway/svg/w3.svg",
        "/assets/image/esiway/svg/w4.svg",
        "/assets/image/esiway/svg/w5.svg"
      ],
      "description": "Application mobile Flutter pour simplifier les tâches administratives scolaires. Notre objectif : rationaliser les processus et créer une expérience conviviale. Développée en utilisant les principes de Flutter Clean Architecture.",
      "technologies": ["Flutter", "Dart", "Figma" ,"Clean Architecture", "Mobile Application"],
      "achievements": [
        "Développement d'une application mobile épurée et intuitive",
        "Implémentation de l'architecture Clean Architecture de Flutter",
        "Simplification des processus administratifs pour les étudiants",
        "Interface utilisateur fluide et performante"
      ]
    },

    {
      "id": 4,
      "title": "Prigra",
      "images": [   
        "/assets/image/prigra/prigra.png",
        "/assets/image/prigra/Choose Role.svg",
        "/assets/image/prigra/prigra_frame_1.svg",
        "/assets/image/prigra/prigra_frame_2.svg",
        "/assets/image/prigra/prigra_frame3.svg",
        "/assets/image/prigra/prigra_frame4.svg"
        
      ],
      "description": "Plateforme web pour la gestion des projets de fin d'étude en Algérie.",
      "technologies": ["Django", "ReactJS"],
      "achievements": [
        "Conception et développement des fonctionnalités principales",
        "Intégration du front-end avec le back-end",
        "Utilisation des pratiques de la méthodologie Agile Scrum"
      ]
    }

 
,
{
      "id": 5,
      "title": "JARVIS",
      "images": [
        "/assets/image/jarvis/jarvis_1.svg",
        "/assets/image/jarvis/jarvis_fram3.svg",
        "/assets/image/jarvis/jarvis_frame4.svg",
        "/assets/image/jarvis/jarvis_frame5.svg",
        "/assets/image/jarvis/jarvis_frame6.svg"
      ],
      "description": "Application mobile de gestion de projets basée sur l'IA.",
      "technologies": ["Flutter", "NodeJS", "Figma"],
      "achievements": [
        "2ème place lors du Hackathon national de 48 heures GDG Devfest",
        "Développement d'une application mobile basée sur l'IA"
      ]
}
     
    
     
    ,
        {
      "id": 6,
      "title": "Comiteplus",
      "images": [
          "/assets/image/comiteplus/comite1.png"

      ],
      "description": "Intégration du site web dans une application mobile et réalisation des tests unitaires.",
      "technologies": ["Flutter", "UI", "HTML", "CSS", "PHP", "JavaScript"],
      "achievements": [
        "Intégration réussie du site web dans une application mobile",
        "Réalisation complète des tests unitaires",
        "Appréhension de l'activité d'un développeur indépendant"
      ]
    },
    {
      "id": 7,
      "title": "Festival Littéraire International",
      "images": [
        "/assets/image/festival/ff10.png",
        "/assets/image/festival/ff9.png",
        "/assets/image/festival/ff1.png",
        "/assets/image/festival/ff22.png",
        "/assets/image/festival/ff33.png",
        "/assets/image/festival/ff44.png",
        "/assets/image/festival/ff55.png",
        "/assets/image/festival/ff66.png",
        "/assets/image/festival/ff77.png",
        "/assets/image/festival/ff88.png"
      ],
      "description": "Application web pour la gestion du festival littéraire international permettant de faciliter la planification des interventions d'auteurs dans divers établissements. L'application enregistre les données des conférenciers, leurs œuvres et les langues parlées.",
      "technologies": ["PostgreSQL", "SQL", "Django", "Web Application"],
      "achievements": [
        "Enregistrement et gestion des données des auteurs et leurs œuvres",
        "Gestion des demandes d'intervention des établissements participants",
        "Planification des interventions en tenant compte des contraintes logistiques",
        "Génération de statistiques pour le suivi des éditions du festival",
        "Scripts SQL robustes pour assurer la fonctionnalité du système"
      ]
    },
  ],
  "education": [
    {
      "school": "Institut des sciences du Digital, Management Cognition",
      "degrees": [
        { "degree": "Master Miage SID", "period": "2024 - 2026", "description": "Systèmes d'information, Business Intelligence, analyse de données, maîtrise d'ouvrage." },
        { "degree": "Licence Miage", "period": "2023 - 2024", "description": "Informatique et gestion des entreprises." }
      ]
    },
    {
      "school": "École nationale supérieure d'informatique (ESI) - Algérie",
      "degrees": [
        { 
          "degree": "1ère année Cycle Ingénieur", 
          "period": "2022 - 2023", 
          "description": "Formation intensive en conception des base de données, Algorithmique, Recherche Opérationnelle (RO) et Réseaux." 
        },
        { 
          "degree": "Classes Préparatoires + concours d'accès aux grandes écoles", 
          "period": "2020 - 2022", 
          "description": "Formation intensive en Mathématiques, Algorithmique, Électronique." 
        }
      ]
    },
    {
      "school": "Lycée",
      "degrees": [
        {
          "degree": "Baccalauréat Série Mathématiques - Algérie",
          "period": "2020",
          "description": "Moyenne : 15.88 / 20"
        }
      ]
    }
  ],
  "experience": [
    {
      "position": "Développeur Full Stack - Alternance",
      "company": "Afludia - Maxéville",
      "period": "Septembre 2024 - Septembre 2026",
      "description": "Conception et évolution d’applications web métier en environnement .NET (Blazor, SQL Server), avec un focus sur la performance et la maintenabilité.",
      "achievements": ["Refonte et migration d’applications internes vers une architecture plus propre et modulaire (amélioration de la maintenabilité et des performances)", "Développement et évolution de fonctionnalités critiques sur les sites utilisés par les clients", "Optimisation et debugging d’applications existantes (correction de bugs, amélioration des performances et de la fiabilité)", "Conception et développement d’interfaces web modernes avec Blazor et MudBlazor", "Contribution au projets full-stack en environnement .NET (API, UI, base de données SQL Server)", "Collaboration en équipe Agile (échanges techniques, revue de code, amélioration continue)"]
    },
    {
      "position": "Développeur Full Stack - Stage",
      "company": "Solutions Développement Informatique - La Rochelle",
      "period": "Avril 2024 - Juin 2024",
      "description": "",
      "achievements": [ "Intégration d'un site web dans une application mobile"]
    },
    {
      "position": "Équipier Polyvalent (Job étudiant)",
      "company": "McDonald's - Heillecourt",
      "period": "Février 2024 - Décembre 2025",
      "description": "",
      "achievements": []
    }
  ],
  "contact": {
    "email": "abderrazakseghir1@gmail.com",
    "phone": "+33 7 66 72 99 78",
    "linkedin": "https://www.linkedin.com/in/seghir-abderrazak-248520229/",
    "github": "https://github.com/abderrzakseghir",
    "location": "France"
  },
  "skills": [
    ".NET", 
    "C#", 
    "Blazor", 
    "Microservices", 
    "Docker", 
    "PostgreSQL", 
    "RabbitMQ", 
    "JavaScript", 
    "React", 
    "Flutter", 
    "Python", 
    "Java", 
    "SQL Server", 
    "Git", 
    "AWS", 
    "Agile/Scrum"
  ],
  "skillCategories": [
    {
      "category": "Backend",
      "icon": "🔧",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        ".NET",
        "Blazor",
        "C#",
        "Python",
        "Java",
        "Microservices",
        "RabbitMQ"
      ]
    },
    {
      "category": "Frontend",
      "icon": "🎨",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        "React",
        "JavaScript",
        "TypeScript",
        "MudBlazor",
        "Flutter"
      ]
    },
    {
      "category": "Bases de Données",
      "icon": "💾",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        "PostgreSQL",
        "SQL Server",
        "SQL",
        "MongoDB"
      ]
    },
    {
      "category": "DevOps & Cloud",
      "icon": "☁️",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "Git",
      ]
    },
    {
      "category": "Gestion de Projets",
      "icon": "📊",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        "Agile/Scrum",
        "Jira",
        "Trello",
        "Leadership",
        "Documentation"
      ]
    },
    {
      "category": "Outils & Autres",
      "icon": "🛠️",
      "color": "from-slate-400 to-slate-500",
      "skills": [
        "VS Code",
        "Visual Studio",
        "Postman",
        "GitHub",
        "REST APIs"
      ]
    }
  ],
  "hobbies": [
   { "id": 1,
  "name": "Semi Marathon de Nancy",
  "type": "Course à pied",
  "date": "29 mars 2026",
  "location": "Nancy, France",
  "description": "Participation au Semi Marathon de Nancy avec l’IDMC",
  "coverImage": "/assets/image/hobbies/semimarathon2026.jpeg",
  "details": "Dimanche 29 mars 2026, parmi plus de 7500 coureurs rassemblés place Stanislas, 13 enseignants et étudiants de l’IDMC ont une nouvelle fois pris le départ du Semi-Marathon de Nancy ! 🎽💙Après 21 km d’effort et de persévérance, ils ont tous franchi la ligne d’arrivée, portés par leur détermination et le soutien des supporters présents. Un immense bravo à eux pour leurs belles performances !"
},
     {
  "id": 2,
  "name": "Course des 10 km de la Saint-Nicolas",
  "type": "Course à pied",
  "date": "30 Novembre 2025",
  "location": "Nancy, France",
  "description": "Participation à la course des 10 km de la Saint-Nicolas avec l’IDMC",
  "coverImage": "/assets/image/hobbies/stnicolas.jpeg",
  "details": "Participation à la traditionnelle course des 10 km de la Saint-Nicolas organisée à Nancy, aux côtés des étudiants et enseignants de l’IDMC. Malgré des conditions météorologiques difficiles marquées par la pluie, l’événement s’est déroulé dans une ambiance conviviale et motivante."
},
  {
  "id": 3,
  "name": "Concours de code Euro-Information",
  "type": "Hackathon",
  "date": "07 Octobre 2025",
  "location": "Nancy, France",
  "description": "Participation à un concours de code organisé par Euro-Information",
  "coverImage": "/assets/image/hobbies/euroinfo.jpg",
  "details": "Concours de code organisé par Euro-Information en partenariat avec plusieurs écoles d’ingénieurs. Deux heures intenses dédiées à la résolution de défis techniques, au test d’idées et au dépassement de soi dans une ambiance hackathon. Une expérience enrichissante favorisant l’échange avec des professionnels, la découverte de nouvelles technologies et le travail sous pression dans un cadre stimulant."
  },
    {
  "id": 4,
  "name": "GDG Devfest Hackathon",
  "type": "Hackathon",
  "date": "01 Janvier 2023",
  "location": "ESI Sidi Bel Abbès, Algérie",
  "description": "Hackathon national de 24 heures organisé lors du GDG Devfest",
  "coverImage": "/assets/image/hobbies/devfest.png",
  "details": "Participation au GDG Devfest Hackathon à l’ESI Sidi Bel Abbès. En équipe, nous avons conçu, designé et développé en 24 heures une application mobile nommée JARVIS, basée sur l’IA et le NLP, visant à améliorer la productivité et la gestion de projets. Le projet couvrait tout le cycle produit : idéation, prototypage et implémentation. Notre équipe a remporté la 2ᵉ place au niveau national. Cette expérience a renforcé mes compétences en travail d’équipe, innovation, développement sous pression et intégration de technologies d’IA."
}
  ],
  "languages": [
    { "name": "Français, Arabe", "level": "Bilingue Courant" },
    { "name": "Anglais", "level": "Professionnel (B2)" }
  ],
  "certifications": [
    { "name": "AWS Certified Cloud Practitioner (CLF-C02)", "issuer": "(En préparation)", "date": "En préparation" }
  ]
};
