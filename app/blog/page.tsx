import PostMetadataFunc from '@/core/functions/blog/PostList'
import PostListLay from '@/core/layouts/blog/PostList'

const BlogPage = async () => {
    const api = await PostMetadataFunc()
    const postPreviewList = (api.data.map((data) => (
        <PostListLay key={data.metadata.slug} {...data} />
    )))
    return <div>{postPreviewList}</div>
}

export default BlogPage