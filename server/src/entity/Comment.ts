import { Post } from './Post'
import { User } from './User'
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import { BaseModel } from './BaseModel'
import { makeid } from '../helpers/makeId'

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

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeid(7)
  }
}
