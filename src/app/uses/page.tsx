import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech Stack',
  description: 'Frontend technologies, development tools, and software I use to build exceptional web applications.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Professional Tech Stack and Development Tools"
      intro="As a Frontend Lead Developer, I rely on a carefully selected set of technologies and tools to build scalable, high-performance web applications. Here's an overview of what I use daily in my development workflow."
    >
      <div className="space-y-20">
        <ToolsSection title="Frontend Technologies">
          <Tool title="React & React Ecosystem">
            My go-to library for building user interfaces. I leverage React&apos;s ecosystem including 
            React Router, React Query, and various hooks libraries to build robust applications.
          </Tool>
          <Tool title="Next.js">
            I use Next.js for nearly all my projects due to its powerful features like 
            server-side rendering, static site generation, API routes, and excellent developer experience.
          </Tool>
          <Tool title="TypeScript">
            TypeScript is essential in my workflow for type safety, better IDE support, and 
            catching errors before they reach production. It drastically improves code quality and maintainability.
          </Tool>
          <Tool title="TailwindCSS">
            My preferred styling solution for its utility-first approach, exceptional customization capabilities,
            and ability to create responsive designs efficiently.
          </Tool>
          <Tool title="Redux & Zustand">
            For state management, I use Redux for larger applications and Zustand for simpler state needs.
            Both provide predictable state containers with excellent developer tools.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="Lenovo ThinkPad (Ryzen 7, 32GB RAM) – Debian GNU/Linux">
            Daily driver running Debian with zsh. Rock-solid stability for long coding sessions and Docker workloads.
          </Tool>
          <Tool title="27” 1440p IPS Monitor">
            Plenty of screen real estate for side-by-side coding, browser, and docs. Calibrated for comfortable reading.
          </Tool>
          <Tool title="Keychron K2 (Gateron Brown)">
            Compact mechanical keyboard with tactile switches — quiet enough for calls, satisfying for long typing.
          </Tool>
          <Tool title="Logitech MX Master 3S">
            Ergonomic mouse with smooth scrolling and app-specific shortcuts — great for navigating large codebases.
          </Tool>
          <Tool title="Ergonomic chair & desk setup">
            Height-adjustable desk and supportive chair to keep posture in check during extended development sprints.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="VS Code">
            My primary code editor with extensions for ESLint, Prettier, GitLens, and various language support.
            Custom keybindings and settings help maximize my productivity.
          </Tool>
          <Tool title="Git & GitHub">
            Version control with Git and GitHub for collaboration, code reviews via PRs, and CI/CD integration.
            I&apos;m a strong advocate for Git Flow and meaningful commit messages.
          </Tool>
          <Tool title="Terminal (Warp with Oh My Zsh)">
            Custom terminal setup with productivity aliases, Git integration, and a theme that makes working 
            in the command line both efficient and visually pleasing.
          </Tool>
          <Tool title="Docker">
            For containerization and ensuring consistent development environments across the team.
            Makes local development match production as closely as possible.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design & Collaboration">
          <Tool title="Figma">
            Essential for UI/UX design collaboration, prototyping, and maintaining design systems.
            I work closely with designers using Figma to ensure pixel-perfect implementation.
          </Tool>
          <Tool title="Miro">
            For brainstorming sessions, architectural planning, and team collaboration.
            Great for creating user journey maps and technical diagrams.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Testing & Quality Assurance">
          <Tool title="Jest & React Testing Library">
            My testing stack for writing unit and integration tests. Focus on testing user behavior 
            rather than implementation details for more reliable tests.
          </Tool>
          <Tool title="Cypress">
            For end-to-end testing to ensure the complete user workflow works as expected.
            Invaluable for catching integration issues before deployment.
          </Tool>
          <Tool title="ESLint & Prettier">
            Code quality and formatting tools that maintain consistency across the team.
            Custom configurations that enforce our coding standards and best practices.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity & Team Management">
          <Tool title="Linear">
            Issue tracking and project management that integrates beautifully with GitHub.
            Perfect for sprint planning and tracking development progress.
          </Tool>
          <Tool title="Notion">
            Team documentation, meeting notes, and knowledge base. Used for technical specifications,
            team guidelines, and maintaining our development processes.
          </Tool>
          <Tool title="Slack">
            Primary communication tool for team collaboration, with integrations for GitHub notifications,
            deployment updates, and code review notifications.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
