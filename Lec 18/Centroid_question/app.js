class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static getcenteroid(p1,p2,p3){
        const x = new Point((p1.x+p2.x+p3.x)/3 , (p1.y+p2.y+p3.y)/3);
        return x;
    }
}

p1 = new Point(2,3);
p2 = new Point(2,3);
p3 = new Point(2,3);


console.log(Point.getcenteroid(p1,p2,p3))