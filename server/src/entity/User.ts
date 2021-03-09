import { IsEmail, Length } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity, Index, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'

@Entity('users')
export class User extends BaseEntity {

    constructor(props: Partial<User>) {
        super()
        Object.assign(this, props)
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({unique: true})
    @Length(1, 255)
    username: string;

    @Index()
    @Column()
    @IsEmail()
    email: string;

    @Column()
    @Length(6, 255)
    password: string;

    @Column({type: 'uuid'})
    uuid: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    createUuid() {
        this.uuid = uuid()
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, +process.env.SALT_COUNT)
    }

    toJSON() {
        return {...this, id: undefined, password: undefined}
    }
}