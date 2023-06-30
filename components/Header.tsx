import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-gray-900 text-white">
      <Link href="/">
        <a>
          <h1 className="text-2xl font-bold">Zack Bradshaw</h1>
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/stats">
              <a className="hover:underline">Stats</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/ZackBradshaw?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="Github" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zack-bradshaw-54898b18a/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header