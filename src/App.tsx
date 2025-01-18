import React from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, User, Quote, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Evan Williams
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer and Marine Corps. Veteran
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/EvanInTech" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/evanwilliams75/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/EvanInTech" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:evan.b.williams95@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="text-blue-400" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a software engineer based in San Antonio, Texas, driven by a desire to serve—from my family to the broader community and planet. After starting my career in the military, I transitioned to tech through a full-stack development bootcamp and have been building on that foundation ever since.

Currently, I focus on backend development with C# in .NET, code reviews, and Jenkins pipeline management. I also handle web development tasks, whether creating custom solutions or leveraging open-source tools. My strengths in communication and adaptability help me collaborate effectively within SCRUM processes and varied project environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Moving forward, I'm committed to continuous growth and meaningful impact, whether through innovative software or larger initiatives like sustainable energy systems. I aim to expand my leadership responsibilities and make a tangible difference. I'm always open to connecting—feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Code className="text-blue-400" />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Programming Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['C#', 'JavaScript', 'Python', 'Java', 'SQL'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700 p-3 rounded text-center hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Technologies */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Frameworks & Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['.NET Framework', 'React', 'Web Services API'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700 p-3 rounded text-center hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Areas */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Development Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Front-End', 'Back-End', 'Databases', 'Object-Oriented Programming (OOP)'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700 p-3 rounded text-center hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Software */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools & Software</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Microsoft Office', 'AWS', 'LLMs'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700 p-3 rounded text-center hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="text-blue-400" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid gap-8">
              {/* Project 1 */}
              <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Topteer Capstone</h3>
                <p className="text-gray-300 mb-4">
                  A full stack Java application using Springboot framework. Topteer is an application designed to connect volunteers with opportunities near them. Nonprofits can create organizations and post opportunities for local volunteers to browse and sign up for.
                </p>
                <a 
                  href="https://github.com/topteer/topteer-capstone" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-2" size={20} />
                  View Repository
                </a>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Pokedex</h3>
                <p className="text-gray-300 mb-4">
                  A small React application that uses a Pokemon API to display Pokemon cards with a small description of powers and details
                </p>
                <a 
                  href="https://github.com/EvanInTech/pokedex" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-2" size={20} />
                  View Repository
                </a>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Movie Database</h3>
                <p className="text-gray-300 mb-4">
                  A Netflix style JQuery application to display Movie cards and their details. 
                </p>
                <a 
                  href="https://github.com/williams-williams/movie-database" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  <Github className="mr-2" size={20} />
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Quote className="text-blue-400" />
              <h2 className="text-3xl font-bold">Recommendations</h2>
            </div>
            <div className="grid gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="flex flex-col">
                  <blockquote className="text-gray-300 italic mb-6">
                    I have had the pleasure of working with Evan over the past year, and I can confidently say that he is a highly motivated, solution-oriented professional who consistently brings value to his team and organization. Evan has a remarkable ability to tackle complex, longstanding challenges with determination and skill.

Evan excels not only as a problem-solver but also as a team player and communicator. He fosters a collaborative, inclusive environment, always ensuring that teammates feel supported and encouraged. His proactive nature, coupled with his positive energy, inspires confidence in those around him, volunteering for tasks, or stepping in to areas outside of his direct responsibility when needed.

What truly sets Evan apart is his hunger for growth. He is deeply committed to honing his technical expertise, as evidenced by his ongoing efforts to pursue AWS certifications and expand his understanding of both technical problem-solving and leadership. Beyond technical skills, Evan is eager to contribute strategically, demonstrating a broader perspective on how engineers can impact the success of the organization as a whole.

If you're looking for a dedicated, adaptable professional with a "go-forward" mentality, Evan would be a fantastic addition to any team. His combination of technical abilities, leadership potential, and collaborative spirit make him an invaluable asset to any company seeking to build a strong, forward-thinking team.
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold text-blue-400">Cesar Baena</p>
                    <p className="text-gray-400">Software Engineering Manager, Bonterra Tech</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <div className="flex flex-col">
                  <blockquote className="text-gray-300 italic mb-6">
                    I was one of the senior engineers on the team with Evan at Bonterra. Evan is a highly driven and adaptable software engineer who is always eager to learn something new, no matter if that something is technical, procedural, or business-focused. He was always the first to volunteer for shared team duties, and actively sought out opportunities to fill in for more senior engineers. He has a very strong personal growth mindset that made him a joy to work with and a pleasure to mentor. Any team would benefit greatly from having Evan on board.
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold text-blue-400">Joshua Thome</p>
                    <p className="text-gray-400">Senior Software Engineer, Bonterra Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Evan Williams. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;