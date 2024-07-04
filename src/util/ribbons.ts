export default function createRibbons(options: any) {
  const _w = window;
  const _b = document.body;
  const _d = document.documentElement;

  // random helper
  const random = (...args: any[]): number | any => {
    if (args.length === 1) {
      if (Array.isArray(args[0])) {
        const index = Math.round(random(0, args[0].length - 1));
        return args[0][index];
      }
      return random(0, args[0]);
    } else if (args.length === 2) {
      return Math.random() * (args[1] - args[0]) + args[0];
    } else if (args.length === 4) {
      const array = [args[0], args[1], args[2], args[3]];
      return array[Math.floor(Math.random() * array.length)];
    }
    return 0;
  };

  // screen helper
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const screenInfo = (e?: Event) => {
    const width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
    const height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
    const scrollx =
      Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0);
    const scrolly =
      Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);

    return {
      width,
      height,
      ratio: width / height,
      centerx: width / 2,
      centery: height / 2,
      scrollx,
      scrolly
    };
  };

  // point object
  class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
      this.x = 0;
      this.y = 0;
      this.set(x, y);
    }

    set(x?: number, y?: number) {
      this.x = x || 0;
      this.y = y || 0;
    }

    copy(point: Point) {
      this.x = point.x || 0;
      this.y = point.y || 0;
      return this;
    }

    multiply(x?: number, y?: number) {
      this.x *= x || 1;
      this.y *= y || 1;
      return this;
    }

    divide(x?: number, y?: number) {
      this.x /= x || 1;
      this.y /= y || 1;
      return this;
    }

    add(x?: number, y?: number) {
      this.x += x || 0;
      this.y += y || 0;
      return this;
    }

    subtract(x?: number, y?: number) {
      this.x -= x || 0;
      this.y -= y || 0;
      return this;
    }

    clampX(min: number, max: number) {
      this.x = Math.max(min, Math.min(this.x, max));
      return this;
    }

    clampY(min: number, max: number) {
      this.y = Math.max(min, Math.min(this.y, max));
      return this;
    }

    flipX() {
      this.x *= -1;
      return this;
    }

    flipY() {
      this.y *= -1;
      return this;
    }
  }

  class Ribbon {
    private _canvas: HTMLCanvasElement | null = null;
    private _context: CanvasRenderingContext2D | null = null;
    private _width: number = 0;
    private _height: number = 0;
    private _scroll: number = 0;
    private _ribbons: any[] = [];
    private _options: any;

    constructor(options: any) {
      this._options = {
        colorSaturation: "80%",
        colorBrightness: "60%",
        colorAlpha: 0.65,
        colorCycleSpeed: 6,
        verticalPosition: "center",
        horizontalSpeed: 150,
        ribbonCount: 3,
        strokeSize: 0,
        parallaxAmount: -0.5,
        animateSections: true,
        ...options
      };

      this._onDraw = this._onDraw.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onScroll = this._onScroll.bind(this);

      this.init();
    }

    setOptions(options: any) {
      if (typeof options === "object") {
        for (const key in options) {
          if (Object.prototype.hasOwnProperty.call(options, key)) {
            this._options[key] = options[key];
          }
        }
      }
    }

    init() {
      try {
        this._canvas = document.createElement("canvas");
        this._canvas.style.display = "block";
        this._canvas.style.position = "fixed";
        this._canvas.style.margin = "0";
        this._canvas.style.padding = "0";
        this._canvas.style.border = "0";
        this._canvas.style.outline = "0";
        this._canvas.style.width = "100%";
        this._canvas.style.height = "100%";
        this._canvas.style.zIndex = "-1";

        this._onResize();

        this._context = this._canvas.getContext("2d");
        if (this._context) {
          this._context.clearRect(0, 0, this._width, this._height);
          this._context.globalAlpha = this._options.colorAlpha;
        }

        window.addEventListener("resize", this._onResize);
        window.addEventListener("scroll", this._onScroll);

        const mainElement = document.getElementById("home-main");
        mainElement?.appendChild(this._canvas);
      } catch (e) {
        const error = e as string;
        console.warn("Canvas Context Error: " + error.toString());
        return;
      }
      this._onDraw();
    }

    addRibbon() {
      const dir = Math.round(random(1, 9)) > 5 ? "right" : "left";
      let stop = 1000;
      const hide = 200;
      const min = 0 - hide;
      const max = this._width + hide;
      let movex = 0;
      let movey = 0;
      const startx = dir === "right" ? min : max;
      let starty = Math.round(random(0, this._height));

      if (/^(top|min)$/i.test(this._options.verticalPosition)) {
        starty = 0 + hide;
      } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
        starty = this._height / 2;
      } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
        starty = this._height - hide;
      }

      const ribbon = [];
      const point1 = new Point(startx, starty);
      const point2 = new Point(startx, starty);
      let point3 = null;
      const color = Math.round(random(220, 255));
      let delay = 0;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (stop <= 0) break;
        stop--;

        movex = Math.round((Math.random() * 1 - 0.2) * this._options.horizontalSpeed);
        movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));

        point3 = new Point();
        point3.copy(point2);

        if (dir === "right") {
          point3.add(movex, movey);
          if (point2.x >= max) break;
        } else if (dir === "left") {
          point3.subtract(movex, movey);
          if (point2.x <= min) break;
        }

        ribbon.push({
          point1: new Point(point1.x, point1.y),
          point2: new Point(point2.x, point2.y),
          point3: point3,
          color: color,
          delay: delay,
          dir: dir,
          alpha: 0,
          phase: 0
        });

        point1.copy(point2);
        point2.copy(point3);

        delay += 4;
      }
      this._ribbons.push(ribbon);
    }

    _drawRibbonSection(section: any) {
      if (section) {
        if (section.phase >= 1 && section.alpha <= 0) {
          return true;
        }
        if (section.delay <= 0) {
          section.phase += 0.02;
          section.alpha = Math.sin(section.phase) * 1;
          section.alpha = section.alpha <= 0 ? 0 : section.alpha;
          section.alpha = section.alpha >= 1 ? 1 : section.alpha;

          if (this._options.animateSections) {
            const mod = Math.sin(1 + (section.phase * Math.PI) / 2) * 0.1;

            if (section.dir === "right") {
              section.point1.add(mod, 0);
              section.point2.add(mod, 0);
              section.point3.add(mod, 0);
            } else {
              section.point1.subtract(mod, 0);
              section.point2.subtract(mod, 0);
              section.point3.subtract(mod, 0);
            }
            section.point1.add(0, mod);
            section.point2.add(0, mod);
            section.point3.add(0, mod);
          }
        } else {
          section.delay -= 0.5;
        }

        const s = this._options.colorSaturation;
        const l = this._options.colorBrightness;
        const c = `hsla(${section.color}, ${s}, ${l}, ${section.alpha})`;

        if (this._context) {
          this._context.save();

          if (this._options.parallaxAmount !== 0) {
            this._context.translate(0, this._scroll * this._options.parallaxAmount);
          }
          this._context.beginPath();
          this._context.moveTo(section.point1.x, section.point1.y);
          this._context.lineTo(section.point2.x, section.point2.y);
          this._context.lineTo(section.point3.x, section.point3.y);
          this._context.fillStyle = c;
          this._context.fill();

          if (this._options.strokeSize > 0) {
            this._context.lineWidth = this._options.strokeSize;
            this._context.strokeStyle = c;
            this._context.lineCap = "round";
            this._context.stroke();
          }
          this._context.restore();
        }
      }
      return false;
    }

    _onDraw() {
      this._ribbons = this._ribbons.filter((ribbon) => ribbon);
      if (this._context) {
        this._context.clearRect(0, 0, this._width, this._height);
      }

      for (const ribbon of this._ribbons) {
        let numDone = 0;
        for (const section of ribbon) {
          if (this._drawRibbonSection(section)) {
            numDone++;
          }
        }
        if (numDone >= ribbon.length) {
          this._ribbons[this._ribbons.indexOf(ribbon)] = null;
        }
      }
      if (this._ribbons.length < this._options.ribbonCount) {
        this.addRibbon();
      }
      requestAnimationFrame(this._onDraw);
    }

    _onResize(e?: Event) {
      const screen = screenInfo(e);
      this._width = screen.width;
      this._height = screen.height;

      if (this._canvas) {
        this._canvas.width = this._width;
        this._canvas.height = this._height;

        if (this._context) {
          this._context.globalAlpha = this._options.colorAlpha;
        }
      }
    }

    _onScroll(e: Event) {
      const screen = screenInfo(e);
      this._scroll = screen.scrolly;
    }
  }

  new Ribbon(options);
}
