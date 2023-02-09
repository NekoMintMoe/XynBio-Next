import PostContentLay from '@/core/layouts/blog/PostContent'
import PostContentFunc from '@/core/functions/blog/PostContent'

const BlogContent = async (props: any) => {
    const api = await PostContentFunc(props.params.slug)
    const postContent = (
        <PostContentLay key={api.data.metadata.slug} {...api} />
    )
    return <div>{postContent}</div>
}

export default BlogContent;