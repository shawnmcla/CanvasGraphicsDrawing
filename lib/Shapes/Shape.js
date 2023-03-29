export class Shape {
    x = 0;
    y = 0;
    w = 0;
    h = 0;

    constructor() {

    }

    get boundingBox() {
        throw new Error("Cannot obtain bounding box for abstract shape");
    }
}

export class ShapeType {
    static Rect = "Rect";
    static RoundRect = "RoundRect";
    static Circle = "Circle";
    static Polygon = "Polygon";
    static Line = "Line";
}
