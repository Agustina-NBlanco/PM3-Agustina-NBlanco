import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { User } from "./User";


@Entity({ name: "appointments" })
export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "date" })
    date: Date

    @Column({type: "time"})
    time: string

    @Column()
    userId: number

    @Column({type: "enum", enum: AppointmentStatus, default: AppointmentStatus.ACTIVE})
    status: AppointmentStatus

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "userId" })
    user: User

    



}