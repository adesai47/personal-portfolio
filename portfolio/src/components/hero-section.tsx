"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { XLogo } from "@/components/icons/x-logo"

export function HeroSection() {
  return (
    <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[58rem] flex-col items-center gap-8 text-center"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-primary">Aaditya Desai</span>
        </h1>
        <p className="max-w-[50rem] text-xl leading-relaxed text-muted-foreground sm:text-2xl sm:leading-relaxed">
          I&apos;m a full stack developer based in California. I build innovative web applications with modern
          technologies.
        </p>
        <div className="flex gap-6">
          <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
            <Link href="https://github.com/adesai47" target="_blank">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
            <Link href="https://x.com/AadityaDesai9" target="_blank">
              <XLogo />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
            <Link href="https://www.linkedin.com/in/aaditya-desai-2231851b6/" target="_blank">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
            <Link href="mailto:aadityadesai09@gmail.com">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}