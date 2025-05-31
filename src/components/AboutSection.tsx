
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology solutions."
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Delivering high-quality services that exceed client expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve remarkable results for our clients."
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Graduated", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: TrendingUp },
    { number: "98%", label: "Job Placement Rate", icon: Target },
    { number: "4.9/5", label: "Student Rating", icon: Heart }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ZenSol</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals through comprehensive training and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To bridge the gap between academic learning and industry requirements by providing 
                  practical, hands-on training that prepares students for successful careers in technology.
                </p>
                <div className="flex items-center">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To become the leading technology training institute, recognized for producing 
                  skilled professionals who drive innovation and excellence in the digital world.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded with a passion for technology education, ZenSol Software Solutions 
                  emerged from the vision of creating a bridge between theoretical knowledge 
                  and practical industry skills.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under the leadership of our Founder & CEO Karthik P, we have grown from 
                  a small training center to a comprehensive technology solutions provider, 
                  serving both individual learners and enterprise clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence and student success has made us a trusted 
                  name in technology education and software development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
