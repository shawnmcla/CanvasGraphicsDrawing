import { Shape, ShapeType } from "./Shape.js";
export class Rect extends Shape {
    type = ShapeType.Rect;
    name = "Rectangle";
    constructor(x, y, w, h, fill = null, stroke = null) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.stroke = stroke;
    }

    scale(ratio) {
        this.w *= ratio;
        this.h *= ratio;
    }

    toString() {
        return `${this.name ?? "Shape"} (${this.w} x ${this.h}) @ (${this.x}, ${this.y}) [Fill = (${this.fill ?? "None"}), Stroke = (${this.stroke?.width ?? 0} px, ${this.stroke?.color ?? "None"})]`;
    }

    get boundingBox() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
}

export class RoundRect extends Rect {
    type = ShapeType.RoundRect;
    name = "Round Rectangle";
    constructor(x, y, w, h, radius = 1, fill = null, stroke = null) {
        super(x, y, w, h, fill, stroke);
        this.radius = radius;
    }
}