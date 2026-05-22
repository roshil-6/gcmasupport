'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import ShowcaseCard from '@/components/ShowcaseCard'

// Local study abroad images (downloaded into public/study-abroad)
const IMAGES = {
    study: '/study-abroad/pexels-3184360.jpg', // World-Class Education
    work: '/study-abroad/pexels-3184306.jpg', // Work Opportunities
    pr: '/study-abroad/pexels-5668473.jpg', // Permanent Residency
    consultation: '/study-abroad/pexels-3184298.jpg', // Initial Consultation
    program: '/study-abroad/pexels-3769021.jpg', // Program Selection
    application: '/study-abroad/pexels-5905710.jpg', // Application Preparation
    visa: '/study-abroad/pexels-7235804.jpg', // Visa & Documentation
    departure: '/study-abroad/pexels-5212339.jpg', // Pre-Departure Support
    support: '/study-abroad/pexels-4145190.jpg', // Ongoing Assistance
    guidance: '/study-abroad/pexels-3184639.jpg', // Personalized Guidance
    scholarship: '/study-abroad/pexels-6147369.jpg', // Scholarship Assistance
    partnerships: '/study-abroad/pexels-267885.jpg', // University Partnerships
} 

export default function StudyAbroadSection() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-reveal')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const mainGoals = [
        {
            title: 'To Study',
            subtitle: 'World-Class Education',
            image: IMAGES.study,
            description: 'Access premier universities and educational institutions globally.',
        },
        {
            title: 'To Work',
            subtitle: 'Work Opportunities',
            image: IMAGES.work,
            description: 'Gain valuable international work experience while studying and after graduation.',
        },
        {
            title: 'To Gain PR',
            subtitle: 'Permanent Residency',
            image: IMAGES.pr,
            description: 'Navigate clear pathways to permanent residency through education.',
        },
    ]

    const steps = [
        { number: '01', title: 'Initial Consultation', image: IMAGES.consultation },
        { number: '02', title: 'Program Selection', image: IMAGES.program },
        { number: '03', title: 'Application Preparation', image: IMAGES.application },
        { number: '04', title: 'Visa & Documentation', image: IMAGES.visa },
        { number: '05', title: 'Pre-Departure Support', image: IMAGES.departure },
        { number: '06', title: 'Ongoing Assistance', image: IMAGES.support },
    ]

    const benefits = [
        {
            title: 'Personalized Guidance',
            image: IMAGES.guidance,
            description: 'Tailored counseling based on your academic profile and long-term plans.',
        },
        {
            title: 'Scholarship Assistance',
            image: IMAGES.scholarship,
            description: 'Support to identify funding options and complete strong scholarship applications.',
        },
        {
            title: 'University Partnerships',
            image: IMAGES.partnerships,
            description: 'Direct access to trusted institutions and streamlined admissions support.',
        },
    ]

    const stepCardColors = [
        'border-[#e3d5b1] bg-[linear-gradient(180deg,#fffdf8_0%,#f7efdf_100%)]',
        'border-[#cadbb7] bg-[linear-gradient(180deg,#fbfff7_0%,#edf5e3_100%)]',
        'border-[#d9c7e5] bg-[linear-gradient(180deg,#fffaff_0%,#f3e8f8_100%)]',
        'border-[#e4d2b3] bg-[linear-gradient(180deg,#fffaf6_0%,#f7ebdb_100%)]',
        'border-[#c7ded8] bg-[linear-gradient(180deg,#f9fffe_0%,#e7f4f1_100%)]',
        'border-[#e2c8d3] bg-[linear-gradient(180deg,#fffafd_0%,#f6e7ee_100%)]',
    ]

    return (
        <section ref={sectionRef} className="py-16 px-4 relative z-10">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Main Goals Grid */}
                <div className="text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gold-metallic">
                        Study Abroad Pathways
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mainGoals.map((goal, index) => (
                            <ShowcaseCard
                                key={index}
                                imageSrc={goal.image}
                                imageAlt={goal.title}
                                eyebrow={goal.subtitle}
                                title={goal.title}
                                description={goal.description}
                                ctaHref="/study-abroad"
                                ctaLabel="Learn More"
                            />
                        ))}
                    </div>
                </div>

                {/* How We Help - Steps */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#6e531d] mb-4">
                            How We Help You Study Abroad
                        </h2>
                        <p className="max-w-2xl mx-auto text-[#6d5a3a]">
                            A comprehensive step-by-step guidance system designed to make your journey seamless.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`rounded-xl border p-4 shadow-[0_12px_28px_rgba(122,90,30,0.07)] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(122,90,30,0.1)] ${stepCardColors[index % stepCardColors.length]}`}
                            >
                              <div className="flex items-start gap-4">
                                <div className="relative w-36 aspect-video shrink-0 rounded-lg overflow-hidden border border-gold-metallic/30">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        sizes="144px"
                                        loading="lazy"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="py-2">
                                    <span className="text-[#8a7340] font-mono text-sm mb-1 block">STEP {step.number}</span>
                                    <h4 className="text-lg font-bold text-[#2a241d] leading-tight">{step.title}</h4>
                                </div>
                              </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-[#333333]/40 rounded-3xl p-8 md:p-12 border border-gold-metallic/20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Why Choose Our Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <ShowcaseCard
                                key={index}
                                imageSrc={benefit.image}
                                imageAlt={benefit.title}
                                eyebrow="Service Benefit"
                                title={benefit.title}
                                description={benefit.description}
                                ctaHref="/study-abroad"
                                ctaLabel="Learn More"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
