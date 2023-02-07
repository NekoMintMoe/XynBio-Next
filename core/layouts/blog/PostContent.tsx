import Markdown from 'markdown-to-jsx'

const PostContent = (props: any) => {
    return (
        <div>
            <p className="text-3xl text-lime-500 font-bold">{props.post.data.title}</p>
            <article className="prose lg:prose-xl">
                <Markdown>{props.post.content}</Markdown>
            </article>
        </div>
    )
}

export default PostContent