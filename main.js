window.onload = main;

var keys = new MoveAndShoot2d();

function main() {
    const block = new Player(100, 300);
    const bfac = () => new Barrier(100 + (Math.random() * 500), 200 + Math.random() * 200);
    const ground = new Ground(100);
    Graphics.background("lightblue");
    Graphics.add(block, ground);
    Array(4).fill(null).forEach(() => Graphics.add(bfac()));
    Graphics.start(100);
}
