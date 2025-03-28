import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'producto'})
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false, unique: true})
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
    imagenUrl: string;
    
    @Column({type: 'text', nullable: false})
    descripcion: string;
    
    @Column({type: 'float', nullable: false})
    cantidad: number;

    @Column({type: 'varchar', length: 40, nullable: false})
    categoria: string;

    @Column({type: 'varchar',length: 80, nullable: false})
    nombreproveedor: string;

}