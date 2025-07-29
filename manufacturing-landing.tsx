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
      src: "/images/capstone-kickoff.png",
      title: "Capstone Kickoff w/ ARM",
      date: "Feb 3, 2025",
    },
    {
      src: "/images/sandboxvr.png",
      title: "Sandbox VR",
      date: "April 6, 2025",
    },
    {
      src: "/images/spring pres.png",
      title: "Spring Presentation",
      date: "April 21, 2025",
    },
    {
      src: "/images/automate group photo.png",
      title: "Automate Conference",
      date: "May 14, 2025",
    },
    {
      src: "/images/final pres.png",
      title: "Final Presentation",
      date: "July 21, 2025",
    },
    {
      src: "/images/xena.png",
      title: "Our Team Mascot, Xena",
      date: ":)"
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-600 to-gray-800">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="object-cover w-full h-full opacity-70">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_0d7HBZNYnPmZh6444mzuObE2ygd8/xOOEGqKemm6C99y937B_-S/public/videos/websitemill19video-comp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-10 flex flex-col justify-end items-start h-full max-w-7xl mx-auto px-8 pb-20 pr-0">
          <h1 className="text-5xl md:text-6xl font-bold text-[#ffffff] mb-16 max-w-4xl leading-tight">
            The Future Of Manufacturing Starts Here
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Client */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Client</h3>
              <p className="text-[#ffffff] text-xl font-bold leading-relaxed mx-0 px-0 pr-0 mr-6">
                Advanced Robotics Manufacturing Institute (ARM)
              </p>
            </div>

            {/* Creative Technologists */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Creative Technologists</h3>
              <div className="space-y-2">
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200 text-xl">Tassy Chen</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200 text-xl">Aarnav Sangekar</p>
              </div>
            </div>

            {/* Creative Designers */}
            <div className="text-left">
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Creative Designers</h3>
              <div className="space-y-2">
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200 text-xl">Esha Garg</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200 text-xl">
                  Jackie Strawbridge
                </p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200 text-xl">Victor Wang</p>
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
            <div>
              <Image
                src="/images/mr-workstation.png"
                alt="MR Workstation"
                width={400}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/images/VR-game-image.png"
                alt="VR Game Image"
                width={400}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/images/ARMbot.png"
                alt="Worker with technology"
                width={400}
                height={800}
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
          <div className="w-48 flex-shrink-0 mb-16 mt-12">
            <div className="sticky top-8 z-10">
              <div className="bg-[#1e1e1e] rounded-lg p-4 mr-8 mt-8">
                <nav className="space-y-4">
                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">01</div>
                    <div
                      className={`font-medium underline cursor-pointer hover:text-gray-200 text-base ${
                        activeSection === "problem" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      The Problem
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">02</div>
                    <div
                      className={`font-medium underline cursor-pointer hover:text-white text-base ${
                        activeSection === "hypothesis" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Our Hypothesis
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">03</div>
                    <div
                      className={`font-medium underline cursor-pointer hover:text-white text-base ${
                        activeSection === "users" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Understanding Our Users
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">04</div>
                    <div
                      className={`font-medium underline cursor-pointer hover:text-white text-base ${
                        activeSection === "tackling" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Tackling an Ambiguous Problem
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">05</div>
                    <div
                      className={`font-medium underline cursor-pointer hover:text-white text-base ${
                        activeSection === "writing" ? "text-[#ffffff] font-bold" : "text-gray-400"
                      }`}
                    >
                      Writing an Impactful Story
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">06</div>
                    <div className="text-gray-400 font-medium underline cursor-pointer hover:text-white text-base">
                      The Solution
                    </div>
                  </div>

                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-sm">07</div>
                    <div className="text-gray-400 font-medium underline cursor-pointer hover:text-white text-base">
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
                    <h3 className="text-xl text-[#000000] mb-4 font-bold">
                      Manufacturing plants in the U.S. don't have enough workers.
                    </h3>
                    <p className="text-gray-600 mb-4"></p>

                    <h3 className="text-xl text-[#000000] mb-4 font-bold">
                      ARM helps strengthen U.S. manufacturing through robotics - with innovations.
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-base">
                      Pittsburgh's Advanced Robotics Manufacturing Institute (ARM) helps manufacturers use robotics to
                      overcome workforce gaps, and helps workers prepare for careers in manufacturing automation.
                    </p>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                      But constraints at their facility have prevented them from offering hands-on, immersive
                      interactions with robots.
                    </p>
                  </div>

                  <div className="w-full">
                    <Image
                      src="/images/mill19.png"
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
                <h2 className="text-4xl text-[#ffffff] mb-4 text-left font-bold">
                  Our Hypothesis: Extended Reality Can Bridge The Gap
                </h2>
                <p className="text-[#ffffff] mb-16 text-lg text-left mt-0 font-bold">What Is Extended Reality?</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/images/vr-definition-image.png"
                          alt="Virtual Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2 text-left">Virtual Reality</h3>
                      <p className="text-[#ffffff] text-sm text-left">A fully immersive digital environment</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/images/ar-definition-image.png"
                          alt="Augmented Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2 text-left">Augmented Reality</h3>
                      <p className="text-[#ffffff] text-sm text-left">Overlays digital visuals in physical space</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#ffffff] bg-opacity-20 border-none">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Image
                          src="/images/mr-definition-image.png"
                          alt="Mixed Reality"
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      </div>
                      <h3 className="text-[#ffffff] font-semibold mb-2 text-left">Mixed Reality</h3>
                      <p className="text-[#ffffff] text-sm text-left">
                        Allows virtual elements to interact with real-world elements
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
                <h2 className="text-3xl text-[#000000] mb-8 font-normal">Understanding Our Users</h2>

                <div className="space-y-12">
                  {/* Who Is This Experience For */}
                  <div>
                    <h3 className="text-[#000000] mb-4 text-2xl font-normal">Who Is This Experience For?</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      In collaboration with ARM, we identified key groups that represent different stages of the
                      manufacturing workforce – some are shaping the industry today, and others are beginning to explore
                      their career paths.
                    </p>

                    {/* User Type Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <Card className="border-2 border-gray-300">
                        <CardContent className="p-6 text-center">
                          <div className="mb-4">
                            <Image
                              src="/images/smo.png"
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
                              src="/images/factoryoperators.png"
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
                              src="/images/students.png"
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
                    <h3 className="text-[#000000] mb-4 font-normal text-2xl">How Do Our Users Feel About XR?</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-lg">
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
                        src="/images/automate photo.png"
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

                    <p className="text-[#000000] mb-2 text-lg font-bold">
                      We were skeptical that factory workers would readily refuse XR if given the opportunity.
                    </p>
                    <p className="text-gray-600 mb-8 text-lg">So we put it to the test.</p>

                    {/* Testing Results */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="text-[#6e4aff] mb-2 font-bold">What we built:</h4>
                        <p className="text-[#000000] mb-2 font-normal text-lg">A virtual, interactive robot in:</p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Virtual reality (with a headset)</li>
                          <li>• Augmented reality (with a phone)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[#6e4aff] mb-2 font-bold">Who we tested with:</h4>
                        <p className="text-[#000000] mb-2 font-normal text-lg">2 groups:</p>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Ages 30-40</li>
                          <li>• Ages 40-50</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[#6e4aff] mb-2 font-bold">What we measured:</h4>
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
                        src="/images/xr age testing.png"
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
                          src="/images/ease of use graph.png"
                          alt="Ease of Learning Chart"
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      <div className="text-center">
                        <Image
                          src="/images/immersion rating graph.png"
                          alt="Immersion Rating Chart"
                          width={300}
                          height={200}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>

                      <div className="text-center">
                        <Image
                          src="/images/preferred graph.png"
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
                      These experiments addressed key questions we needed to answer before crafting the experience in
                      XR. We developed design principles for each experiment to guide us through our process moving
                      forward.
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
                        src="/images/look-and-feel.png"
                        alt="VR environment interface showing robotic work station"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
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
            <nav className="flex justify-between items-center text-sm">
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">01</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  The Problem
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">02</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Our Hypothesis
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">03</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Understanding Our Users
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">04</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Tackling an Ambiguous Problem
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">05</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  Writing an Impactful Story
                </span>
              </div>
              <div className="flex flex-col text-white font-semibold cursor-pointer">
                <span className="text-xs text-yellow-400 font-medium mb-1">06</span>
                <span className="text-xs">The Solution</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-yellow-400 font-medium mb-1">07</span>
                <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors">
                  The Impact
                </span>
              </div>
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
                    src="/images/creative-factory.png"
                    alt="Simplified production process"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <Image
                      src="/images/arrow to first attempt.png"
                      alt="Arrow"
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                  </div>
                  <p className="text-lg font-semibold mb-4">First we tried simplifying the production process...</p>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Image src="/images/cancel.png" alt="X icon" width={20} height={20} className="opacity-80" />
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
                        <Image src="/images/check.png" alt="Check icon" width={20} height={20} className="opacity-80" />
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
                    The liquid animation relies on countless small particles that constantly collide and interact to
                    mimic liquid movement. Tracking and updating too many of these particles at once can easily
                    overwhelm the headset, causing choppy rendering of what users see or even slowing down the
                    experience.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    So we optimized the system by controlling the number of particles and their lifespan: once the
                    liquid chocolate finishes pouring, we swap the real particle-based liquid with a static fake version
                    that looks similar.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Image
                      src="/images/liquid-chocolate.png"
                      alt="Liquid chocolate animation"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded-lg mb-2"
                    />
                  </div>
                  <div className="text-center">
                    <Image
                      src="/images/fake-liquid-chocolate.png"
                      alt="Fake liquid chocolate"
                      width={200}
                      height={150}
                      className="w-full h-auto rounded-lg mb-2"
                    />
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
                      ARM needs to display their virtual work station in several spaces besides Mill 19 (like at trade
                      shows).
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      However, XR headsets don't understand the spaces they're in, making it difficult to position the
                      work station as needed in new spaces.
                    </p>

                    <h4 className="text-xl font-semibold mb-4">We built a custom app to solve this problem</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      To solve this problem, we leveraged brand new technologies for recognizing and remembering objects
                      in an environment.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">We built a custom app with a system that:</p>
                    <ul className="text-gray-300 space-y-2">
                      <li>Allows the headset to avoid putting the work station over objects</li>
                      <li>
                        Remembers where the work station has been placed, so ARM only needs to do it once in a given
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
                      Within our custom app, we created a fully "modular" system, meaning ARM will be able to update the
                      robotic work station by allowing them to just drag-and-drop objects. This gives them total control
                      of the experience - and no coding!
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
                        ARM is trained to prompt users for specific information about their specific situations so that
                        it can give the most tailored advice possible.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4">Finding The Right "Offering"</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Testing with manufacturers and the client revealed that the alpha version of ARMbot prioritized
                        questions over answers. It struggled to provide a clear "offramp" that would direct users to
                        ARM's resources and services.
                      </p>
                      <p className="text-gray-300 mt-4 leading-relaxed">
                        We continued testing to identify the optimal balance between questions and direction and
                        re-trained ARMbot with that in mind.
                      </p>
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
