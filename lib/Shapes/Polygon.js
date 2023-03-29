import { NotImplemented } from "../Util.js";
import { Shape, ShapeType } from "./Shape.js";

export class Polygon extends Shape {
    type = ShapeType.Polygon;
    name = "Polygon";
    constructor(points = [], fill = null, stroke = null) {
        super();
        this.points = points;
        this.fill = fill;
        this.stroke = stroke;
    }

    scale(ratio) {
        NotImplemented("Polygon", "scale");
    }

    toString() {
        return `${this.name ?? "Shape"} () @ (${this.points[0]?.x ?? 0}, ${this.points[0]?.y ?? 0}) [Fill = (${this.fill ?? "None"}), Stroke = (${this.stroke?.width ?? 0} px, ${this.stroke?.color ?? "None"})]`;
    }

    get boundingBox() {
        NotImplemented("Polygon", "boundingBox");
    }
}