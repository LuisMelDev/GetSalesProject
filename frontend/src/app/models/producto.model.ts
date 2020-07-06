export class Producto{
    constructor(
        public id:string,
        public nombre: string,
        public imagen: string,
        public inventario: number,
        public fecha_ingreso:string,
        public amperaje_id: string,
        public grupo_id: string,
        public marca_id: string
    ){}
}