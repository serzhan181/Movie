import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { classToPlain, Exclude } from 'class-transformer'

export abstract class BaseModel extends BaseEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'uuid' })
  uuid: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @BeforeInsert()
  createUuid() {
    this.uuid = uuid()
  }

  toJSON() {
    return classToPlain(this)
  }
}
