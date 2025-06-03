
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const CoursesSection = () => {
  const { toast } = useToast();

  const courses = [
    {
      title: "Front-end Development",
      description: "Master React, JavaScript, HTML, CSS, and modern frontend frameworks.",
      duration: "12 weeks",
      students: "150+",
      rating: 4.9,
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      title: "Back-end Development",
      description: "Learn Node.js, Express, APIs, and server-side programming.",
      duration: "10 weeks",
      students: "120+",
      rating: 4.8,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Node.js", "Express", "APIs", "MongoDB"]
    },
    {
      title: "React JS",
      description: "Comprehensive React development from basics to advanced concepts including hooks, context, and state management.",
      duration: "8 weeks",
      students: "220+",
      rating: 4.9,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      tags: ["React", "JSX", "Hooks", "Redux"]
    },
    {
      title: "MERN Stack",
      description: "Complete full-stack development with MongoDB, Express, React, and Node.js.",
      duration: "16 weeks",
      students: "200+",
      rating: 4.9,
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      title: "3D Modeling",
      description: "Learn 3D modeling, animation, and rendering using industry-standard tools like Blender and Maya.",
      duration: "14 weeks",
      students: "85+",
      rating: 4.7,
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
      tags: ["Blender", "Maya", "3D Animation", "Rendering"]
    },
    {
      title: "UI/UX Design",
      description: "Design thinking, user research, prototyping, and modern design tools.",
      duration: "8 weeks",
      students: "80+",
      rating: 4.7,
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      tags: ["Figma", "Adobe XD", "Design Thinking", "Prototyping"]
    },
    {
      title: "Python Programming",
      description: "From basics to advanced Python programming and data analysis.",
      duration: "10 weeks",
      students: "180+",
      rating: 4.8,
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["Python", "Data Analysis", "Django", "Flask"]
    },
    {
      title: "Microsoft Power BI",
      description: "Business intelligence, data visualization, and analytics.",
      duration: "6 weeks",
      students: "90+",
      rating: 4.6,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Power BI", "Data Visualization", "Analytics", "DAX"]
    },
    {
      title: "Adobe Photoshop",
      description: "Professional photo editing, digital art creation, and graphic design fundamentals.",
      duration: "6 weeks",
      students: "110+",
      rating: 4.5,
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
      tags: ["Photoshop", "Photo Editing", "Digital Art", "Graphics"]
    }
  ];

  const handleEnrollment = async (courseName: string) => {
    try {
      // First, try the Google Form approach
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScKVokkdRX_URPcN5nZogKlFFApbGJ2xOwhDlQtDDxJ9cantA/viewform?usp=header", "_blank");
      
      // Also store the enrollment intent in our database for tracking
      const { error } = await supabase
        .from('course_enrollments')
        .insert({
          course_name: courseName,
          student_name: 'Form Submission',
          student_email: 'via_google_form@temp.com', // Temporary placeholder
          status: 'form_redirected'
        });

      if (error) {
        console.error('Error logging enrollment intent:', error);
      }

      toast({
        title: "Redirected to Enrollment Form",
        description: `You're being redirected to enroll in ${courseName}. Please fill out the form to complete your enrollment.`,
      });
    } catch (error) {
      console.error('Error handling enrollment:', error);
      toast({
        title: "Enrollment Error",
        description: "There was an issue processing your enrollment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-relevant training programs designed to advance your career in technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
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
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm ml-1 text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    onClick={() => handleEnrollment(course.title)}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
