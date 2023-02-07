import getPostMetadata from '@/components/GetPostMetadataFunc'
import Link from 'next/link'

const PostPage = () => {
    const postMetadata = getPostMetadata()
    const postPreviewList = postMetadata.map((metadata) => (
        <div>
            <Link href={`/posts/${metadata.slug}`}>
                <h2>{metadata.title}</h2>
            </Link>
            <p>Subtitle: {metadata.subtitle}</p>
            <p>Date: {metadata.date} Author: {metadata.author}</p>
        </div>
    ))

    return <div>{postPreviewList}</div>
}

export default PostPage