"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [activeSection, setActiveSection] = useState("problem")

  useEffect(() => {
    const handleScroll = () => {
      const problemSection = document.getElementById("problem")
      const hypothesisSection = document.getElementById("hypothesis")
      const usersSection = document.getElementById("users")
      const tacklingSection = document.getElementById("tackling")
      const writingSection = document.getElementById("writing")

      if (!problemSection || !hypothesisSection || !usersSection || !tacklingSection || !writingSection) return

      const scrollPosition = window.scrollY + 200 // Offset for better detection
      const problemTop = problemSection.offsetTop
      const hypothesisTop = hypothesisSection.offsetTop
      const usersTop = usersSection.offsetTop
      const tacklingTop = tacklingSection.offsetTop
      const writingTop = writingSection.offsetTop

      if (scrollPosition >= writingTop) {
        setActiveSection("writing")
      } else if (scrollPosition >= tacklingTop) {
        setActiveSection("tackling")
      } else if (scrollPosition >= usersTop) {
        setActiveSection("users")
      } else if (scrollPosition >= hypothesisTop) {
        setActiveSection("hypothesis")
      } else if (scrollPosition >= problemTop) {
        setActiveSection("problem")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Slideshow data
  const slideshowImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "Capstone Kickoff w/ ARM",
      date: "Feb 3, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "Sandbox VR",
      date: "April 6, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "Spring Presentation Skit",
      date: "April 19, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "Spring Presentation Event",
      date: "April 21, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "VR Development Session",
      date: "March 15, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "User Testing Session",
      date: "March 28, 2025",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      title: "Final Project Demo",
      date: "May 1, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-600 to-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Manufacturing facility"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-end items-start h-full max-w-7xl mx-auto px-8 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-[#ffffff] mb-16 max-w-4xl leading-tight">
            The Future Of Manufacturing Starts Here
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
            {/* Client */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Client</h3>
              <p className="text-[#ffffff] text-xl leading-relaxed">Advanced Robotics Manufacturing Institute (ARM)</p>
            </div>

            {/* Creative Technologists */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Creative Technologists</h3>
              <div className="space-y-2">
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Tassy Chen</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Aarnav Sangekar</p>
              </div>
            </div>

            {/* Creative Designers */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Creative Designers</h3>
              <div className="space-y-2">
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Esha Garg</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Jackie Strawbridge</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Victor Wang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#000000] mb-16">
            Three Parts Of A Journey To The Future Of Manufacturing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Manufacturing equipment"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Robotic manufacturing"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Worker with technology"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Container for Problem and Hypothesis sections with shared sticky nav */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex gap-8">
          {/* Sticky Navigation - will follow scroll until end of writing section */}
          <div className="w-48 flex-shrink-0">
            <div className="sticky top-8 z-10">
              <div className="bg-[#1e1e1e] rounded-lg p-4">
                <nav className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">01</div>
                    <div
                      className={`font-medium text-xs underline cursor-pointer hover:text-gray-200 ${
                        activeSection === "problem" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      The Problem
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">02</div>
                    <div
                      className={`font-medium text-xs underline cursor-pointer hover:text-white ${
                        activeSection === "hypothesis" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Our Hypothesis
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">03</div>
                    <div
                      className={`font-medium text-xs underline cursor-pointer hover:text-white ${
                        activeSection === "users" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Understanding Our Users
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">04</div>
                    <div
                      className={`font-medium text-xs underline cursor-pointer hover:text-white ${
                        activeSection === "tackling" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Tackling an Ambiguous Problem
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">05</div>
                    <div
                      className={`font-medium text-xs underline cursor-pointer hover:text-white ${
                        activeSection === "writing" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Writing an Impactful Story
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">06</div>
                    <div className="text-gray-400 font-medium text-xs underline cursor-pointer hover:text-white">
                      The Solution
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-1">07</div>
                    <div className="text-gray-400 font-medium text-xs underline cursor-pointer hover:text-white">
                      The Impact
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            {/* Problem Section */}
            <section id="problem" className="py-20 bg-[#fafafa] -mx-8 px-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000000] mb-8">The Problem</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      Manufacturing plants in the U.S. don't have enough workers.
                    </h3>
                    <p className="text-gray-600 mb-4"></p>

                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      ARM helps strengthen U.S. manufacturing through robotics - with innovations.
                    </h3>
                  

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Pittsburgh’s Advanced Robotics Manufacturing Institute (ARM) helps manufacturers use robotics to overcome workforce gaps, and helps workers prepare for careers in manufacturing automation.
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      But constraints at their facility have prevented them from offering hands-on, immersive interactions with robots.
                    </p>
                  </div>

                  <div className="w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Manufacturing facility overview"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Extended Reality Section */}
            <section id="hypothesis" className="py-20 relative">
              {/* Full-width purple background */}
              <div className="absolute inset-0 bg-[#6e4aff] -left-[100vw] -right-[100vw]"></div>

              {/* Content with same positioning as before */}
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold text-[#ffffff] mb-4">
                  Our Hypothesis: Extended Reality Can Bridge The Gap
                </h2>

                <p className="text-[#ffffff] mb-16 text-lg">What Is Extended Reality?</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Virtual Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2">Virtual Reality</h3>
                      <p className="text-[#ffffff] text-sm">Immerse users in a digital environment</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Augmented Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2">Augmented Reality</h3>
                      <p className="text-[#ffffff] text-sm">Overlay digital visuals in physical space</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Mixed Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2">Mixed Reality</h3>
                      <p className="text-[#ffffff] text-sm">
                        Blend virtual elements to interact with real world elements
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-left">
                  <h3 className="text-[#ffffff] font-semibold mb-8 text-xl">Why Explore Extended Reality?</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-[#ffd700] rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-[#ffffff] font-semibold mb-2">Safety</h4>
                          <p className="text-[#ffffff] text-sm">
                            Eliminates the need to actually encounter potentially unsafe robots, machinery, or
                            environments.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-[#ffd700] rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-[#ffffff] font-semibold mb-2">Comfort</h4>
                          <p className="text-[#ffffff] text-sm">
                            Allows for experiential learning without noise and distractions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-[#ffd700] rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-[#ffffff] font-semibold mb-2">Portability</h4>
                          <p className="text-[#ffffff] text-sm">
                            Can be moved easily and cost-effectively to trade shows and other events outside of the MFG
                            facility.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-[#ffd700] rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <h4 className="text-[#ffffff] font-semibold mb-2">Flexibility</h4>
                          <p className="text-[#ffffff] text-sm">
                            Can be used to simulate the experience with each individual robot.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Understanding Our Users Section */}
            <section id="users" className="py-20 bg-[#ffffff] -mx-8 px-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000000] mb-8">Understanding Our Users</h2>

                <div className="space-y-12">
                  {/* Who Is This Experience For */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">Who Is This Experience For?</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      In collaboration with ARM, we identified key groups that represent different stages of the
                      manufacturing workforce – some are shaping the industry today, and others are beginning to explore
                      their career paths.
                    </p>

                    {/* User Type Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      <Card className="border-2 border-gray-300">
                        <CardContent className="p-6 text-center">
                          <div className="mb-4">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Small Plant Owner"
                              width={200}
                              height={200}
                              className="w-full h-48 object-contain"
                            />
                          </div>
                          <h4 className="font-semibold text-[#000000]">Small Plant Owners</h4>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-gray-300">
                        <CardContent className="p-6 text-center">
                          <div className="mb-4">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Factory Operator"
                              width={200}
                              height={200}
                              className="w-full h-48 object-contain"
                            />
                          </div>
                          <h4 className="font-semibold text-[#000000]">Factory Operators</h4>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-gray-300">
                        <CardContent className="p-6 text-center">
                          <div className="mb-4">
                            <Image
                              src="/placeholder.svg?height=200&width=200"
                              alt="Students"
                              width={200}
                              height={200}
                              className="w-full h-48 object-contain"
                            />
                          </div>
                          <h4 className="font-semibold text-[#000000]">Students</h4>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* How Do Our Users Feel About XR */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">How Do Our Users Feel About XR?</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We spoke with factory owners, managers, and workers at Automate, the largest automation trade show
                      in the U.S.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      We asked for feedback on early sketches of potential XR solutions. Some were excited, while
                      others, particularly older operators, were hesitant and said they wouldn't want to wear an XR
                      headset.
                    </p>

                    {/* Trade Show Image */}
                    <div className="mb-8">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Getting feedback from Automate attendees"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">Getting feedback from Automate attendees</p>
                      <p className="text-sm text-gray-600 mt-1 text-center">
                        Some older factory workers said they wouldn't want to try XR
                      </p>
                    </div>

                    <p className="text-[#000000] font-semibold mb-2">
                      We were skeptical that factory workers would readily refuse XR if given the opportunity.
                    </p>
                    <p className="text-gray-600 mb-8">So we put it to the test.</p>

                    {/* Testing Results */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="text-[#6e4aff] font-semibold mb-2">What we built:</h4>
                        <p className="text-[#000000] font-medium mb-2">A virtual, interactive robot in</p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Virtual reality (with a headset)</li>
                          <li>• Augmented reality (with a phone)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[#6e4aff] font-semibold mb-2">Who we tested with:</h4>
                        <p className="text-[#000000] font-medium mb-2">2 groups:</p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Ages 30-40</li>
                          <li>• Ages 40-50</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[#6e4aff] font-semibold mb-2">What we measured:</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Hesitation/excitement</li>
                          <li>• Comfort level</li>
                          <li>• Ease of use and interaction</li>
                        </ul>
                      </div>
                    </div>

                    {/* Testing Image */}
                    <div className="mb-8">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Testing whether people of all ages would use XR"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Testing whether people of all ages would use XR
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      We Learned That Despite Initial Concerns, XR Can Work With People Of All Ages.
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      After testing with factory workers, we found a stronger sense of realism and immersion. So we
                      decided to focus on an XR experience with headset to boost engagement, but we also provided ARM
                      with the documentation to create a phone-based experience for users who need something simpler or
                      don't have access to headsets.
                    </p>
                    <p className="text-gray-600 mb-8">This way, we stay inclusive without losing the immersive feel.</p>

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Ease of Learning Chart"
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Immersion Rating Chart"
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Preference Chart"
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tackling An Ambiguous Problem Section */}
            <section id="tackling" className="py-20 bg-[#fafafa] -mx-8 px-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000000] mb-8">Tackling An Ambiguous Problem</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Now that we knew we wanted to use XR, we had to figure out how to use it. And we had a lot of
                  questions. So we ran 15 experiments with 115 testers.
                </p>

                {/* Experiments Table */}
                <div className="overflow-x-auto mb-12">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#ffd700]">
                        <th className="border border-gray-300 p-4 text-left font-semibold">Category</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold"># of Experiments</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Focus Areas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#1e1e1e] text-white">
                        <td className="border border-gray-300 p-4">Learning Styles</td>
                        <td className="border border-gray-300 p-4">7</td>
                        <td className="border border-gray-300 p-4">
                          Learning style by age, cognitive load, guidance preferences
                        </td>
                      </tr>
                      <tr className="bg-[#1e1e1e] text-white">
                        <td className="border border-gray-300 p-4">Experience Format & Medium</td>
                        <td className="border border-gray-300 p-4">2</td>
                        <td className="border border-gray-300 p-4">VR vs AR, embodiment, realism via physical tools</td>
                      </tr>
                      <tr className="bg-[#1e1e1e] text-white">
                        <td className="border border-gray-300 p-4">Narrative & Realism</td>
                        <td className="border border-gray-300 p-4">3</td>
                        <td className="border border-gray-300 p-4">
                          Workplace accuracy, AI realism, relatable scenarios
                        </td>
                      </tr>
                      <tr className="bg-[#1e1e1e] text-white">
                        <td className="border border-gray-300 p-4">Social & Group Dynamics</td>
                        <td className="border border-gray-300 p-4">2</td>
                        <td className="border border-gray-300 p-4">
                          Group learning, competitive vs collaborative setups
                        </td>
                      </tr>
                      <tr className="bg-[#1e1e1e] text-white">
                        <td className="border border-gray-300 p-4">Future Feature Testing</td>
                        <td className="border border-gray-300 p-4">1</td>
                        <td className="border border-gray-300 p-4">Take-home artifacts, future-self design ideas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-12">
                  {/* Four Experiments Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      Four Experiments Significantly Impacted Our Thinking
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      These experiments addressed key questions we needed to answer before crafting the experience in XR. We developed design principles for each experiment to guide us through our process moving forward.
                    </p>

                    {/* Tabs */}
                    <div className="flex space-x-4 mb-6">
                      <div className="bg-[#1e1e1e] text-[#ffffff] px-4 py-2 rounded text-sm font-medium">
                        look and feel
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">Gamification</div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">Personalization with AI</div>
                    </div>

                    {/* VR Environment Image */}
                    <div className="mb-8">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="VR environment interface showing robotic work station"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    <div className="bg-[#1e1e1e] text-[#ffffff] p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">What should the VR environment look and feel like?</h4>
                      <p className="text-sm mb-4 leading-relaxed">
                        We tested how immersive VR environments could look and feel. We created several robot
                        workstations, as our test settings showed factory and machine space design.
                      </p>
                      <p className="text-sm mb-4 leading-relaxed">
                        Across 8 participants familiar with automation, we measured engagement, satisfaction, focus, and
                        perceived credibility. The immersive setting with just the right amount of detail was most
                        effective, and often there is a strong, even distributed for "fun" and "serious."
                      </p>
                      <p className="text-sm leading-relaxed">
                        Design Principle: Credibility is paramount when it comes to trust, but realism remains crucial,
                        especially for operators like those we met at Automate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Writing An Impactful Story Section */}
            <section id="writing" className="py-20 bg-[#ffffff] -mx-8 px-8">
              <div>
                <h2 className="text-3xl font-bold text-[#000000] mb-8">Writing An Impactful Story</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Now that we know how we wanted our extended reality, we had to figure out how to keep people engaged
                  throughout the experience. So we wrote a story that follows the journey of someone informed by our
                  research and education best practices.
                </p>

                <div className="space-y-12">
                  {/* Story Sketches */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Sketch of exploring robotic work station in mixed reality"
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg mb-4"
                        />
                        <h4 className="font-semibold text-[#000000] mb-2">
                          Exploring a robotic work station in mixed reality
                        </h4>
                        <p className="text-gray-600 text-sm">
                          With grab-able robotic items and annotations explaining each one.
                        </p>
                      </div>

                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Sketch of meeting future self in virtual reality"
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg mb-4"
                        />
                        <h4 className="font-semibold text-[#000000] mb-2">
                          Meeting your "future self" in virtual reality
                        </h4>
                        <p className="text-gray-600 text-sm">
                          The future self represents the user with newfound robotics knowledge. They will guide the user
                          throughout the experience.
                        </p>
                      </div>

                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Sketch of learning scenario"
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg mb-4"
                        />
                        <h4 className="font-semibold text-[#000000] mb-2">Learning</h4>
                        <p className="text-gray-600 text-sm">With guided interactions and feedback.</p>
                      </div>
                    </div>
                  </div>

                  {/* High Fidelity Scenes */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      We Created 3 Scenes Of The Story In High Fidelity.
                    </h3>

                    {/* Scene Tabs */}
                    <div className="flex space-x-4 mb-6">
                      <div className="bg-[#ffd700] text-[#000000] px-4 py-2 rounded text-sm font-medium">
                        Problem-solving in VR
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">
                        Robotic work station in MR
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm">AI guidance</div>
                    </div>

                    {/* High Fidelity Scene Image */}
                    <div className="mb-8">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="High fidelity VR scene showing people working on problem-solving tasks"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    <div className="bg-[#1e1e1e] text-[#ffffff] p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Problem-solving in VR</h4>
                      <p className="text-sm mb-4 leading-relaxed">
                        Our user research showed that structured, task-based games with clear goals are successful at
                        getting our target audience engaged and learning – so we felt it was important to prioritize the
                        action of our story that does it best.
                      </p>
                      <p className="text-sm leading-relaxed">
                        In this scene, users must put robotic tools in the right order to complete a successful
                        chocolate bar assembly line.
                      </p>
                    </div>
                  </div>

                  {/* Creating the VR Problem-Solving Task */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">Creating the VR problem-solving task</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      To determine which problem-solving task we wanted to build in VR, we tested many different tasks
                      with our target audiences.
                    </p>

                    <ul className="text-gray-600 mb-8 space-y-2">
                      <li>• Programming the path of a robot arm</li>
                      <li>• Identifying which robot attachment is required to achieve a given manufacturing goal</li>
                      <li>• Assembling robots to complete a task (like opening a car door)</li>
                      <li>• Laying out robots on a factory floor in the right order</li>
                    </ul>

                    {/* Testing Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <Image
                        src="/placeholder.svg?height=250&width=300"
                        alt="Person testing VR problem-solving task"
                        width={300}
                        height={250}
                        className="w-full h-auto rounded-lg"
                      />
                      <Image
                        src="/placeholder.svg?height=250&width=300"
                        alt="Group testing robotic assembly task"
                        width={300}
                        height={250}
                        className="w-full h-auto rounded-lg"
                      />
                      <Image
                        src="/placeholder.svg?height=250&width=300"
                        alt="Testing factory layout task"
                        width={300}
                        height={250}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      90% of people ranked the factory layout task as the most engaging because of its trial-and-error
                      aspect, while 60% of people said they learned the most from identifying the robot attachment. All
                      participants agreed that the robot arm path was the least memorable and engaging.
                    </p>
                  </div>

                  {/* Results Charts */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Most engaging and enjoyable chart"
                          width={300}
                          height={300}
                          className="w-full h-auto rounded-lg mx-auto"
                        />
                      </div>

                      <div className="text-center">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Learned the most chart"
                          width={300}
                          height={300}
                          className="w-full h-auto rounded-lg mx-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Our Final Task Section */}
                  <div className="mt-12 pt-12 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">
                      Our final task combines the best of both worlds
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We combined the trial and error aspect of the factory layout task with the learning opportunity in
                      the robot attachment task.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      In our final task, users arrive to a chocolate production line that has gone haywire, and must
                      reorganize the robot attachments to successfully create a chocolate bar.
                    </p>

                    {/* Chocolate Production Line Diagram */}
                    <div className="mb-12">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Chocolate production line diagram showing conveyor belt and robotic stations"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    {/* Why Chocolate Section */}
                    <h3 className="text-xl font-semibold text-[#000000] mb-4">Why Chocolate?</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      We explored several different items involving physical state change in a factory, like balloons
                      and coffee. Chocolate stood out for its clarity of transformation (liquid to solid), broad
                      relatability, and potential for humor as a main player in this VR problem-solving task.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse mb-8">
                        <thead>
                          <tr className="bg-[#1e1e1e] text-white">
                            <th className="border border-gray-300 p-4 text-left font-semibold">Feature</th>
                            <th className="border border-gray-300 p-4 text-left font-semibold">Relatability</th>
                            <th className="border border-gray-300 p-4 text-left font-semibold">State Change</th>
                            <th className="border border-gray-300 p-4 text-left font-semibold">Humor</th>
                            <th className="border border-gray-300 p-4 text-left font-semibold">Phys. Takeaway</th>
                            <th className="border border-gray-300 p-4 text-left font-semibold">Feasibility</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white">
                            <td className="border border-gray-300 p-4 font-medium">Balloons</td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✕
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✕
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">
                                ○
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-4 font-medium">Coffee</td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✕
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">
                                ○
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">
                                ○
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-[#ffd700] bg-opacity-30">
                            <td className="border border-gray-300 p-4 font-medium">Chocolate</td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">
                                ✓
                              </span>
                            </td>
                            <td className="border border-gray-300 p-4 text-center">
                              <span className="inline-block w-6 h-6 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">
                                ○
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Full-Width Solution Section */}
      <div className="bg-[#1e1e1e] text-white">
        {/* Horizontal Sticky Navigation */}
        <div className="sticky top-0 left-0 right-0 z-20 bg-[#1e1e1e] border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <nav className="flex space-x-8 text-sm">
              <div className="text-gray-400 hover:text-white cursor-pointer">The Problem</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Our Hypothesis</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Understanding Our Users</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Tackling an Ambiguous Problem</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Writing an Impactful Story</div>
              <div className="text-white font-semibold">The Solution</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">The Impact</div>
            </nav>
          </div>
        </div>

        {/* Solution Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-5xl font-bold text-center mb-16">The Solution</h2>

            {/* Hero Image */}
            <div className="mb-16">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Problem-Solving In Virtual Reality"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-8 left-8">
                  <h3 className="text-2xl font-bold text-white">Problem-Solving In Virtual Reality</h3>
                </div>
              </div>
            </div>

            {/* Key Decisions */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-12">Key Decisions For The Problem-Solving Scene</h3>

              {/* First Decision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Fitting An End-To-End Process Into A Confined Space</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We knew from our user research that people learn best about automation when they see the full
                    context for what a robot does, from start to finish.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    But since VR only gives the user a small physical space to move around, we had to shrink the entire
                    factory process into a much smaller area than what a real factory would need.
                  </p>
                 
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Factory production line"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Second Decision with Arrow */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Simplified production process"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Arrow"
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                  </div>
                  <p className="text-lg font-semibold mb-4">First we tried simplifying the production process...</p>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="/placeholder.svg?height=20&width=20"
                        alt="X icon"
                        width={20}
                        height={20}
                        className="opacity-80"
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">But that made the scene feel empty and uninteresting.</p>
                      <p className="text-gray-300">
                        Users had fewer interactions to trigger and only got a small glimpse of how automation could
                        enhance the production process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Decision */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Image
                          src="/placeholder.svg?height=20&width=20"
                          alt="Check icon"
                          width={20}
                          height={20}
                          className="opacity-80"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-4 text-white">
                        So instead, we created a compact scene that would allow for simplified processes in an engaging
                        way.
                      </h4>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center relative">
                        <Image
                          src="/placeholder.svg?height=200&width=250"
                          alt="Chocolate Mold Disposal"
                          width={250}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded">
                          <p className="text-sm font-medium">Chocolate Mold Disposal</p>
                          <p className="text-xs">Ceramic steps through a tiny door</p>
                        </div>
                      </div>
                      <div className="text-center relative">
                        <Image
                          src="/placeholder.svg?height=200&width=250"
                          alt="Digital factory scene"
                          width={250}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded">
                          <p className="text-sm font-medium">Digital factory scene</p>
                          <p className="text-xs">One robot itself when looking down the conveyor line</p>
                        </div>
                      </div>
                      <div className="text-center relative">
                        <Image
                          src="/placeholder.svg?height=200&width=250"
                          alt="Chocolate features"
                          width={250}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded">
                          <p className="text-sm font-medium">Digital factory scene</p>
                          <p className="text-xs">features chocolate humans and glaze</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liquid Chocolate Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Displaying Liquid Chocolate</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Another challenge was optimizing the performance of the liquid chocolate.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    The liquid animation relies on countless small particles that constantly collide and interact to mimic liquid movement. Tracking and updating too many of these particles at once can easily overwhelm the headset, causing choppy rendering of what users see or even slowing down the experience.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    So we optimized the system by controlling the number of particles and their lifespan: once the liquid chocolate finishes pouring, we swap the real particle-based liquid with a static fake version that looks similar.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=150&width=200"
                      alt="Liquid chocolate animation"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-400">Liquid chocolate</p>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=150&width=200"
                      alt="Fake liquid chocolate"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded-lg mb-2"
                    />
                    <p className="text-sm text-gray-400">Fake liquid chocolate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning About Robotic Work Stations Section */}
            <div className="mb-16">
              {/* Hero Image for Mixed Reality */}
              <div className="mb-12 relative">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Learning About Robotic Work Stations In Mixed Reality - VR interface showing role selection"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-8 left-8">
                  <h3 className="text-2xl font-bold text-white">Learning About Robotic Work</h3>
                  <h3 className="text-2xl font-bold text-white">Stations In Mixed Reality</h3>
                </div>
              </div>

              {/* Key Decisions For The Robotic Work Station */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-center mb-12">Key Decisions For The Robotic Work Station</h3>

                {/* Combined Simple + Custom App Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Simple, Right? Not Really...</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      ARM needs to display their virtual work station in several spaces besides Mill 19 (like at trade shows).
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      However, XR headsets don’t understand the spaces they’re in, making it difficult to position the work station as needed in new spaces.
                    </p>

                    <h4 className="text-xl font-semibold mb-4">We built a custom app to solve this problem</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      To solve this problem, we leveraged brand new technologies for recognizing and remembering objects in an environment.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">We built a custom app with a system that:</p>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Allows the headset to avoid putting the work station over objects</li>
                      <li>
                        • Remembers where the work station has been placed, so ARM only needs to do it once in a given
                        room
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Robotic work station setup and custom app interface"
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Allowing For Easy Content Changes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Allowing For Easy Content Changes In The Future</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      After handing off our experience, ARM will continue to add and adapt content.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Within our custom app, we created a fully “modular” system, meaning ARM will be able to update the robotic work station by allowing them to just drag-and-drop objects. This gives them total control of the experience - and no coding!
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Modular system interface showing drag and drop functionality"
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Yellow divider line */}
              <div className="w-full h-1 bg-[#ffd700] mb-16"></div>

              {/* Getting AI-Powered Personalized Assistance */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-center mb-12">Getting AI-Powered Personalized Assistance</h3>

                <div className="mb-12">
                  <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="ARMbot AI-powered personalized assistance interface"
                    width={1200}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Key Decisions For ARMbot */}
                <div>
                  <h3 className="text-2xl font-semibold text-center mb-12">Key Decisions For ARMbot</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Trained To Ask Questions</h4>
                      <p className="text-gray-300 leading-relaxed">
                        ARM is trained to prompt users for specific information about their specific situations so that it can give the most tailored advice possible.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Finding The Right "Offering"</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Testing with manufacturers and the client revealed that the alpha version of ARMbot prioritized questions over answers. It struggled to provide a clear “offramp” that would direct users to ARM’s resources and services.
                      </p>
                      <p className="text-gray-300 mt-4 leading-relaxed">
                        We continued testing to identify the optimal balance between questions and direction and re-trained ARMbot with that in mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Impact Section */}
        <div className="bg-[#ffffff] py-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-white px-8 py-4">
              <h2 className="text-5xl font-bold text-[#6e4aff]">The Impact</h2>
            </div>
          </div>

          {/* Full-width purple background section */}
          <div className="bg-[#6e4aff] w-full">
            <div className="max-w-7xl mx-auto px-8 py-12">
              {/* Kenny placeholder image */}
              <div className="mb-16">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Kenny, Factory Operator"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* ARM Anticipates Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    ARM Anticipates That This Experience Will Drastically Improve Their Ability To Serve Their
                    Audiences.
                  </h3>
                  <p className="text-white mb-4">The new experience allows ARM to:</p>
                  <ul className="text-white space-y-2 text-sm">
                    <li>
                      • Get visitors up close to robots in an engaging, immersive way – without noise or safety concerns
                    </li>
                    <li>• Attract audiences at offsite locations, such as trade shows and conventions</li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Factory production manager testimonial"
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="ARM testimonial"
                  width={400}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />

                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="Factory Operator testimonial"
                  width={400}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Measuring Impact Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-white">Measuring Impact And Looking Forward</h3>
                <p className="text-white mb-8">
                  If we had enough time, we would have loved to measure two key metrics to further determine the success
                  of our solution in the long-term:
                </p>

                {/* Metrics Cards */}
                <div className="space-y-8">
                  {/* Robotics Career Card */}
                  <div className="bg-black rounded-lg p-6 flex items-center space-x-6">
                    <div className="w-24 h-16 bg-[#ffd700] rounded flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z"
                          clipRule="evenodd"
                        />
                        <path fillRule="evenodd" d="M10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Robotics career visits"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">robotics career.org visits</h4>
                          <p className="text-gray-300 text-sm">
                           If more people are visiting ARM’s website for robotics jobs and robotics training after engaging with the experience, it’s a strong signal that the experience is sparking career interest and action.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Manufacturer Interest Card */}
                  <div className="bg-black rounded-lg p-6 flex items-center space-x-6">
                    <div className="w-24 h-16 bg-[#ffd700] rounded flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-700 rounded flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Manufacturer interest"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Manufacturer Interest & visits to ARM for robots </h4>
                          <p className="text-gray-300 text-sm">
                            If ARM is seeing more direct outreach from SMMs - more people stopping by the booth, follow-ups after trade shows, and on-site visits to ARM, that’s a large sign that the experience is making waves.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="bg-[#ffffff] py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold text-[#000000] mb-16">Thank You!</h2>

          {/* Slideshow Container */}
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <div className="flex animate-scroll-left">
              {/* First set of images */}
              {slideshowImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80 mx-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={320}
                      height={240}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#000000] mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm">{image.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {slideshowImages.map((image, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 mx-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={320}
                      height={240}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#000000] mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm">{image.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
