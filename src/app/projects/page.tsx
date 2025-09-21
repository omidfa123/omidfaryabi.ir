import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoNilva from '@/images/logos/nilva.png'
import logoRixo from '@/images/logos/rixo-shop.svg'

const projects = [
  {
    name: 'Ba-Energy.ir',
    description:
      'Large-scale Next.js application serving 5 million users, promoting energy conservation. Implemented Next.js App Router and server components for enhanced performance.',
    link: { href: 'https://ba-energy.ir', label: 'ba-energy.ir' },
    logo: logoNilva,
  },
  {
    name: 'Farm.maj.ir',
    description:
      'Agricultural contract management system with admin dashboard for government-farmer interactions. Built with Next.js and modern state management.',
    link: { href: 'https://farm.maj.ir', label: 'farm.maj.ir' },
    logo: logoNilva,
  },
  {
    name: 'ArtaMart E-commerce',
    description:
      'Modern e-commerce platform built with Next.js and React. Features product catalog, shopping cart, user authentication, and payment integration.',
    link: { href: 'https://artamart.vercel.app', label: 'artamart.vercel.app' },
    logo: logoRixo,
  },
  {
    name: 'OffLand Technology Store',
    description:
      'Tech e-commerce website specializing in electronics and gadgets. Built with Next.js featuring responsive design and modern UI components.',
    link: { href: 'https://off-land2.vercel.app', label: 'off-land2.vercel.app' },
    logo: logoRixo,
  },
  {
    name: 'RixoShop Platform',
    description:
      'Complete e-commerce solution with advanced features including inventory management, order tracking, and customer dashboard. Built with modern React patterns.',
    link: { href: 'https://rixoshop.vercel.app', label: 'rixoshop.vercel.app' },
    logo: logoRixo,
  },
  {
    name: 'Interactive Quiz Application',
    description:
      'Dynamic quiz platform with real-time scoring, multiple choice questions, and progress tracking. Features responsive design and smooth animations.',
    link: { href: 'https://quizapp-silk.vercel.app', label: 'quizapp-silk.vercel.app' },
    logo: logoNilva,
  },
  {
    name: 'Restaurant Management System',
    description:
      'Full-featured restaurant website with menu management, online ordering, and reservation system. Built with modern web technologies for optimal performance.',
    link: { href: 'https://restaurant-rho-eight.vercel.app/Index.html', label: 'restaurant-rho-eight.vercel.app' },
    logo: logoNilva,
  },
  {
    name: 'Progressive Web App',
    description:
      'Advanced PWA demonstrating offline functionality, push notifications, and app-like experience. Showcases modern web capabilities and service worker implementation.',
    link: { href: 'https://pwa-chi-vert.vercel.app', label: 'pwa-chi-vert.vercel.app' },
    logo: logoNilva,
  },
  {
    name: 'Task Management App',
    description:
      'Feature-rich todo application with drag-and-drop functionality, categories, due dates, and progress tracking. Built with React and modern state management.',
    link: { href: 'https://todo-rho-topaz.vercel.app', label: 'todo-rho-topaz.vercel.app' },
    logo: logoNilva,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Comprehensive portfolio of frontend projects including Ba-Energy.ir (5M users), e-commerce platforms, PWAs, and interactive web applications built with Next.js and React.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Frontend projects showcasing modern web development expertise."
      intro="A comprehensive collection of projects I've built using Next.js, React, and modern web technologies. From large-scale applications serving millions of users to innovative e-commerce solutions and interactive web apps, each project demonstrates different aspects of frontend development and user experience design."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className="h-full">
            <div className="flex flex-col h-full">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <div className="flex-1">
                <Card.Description>{project.description}</Card.Description>
              </div>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
