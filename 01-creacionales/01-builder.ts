/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = `cpu - not defined`;
  public ram: string = `ram - not defined`;
  public storage: string = `storage - not defined`;
  public gpu?: string = `No tiene`;

  displayConfiguration() {
    console.log(`Configuración de la computadora 
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Almacenamiento: ${this.storage}
        GPU: ${this.gpu}
        `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(CPU: string): ComputerBuilder {
    this.computer.cpu = CPU;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU(`Interl Core 2 Duo`)
    .setRAM(`4GB`)
    .setStorage(`256GB`)
    .build();

  console.log(`%cComputadora básica:`, COLORS.blue);
  basicComputer.displayConfiguration();

  const gamerComputer: Computer = new ComputerBuilder()
    .setCPU(`Macbook Pro M4`)
    .setRAM(`16GB`)
    .setStorage(`2T`)
    .setGPU(`1`)
    .build();

  console.log(`%cComputadora Gamer:`, COLORS.red);
  gamerComputer.displayConfiguration();
}

main();
