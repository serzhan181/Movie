import { Comment } from './Comment'
import { Post } from './Post'
import { User } from './User'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseModel } from './BaseModel'

@Entity('votes')
export class Vote extends BaseModel {
  constructor(props: Partial<Vote>) {
    super()
    Object.assign(this, props)
  }

  @Column()
  value: number

  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User

  @Column()
  username: string

  @ManyToOne(() => Post)
  post: Post

  @ManyToOne(() => Comment)
  comment: Comment
}
