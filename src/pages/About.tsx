import { Calendar, Code2, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { personalInfo } from '@/data/portfolio'

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 md:py-20">
      <div className="space-y-12 animate-fade-in">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="relative w-48 h-48 rounded-full object-cover border-4 border-background"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">{personalInfo.title}</p>
          </div>

          <p className="text-lg leading-relaxed max-w-2xl">{personalInfo.bio}</p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {personalInfo.location}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              {personalInfo.title}
            </Badge>
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <Button variant="outline" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With over 8 years of experience in full-stack development and infrastructure automation,
            I specialize in building scalable, resilient cloud-native applications. My expertise
            spans across modern web technologies, cloud platforms (AWS, Azure, GCP), and DevOps
            practices. I'm passionate about creating efficient, maintainable solutions that drive
            business value while mentoring teams in best practices and emerging technologies.
          </p>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
