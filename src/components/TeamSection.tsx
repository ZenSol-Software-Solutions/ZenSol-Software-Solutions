
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TeamSection = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Karthik P",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Visionary leader with 10+ years in software development and education.",
      skills: ["Leadership", "Strategy", "Full Stack Development"],
      social: {
        linkedin: "www.linkedin.com/in/karthik2329",
        email: "karthik@zensol.in"
      }
    },
    {
      name: "Arunachalam S",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002",
      bio: "Expert educator with passion for technology training and student success.",
      skills: ["Education", "Curriculum Design", "Marketing"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@zensol.in"
      }
    },
    {
      name: "Harshini A",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions.",
      skills: ["Java", "Database", "Python"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    },
    {
      name: "Anu S",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions.",
      skills: ["React", "Node.js", "Cloud Architecture"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      }
    }
  ];

  const handleViewGraphicsModels = () => {
    navigate('/graphics-models');
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet the passionate professionals who drive innovation and excellence at ZenSol.
          </p>
          
          <Button 
            onClick={handleViewGraphicsModels}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          >
            View Graphics Models <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
