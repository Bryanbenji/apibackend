import { IsInt, IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ProductoDto {

    

    @IsNotBlank({ message: 'el nombre no puede estar vacío' })
    nombre?: string;

    @IsNotBlank({ message: 'debe ingresar una imagen' })
    imagenUrl?: string;

    @IsNotBlank({ message: 'el nombre no puede estar vacío' })
    descripcion?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0.10, { message: 'el precio debe de ser al menos de 0.10 centavos' })
    cantidad?: number;

    @IsNotBlank({ message: 'la categoria no puede estar vacío' })
    categoria?: string;

    @IsNotBlank({ message: 'el proveedor no puede estar vacío' })
    nombreproveedor?: string;


}