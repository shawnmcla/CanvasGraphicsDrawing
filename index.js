import { CanvasDrawer } from "./lib/CanvasDrawer.js";
import { ShapeType } from "./lib/Shapes/Shape.js";
import { Rect, RoundRect } from "./lib/Shapes/Rect.js";
import { Color } from "./lib/Color.js";
import { point, stroke } from "./lib/Util.js";
import { Circle } from "./lib/Shapes/Circle.js";
import { Polygon } from "./lib/Shapes/Polygon.js";

function ctxPolygon(ctx, obj) {
    const points = obj.points;
    if (!points || points.length == 0) return;

    ctx.beginPath();
    ctx.moveTo(points[0]?.x ?? 0, points[0]?.y ?? 0);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i]?.x ?? 0, points[i]?.y ?? 0)
    }
    ctx.closePath();

    if (obj.fill) {
        ctx.fillStyle = obj.fill;
        ctx.fill();
    }

    if (obj.stroke) {
        ctx.strokeStyle = obj.stroke.color ?? Color.Black;
        ctx.lineWidth = obj.stroke.width ?? 1;
        ctx.stroke();
    }
}

function ctxCircle(ctx, obj) {
    const x = obj.x ?? 0;
    const y = obj.y ?? 0;
    const radius = obj.radius ?? 1;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TWO_PI);

    if (obj.fill) {
        ctx.fillStyle = obj.fill;
        ctx.fill();
    }

    if (obj.stroke) {
        ctx.strokeStyle = obj.stroke.color ?? Color.Black;
        ctx.lineWidth = obj.stroke.width ?? 1;
        ctx.stroke();
    }
}

function ctxRoundRect(ctx, obj) {
    const x = obj.x ?? 0;
    const y = obj.y ?? 0;
    const w = obj.w ?? 0;
    const h = obj.h ?? 0;
    const radius = obj.radius ?? 1;

    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);

    if (obj.fill) {
        ctx.fillStyle = obj.fill;
        ctx.fill();
    }

    if (obj.stroke) {
        ctx.strokeStyle = obj.stroke.color ?? Color.Black;
        ctx.lineWidth = obj.stroke.width ?? 1;
        ctx.stroke();
    }
}


function ctxRect(ctx, obj) {

}

function ctxDrawMultiple(ctx, ...objs) {
    if (objs.length >= 1 && Array.isArray(objs[0])) {
        objs = objs[0];
    }
    for (let obj of objs) {
        ctxDraw(ctx, obj);
    }
}

function ctxDraw(ctx, obj) {
    ctx.save();
    switch (obj.type) {
        case ShapeType.Rect:
            ctxRect(ctx, obj);
            break;
        case ShapeType.RoundRect:
            ctxRoundRect(ctx, obj);
            break;
        case ShapeType.Circle:
            ctxCircle(ctx, obj);
            break;
        case ShapeType.Polygon:
            ctxPolygon(ctx, obj);
            break;
        default:
            NotImplemented("ctxDraw", obj.type);
    }
    ctx.restore();
}



const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// ctxDrawMultiple(ctx,
//     {
//         type: ShapeType.Rect,
//         x: 15, y: 15, w: 250, h: 75,
//         fill: "green",
//         stroke: { color: "red", width: 5 }
//     },

//     {
//         type: ShapeType.RoundRect,
//         x: 100, y: 100, w: 250, h: 75, radius: 10,
//         fill: Color.Red,
//         stroke: { color: Color.Blue, width: 5 }
//     },

//     {
//         type: ShapeType.Circle,
//         x: 300, y: 300, radius: 75,
//         fill: Color.Red,
//     },

//     {
//         type: ShapeType.Polygon,
//         points: [
//             point(600, 400),
//             point(500, 450),
//             point(600, 450)
//         ],
//         fill: Color.Red,
//         stroke: stroke(Color.Green, 2)
//     });

const cd = new CanvasDrawer(ctx);
cd.draw(new Rect(600, 25, 50, 50, Color.Red));
cd.draw(new RoundRect(500, 500, 75, 75, 5, Color.Blue, { color: Color.White, width: 3 }));
cd.draw(new Circle(400, 300, 25, Color.Green, { color: Color.Black, width: 1 }));
cd.draw(new Polygon([point(5, 5), point(100, 200), point(200, 100), point(50, 75)], "red", { color: Color.Black, width: 5 }));
console.info("DONE");