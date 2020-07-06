export class Cliente {
  constructor(
    public id: string,
    public cedula: string,
    public nombre: string,
    public direccion: string,
    public fecha_nacimiento: string,
    public telefono: string,
    public email: string
  ) {}
}
