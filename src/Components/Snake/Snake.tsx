import Sketch from "react-p5";
import p5Types from "p5"


type SnakeProps = {
    width: number
    height: number
}

const Snake: React.FC<SnakeProps> = ({ 
    width, 
    height 
}: SnakeProps): React.ReactElement => {
    height = height - 2

    const x: any[] = []
    const y: any[] = []
    let segNum = 20
    let segLength = 18

    for (let i = 0; i < segNum; i++) {
        x[i] = 0
        y[i] = 0
    }

    function dragSegment(p5: p5Types, i: number, xin: number, yin: number) {
        const dx = xin - x[i]
        const dy = yin - y[i]
        const angle = p5.atan2(dy, dx)
        x[i] = xin - p5.cos(angle) * segLength
        y[i] = yin - p5.sin(angle) * segLength
        p5.push()
        p5.translate(x[i], y[i])
        p5.rotate(angle)
        p5.line(0, 0, segLength, 0)
        p5.pop()
    }


    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef)
        p5.background(0, 0, 0, 0)
        p5.strokeWeight(9)
        p5.stroke(255, 50)
    }

    const draw = (p5: p5Types) => {
        p5.clear()
        dragSegment(p5, 0, p5.mouseX, p5.mouseY)
        for (let i = 0; i < x.length - 1; i++) {
            dragSegment(p5, i + 1, x[i], y[i]);
        }
    }

    return (
        <div className="p5-container z10">
            <Sketch setup={setup} draw={draw} mouseWheel={draw}/>
        </div>
    )
}

export default Snake