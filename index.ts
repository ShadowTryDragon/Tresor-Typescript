// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>';

let a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
let a2: Aktie = new Aktie(2, 58, "Krubb", 50);
let b1: Schmuck = new Schmuck(20, 500, "Fahrradkedde");
let b2: Schmuck = new Schmuck(21, 500, "Schimmel");

/**
 * Beispiel für try-catch mit dem Werfen des Errors
 */
try {
  //todo
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}