'use client'
import MuiMarkdown from 'mui-markdown';
import { Typography } from '@mui/joy'

const PostContent = (props: any) => {
    return (
        <div>
            <Typography fontSize="xl">{props.title}</Typography>
            <MuiMarkdown>{props.content}</MuiMarkdown>
        </div>
    )
}

export default PostContent