import { Layout } from "@/components/layout"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
    </Layout>
  )
}

