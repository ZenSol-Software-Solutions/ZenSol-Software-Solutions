
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Upload, Send, User, Mail, Phone, FileText } from "lucide-react";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume: FileList;
};

export const ContactForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Application submitted successfully! We'll get back to you soon.");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please select a valid PDF file.");
      event.target.value = "";
    }
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Ready to start your career with us? Fill out the form below and upload your resume to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Career Application Form
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      rules={{ required: "Full name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-green-600" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-blue-600" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-purple-600" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="position"
                      rules={{ required: "Position is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Applying For</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., React Developer, UI/UX Designer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="experience"
                    rules={{ required: "Experience is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2-3 years, Fresher" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter / Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about yourself and why you want to join our team..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <Label className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-green-600" />
                      Upload Resume (PDF only)
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                        {selectedFile ? (
                          <div>
                            <p className="text-green-600 font-medium">{selectedFile.name}</p>
                            <p className="text-sm text-gray-500">Click to change file</p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-gray-600 font-medium">Click to upload your resume</p>
                            <p className="text-sm text-gray-500">PDF files only, max 5MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
