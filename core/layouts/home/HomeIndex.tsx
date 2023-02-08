import Link from 'next/link'
import { Typography } from '@mui/joy'

const HomeIndex = () => {
    return (
        <Link href="/blog">
            <p className="text-5xl font-bold">GOTO BLOG</p>
        </Link>
    )
}

export default HomeIndex