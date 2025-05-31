
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002",
      content: "ZenSol's React course completely transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job.",
      rating: 5,
      course: "Frontend Development"
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer at StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "The MERN stack course was incredibly comprehensive. The instructors were knowledgeable and always available to help. Highly recommended!",
      rating: 5,
      course: "MERN Stack"
    },
    {
      name: "Priya Patel",
      role: "UI/UX Designer at Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "The UI/UX course at ZenSol opened up a whole new world for me. The practical exercises and portfolio guidance were invaluable.",
      rating: 5,
      course: "UI/UX Design"
    },
    {
      name: "David Kumar",
      role: "Data Analyst at Analytics Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "The Python and Power BI courses were exactly what I needed to advance my career in data analytics. Great content and excellent support.",
      rating: 5,
      course: "Python & Power BI"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Student <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers with ZenSol training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-green-200">
                  <Quote className="w-12 h-12" />
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm rounded-full">
                    {testimonial.course}
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
