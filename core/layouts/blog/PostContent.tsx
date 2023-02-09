'use client'
import MuiMarkdown from 'mui-markdown';
import { Typography } from '@mui/joy'

const PostContent = (api: any) => {
    return (
        <div>
            <Typography fontSize="xl">{api.data.metadata.title}</Typography>
            <MuiMarkdown>{api.data.content}</MuiMarkdown>
        </div>
    )
}

export default PostContent