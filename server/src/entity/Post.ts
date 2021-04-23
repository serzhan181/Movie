import { Vote } from './Vote'
import { Comment } from './Comment'
import { User } from './User'
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { BaseModel } from './BaseModel'
import { makeid } from '../helpers/makeId'
import { slugify } from '../helpers/slugify'
import { Exclude, Expose } from 'class-transformer'

@Entity('posts')
export class Post extends BaseModel {
  constructor(post: Partial<Post>) {
    super()
    Object.assign(this, post)
  }

  @Exclude()
  @Column({ nullable: true })
  postImgUrn: string

  @Index()
  @Column()
  identifier: string // 7 character id

  @Column()
  title: string

  @Column()
  slug: string

  @Column({ type: 'text', nullable: true })
  body: string

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User

  @Exclude()
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[]

  @Expose() get commentCount(): number {
    return this.comments?.length
  }

  @Expose() get voteScore(): number {
    return this.votes?.reduce((acc, cur) => acc + +cur.value, 0)
  }

  @Expose() get postImg() {
    return this.postImgUrn
      ? `${process.env.APP_URL}/images/posts/${this.postImgUrn}`
      : null
  }

  protected userVote: number
  setUserVote(user: User) {
    const idx = this.votes?.findIndex((v) => v.username === user.username)
    this.userVote = idx > -1 ? this.votes[idx].value : 0
  }

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeid(6)
    this.slug = slugify(this.title)
  }
}
