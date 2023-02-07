import Link from "next/link"

const Header = () => {
    return <header>
      <div>
        <Link href="/">
          <p className="text-3xl font-bold">XynBio Next</p>
        </Link>
        <p className="text-2xl">NextJS!</p>
        <br />
      </div>
    </header>
}

export default Header