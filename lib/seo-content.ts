import type { PageSeoContentProps } from '@/components/PageSeoContent'

const homeCrumb = { name: 'Home', path: '/' } as const

function pageSeo(
  config: PageSeoContentProps & {
    pagePath: string
    webPageTitle: string
    webPageDescription: string
  }
): PageSeoContentProps {
  return config
}

export const seoContent = {
  about: pageSeo({
    heading: 'About the Global Council for Migration Awareness and Social Welfare',
    headingLevel: 'h2',
    paragraphs: [
      'GCMA promotes lawful migration pathways, community protection, and practical support for people affected by immigration fraud, exploitation, and misinformation.',
      'Our work combines humanitarian assistance, education access, nursing career guidance, study abroad counseling, and public awareness campaigns that help families make informed decisions before they commit time, money, or personal safety.',
    ],
    links: [
      { href: '/services', label: 'Report immigration fraud' },
      { href: '/charity-support', label: 'Humanitarian aid programs' },
      { href: '/contact', label: 'Speak with GCMA' },
    ],
    breadcrumbs: [homeCrumb, { name: 'About', path: '/about' }],
    pagePath: '/about',
    webPageTitle: 'About GCMA',
    webPageDescription:
      'Learn about GCMA, the Global Council for Migration Awareness and Social Welfare, including our mission to prevent immigration fraud, deliver humanitarian aid, and guide ethical migration decisions.',
  }),
  services: pageSeo({
    heading: 'Immigration Fraud Reporting and Community Protection',
    headingLevel: 'h2',
    paragraphs: [
      'GCMA helps individuals report migration scams, fake recruitment agents, document fraud, and unethical immigration practices through structured complaint pathways.',
      'If you have been misled by promises of visas, jobs, admissions, or overseas placements, you can submit details securely so concerns can be reviewed and escalated through authorized community welfare channels.',
    ],
    links: [
      { href: '/migration-advice', label: 'Ethical migration advice' },
      { href: '/contact', label: 'Request support' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Services', path: '/services' }],
    pagePath: '/services',
    webPageTitle: 'Immigration Fraud Reporting and Core Services',
    webPageDescription:
      'Report immigration fraud, migration scams, fake agents, and unethical recruitment through GCMA secure complaint pathways, community protection services, and welfare referrals.',
  }),
  studyAbroad: pageSeo({
    heading: 'Study Abroad Counseling for Students and Families',
    paragraphs: [
      'GCMA study abroad guidance helps students compare universities, understand admission requirements, prepare visa documents, and plan realistic budgets for education overseas.',
      'Our counselors support applications for destinations including Australia, Germany, Denmark, Sweden, France, Malta, and Latvia, with ongoing help for scholarships, pre-departure planning, and post-arrival questions.',
    ],
    links: [
      { href: '/contact', label: 'Book a consultation' },
      { href: '/english-classes/adults', label: 'English exam preparation' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Study abroad', path: '/study-abroad' }],
    pagePath: '/study-abroad',
    webPageTitle: 'Study Abroad Programs and University Guidance',
    webPageDescription:
      'Study abroad counseling for Australia, Germany, Denmark, Sweden, France, Malta, and Latvia with university selection, applications, scholarships, visa documentation, and pre-departure support.',
  }),
  contact: pageSeo({
    heading: 'Contact GCMA for Migration and Welfare Support',
    paragraphs: [
      'Use this page to reach GCMA about study abroad counseling, nursing registration abroad, skilled migration questions, humanitarian aid, English classes, or immigration fraud concerns.',
      'Providing accurate background information helps our team route your request to the right service area and respond with relevant next steps.',
    ],
    links: [
      { href: '/study-abroad', label: 'Study abroad services' },
      { href: '/nursing-registration', label: 'Nursing registration support' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Contact', path: '/contact' }],
    pagePath: '/contact',
    webPageTitle: 'Contact GCMA',
    webPageDescription:
      'Contact GCMA for migration advice, study abroad counseling, nursing registration support, humanitarian aid, English classes, travel planning, and immigration fraud reporting.',
  }),
  travel: pageSeo({
    heading: 'Travel Planning Support for International Journeys',
    paragraphs: [
      'GCMA travel support helps students, families, and professionals organize international trips with clearer documentation, itinerary planning, and destination awareness.',
      'Whether your travel is linked to education, employment, family visits, or relocation preparation, we focus on practical coordination and informed decision-making.',
    ],
    links: [
      { href: '/visit-visa', label: 'Visit visa guidance' },
      { href: '/travel/uae-job-search', label: 'UAE job search travel support' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Travel', path: '/travel' }],
    pagePath: '/travel',
    webPageTitle: 'Travel Planning and International Trip Support',
    webPageDescription:
      'Travel planning support, itinerary guidance, and destination advisory services for students, families, and professionals preparing for education, employment, or relocation abroad.',
  }),
  visitVisa: pageSeo({
    heading: 'Visit Visa Guidance for Short-Term Travel',
    paragraphs: [
      'GCMA visit visa guidance explains common requirements for tourism, family visits, and short-term travel, including document checklists and application sequencing.',
      'We help applicants understand how visit visas differ from student, work, and permanent residency pathways so expectations remain realistic before travel is booked.',
    ],
    links: [
      { href: '/travel', label: 'Travel planning services' },
      { href: '/contact', label: 'Ask a visa question' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Visit visa', path: '/visit-visa' }],
    pagePath: '/visit-visa',
    webPageTitle: 'Visit Visa Guidance and Short-Stay Travel Support',
    webPageDescription:
      'Visit visa guidance for tourism, family visits, and short-term travel, including document preparation, eligibility review, and application sequencing from GCMA.',
  }),
  tutors: pageSeo({
    heading: 'Volunteer Tutors and Community English Mentorship',
    paragraphs: [
      'GCMA tutor pathways connect volunteers with learners who need affordable English communication support, confidence building, and structured practice.',
      'Volunteer teaching is part of our wider social welfare mission and complements Break the Silence programs for students seeking ethical, community-led language development.',
    ],
    links: [
      { href: '/break-the-silence/student-tutor', label: 'Break the Silence program' },
      { href: '/english-classes/adults', label: 'English classes overview' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Tutors', path: '/tutors' }],
    pagePath: '/tutors',
    webPageTitle: 'Volunteer Tutors and English Mentorship',
    webPageDescription:
      'Volunteer tutor opportunities and English mentorship pathways through GCMA community education, Break the Silence, and social welfare language programs.',
  }),
  charitySupport: pageSeo({
    heading: 'Charity Support, Medical Aid, and Education Assistance',
    paragraphs: [
      'GCMA humanitarian programs focus on medical assistance, education support, and relief for individuals facing hardship linked to migration, displacement, or exploitation.',
      'Applications are reviewed with care, and support is provided according to program scope, eligibility, and available community resources.',
    ],
    links: [
      { href: '/services', label: 'Report exploitation or fraud' },
      { href: '/contact', label: 'Apply for support' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Charity support', path: '/charity-support' }],
    pagePath: '/charity-support',
    webPageTitle: 'Charity Support and Humanitarian Aid',
    webPageDescription:
      'Humanitarian aid, medical assistance, and education support programs delivered through GCMA charity initiatives for individuals facing migration-related hardship.',
  }),
  migrationAdvice: pageSeo({
    heading: 'Ethical Migration Advice and Skilled Pathways',
    paragraphs: [
      'GCMA migration advice helps skilled workers, nurses, students, and families understand lawful routes for temporary residence, skilled migration, and long-term settlement planning.',
      'We emphasize transparent eligibility review, document readiness, and realistic timelines rather than promises that cannot be verified against current immigration law.',
    ],
    links: [
      { href: '/migration-advice/skilled-migration/australia', label: 'Skilled migration to Australia' },
      { href: '/migration-advice/skilled-migration/canada', label: 'Skilled migration to Canada' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Migration advice', path: '/migration-advice' }],
    pagePath: '/migration-advice',
    webPageTitle: 'Migration Advice and Skilled Migration Pathways',
    webPageDescription:
      'Ethical migration advice for skilled workers, nurses, students, and families exploring lawful pathways to work, study, and settle abroad with realistic eligibility guidance.',
  }),
  nursingRegistration: pageSeo({
    heading: 'International Nursing Registration and Licensing Guidance',
    paragraphs: [
      'GCMA supports overseas-qualified nurses exploring registration, licensing, and employment pathways in countries such as Australia, Canada, the United Kingdom, Germany, Malta, Denmark, the UAE, the USA, and New Zealand.',
      'Our guidance covers qualification assessment, language requirements, documentation, and the practical steps needed before applying to nursing regulators or employers abroad.',
    ],
    links: [
      { href: '/nurses', label: 'Nursing careers by country' },
      { href: '/contact', label: 'Submit a nursing inquiry' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Nursing registration', path: '/nursing-registration' }],
    pagePath: '/nursing-registration',
    webPageTitle: 'Global Nursing Registration Support',
    webPageDescription:
      'Nursing registration guidance for overseas nurses pursuing careers in Australia, Canada, the UK, Germany, Malta, Denmark, the UAE, the USA, and New Zealand.',
  }),
  nurses: pageSeo({
    heading: 'Nursing Careers Abroad by Destination',
    paragraphs: [
      'Explore country-specific nursing opportunities, workplace expectations, registration frameworks, and career progression options for internationally educated nurses.',
      'Each destination page summarizes why nurses choose that country, common care settings, and the support GCMA can provide before you begin applications.',
    ],
    links: [
      { href: '/nurses/australia', label: 'Nursing in Australia' },
      { href: '/nurses/canada', label: 'Nursing in Canada' },
      { href: '/nurses/united-kingdom', label: 'Nursing in the United Kingdom' },
    ],
    breadcrumbs: [homeCrumb, { name: 'Nursing abroad', path: '/nursing-registration' }],
    pagePath: '/nursing-registration',
    webPageTitle: 'Nursing Careers Abroad by Country',
    webPageDescription:
      'Country-specific nursing career guidance, registration requirements, and employment pathways for internationally educated nurses planning to work overseas.',
  }),
  breakTheSilence: pageSeo({
    heading: 'Break the Silence English Communication Program',
    paragraphs: [
      'Break the Silence is a community initiative that helps learners improve spoken English through volunteer mentorship, confidence coaching, and accessible practice opportunities.',
      'Students and tutors can apply through GCMA to join a socially responsible language program focused on communication skills rather than commercial test coaching alone.',
    ],
    links: [
      { href: '/tutors', label: 'Become a volunteer tutor' },
      { href: '/english-classes/govt-students', label: 'English support for students' },
    ],
    breadcrumbs: [
      homeCrumb,
      { name: 'Break the Silence', path: '/break-the-silence/student-tutor' },
    ],
    pagePath: '/break-the-silence/student-tutor',
    webPageTitle: 'Break the Silence Student Tutor Program',
    webPageDescription:
      'Break the Silence connects students and volunteer tutors for affordable English communication training, confidence building, and community-led language support.',
  }),
  englishClasses: pageSeo({
    heading: 'English Classes for Adults and School Students',
    paragraphs: [
      'GCMA English programs support adults, government school students, and private school students with spoken English, exam preparation, and academic communication skills.',
      'Training options include IELTS, PTE, OET, and general English pathways designed for learners preparing for study abroad, nursing registration, or professional migration goals.',
    ],
    links: [
      { href: '/english-classes/adults', label: 'Adult English classes' },
      { href: '/english-classes/govt-students', label: 'Government school students' },
      { href: '/english-classes/private-students', label: 'Private school students' },
    ],
    breadcrumbs: [homeCrumb, { name: 'English classes', path: '/english-classes/adults' }],
    pagePath: '/english-classes/adults',
    webPageTitle: 'English Classes for Adults',
    webPageDescription:
      'English classes for adults, including IELTS, PTE, OET, and spoken English preparation for study abroad, nursing registration, and skilled migration goals.',
  }),
  gcmaProjects: pageSeo({
    heading: 'GCMA Community Projects and Welfare Initiatives',
    paragraphs: [
      'GCMA community projects document outreach, education, and humanitarian activities undertaken with partner organizations and volunteers.',
      'These initiatives reflect our social welfare mission and migration awareness work in the communities we serve.',
    ],
    links: [
      { href: '/about', label: 'About GCMA' },
      { href: '/charity-support', label: 'Charity and humanitarian aid' },
    ],
    breadcrumbs: [homeCrumb, { name: 'GCMA projects', path: '/gcma-projects' }],
    pagePath: '/gcma-projects',
    webPageTitle: 'GCMA Community Projects',
    webPageDescription:
      'Community projects, outreach, and welfare initiatives led by the Global Council for Migration Awareness and Social Welfare (GCMA).',
  }),
  nclexSyllabus: pageSeo({
    heading: 'NCLEX-RN Master Syllabus and Study Framework',
    paragraphs: [
      'Access the complete NCLEX-RN Master Syllabus containing 15 comprehensive study modules designed to help international nurses prepare for the Next Generation NCLEX (NGN) exam.',
      'Our structured lesson plans combine core clinical knowledge, physiological integrity concepts, learning objectives, and clinical decision-making priorities.',
    ],
    links: [
      { href: '/nursing-registration', label: 'Nursing registration support' },
      { href: '/contact', label: 'Contact nursing team' },
    ],
    breadcrumbs: [homeCrumb, { name: 'NCLEX-RN Syllabus', path: '/nclex-syllabus' }],
    pagePath: '/nclex-syllabus',
    webPageTitle: 'NCLEX-RN Master Syllabus',
    webPageDescription:
      'Comprehensive study plan for NCLEX-RN candidates. 15 modules covering management of care, physiological systems, pharmacology, and Next Generation NCLEX (NGN) exam prep.',
  }),
} satisfies Record<string, PageSeoContentProps>
