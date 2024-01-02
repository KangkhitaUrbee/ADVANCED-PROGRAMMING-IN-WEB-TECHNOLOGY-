import { AdminEntity } from './../admin/admin.entity';
import{PrimaryGeneratedColumn,Entity,PrimaryColumn,Column, ManyToOne,} from 'typeorm';

@Entity('member')
export class MemberEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @ManyToOne(() => AdminEntity, admin => admin.members)
 admin: AdminEntity;

}