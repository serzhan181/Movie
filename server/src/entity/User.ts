import { Vote } from './Vote'
import { Post } from './Post'
import { IsEmail, Length } from 'class-validator'
import { Entity, Column, BeforeInsert, Index, OneToMany } from 'typeorm'
import bcrypt from 'bcrypt'
import { Exclude } from 'class-transformer'
import { BaseModel } from './BaseModel'

@Entity('users')
export class User extends BaseModel {
  constructor(props: Partial<User>) {
    super()
    Object.assign(this, props)
  }

  @Index()
  @Column({ unique: true })
  @Length(1, 255)
  username: string

  @Index()
  @Column()
  @IsEmail()
  email: string

  @Exclude()
  @Column()
  @Length(6, 255)
  password: string

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, +process.env.SALT_COUNT)
  }
}
