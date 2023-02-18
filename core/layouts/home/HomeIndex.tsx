'use client'
import Link from 'next/link'
import { Typography } from '@mui/joy'

const HomeIndex = () => {
    return (
        <Link href="/blog">
            <Typography>GOTO BLOG</Typography>
        </Link>
    )
}

export default HomeIndex