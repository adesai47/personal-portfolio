"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Block Jump",
    description:
      "A 3D platformer game where the player can move around a blocky world and jump on blocks to reach the end of the level.",
    image: "/BlockJump.png?height=400&width=600",
    github: "https://github.com/adesai47/third-person-parkour",
    demo: "https://third-person-parkour-1.vercel.app/",
  },
  {
    title: "Snack Safari",
    description: "An e-commerce website for a snack company that allows users to buy snacks online from different countries",
    image: "/SnackSafari.png?height=400&width=600",
    github: "https://github.com/fractal-bootcamp/snack-safari",
    demo: "https://snack-safari.vercel.app/",
  },
  {
    title: "Fringe",
    description: "A job searching app that allows users to search for jobs and apply to them quick and easy with no struggle.",
    image: "/Fringe.png?height=400&width=600",
    github: "https://github.com/fractal-bootcamp/fringe",
    demo: "https://fringe-iota.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Check out some of my recent projects. Each one is unique and demonstrates different skills and technologies.
        </p>
      </motion.div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

