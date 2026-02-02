import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t bg-muted/30 backdrop-blur-sm">
          <div className="container py-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Raul Victor Rosa. Built with React, TanStack Router, and
              Shadcn UI.
            </p>
          </div>
        </footer>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
})
