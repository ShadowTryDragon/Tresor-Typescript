import { Gegenstand } from "./gegenstand";

export class Aktie extends Gegenstand{

  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number){
    super(id,wert);
  }

  toString(): string {

    let text: string = super.toString();
    text += "\nUnternehmen: " + this.unternehmen;
    text += "\nNennwert: " + this.nennwert;
    return text;
  }

}