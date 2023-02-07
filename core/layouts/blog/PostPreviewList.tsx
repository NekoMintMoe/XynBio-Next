import Link from 'next/link'
import PostMetadataFunc from '@/core/functions/blog/PostMetadata'

const PostPreviewList = (props: PostMetadataFunc) => {
    return (
        <div>
            <Link href={`/blog/${props.slug}`}>
                <p>{props.title}</p>
            </Link>
            <p>Subtitle: {props.subtitle}</p>
            <p>Date: {props.date} Author: {props.author}</p>
        </div>
    )
}

export default PostPreviewList