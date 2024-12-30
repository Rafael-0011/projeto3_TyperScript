import { ControllerFilme } from "./controller/ControllerFilme";
import { ControllerPais } from "./controller/ControllerPais";
import { ControllerPokemon } from "./controller/ControllerPokemon";

class main {
  main() {
    const controllerPokemon = new ControllerPokemon();
    const newPokemon = controllerPokemon.addPokemon();
    console.log(JSON.stringify(newPokemon));
    console.log("=============================");

    const controllerFilme = new ControllerFilme();
    const newFilme = controllerFilme.addFilme();
    console.log(JSON.stringify(newFilme));
    console.log("=============================");

    const newPais = ControllerPais.addPais();
    console.log(JSON.stringify(newPais));
  }
}

const app = new main();
app.main();
