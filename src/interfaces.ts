abstract class Animal2 {
  abstract name: string;

  abstract caminar(): void;
  abstract onomatopeya(): string;
}

class Caballo extends Animal2 {
  name: string = "Rocinante";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "hin";
  }
}

class Cerdo extends Animal2 {
  name: string = "Chanchito";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "oinc";
  }
}

//Cuando no vamos a compartir lógica pero si necesitamos implementar métodos y propiedades de esta clase, podemos utilizar las interfaces, solo cambiamos class por interface y eliminamos la palabra abstract.
interface Animal3 {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

// Cuando se hace uso de una interface se debe cambiar la palabra extends por implements.
class Caballo2 implements Animal3 {
  name: string = "Rocinante";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "hin";
  }
}

class Cerdo2 implements Animal3 {
  name: string = "Chanchito";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "oinc";
  }
}

class Perro implements Animal3{
  name: string = 'Scrapy';
  caminar(): void {
    console.log("Caminando");
  }
  onomatopeya(): string {
    return 'guau'
  }
}
