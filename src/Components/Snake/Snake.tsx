import Sketch from "react-p5";
import p5Types from "p5"


type SnakeProps = {
    width: number
    height: number
    heroHeight: number
    heroWidth: number
}

const Snake: React.FC<SnakeProps> = ({ 
    width, 
    height,
    heroHeight,
    heroWidth
}: SnakeProps): React.ReactElement => {
    height = height - 5
    heroHeight = heroHeight - 12

    let gp5: p5Types
    let treats: Treat[] = []
    let bombs: Bomb[] = []
    const segments: p5Types.Vector[] = []
    let animations: any[] = []
    let segNum = 10
    let segLength = 18
    let apple: p5Types.Image
    let bomb: p5Types.Image

    function dragSegment(segment: p5Types.Vector, i: number) {
        const xin = segment.x
        const yin = segment.y

        const dx = xin - segments[i].x
        const dy = yin - segments[i].y
        const angle = gp5.atan2(dy, dx)
        segments[i] = gp5.createVector(xin - gp5.cos(angle) * segLength, yin - gp5.sin(angle) * segLength)

        gp5.push()
        gp5.translate(segments[i].x, segments[i].y)
        gp5.rotate(angle)
        gp5.line(0, 0, segLength, 0)
        gp5.pop()
    }

    function makePointsAnimation() {
        let inc = 0.0
        let opacity = 255
        const id = ~~(Math.random() * 10000)

        animations.push({
            id: id,
            value: segments.length,
            func: function() {
                gp5.push()
                gp5.translate(gp5.mouseX, gp5.mouseY)
                gp5.noStroke()
                gp5.textSize(24)
                gp5.fill(150, 172, 150, opacity)
                gp5.text(this.value, 0, -gp5.sin(inc) * 20)
                gp5.pop()
                if (inc > 1) {
                    setTimeout(() => animations = animations.filter(anim => anim.id !== this.id), 300)
                }
                else {
                    const percent = 2
                    inc += 1 / 100 * percent
                    opacity -= 255 / 100 * percent
                }
            }
        })
    }

    function preload(p5: p5Types) {
        apple = p5.loadImage('/Img/Snake/apple.png')
        bomb = p5.loadImage('/Img/Snake/bomb.png')
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        gp5 = p5
        p5.createCanvas(width, height).parent(canvasParentRef)
        p5.background(0, 0, 0, 0)
        p5.strokeWeight(9)
        p5.stroke(255, 50)

        segments.length = 0
        for (let i = 0; i < segNum; i++) {
            segments.push(gp5.createVector(0, 0))
        }

        for (let i = 0; i < 20; i++) {
            treats.push(new Treat(Math.random() * heroWidth, Math.random() * heroHeight, 1))
        }
        for (let i = 0; i < 10; i++) {
            bombs.push(new Bomb(Math.random() * heroWidth, Math.random() * heroHeight))
        }
    }

    const draw = (p5: p5Types) => {
        gp5.clear()

        // Treats
        for (let i = 0; i < treats.length; i++) {
            const treat = treats[i]

            treat.draw()
            if (treat.pos.dist(gp5.createVector(gp5.mouseX, gp5.mouseY)) <= treat.size) {
                segNum++
                segments.push(gp5.createVector(segments[segments.length - 1].x, segments[segments.length - 1].y))
                treats[i] = new Treat(Math.random() * heroWidth, Math.random() * heroHeight, 1)
                if (Math.random() * 100 <= 80) bombs.push(new Bomb(Math.random() * heroWidth, Math.random() * heroHeight))
                makePointsAnimation()
            }
        }

        // Bombs
        for (let i = 0; i < bombs.length; i++) {
            const bomb = bombs[i]

            bomb.draw()
            if (bomb.pos.dist(gp5.createVector(gp5.mouseX, gp5.mouseY)) <= bomb.size) {
                for (let k = 0; k < segNum - Math.ceil(segNum / 2); k++) {
                    segments.pop()
                }

                segNum = Math.ceil(segNum / 2)
                bombs[i] = new Bomb(-heroWidth, -heroHeight)
                makePointsAnimation()
            }
        }

        dragSegment(gp5.createVector(gp5.mouseX, gp5.mouseY), 0)
        for (let i = 0; i < segments.length - 1; i++) {
            dragSegment(segments[i], i + 1)
        }

        animations.forEach(animation => animation.func())
    }

    class Treat {
        pos: p5Types.Vector
        points: number
        size: number

        constructor(x: number, y: number, points: number) {
            this.pos = gp5.createVector(x, y)
            this.points = points
            this.size = 24
        }

        draw() {
            gp5.image(apple, this.pos.x - this.size / 2, this.pos.y - this.size / 2)
        }
    }

    class Bomb {
        pos: p5Types.Vector
        size: number

        constructor(x: number, y: number) {
            this.pos = gp5.createVector(x, y)
            this.size = 24
        }

        draw() {
            gp5.image(bomb, this.pos.x - this.size / 2, this.pos.y - this.size / 2)
        }
    }

    return (
        <div className="p5-container z10">
            <Sketch setup={setup} draw={draw} mouseWheel={draw} preload={preload}/>
        </div>
    )
}

export default Snake