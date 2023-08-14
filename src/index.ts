// Tipos de Datos

// number
let exticionDinosaurios: number = 76_000_000;

// string
let dinosaurioFavorito: string = "T-Rex";

// boolean
let extintos: boolean = true;

// any
function chanchitoFeliz(config: any) {
  return config;
}

// array
let animales: string[] = ["perro", "gato", "pollo"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [true, false];

// Otra alternativa para declarar arrays
let nums2: Array<number>;

// nums.map(x=> x.toExponential) el autocompletado sugiere métodos del tipo de dato

// tuplas
let tupla: [number, string[]] = [1, ["erick", "salvador"]];

// Error actual en typescript
tupla.push(10);

console.log(tupla);

//enums
const chica = "s";
const mediana = "m";
const grande = "l";
const extraGrande = "xl";

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = " xl",
}

const talla1 = Talla.Chica;

console.log(talla1);

// Al agregar const antes de enum se optimiza el código de JS
const enum LoadingState {
  Idle = "Idle",
  Loading = "Loading",
  Success = "Success",
  Error = "Error",
}

const estado = LoadingState.Success;
console.log(estado);

// Objetos

const objeto: {
  // readonly no permite que se sobreescriba la propiedad del objeto una vez inicializado
  readonly id: number;
  nombre: string;
  // ? permite que no se inicialice la propiedad de un objeto cuando este se declara
  apellido?: string;
  talla: Talla;
} = { id: 1, nombre: "Erick", talla: Talla.ExtraGrande };

// Declarar un objeto a partir de un type
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  apellido?: string;
  talla: Talla;
  direccion: Direccion;
};

const persona1: Persona = {
  id: 2,
  nombre: "Elena",
  apellido: "Santiago",
  talla: Talla.Grande,
  direccion: {
    numero: 4,
    calle: "Ana",
    pais: "México",
  },
};

const persona2: Persona = {
  id: 2,
  nombre: "Erick",
  apellido: "Monterrubio",
  talla: Talla.ExtraGrande,
  direccion: {
    numero: 4,
    calle: "Ana",
    pais: "México",
  },
};

// Definir un arrleglo de objetos
const arr: Persona[] = [persona1, persona2];

arr.map((e) => console.log(e.nombre));

// Funciones

// Arrow function
const fn1: () => void = () => {
  console.log("soy una función que no retorna nada");
};

const fn2: () => number = () => {
  console.log("soy una función que retorna un número");
  let x = 2;
  if (x > 5) {
    return 1;
  } else {
    return 2;
  }
};

const fn3: (a: number) => string = (edad: number) => {
  if (edad > 17) {
    return "Puedes ingresar";
  } else {
    return "No puedes pasar";
  }
};

// Legacy mode

function validarEdad(edad: number, nombre: string = "Erick"): string {
  if (edad > 17) {
    return `Puedes ingresar ${nombre}`;
  } else {
    return "No puedes pasar";
  }
}

// La función puede tomar el valor de un argumento por defecto o cambiarlo si este se agrega cuando se invoca la función

console.log(validarEdad(26));
console.log(validarEdad(27, "Elena"));

// never (Es importante que se coloque el tipo de dato never cuando se utilicen funciones dedicadas solo a lanzar errores)

function ErrorUsuario(): never {
  throw new Error("Error de usuario");
}

// Tipos de datos avanzados

// Union type
let puntaje: number | string = 98;
puntaje = "98%";

type Animal = {
  id: number;
  especie: string;
};

type Usuario = {
  id: number;
  name: string;
};

let serVivo: Usuario | Animal = { id: 1, name: "Erick" };

function sumaDos(n: number | string): number {
  if (typeof n === "number") {
    return n + 2;
  }
  return parseInt(n) + 2;
}

// Intersection type

type Audit = {
  created_at: string;
  modified_at: string;
};

type Product = {
  name: string;
};

const product: Audit & Product = {
  created_at: "",
  modified_at: "",
  name: "",
};

// Literal types
const nDeFibonacci: 0 | 1 | 2 | 3 | 5 = 3;

type Fibo = 0 | 1 | 2 | 3 | 5;
const nDeFibo: Fibo = 5;

//Nullable types
function toNumber(s: string | null | undefined) {
  if (!s) {
    return 0;
  }
  return parseInt(s);
}

const n = toNumber("5");
const x = toNumber(null);
const y = toNumber(undefined);

// Optional chaining

function getUser(id: number) {
  if (id < 0) {
    return null;
  }
  return {
    id: 1,
    name: "Erick",
    created_at: new Date(),
  };
}

const user = getUser(-1);

console.log(user?.created_at);

const arr1 = null;

arr1?.[0];

const fn5: any = null;
fn5?.();

// nullish coalescing operator(Sirve cuando el valor de 0 o '' es un valor representativo para nosotros y lo queremos diferenciar de null y/o undefine)

const difficulty: number | null = null;

const user2 = {
  userName: "Erick",
  difficulty: difficulty ?? 1,
};

// Type assertion

const input1 = document.getElementById("user") as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById("user");

// Type narrowing

function narrowing(x: string | number) {
  if (typeof x === "number") {
    x.toString;
    return;
  }

  if (typeof x === "string") {
    x.concat;
    return;
  }
}

// Type Unknown

function procesa(algo: unknown): string {
  if (typeof algo === "string") {
    return algo.toString();
  } else {
    return "holamundo";
  }
}

// Programación Orientada a Objetos


