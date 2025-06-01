
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TeamMember3D } from "@/components/graphics-models/TeamMember3D";

const TeamMemberPage = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const team = [
    {
      id: "karthik",
      name: "Karthik P",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Visionary leader with 10+ years in software development and education. Passionate about creating innovative learning experiences and building technology solutions that make a real impact.",
      skills: ["Leadership", "Strategy", "Full Stack Development", "Product Management", "Team Building"],
      social: {
        linkedin: "www.linkedin.com/in/karthik2329",
        email: "karthik@zensol.in"
      },
      achievements: [
        "Founded multiple successful tech startups",
        "Mentored 500+ developers",
        "Built scalable platforms serving 100K+ users"
      ],
      experience: "10+ years in software development and education",
      education: "Master's in Computer Science"
    },
    {
      id: "arunachalam",
      name: "Arunachalam S", 
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002",
      bio: "Expert educator with passion for technology training and student success. Dedicated to creating comprehensive curricula that bridge the gap between academic learning and industry requirements.",
      skills: ["Education", "Curriculum Design", "Marketing", "Student Mentoring", "Training Programs"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@zensol.in"
      },
      achievements: [
        "Designed curriculum for 50+ courses",
        "Trained 1000+ students successfully",
        "Achieved 95% student placement rate"
      ],
      experience: "8+ years in education and training",
      education: "Master's in Education Technology"
    },
    {
      id: "harshini",
      name: "Harshini A",
      role: "Chief Executive Officer", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions. Expert in Java ecosystem with extensive experience in database design and Python development.",
      skills: ["Java", "Database", "Python", "Cloud Architecture", "System Design"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      },
      achievements: [
        "Led development of 20+ enterprise applications",
        "Optimized database performance by 300%",
        "Implemented CI/CD for 15+ projects"
      ],
      experience: "7+ years in software development",
      education: "Bachelor's in Computer Science"
    },
    {
      id: "anu",
      name: "Anu S",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80", 
      bio: "Full-stack developer specializing in modern web technologies and cloud solutions. React expert with deep knowledge of Node.js and cloud architecture patterns.",
      skills: ["React", "Node.js", "Cloud Architecture", "DevOps", "Microservices"],
      social: {
        github: "#",
        linkedin: "#", 
        email: "rajesh@zensol.in"
      },
      achievements: [
        "Built 30+ React applications",
        "Architected scalable cloud solutions",
        "Reduced deployment time by 80%"
      ],
      experience: "6+ years in full-stack development",
      education: "Bachelor's in Software Engineering"
    },
    {
      id: "kavibarathi",
      name: "Kavibarathi S",
      role: "Developer & Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Full-stack developer and passionate instructor specializing in modern web technologies and database systems. Combines practical development experience with teaching excellence.",
      skills: ["React", "Database", "Python", "Teaching", "API Development"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      },
      achievements: [
        "Developed 25+ web applications",
        "Taught 200+ students programming",
        "Created 15+ technical tutorials"
      ],
      experience: "5+ years in development and education",
      education: "Bachelor's in Information Technology"
    },
    {
      id: "pranesh", 
      name: "Pranesh",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Full-stack developer specializing in modern web technologies and cybersecurity. Expert in React Native development with strong focus on security best practices.",
      skills: ["React Native", "Database", "Python", "Cyber Security", "Mobile Development"],
      social: {
        github: "#",
        linkedin: "#",
        email: "rajesh@zensol.in"
      },
      achievements: [
        "Built 20+ mobile applications",
        "Implemented security protocols for 10+ projects",
        "Certified in ethical hacking"
      ],
      experience: "4+ years in mobile and security development",
      education: "Bachelor's in Cyber Security"
    },
    {
      id: "adithyaa",
      name: "Adithyaa G",
      role: "Graphics Designer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Creative designer focused on user experience and innovative design solutions. Specializes in UI/UX design and 3D modeling with expertise in modern design tools.",
      skills: ["UI/UX Design", "3D Modeling", "Figma", "Design Systems", "Prototyping"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "anita@zensol.in"
      },
      achievements: [
        "Designed UI for 40+ applications",
        "Created 100+ 3D models",
        "Won 3 design competitions"
      ],
      experience: "5+ years in graphic design",
      education: "Bachelor's in Graphic Design"
    }
  ];

  const member = team.find(m => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Member not found</h1>
          <Button onClick={() => navigate('/graphics-models')}>
            Go back to Graphics Models
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              onClick={() => navigate('/graphics-models')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Graphics Models
            </Button>
          </motion.div>

          {/* 3D Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              3D Profile: <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{member.name}</span>
            </h1>
            <TeamMember3D memberName={member.name} role={member.role} />
          </motion.div>

          {/* Detailed Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h2>
                      <p className="text-xl text-blue-600 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center md:justify-start space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        <a href={`mailto:${member.social.email}`} className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-200 transition-colors">
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Side Info Cards */}
            <div className="space-y-6">
              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Experience</h3>
                    <p className="text-gray-600">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
                    <p className="text-gray-600">{member.education}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {member.achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                      <p className="text-gray-700 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
