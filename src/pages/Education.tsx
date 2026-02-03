import { BookOpen, Calendar, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <div className="container max-w-4xl mx-auto py-12 md:py-20">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Academic Background
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Education & <span className="text-primary">Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic achievements and professional certifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/10 to-purple-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-base">
                      <a
                        href={edu.school.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors font-semibold inline-flex items-center gap-1"
                      >
                        <BookOpen className="w-4 h-4" />
                        {edu.school.name}
                      </a>
                    </CardDescription>
                    {edu.fieldOfStudy && (
                      <p className="text-sm text-muted-foreground mt-1">{edu.fieldOfStudy}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </CardHeader>

              {edu.description && (
                <CardContent>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="border-2 bg-linear-to-br from-primary/5 to-purple-500/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="h-1 w-12 bg-linear-to-r from-primary to-purple-600 rounded-full" />
              Continuous Learning
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  Online Courses & Certifications
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Advanced React Patterns & Best Practices</li>
                  <li>• TypeScript: The Complete Developer's Guide</li>
                  <li>• Modern Web Development with Next.js</li>
                  <li>• Testing React Applications</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  Professional Development
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Conference Speaker & Attendee</li>
                  <li>• Open Source Contributor</li>
                  <li>• Tech Blog Writer</li>
                  <li>• Community Mentor</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
