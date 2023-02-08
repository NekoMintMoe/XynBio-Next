'use client'
import MuiMarkdown from 'mui-markdown';
import PostContentFunc from '@/core/functions/blog/PostContent'
import { Typography } from '@mui/joy'

const PostContent = (props: PostContentFunc) => {
    return (
        <div>
            <Typography fontSize="xl">{props.title}</Typography>
            <MuiMarkdown>{props.content}</MuiMarkdown>
        </div>
    )
}

export default PostContent