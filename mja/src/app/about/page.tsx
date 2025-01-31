"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-2xl shadow-lg text-center">
        {/* Header Section */}
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/Profile.png" alt="Michael Anderson" className="object-cove" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-blue-600 mt-3">Michael Anderson</h1>
          <p className="text-gray-600">Web Developer | IT & HR Management</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* About Section */}
          <div className="text-gray-700 text-center">
            <p>
            👋 About Me
            I hold a Bachelor of Business Administration (BBA) in IT Management and Human Resource Management from the University of Wisconsin-Milwaukee. With a strong foundation in IT strategy, systems analysis, and business technology, I’ve gained hands-on experience in web development, software solutions, and IT operations.
            My focus is on leveraging technology to drive business efficiency, whether through full-stack development, cloud computing, or process automation. I have experience with Next.js, React, Tailwind CSS, and Framer Motion, building dynamic and responsive web applications.
            I’m always looking for opportunities to apply my skills to innovative IT solutions and collaborate on tech-driven projects. Let’s connect! 🚀
            </p>
          </div>

          <Separator />

          {/* Skills Section */}
          <div className="text-center">
            <CardTitle className="text-lg text-blue-600 mb-2">Skills</CardTitle>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Framer Motion</Badge>
              <Badge variant="outline">UI/UX</Badge>
            </div>
          </div>

          <Separator />

          {/* CTA Section */}
          <div className="flex justify-center">
            <Button asChild>
              <a href="/contact">Let's Connect</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
