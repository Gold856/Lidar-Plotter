import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("circle-plotter")
export class CirclePlotter extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 300px;
      height: 300px;
      margin: 20px;
    }

    .point {
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: blue;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  `;

  @property({ type: Array<Number> })
  points = [];

  render() {
    return html` ${this.plotPoints()} `;
  }

  plotPoints() {
    console.log(this.points);
    let pointsElements = [];
    for (let i = 0; i < this.points.length; i++) {
      const x = this.points[i] * 75 * Math.cos((i / 180) * +Math.PI); // Adjust radius as needed
      const y = this.points[i] * 75 * Math.sin((i / 180) * Math.PI); // Adjust radius as needed

      pointsElements.push(
        html`<div class="point" style="left:${x}px; top:${y}px;"></div>`
      );
    }

    return pointsElements;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "circle-plotter": MyElement;
  }
}
