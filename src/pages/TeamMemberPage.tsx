
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TeamMember3D } from '@/components/graphics-models/TeamMember3D';

const TeamMemberPage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const teamMembers = {
    karthik: {
      name: "Karthik P",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Visionary leader with 10+ years in software development and education. Passionate about creating innovative solutions and fostering a culture of continuous learning.",
      skills: ["Leadership", "Strategy", "Full Stack Development", "Team Management", "Product Vision"],
      experience: "10+ years",
      projects: ["ZenSol Platform", "Educational Framework", "Team Development"],
      social: {
        linkedin: "www.linkedin.com/in/karthik2329",
        email: "karthik@zensol.in"
      }
    },
    arunachalam: {
      name: "Arunachalam S",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002",
      bio: "Expert educator with passion for technology training and student success. Dedicated to creating comprehensive learning experiences.",
      skills: ["Education", "Curriculum Design", "Marketing", "Content Strategy"],
      experience: "8+ years",
      projects: ["Course Development", "Marketing Strategy", "Student Success Programs"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@zensol.in"
      }
    },
    harshini: {
      name: "Harshini A",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions. Leading operational excellence.",
      skills: ["Java", "Database", "Python", "Cloud Architecture", "System Design"],
      experience: "6+ years",
      projects: ["Cloud Migration", "Database Optimization", "API Development"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    },
    anu: {
      name: "Anu S",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions. Expert in React ecosystem.",
      skills: ["React", "Node.js", "Cloud Architecture", "DevOps", "TypeScript"],
      experience: "5+ years",
      projects: ["Web Applications", "Cloud Infrastructure", "Development Tools"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    },
    kavibarathi: {
      name: "Kavibarathi S",
      role: "Developer & Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and passionate about teaching and mentoring.",
      skills: ["React", "Database", "Python", "Teaching", "Mentoring"],
      experience: "4+ years",
      projects: ["Educational Platforms", "Student Projects", "Database Systems"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    },
    pranesh: {
      name: "Pranesh",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Full-stack developer specializing in modern web technologies & Cyber Security. Expert in mobile development.",
      skills: ["React Native", "Database", "Python", "Cyber Security", "Mobile Development"],
      experience: "4+ years",
      projects: ["Mobile Applications", "Security Systems", "Cross-platform Development"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    },
    adithyaa: {
      name: "Adithyaa G",
      role: "Graphics Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Creative designer focused on user experience and innovative design solutions. Specialist in 3D modeling and visual design.",
      skills: ["UI/UX Design", "3D Modeling", "Figma", "Design Systems", "Adobe Creative Suite"],
      experience: "3+ years",
      projects: ["Brand Identity", "3D Visualizations", "User Interface Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "anita@zensol.in"
      }
    }
  };

  const member = teamMembers[memberId as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Team Member Not Found</h1>
          <Button onClick={() => navigate('/graphics-models')}>
            Back to Team
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={() => navigate('/graphics-models')}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Profile Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-2xl">{member.name}</CardTitle>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <p className="text-gray-500">Experience: {member.experience}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Key Projects</h3>
                    <ul className="space-y-2">
                      {member.projects.map((project, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Connect</h3>
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 3D Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Interactive 3D Profile</CardTitle>
                  <p className="text-gray-600">Drag to rotate • Scroll to zoom</p>
                </CardHeader>
                <CardContent>
                  <TeamMember3D memberName={member.name} role={member.role} />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
