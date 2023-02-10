'use client'
import Link from 'next/link'
import { Typography } from '@mui/joy'

const PostPreviewList = (api: any) => {
    return (
        <div>
            <Link href={`/blog/${api.metadata.slug}`}>
                <Typography fontSize="xl">{api.metadata.title}</Typography>
            </Link>
            <Typography>Subtitle: {api.metadata.subtitle}</Typography>
            <Typography>Date: {api.metadata.date} Author: {api.metadata.author}</Typography>
        </div>
    )
}

export default PostPreviewList