import PostContentFunc from '@/module/functions/PostContent'
import Markdown from 'markdown-to-jsx'

const PostContent = (props: any) => {
    const post = PostContentFunc(props.slug)
    return <div>
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
    </div>
}

export default PostContent