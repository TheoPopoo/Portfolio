import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Theo Poletto",
    title: "Administrateur Systèmes & Réseaux",
    status: "Recherche alternance Cybersécurité (Bac+5), école en cours de sélection, rentrée 2027",
    objective: "Actuellement en alternance chez Afludia (Bac+3, fin de contrat en janvier 2027), j'aimerais continuer vers la cybersécurité (Bac+5) et je cherche encore mon école pour la rentrée 2027. Ma priorité : trouver mon entreprise d'accueil en alternance. Je reste ouvert aux différents domaines du secteur (SOC, sécurité opérationnelle, gouvernance).",
    description: "Actuellement en alternance chez Afludia (Bac+3), je cherche une école pour poursuivre vers la cybersécurité via un Mastère en alternance (Bac+5, rentrée 2027). Je gère des infrastructures, de la virtualisation et de la supervision, et je développe des outils internes en PowerShell, C# et Blazor.",
    avatar: "/assets/image/avatar.png"
  },

  projects: [
    {
      id: 1,
      title: "Cluster SQL Server sécurisé & notifications Teams",
      images: ["/assets/image/projects/cluster-sql-server.jpg"],
      description: "Déploiement d’un cluster SQL Server (haute disponibilité) avec segmentation réseau via VLAN, réalisé en contexte professionnel chez Afludia.",
      technologies: ["SQL Server", "VLAN", "PowerShell", "Microsoft Teams"],
      achievements: [
        "Déploiement et configuration d’un cluster SQL Server pour la haute disponibilité",
        "Segmentation réseau via VLAN pour sécuriser l’accès aux bases de données",
        "Notifications automatisées (alertes) via webhooks Microsoft Teams"
      ]
    },

    {
      id: 2,
      title: "Infrastructure Multi-Systèmes (Windows/Linux)",
      images: ["/assets/image/projects/infra-multi-systemes.jpg"],
      githubUrl: "https://github.com/TheoPopoo/Projets/tree/main/Infrastructure-Multi-Systemes",
      description: "Lab d’infrastructure réseau et système complète (VirtualBox), avec des environnements Windows et Linux interopérables.",
      technologies: ["Active Directory", "GPO", "DNS/DHCP", "Linux (realmd/sssd)", "SSH"],
      achievements: [
        "Déploiement AD/DNS/DHCP (Windows Server 2022) avec unités d’organisation et GPO de sécurité",
        "Intégration de clients Linux au domaine Active Directory via realmd/sssd",
        "Tolérance aux pannes via RAID 1 logiciel sur les disques serveur",
        "Durcissement SSH par authentification par clé RSA (passphrase) et administration web via Cockpit"
      ]
    },

    {
      id: 6,
      title: "Plateforme d’administration distante",
      images: ["/assets/image/projects/plateforme-administration-distante.jpg"],
      description: "Interface web pour piloter et administrer des machines à distance via WinRM.",
      technologies: ["PowerShell", "WinRM", "Blazor", "C#"],
      achievements: [
        "Exécution de scripts à distance (redémarrage, processus, déploiement)",
        "Gestion multi-machines via interface web",
        "Centralisation des actions d’administration",
        "Retour en temps réel des exécutions"
      ]
    },

    {
      id: 3,
      title: "Infrastructure Docker & Services Réseau",
      images: ["/assets/image/projects/infra-docker-services-reseau.jpg"],
      description: "Déploiement de services réseau et outils via Docker dans un environnement virtualisé.",
      technologies: ["Docker", "dnsmasq", "Bitwarden", "Linux"],
      achievements: [
        "Déploiement de services réseau conteneurisés",
        "Gestion DNS avec dnsmasq",
        "Mise en place d’un gestionnaire de mots de passe sécurisé (Bitwarden)",
        "Optimisation des services en environnement virtualisé"
      ]
    },

    {
      id: 4,
      title: "Supervision & SIEM (découverte)",
      images: ["/assets/image/projects/supervision-siem.jpg"],
      description: "Installation et prise en main de Security Onion (NSM/IDS) en environnement de test, couplée à Zabbix/Grafana.",
      technologies: ["Zabbix", "Grafana", "Security Onion"],
      achievements: [
        "Installation et configuration de Security Onion en environnement de test",
        "Supervision associée via Zabbix/Grafana",
        "Première approche des concepts NSM/IDS et centralisation des logs"
      ]
    },

    {
      id: 5,
      title: "Automatisation & Scripts IT",
      images: ["/assets/image/projects/automatisation-scripts-it.jpg"],
      description: "Développement de scripts pour automatiser les tâches IT.",
      technologies: ["PowerShell", "Python"],
      achievements: [
        "Automatisation des mises à jour Windows",
        "Déploiement d’applications à distance",
        "Gestion des machines via WinRM",
        "Gain de temps significatif sur les tâches récurrentes"
      ]
    }
  ],

  education: [
    {
      school: "École en cours de sélection",
      degrees: [
        {
          degree: "Mastère Cybersécurité (Bac+5)",
          period: "Rentrée 2027",
          description: "Recherche en cours : alternance 2 ans, entreprise d'accueil à trouver en priorité."
        }
      ]
    },
    {
      school: "LiveCampus",
      degrees: [
        {
          degree: "Bachelor Administrateur Systèmes, Réseaux & Cybersécurité",
          period: "2024 - 2027",
          description: "En alternance chez Afludia."
        }
      ]
    },
    {
      school: "Lycée Henri Loritz",
      degrees: [
        {
          degree: "BTS SNIR",
          period: "2020 - 2022",
          description: "Spécialisation systèmes et réseaux, administration, développement et infrastructures."
        }
      ]
    }
  ],

  experience: [
    {
      position: "Administrateur Systèmes & Réseaux / Développeur (Alternance)",
      company: "Afludia",
      period: "Octobre 2024 - Janvier 2027",
      description: "Alternance Bac+3 : plus de 300 tickets traités sur les systèmes, le réseau, la sécurité et la téléphonie.",
      achievements: [
        "Déploiement et durcissement de postes Windows 11 (SSD, images PPKG, réinstallations) : plus de 85 tickets, mon plus gros volume d'activité",
        "Administration réseau (VLAN, DHCP/DNS, Wifi, câblage, switchs, routeurs) et virtualisation Hyper-V",
        "Sécurité et conformité : Patch Tuesday mensuels, suivi des CVE, gestion des accès et hardening Windows 11 (près de 50 tickets)",
        "Supervision d'infrastructure via Zabbix/Grafana et administration de la téléphonie VoIP (Avaya, OXE, Asterisk)",
        "Scripts PowerShell d'automatisation (supervision de sessions, monitoring OXE, changements d'IP) et administration SQL Server (cluster Always On, requêtes Dapper)",
        "Sauvegardes (Docker, IIS, Bitwarden), NAS Synology et serveur Docker dédié (AFL-SRV-DOCKER)"
      ]
    },
    {
      position: "Administrateur Système",
      company: "ArcelorMittal",
      period: "Juin 2024 - Septembre 2024",
      description: "Administration et sécurisation des accès sur un parc de serveurs physiques et virtuels.",
      achievements: [
        "Déploiement de serveurs physiques et virtuels",
        "Administration Active Directory et System Center",
        "Supervision d’infrastructures",
        "Gestion des incidents"
      ]
    },
    {
      position: "Technicien Systèmes & Réseaux (Intérim)",
      company: "Röchling",
      period: "Juillet 2023",
      description: "Mission d’intérim en support technique et déploiement de postes.",
      achievements: [
        "Support technique et gestion des tickets",
        "Déploiement de postes via SCCM",
        "Support VoIP (3CX)",
        "Interventions réseau"
      ]
    }
  ],

  contact: {
    email: "theopoleto54@gmail.com",
    phone: "06 95 84 99 70",
    linkedin: "https://www.linkedin.com/in/theo-poletto/",
    github: "https://github.com/TheoPopoo",
    location: "Nancy et alentours"
  },

  skills: [
    "Windows Server",
    "Linux",
    "Active Directory",
    "PowerShell",
    "Docker",
    "Proxmox",
    "VMware",
    "Zabbix",
    "Grafana",
    "Security",
    "Réseaux",
    "Virtualisation"
  ],

  skillCategories: [
    {
      category: "Cybersécurité & Supervision",
      icon: "🔐",
      color: "from-slate-400 to-slate-500",
      skills: [
        "Security Onion",
        "Zabbix",
        "Grafana",
        "Azure AD / Entra ID",
        "VLAN"
      ]
    },
    {
      category: "Systèmes",
      icon: "🖥️",
      color: "from-slate-400 to-slate-500",
      skills: [
        "Windows Server",
        "Linux",
        "Active Directory",
        "Hyper-V",
        "Proxmox"
      ]
    },
    {
      category: "Réseaux",
      icon: "🌐",
      color: "from-slate-400 to-slate-500",
      skills: [
        "VLAN",
        "DHCP",
        "DNS",
        "NAT",
        "Routage"
      ]
    },
    {
      category: "Automatisation",
      icon: "⚙️",
      color: "from-slate-400 to-slate-500",
      skills: [
        "PowerShell",
        "WinRM",
        "Scripting",
        "Python"
      ]
    },
    {
      category: "Dev & Outils",
      icon: "💻",
      color: "from-slate-400 to-slate-500",
      skills: [
        "C#",
        ".NET",
        "Blazor",
        "SQL Server",
        "Git"
      ]
    }
  ],

  hobbies: [],

  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Technique / professionnel" }
  ],

  certifications: [
    { name: "CCNA 1", issuer: "Cisco", date: "Obtenu" }
  ]
};
