import { buildPageMetadata } from '@/lib/seo'

export const seoPages = {
  about: buildPageMetadata({
    title: 'About GCMA',
    description:
      'Learn about GCMA, the Global Council for Migration Awareness and Social Welfare, including our mission to prevent immigration fraud, deliver humanitarian aid, and guide ethical migration decisions.',
    path: '/about',
    keywords: [
      'about GCMA',
      'migration awareness organization',
      'social welfare mission',
      'ethical migration support',
    ],
  }),
  services: buildPageMetadata({
    title: 'Immigration Fraud Reporting and Core Services',
    description:
      'Report immigration fraud, migration scams, fake agents, and unethical recruitment through GCMA secure complaint pathways, community protection services, and welfare referrals.',
    path: '/services',
    keywords: [
      'immigration fraud reporting',
      'migration scam complaint',
      'fake visa agent report',
      'GCMA services',
    ],
  }),
  studyAbroad: buildPageMetadata({
    title: 'Study Abroad Programs and University Guidance',
    description:
      'Study abroad counseling for Australia, Germany, Denmark, Sweden, France, Malta, and Latvia with university selection, applications, scholarships, visa documentation, and pre-departure support.',
    path: '/study-abroad',
    ogImagePath: '/study-abroad/banner.jpg',
    keywords: [
      'study abroad counseling',
      'university admission guidance',
      'student visa support',
      'overseas education consultant',
    ],
  }),
  contact: buildPageMetadata({
    title: 'Contact GCMA',
    description:
      'Contact GCMA for migration advice, study abroad counseling, nursing registration support, humanitarian aid, English classes, travel planning, and immigration fraud reporting.',
    path: '/contact',
    keywords: [
      'contact GCMA',
      'migration support contact',
      'study abroad consultation',
      'nursing registration inquiry',
    ],
  }),
  travel: buildPageMetadata({
    title: 'Travel Planning and International Trip Support',
    description:
      'Travel planning support, itinerary guidance, and destination advisory services for students, families, and professionals preparing for education, employment, or relocation abroad.',
    path: '/travel',
    keywords: [
      'travel planning services',
      'international travel support',
      'GCMA travel assistance',
    ],
  }),
  visitVisa: buildPageMetadata({
    title: 'Visit Visa Guidance and Short-Stay Travel Support',
    description:
      'Visit visa guidance for tourism, family visits, and short-term travel, including document preparation, eligibility review, and application sequencing from GCMA.',
    path: '/visit-visa',
    keywords: [
      'visit visa guidance',
      'tourist visa support',
      'short stay visa help',
      'family visit visa advice',
    ],
  }),
  tutors: buildPageMetadata({
    title: 'Volunteer Tutors and English Mentorship',
    description:
      'Volunteer tutor opportunities and English mentorship pathways through GCMA community education, Break the Silence, and social welfare language programs.',
    path: '/tutors',
    keywords: [
      'volunteer English tutor',
      'community mentorship',
      'GCMA tutors',
      'English speaking practice',
    ],
  }),
  charitySupport: buildPageMetadata({
    title: 'Charity Support and Humanitarian Aid',
    description:
      'Humanitarian aid, medical assistance, and education support programs delivered through GCMA charity initiatives for individuals facing migration-related hardship.',
    path: '/charity-support',
    keywords: [
      'humanitarian aid',
      'charity support',
      'medical assistance programs',
      'education support charity',
    ],
  }),
  migrationAdvice: buildPageMetadata({
    title: 'Migration Advice and Skilled Migration Pathways',
    description:
      'Ethical migration advice for skilled workers, nurses, students, and families exploring lawful pathways to work, study, and settle abroad with realistic eligibility guidance.',
    path: '/migration-advice',
    keywords: [
      'migration advice',
      'skilled migration pathways',
      'ethical immigration guidance',
      'overseas settlement planning',
    ],
  }),
  nursingRegistration: buildPageMetadata({
    title: 'Global Nursing Registration Support',
    description:
      'Nursing registration guidance for overseas nurses pursuing careers in Australia, Canada, the UK, Germany, Malta, Denmark, the UAE, the USA, and New Zealand.',
    path: '/nursing-registration',
    keywords: [
      'nursing registration abroad',
      'overseas nurse licensing',
      'international nursing careers',
      'foreign nurse registration',
    ],
  }),
  nurses: buildPageMetadata({
    title: 'Nursing Careers Abroad by Country',
    description:
      'Country-specific nursing career guidance, registration requirements, and employment pathways for internationally educated nurses planning to work overseas.',
    path: '/nurses',
    keywords: [
      'nursing careers abroad',
      'overseas nurse jobs',
      'international nursing opportunities',
      'nurse migration pathways',
    ],
  }),
  breakTheSilence: buildPageMetadata({
    title: 'Break the Silence Student Tutor Program',
    description:
      'Break the Silence connects students and volunteer tutors for affordable English communication training, confidence building, and community-led language support.',
    path: '/break-the-silence/student-tutor',
    keywords: [
      'English student tutor program',
      'Break the Silence',
      'volunteer English teaching',
      'spoken English support',
    ],
  }),
  skilledMigrationAustralia: buildPageMetadata({
    title: 'Skilled Migration to Australia',
    description:
      'Skilled migration guidance for Australia, including eligibility review, points-based pathways, documentation planning, and lawful settlement support from GCMA.',
    path: '/migration-advice/skilled-migration/australia',
    keywords: [
      'skilled migration Australia',
      'Australia PR pathways',
      'Australia points-based migration',
    ],
  }),
  skilledMigrationCanada: buildPageMetadata({
    title: 'Skilled Migration to Canada',
    description:
      'Skilled migration guidance for Canada, including Express Entry awareness, document readiness, eligibility review, and ethical settlement planning from GCMA.',
    path: '/migration-advice/skilled-migration/canada',
    keywords: [
      'skilled migration Canada',
      'Canada PR pathways',
      'Express Entry guidance',
    ],
  }),
  uaeJobSearchTravel: buildPageMetadata({
    title: 'UAE Job Search Travel Support',
    description:
      'Travel and planning support for professionals exploring UAE job search opportunities, documentation, and relocation preparation with GCMA guidance.',
    path: '/travel/uae-job-search',
    keywords: [
      'UAE job search travel',
      'UAE employment travel support',
      'GCMA UAE relocation guidance',
    ],
  }),
  englishAdults: buildPageMetadata({
    title: 'English Classes for Adults',
    description:
      'English classes for adults, including IELTS, PTE, OET, and spoken English preparation for study abroad, nursing registration, and skilled migration goals.',
    path: '/english-classes/adults',
    keywords: ['English classes for adults', 'IELTS coaching', 'PTE preparation', 'OET classes'],
  }),
  englishGovtStudents: buildPageMetadata({
    title: 'English Classes for Government School Students',
    description:
      'English language support for government school students, including communication skills, exam readiness, and confidence-building programs from GCMA.',
    path: '/english-classes/govt-students',
    keywords: [
      'government school English classes',
      'student English coaching',
      'school English support',
    ],
  }),
  englishPrivateStudents: buildPageMetadata({
    title: 'English Classes for Private School Students',
    description:
      'English classes for private school students focused on fluency, academic communication, and exam preparation for future study abroad pathways.',
    path: '/english-classes/private-students',
    keywords: [
      'private school English classes',
      'student English coaching',
      'academic English support',
    ],
  }),
  gcmaProjects: buildPageMetadata({
    title: 'GCMA Community Projects and Outreach',
    description:
      'Community projects, humanitarian outreach, and welfare initiatives documented by the Global Council for Migration Awareness and Social Welfare (GCMA).',
    path: '/gcma-projects',
    ogImagePath: '/projects/gcma-vision.jpg',
    keywords: [
      'GCMA projects',
      'community outreach',
      'humanitarian initiatives',
      'migration awareness programs',
    ],
  }),
} as const
