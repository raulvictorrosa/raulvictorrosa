import { Brain, Code2, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data/portfolio'

export default function Skills() {
  const icons = [Code2, Zap, Brain]

  return (
    <div className="container max-w-6xl mx-auto py-12 md:py-20">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Technical Expertise
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Skills & <span className="text-primary">Technologies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = icons[idx]
            return (
              <Card
                key={idx}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all group-hover:scale-150" />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Skills Section */}
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-purple-500/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Additional Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  Development Practices
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Agile/Scrum Methodologies</li>
                  <li>• Test-Driven Development (TDD)</li>
                  <li>• CI/CD Pipeline Implementation</li>
                  <li>• Code Review & Pair Programming</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  Soft Skills
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Team Collaboration & Leadership</li>
                  <li>• Problem Solving & Critical Thinking</li>
                  <li>• Technical Documentation</li>
                  <li>• Mentoring Junior Developers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
