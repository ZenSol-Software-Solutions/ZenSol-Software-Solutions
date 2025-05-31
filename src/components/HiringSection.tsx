
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, ArrowRight } from "lucide-react";

export const HiringSection = () => {
  const jobOpenings = [
    {
      title: "React Developer",
      department: "Development",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      skills: ["React", "JavaScript", "TypeScript", "Node.js"],
      description: "Join our team to build cutting-edge web applications using modern React technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4-8 LPA",
      skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
      description: "Create beautiful and intuitive user experiences for our training platform and client projects."
    },
    {
      title: "Training Coordinator",
      department: "Education",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹3-6 LPA",
      skills: ["Communication", "Training", "Project Management", "Tech Knowledge"],
      description: "Help coordinate our training programs and support student success throughout their journey."
    },
    {
      title: "Full Stack Developer",
      department: "Development",
      location: "Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      skills: ["MERN Stack", "Python", "AWS", "DevOps"],
      description: "Work on diverse projects ranging from educational platforms to enterprise solutions."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology education and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {job.title}
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      {job.department}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-sm">{job.location}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1 text-blue-600" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="text-sm">{job.experience} experience</span>
                      <span className="mx-2">•</span>
                      <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    onClick={() => console.log(`Applying for ${job.title}`)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="inline-block border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Don't see the right position?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                onClick={() => console.log('Opening general application form')}
              >
                Send Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
