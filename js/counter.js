export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

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

        const controls = document.createElement('div');
        controls.classList.add('counter-controls');
        controls.appendChild(this.decrementBtn);
        controls.appendChild(this.resetBtn);
        controls.appendChild(this.incrementBtn);

     
        container.appendChild(this.display);
        container.appendChild(controls);

        
        this.incrementBtn.addEventListener('click', () => this.increment());
        this.decrementBtn.addEventListener('click', () => this.decrement());
        this.resetBtn.addEventListener('click', () => this.reset());

        this.update();
    }

 
    increment() {
        this.count++;
        this.update();
    }

    decrement() {
       
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

  
    update() {
        this.display.textContent = `Count: ${this.count}`;

        
        this.decrementBtn.classList.toggle('btn-inactive', this.count === 0);
        this.resetBtn.classList.toggle('btn-inactive', this.count === 0);
    }
}


export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step;
    }

    increment() {
        this.count += this.step;
        this.update();
    }


    decrement() {
        if (this.count > 0) {
            this.count = Math.max(0, this.count - this.step);
            this.update();
        }
    }

 
    update() {
        this.display.textContent = `Count: ${this.count} (step: ${this.step})`;

        this.decrementBtn.classList.toggle('btn-inactive', this.count === 0);
        this.resetBtn.classList.toggle('btn-inactive', this.count === 0);
    }
}
