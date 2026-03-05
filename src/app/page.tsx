import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { ZingCTAButton } from '@/components/ZingCTAButton'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const useCases = [
  {
    category: 'AI Newsletter Agents',
    examples: ['NewsletterBot AI', 'DailyInsights Pro', 'MarketMind AI'],
  },
  {
    category: 'Research & Analytics',
    examples: ['ResearchGenie', 'DataCrafter AI', 'InsightEngine'],
  },
  {
    category: 'Trading Signals',
    examples: ['TradingSignals Pro', 'CryptoBot Elite', 'AlgoTrader AI'],
  },
  {
    category: 'Content Creators',
    examples: ['Creator Studio', 'ContentFlow', 'MultiPlatform Pro'],
  },
  {
    category: 'Knowledge Platforms',
    examples: ['Knowledge Curator', 'ExpertMind AI', 'LearningPath'],
  },
  {
    category: 'Media Collectives',
    examples: ['Media Collective', 'CreatorNetwork', 'DistributionHub'],
  },
]

function UseCases() {
  return (
    <div
      className="mt-24 rounded-4xl py-20 sm:mt-32 sm:py-32 lg:mt-56"
      style={{ backgroundColor: '#0B0E14' }}
    >
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Powering the Next Generation of Creators
          </h2>
          <div className="h-px flex-auto bg-neutral-600" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <FadeIn key={useCase.category}>
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {useCase.category}
                  </h3>
                  <ul className="space-y-2">
                    {useCase.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center text-neutral-300"
                      >
                        <div
                          className="mr-3 h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: '#FF4D13' }}
                        />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function UseCasesShowcase() {
  const useCases = [
    {
      category: 'AI Newsletter',
      title: 'AI Newsletter Monetization',
      description:
        'Build an AI agent that generates daily market insights and monetize with tiered subscriptions. From free weekly summaries to premium daily analysis with real-time alerts.',
      capabilities: [
        'Subscription tiers (Free/Premium/Pro)',
        'Usage-based billing for API calls',
        'Cross-platform distribution',
      ],
      potential: 'Scale to 50k+ subscribers',
      icon: '📧',
    },
    {
      category: 'Trading Signals',
      title: 'AI Trading Signals Platform',
      description:
        'Create AI-powered trading bots that generate crypto and stock signals. Monetize through subscription models and usage-based pricing for premium signals.',
      capabilities: [
        'Real-time signal delivery',
        'Performance-based pricing',
        'Multi-asset support',
      ],
      potential: 'Launch premium tiers instantly',
      icon: '📈',
    },
    {
      category: 'Research Platform',
      title: 'Personalized Research Engine',
      description:
        'Deploy AI agents that create custom research reports for specific industries or topics. Monetize through one-time purchases and subscription-based access.',
      capabilities: [
        'Custom report generation',
        'Industry-specific insights',
        'Flexible pricing models',
      ],
      potential: 'Serve enterprise clients',
      icon: '🔍',
    },
  ]

  return (
    <>
      <SectionIntro
        title="What You Can Build"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our beta platform is ready for creators and AI builders to launch
          their monetized content experiences. Here's what's possible with
          Zing's unified API.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <FadeIn key={useCase.category} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: '#FFF4F1' }}
                >
                  <span className="text-3xl">{useCase.icon}</span>
                </div>
                <p className="flex gap-x-2 text-sm text-neutral-950">
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{useCase.category}</span>
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600 h-40">
                  {useCase.description}
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-semibold text-neutral-700">
                    Key Capabilities:
                  </p>
                  <ul className="space-y-1">
                    {useCase.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center text-sm text-neutral-600"
                      >
                        <div
                          className="mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: '#FF4D13' }}
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-t border-neutral-200 pt-6">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: '#FF4D13' }}
                  >
                    {useCase.potential}
                  </p>
                  {/* <p className="mt-1 text-sm text-neutral-500"> */}
                  {/*   Available in Beta */}
                  {/* </p> */}
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Features() {
  return (
    <>
      <SectionIntro
        eyebrow="Platform"
        title="One API integration, deploy anywhere."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We've abstracted the complexity of content monetization into a unified
          layer that works across all platforms. Just as Stripe simplified
          payments, Zing simplifies content monetization.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Unified API Layer">
              Connect once to Zing's API and instantly support subscriptions,
              one-time payments, and usage-based billing across all platforms.
              No more managing multiple payment processors.
            </ListItem>
            <ListItem title="AI-Native Infrastructure">
              Built specifically for both human and AI creators. Our API handles
              complex monetization logic so your AI agents can focus on creating
              value, not processing payments.
            </ListItem>
            <ListItem title="Platform Agnostic Deployment">
              Your content monetization travels with your audience. Whether it's
              newsletters, research reports, or personalized knowledge, Zing
              ensures seamless revenue across platforms.
            </ListItem>
            <ListItem title="Developer-First Experience">
              Stripe-simple integration for any platform. Clean REST APIs,
              comprehensive SDKs, and detailed documentation make integration
              effortless for developers and platforms alike.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title:
    'Zing - The Stripe for Content | Programmable Monetization Infrastructure',
  description:
    'Programmable monetization infrastructure for the AI-powered creator economy. One API integration, deploy anywhere. The unified layer for content monetization.',
}

export default function Home() {
  // For static export compatibility, we don't load case studies dynamically
  let caseStudies: Array<any> = []

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            The Stripe for Content
          </h1>
          <p className="mt-6 text-2xl font-medium text-neutral-700">
            Programmable monetization infrastructure for the AI-powered creator
            economy.
          </p>
          <p className="mt-8 text-xl leading-relaxed text-neutral-600">
            Today, content monetization is fragmented, platform-controlled, and
            rigid. Creators depend on centralized platforms that take 15–30%
            fees, control distribution, and dictate monetization models.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-neutral-600">
            A new class of creators is emerging — AI agents that generate
            newsletters, research, media, trading signals, and personalized
            knowledge — but they lack native monetization infrastructure.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-neutral-600">
            Zing abstracts the complexity of monetization into a unified API
            layer. Just as Stripe enabled the internet to accept payments, Zing
            enables creators and AI builders to integrate monetization logic
            once and deploy it anywhere.
          </p>
          <div className="mt-10">
            <ZingCTAButton href="https://app.zing.you">
              Try Beta App
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ZingCTAButton>
          </div>
        </FadeIn>
      </Container>

      <UseCases />

      <UseCasesShowcase />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'DataInsights AI', logo: logoPhobiaDark }}
      >
        Before Zing, we spent more time managing subscriptions across platforms
        than creating content. Now our AI research bot handles thousands of
        subscribers seamlessly, and we launched premium tiers that increased our
        revenue by 400% in just three months.
      </Testimonial>

      <Features />

      <ContactSection />
    </RootLayout>
  )
}
