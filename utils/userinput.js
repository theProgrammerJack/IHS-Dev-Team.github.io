class KeyTracker {
    constructor() {
        this._keys = {};
        document.addEventListener('keydown', e => {
            this.keyDown(e.key);
        });
        
        document.addEventListener('keyup', e => {
            this.keyUp(e.key);
        });
    }
    
    keyUp(key) {
        this._keys[key] = false;
    }
    
    keyDown(key) {
        this._keys[key] = true;
    }
    
    isPressed(key) {
        return (key in this._keys ? this._keys[key] : false);
    }
    
    anyPressed(keys) {
        for (var key in arguments) {
            if (this._keys[key]) return true;
        }
        return false;
    }
}

class MoveAndShoot2d extends KeyTracker {
    constructor() {
        super();
    }
    
    get left() {
        return this.isPressed('a');
    }
    
    get right() {
        return this.isPressed('d');
    }
    
    get up() {
        return this.isPressed('w');
    }
    
    get down() {
        return this.isPressed('s');
    }
    
    get shoot() {
        return this.isPressed(' ');
    }
}
