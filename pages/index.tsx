import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header, Footer, ProjectCard, StatsCard } from '../components'
import { getProjects, getStats } from '../lib/sanity'
import { Project, Stats } from '../types'

interface HomeProps {
  projects: Project[]
  stats: Stats[]
}

export default function Home({ projects, stats }: HomeProps) {
  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <Head>
        <title>Zack Bradshaw - Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4">
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Coding Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()
  const stats = await getStats()

  return {
    props: {
      projects,
      stats,
    },
  }
}