import { Link, useRouterState } from '@tanstack/react-router'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Navigation() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
  ]

  return (
    <header role="banner" className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="h-10 w-10 rounded-full border-2 border-primary ring-2 ring-primary/20 transition-all group-hover:ring-4 group-hover:ring-primary/30"
            />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-background" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
              {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[2]}
            </span>
            <p className="text-xs text-muted-foreground">{personalInfo.title}</p>
          </div>
        </Link>

        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                currentPath === item.path
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t">
        <nav role="navigation" aria-label="Mobile navigation" className="container mx-auto flex items-center gap-1 py-2 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-all',
                currentPath === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
