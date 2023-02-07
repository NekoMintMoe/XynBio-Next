import PostMetadataFunc from '@/module/functions/PostMetadata'
import PostContentLay from '@/module/layouts/PostContent'

export const generateStaticParams = async () => {
    const posts = PostMetadataFunc()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostContent = (props: any) => {
    const slug = props.params.slug
    const PostContent = ( <PostContentLay slug={slug} /> )
    return <div>{PostContent}</div>
}

export default PostContent;