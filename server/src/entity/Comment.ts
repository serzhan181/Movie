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
import { Exclude } from 'class-transformer'

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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  post: Post

  @Exclude()
  @OneToMany(() => Vote, (vote) => vote.comment)
  votes: Vote[]

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
