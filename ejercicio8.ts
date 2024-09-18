class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }

    public getCiudad(): string {
        return this.ciudad;
    }
}

export {Persona};


// Julio Cáceres 
// Carne: 1549223