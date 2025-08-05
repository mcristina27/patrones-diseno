/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburguer {
  prepare(): void;
}

class ChickenHamburguer implements Hamburguer {
  prepare(): void {
    console.log(`Preparando una hambuguesa de %cpolllo`, COLORS.brown);
  }
}

class BeefHamburguer implements Hamburguer {
  prepare(): void {
    console.log(`Preparando una hambuguesa de %res`, COLORS.yellow);
  }
}

abstract class Restaurant {
  abstract createHamburguer(): Hamburguer;

  orderHamburger(): void {
    const hamburger = this.createHamburguer();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburguer(): Hamburguer {
    return new BeefHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(`¿Que tipo de hamburguesa tienes? (chicken/beef)`);

  switch (burgerType) {
    case `chicken`:
      restaurant = new ChickenRestaurant();
      break;

    case `beef`:
      restaurant = new BeefRestaurant();
      break;

    default:
      throw new Error(`Opción no válida`);
  }

  restaurant.orderHamburger();
}

main();
