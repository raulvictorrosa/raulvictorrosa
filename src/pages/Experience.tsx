import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/portfolio'

export default function Experience() {
  return (
    <div className="container max-w-4xl mx-auto py-12 md:py-20">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Professional Journey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full">
          {experiences.map((job) => (
            <div key={job.company.name} className="flex gap-x-5">
              {/* Icon column with connecting line */}
              <div className="relative last:after:hidden after:content-[''] after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:w-px after:bg-[hsl(var(--color-border))]">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-primary ring-4 ring-primary/20" />
                </div>
              </div>

              {/* Content */}
              <div className="grow pb-8 group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground shrink-0">
                    <Badge variant="outline" className="font-normal">
                      {job.contract}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <a
                    href={job.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    {job.company.name}
                  </a>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {job.startDate} - {job.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-muted-foreground mb-4">
                  {job.description.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="text-primary mt-1 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
