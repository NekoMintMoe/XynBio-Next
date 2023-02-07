import PostMetadataFunc from '@/core/functions/blog/PostMetadata'
import PostContentLay from '@/core/layouts/blog/PostContent'
import PostContentFunc from '@/core/functions/blog/PostContent'

export const generateStaticParams = async () => {
    const posts = PostMetadataFunc()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostContent = (props: any) => {
    const post = PostContentFunc(props.params.slug)
    const PostContent = ( <PostContentLay post={post} /> )
    return <div>{PostContent}</div>
}

export default PostContent;