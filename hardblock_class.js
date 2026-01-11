// Hard Block Class - New entity for v1.1
// Can be linked to GirlButton for state switching
class HardBlock {
    constructor(x, y, width, height, id = null) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
        this.blocked = true; // Always blocks pathfinding
        this.switchable = false; // Can it be blown by wind?
        this.opacity = 1.0;

        // Shatter parts (similar to Blockage)
        this.parts = [];
        const cols = 3;
        const rows = 3;
        const partW = width / cols;
        const partH = height / rows;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                this.parts.push({
                    ox: c * partW,
                    oy: r * partH,
                    w: partW - 2,
                    h: partH - 2,
                    vx: 0,
                    vy: 0
                });
            }
        }
    }

    makeSwitchable() {
        this.switchable = true;
        audioSystem.playSwitch();
    }

    // Check if wind can destroy (only if switchable)
    checkWind(wind) {
        if (!this.switchable || !this.blocked) return false;
        if (!wind.active) return false;

        const windReach = 200;

        const toBlockageX = this.x + this.width / 2 - wind.x;
        const toBlockageY = this.y + this.height / 2 - wind.y;
        const distance = Math.sqrt(toBlockageX * toBlockageX + toBlockageY * toBlockageY);

        if (distance < windReach) {
            const dot = (toBlockageX * wind.direction.x + toBlockageY * wind.direction.y) / distance;
            if (dot > 0.6) {
                this.blocked = false;
                particles.spawn(this.x + this.width / 2, this.y + this.height / 2, 'dust', 10);
                return true;
            }
        }
        return false;
    }

    draw(ctx) {
        if (!this.blocked && this.opacity <= 0) return;

        if (this.blocked) {
            // Thomas Was Alone style: solid rectangle
            ctx.fillStyle = this.switchable ? '#8b4513' : '#2d2d2d'; // Brown if switchable, dark gray if locked

            // Draw parts
            for (let p of this.parts) {
                ctx.fillRect(this.x + p.ox, this.y + p.oy, p.w, p.h);

                // Highlight
                ctx.fillStyle = this.switchable ? '#a0522d' : '#3a3a3a';
                ctx.fillRect(this.x + p.ox, this.y + p.oy, p.w, 4);
                ctx.fillStyle = this.switchable ? '#8b4513' : '#2d2d2d';
            }

            // Border
            ctx.strokeStyle = this.switchable ? '#cd853f' : '#444';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);

            // ID label (for debugging/linking)
            if (this.id) {
                ctx.fillStyle = '#fff';
                ctx.font = '10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2);
            }
        } else {
            // Shatter animation
            if (this.opacity > 0) {
                this.opacity -= 0.02;

                for (let p of this.parts) {
                    if (!p.vx) {
                        p.vx = (Math.random() - 0.5) * 10;
                        p.vy = (Math.random() - 0.5) * 10;
                    }
                    p.ox += p.vx;
                    p.oy += p.vy;

                    ctx.fillStyle = `rgba(139, 69, 19, ${this.opacity})`;
                    ctx.fillRect(this.x + p.ox, this.y + p.oy, p.w, p.h);
                }
            }
        }
    }
}
