import { Vote } from './Vote'
import { Post } from './Post'
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
import { Exclude, Expose } from 'class-transformer'

@Entity('comments')
export class Comment extends BaseModel {
  constructor(comment: Partial<Comment>) {
    super()
    Object.assign(this, comment)
  }

  @Index()
  @Column()
  identifier: string

  @Column()
  body: string

  @Column()
  username: string

  @Exclude()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User

  @Exclude()
  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.comment)
  votes: Vote[]

  @Expose() get voteScore(): number {
    return this.votes?.reduce((acc, cur) => acc + +cur.value, 0)
  }

  @Expose() get imageUrl() {
    return this.user.imageUrn
      ? `${process.env.APP_URL}/images/${this.user.imageUrn}`
      : `https://via.placeholder.com/150/222/ccc/?text=${this.user.username[0]}`
  }

  protected userVote: number
  setUserVote(user: User) {
    const idx = this.votes?.findIndex((v) => v.username === user.username)
    this.userVote = idx > -1 ? this.votes[idx].value : 0
  }

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeid(7)
  }
}
