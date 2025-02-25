declare module 'two.js' {
  export enum Types {
    svg = 'svg',
    canvas = 'canvas',
    webgl = 'webgl',
  }

  export class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
  }

  export class Rectangle {
    translation: { x: number; y: number };
    width: number;
    height: number;
    fill: string;
    stroke: string;
    linewidth: number;
    opacity: number;
  }

  export class Circle {
    translation: { x: number; y: number };
    radius: number;
    fill: string;
    stroke: string;
    linewidth: number;
    opacity: number;
  }

  export default class Two {
    constructor(params: { type: Types; width: number; height: number });
    appendTo(element: HTMLElement): void;
    makeRectangle(x: number, y: number, w: number, h: number): Rectangle;
    makeCircle(x: number, y: number, r: number): Circle;
    update(): void;
    pause(): void;
    renderer: { domElement: HTMLElement };
  }
}
