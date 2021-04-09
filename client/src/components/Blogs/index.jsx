import { Blog } from './Blog'

export const Blogs = ({ showBody = false, vote, posts }) => {
  return (
    <>
      {posts.map((p) => (
        <Blog
          key={p.uuid}
          {...{
            author_name: p.user.username,
            author_avatar: p.user.imageUrl,
            commentCount: p.commentCount,
            createdAt: p.createdAt,
            description: showBody ? p.body : '',
            title: p.title,
            identifier: p.identifier,
            slug: p.slug,
            userVote: p?.userVote,
            voteScore: p.voteScore,
            vote,
          }}
        />
      ))}
    </>
  )
}

/*
  title,
  description,
  author_name,
  author_avatar,
  identifier,
  slug,
  commentCount,
  voteScore,
  createdAt,
  userVote,
  vote,
*/
