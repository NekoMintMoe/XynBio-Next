'use client'
import Link from 'next/link'
import PostMetadataFunc from '@/core/functions/blog/PostMetadata'
import { Typography } from '@mui/joy'

const PostPreviewList = (props: PostMetadataFunc) => {
    return (
        <div>
            <Link href={`/blog/${props.slug}`}>
                <Typography fontSize="xl">{props.title}</Typography>
            </Link>
            <Typography>Subtitle: {props.subtitle}</Typography>
            <Typography>Date: {props.date} Author: {props.author}</Typography>
        </div>
    )
}

export default PostPreviewList