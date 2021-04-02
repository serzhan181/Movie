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

@Entity('posts')
export class Post extends BaseModel {
  constructor(post: Partial<Post>) {
    super()
    Object.assign(this, post)
  }

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

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeid(6)
    this.slug = slugify(this.title)
  }
}
