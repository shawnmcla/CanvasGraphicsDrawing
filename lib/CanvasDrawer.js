import { Color } from "./Color.js";
import { ShapeType } from "./Shapes/Shape.js";
import { Constants } from "./Util.js";

export class CanvasDrawer {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw(obj) {
        this.ctx.save();
        switch (obj.type) {
            case ShapeType.Rect:
                this.drawRect(obj);
                break;
            case ShapeType.RoundRect:
                this.drawRoundRect(obj);
                break;
            case ShapeType.Circle:
                this.drawCircle(obj);
                break;
            case ShapeType.Polygon:
                this.drawPolygon(obj);
                break;
            case ShapeType.Line:
                this.drawLine(obj);
                break;
            default:
                NotImplemented("CanvasDrawer::Draw", obj.type);
        }
        this.ctx.restore();
    }

    drawLine(line) {
        const x1 = line.x1 ?? 0;
        const y1 = line.y1 ?? 0;
        const x2 = line.x2 ?? 0;
        const y2 = line.y2 ?? 0;
        const color = line.color ?? Color.Black;
        const width = line.width ?? 1;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    
    drawRect(rect) {
        const x = rect.x ?? 0;
        const y = rect.y ?? 0;
        const w = rect.w ?? 0;
        const h = rect.h ?? 0;

        if (rect.fill) {
            this.ctx.fillStyle = rect.fill;
            this.ctx.fillRect(x, y, w, h);
        }

        if (rect.stroke) {
            this.ctx.strokeStyle = rect.stroke.color ?? Color.Black;
            this.ctx.lineWidth = rect.stroke.width ?? 1;
            this.ctx.fillRect(x, y, w, h);
        }
    }

    drawRoundRect(roundRect) {
        const x = roundRect.x ?? 0;
        const y = roundRect.y ?? 0;
        const w = roundRect.w ?? 0;
        const h = roundRect.h ?? 0;
        const radius = roundRect.radius ?? 1;

        this.ctx.beginPath();
        this.ctx.roundRect(x, y, w, h, radius);

        if (roundRect.fill) {
            this.ctx.fillStyle = roundRect.fill;
            this.ctx.fill();
        }

        if (roundRect.stroke) {
            this.ctx.strokeStyle = roundRect.stroke.color ?? Color.Black;
            this.ctx.lineWidth = roundRect.stroke.width ?? 1;
            this.ctx.stroke();
        }
    }

    drawPolygon(polygon) {
        const points = polygon.points;
        if (!points || points.length == 0) return;

        this.ctx.beginPath();
        this.ctx.moveTo(points[0]?.x ?? 0, points[0]?.y ?? 0);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i]?.x ?? 0, points[i]?.y ?? 0)
        }
        this.ctx.closePath();

        if (polygon.fill) {
            this.ctx.fillStyle = polygon.fill;
            this.ctx.fill();
        }

        if (polygon.stroke) {
            this.ctx.strokeStyle = polygon.stroke.color ?? Color.Black;
            this.ctx.lineWidth = polygon.stroke.width ?? 1;
            this.ctx.stroke();
        }
    }

    drawCircle(obj) {
        const x = obj.x ?? 0;
        const y = obj.y ?? 0;
        const radius = obj.radius ?? 1;

        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Constants.TWO_PI);

        if (obj.fill) {
            this.ctx.fillStyle = obj.fill;
            this.ctx.fill();
        }

        if (obj.stroke) {
            this.ctx.strokeStyle = obj.stroke.color ?? Color.Black;
            this.ctx.lineWidth = obj.stroke.width ?? 1;
            this.ctx.stroke();
        }
    }

}