import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
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
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-8">
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
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Tossy Chen</p>
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Aamya Sungklar</p>
              </div>
            </div>

            {/* Creative Designers */}
            <div>
              <h3 className="text-[#ffffff] font-semibold mb-4 text-lg">Creative Designers</h3>
              <div className="space-y-2">
                <p className="text-[#ffffff] underline cursor-pointer hover:text-gray-200">Eisha Garg</p>
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

      {/* Problem Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-[#1e1e1e] rounded-lg p-6 sticky top-8">
                <nav className="space-y-4">
                  <div className="text-[#ffffff] font-semibold">The Problem</div>
                  <div className="text-gray-400 text-sm">01</div>
                  <div className="text-gray-400 text-sm">Our Hypothesis</div>
                  <div className="text-gray-400 text-sm">02</div>
                  <div className="text-gray-400 text-sm">Understanding Our Users</div>
                  <div className="text-gray-400 text-sm">03</div>
                  <div className="text-gray-400 text-sm">Our Solution</div>
                  <div className="text-gray-400 text-sm">04</div>
                  <div className="text-gray-400 text-sm">Solving an Impactful Problem</div>
                  <div className="text-gray-400 text-sm">05</div>
                  <div className="text-gray-400 text-sm">Working an Impactful Problem</div>
                  <div className="text-gray-400 text-sm">06</div>
                  <div className="text-gray-400 text-sm">The Solution</div>
                  <div className="text-gray-400 text-sm">07</div>
                  <div className="text-gray-400 text-sm">The Impact</div>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-[#000000] mb-8">The Problem</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-4">
                    Manufacturing plants in the U.S. don't have enough workers.
                  </h3>
                  <p className="text-gray-600 mb-4">Current body</p>

                  <p className="text-[#000000] mb-6 leading-relaxed">
                    ARM helps strengthen U.S. manufacturing through robotics - with innovations.
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The Advanced Robotics for Manufacturing (ARM) helps manufacturers use robotics to overcome workforce
                    gaps and helps equip workers for careers in manufacturing automation.
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    But constraints at their facility have prevented them from offering hands-on, immersive interactions
                    with robots.
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
          </div>
        </div>
      </section>

      {/* Extended Reality Section */}
      <section className="py-20 bg-[#6e4aff]">
        <div className="max-w-7xl mx-auto px-8 text-center">
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
                <p className="text-[#ffffff] text-sm">Blend virtual elements to interact with real world elements</p>
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
                      Eliminates the need to actually encounter potentially unsafe robots, machinery, or environments.
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
    </div>
  )
}
