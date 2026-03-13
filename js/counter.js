export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        // Create elements
        this.display = document.createElement('div');
        this.display.classList.add('counter-value');

        this.incrementBtn = document.createElement('button');
        this.incrementBtn.textContent = '+';
        this.incrementBtn.classList.add('btn-increment');

        this.decrementBtn = document.createElement('button');
        this.decrementBtn.textContent = '-';
        this.decrementBtn.classList.add('btn-decrement');

        this.resetBtn = document.createElement('button');
        this.resetBtn.textContent = 'Reset';
        this.resetBtn.classList.add('btn-reset');

        // Wrap buttons in a controls div
        const controls = document.createElement('div');
        controls.classList.add('counter-controls');
        controls.appendChild(this.decrementBtn);
        controls.appendChild(this.resetBtn);
        controls.appendChild(this.incrementBtn);

        // Append to container
        container.appendChild(this.display);
        container.appendChild(controls);

        // Event listeners
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());
        this.resetBtn.addEventListener('click', () => this.reset());

        this.update();
    }

    // State methods
    increment() {
        this.count++;
        this.update();
    }

    decrement() {
        // Never goes below 0
        if (this.count > 0) {
            this.count--;
            this.update();
        }
    }

    reset() {
        this.count = this.initialValue;
        console.log("Reset Activated!!!");
        this.update();
    }

    // Update UI
    update() {
        this.display.textContent = `Count: ${this.count}`;

        // Toggle inactive class on decrement and reset when count is 0
        this.decrementBtn.classList.toggle('btn-inactive', this.count === 0);
        this.resetBtn.classList.toggle('btn-inactive', this.count === 0);
    }
}


// StepCounter extends Counter - increments/decrements by a custom step
export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step;
    }

    // Override increment - uses step value
    increment() {
        this.count += this.step;
        this.update();
    }

    // Override decrement - uses step, never goes below 0
    decrement() {
        if (this.count > 0) {
            this.count = Math.max(0, this.count - this.step);
            this.update();
        }
    }

    // Override update to show step info
    update() {
        this.display.textContent = `Count: ${this.count} (step: ${this.step})`;

        this.decrementBtn.classList.toggle('btn-inactive', this.count === 0);
        this.resetBtn.classList.toggle('btn-inactive', this.count === 0);
    }
}
