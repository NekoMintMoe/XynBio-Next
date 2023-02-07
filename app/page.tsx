import Link from "next/link"

const HomePage = () => {
    return (
        <Link href="/posts">
            <p className="text-5xl font-bold">GOTO POSTS</p>
        </Link>
    )
}

export default HomePage