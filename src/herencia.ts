// abstract se utiliza para hacer que una clase solo se pueda usar por herencia, y no se puedan hacer instancia de ella.
abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    // protected hace que esta propiedad no pueda ser accedida desde fuera de la clase, pero que si lo pueda ser desde una clase hija.
    protected created_at: Date,
    protected created_by: number
  ) {}
  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " " + this.desc;
  }

  get fullCreates() {
    return this.created_at + " " + this.created_by;
  }

  // Un método abstracto le va a indicar al compilador que todas las clases que esten heredando van a tener que implementar un herror, si no, van a arrojar un error.
  abstract guardar(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    create_at: Date,
    create_by: number
  ) {
    super(name, desc, create_at, create_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }

  override get fullCreates() {
    return "creates:" + " " + super.fullCreates;
  }

  //Método abstrac.
  guardar(){
    console.log('Guardando producto')
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(name: string, desc: string, create_at: Date, create_by: number) {
    super(name, desc, create_at, create_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoría: " + super.fullDesc;
  }

  //Método abstrac.
  guardar(){
    console.log('Guardando categoría')
  }
}

let producto1 = new Producto(
  100,
  1,
  "iPhone",
  "Este es un smartphone",
  new Date(),
  1
);

let categoria = new Categoria("Celulares", "", new Date(), 1);

categoria.agregarProducto(producto1);

console.log(producto1.fullDesc, categoria);
