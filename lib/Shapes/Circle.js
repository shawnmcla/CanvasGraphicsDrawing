import { Shape, ShapeType } from "./Shape.js";

export class Circle extends Shape {
    type = ShapeType.Circle;
    name = "Circle";
    radius = 0;

    constructor(x, y, radius, fill = null, stroke = null) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
    }

    get w() { return this.radius; }
    get h() { return this.radius; }

    scale(ratio) {
        this.radius *= ratio;
    }

    toString() {
        return `${this.name ?? "Shape"} (r = ${this.radius}) @ (${this.x}, ${this.y}) [Fill = (${this.fill ?? "None"}), Stroke = (${this.stroke?.width ?? 0} px, ${this.stroke?.color ?? "None"})]`;
    }

    get boundingBox() {
        return { x: this.x - this.radius, y: this.y - this.radius, w: this.radius * 2, h: this.radius * 2 };
    }
}