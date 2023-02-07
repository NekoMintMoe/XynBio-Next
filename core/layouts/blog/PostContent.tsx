import Markdown from 'markdown-to-jsx'

const PostContent = (props: any) => {
    return (
        <div>
            <h1>{props.post.data.title}</h1>
            <Markdown>{props.post.content}</Markdown>
        </div>
    )
}

export default PostContent