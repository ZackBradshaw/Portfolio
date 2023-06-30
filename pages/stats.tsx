import { GetServerSideProps } from 'next'
import { Header, Footer, StatsCard } from '../components'
import { fetchWakatimeStats } from '../lib/wakatime'

type StatsProps = {
  stats: {
    total: string,
    languages: Array<{
      name: string,
      percent: number
    }>
  }
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">My Coding Stats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {stats.languages.map((lang, index) => (
            <StatsCard key={index} language={lang.name} percent={lang.percent} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stats = await fetchWakatimeStats()

  return {
    props: {
      stats
    }
  }
}

export default Stats