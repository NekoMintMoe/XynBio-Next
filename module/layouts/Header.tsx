import Link from "next/link"

const Header = () => {
    return <header>
      <div>
        <Link href="/">
          <h1>XynBio Next</h1>
        </Link>
        <p>NextJS!</p>
        <br />
      </div>
    </header>
}

export default Header