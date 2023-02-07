import Link from "next/link"

const Header = () => {
    return <header>
      <div>
        <Link href="/">
          <p className="text-3xl font-bold text-pink-400">XynBio Next</p>
        </Link>
        <p className="text-2xl font-bold text-blue-400">NextJS!</p>
        <br />
      </div>
    </header>
}

export default Header