export class Counter {
    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
    const container = document.querySelector(this.selector);
    if (!container) return;

    // Create elements
    this.display = document.createElement("div");

    this.incrementBtn = document.createElement("button");
    this.decrementBtn = document.createElement("button");
    this.resetBtn = document.createElement("button");

    // Set button text
    this.incrementBtn.textContent = "Increment";
    this.decrementBtn.textContent = "Decrement";
    this.resetBtn.textContent = "Reset";

    // Append elements to container
    container.appendChild(this.display);
    container.appendChild(this.incrementBtn);
    container.appendChild(this.decrementBtn);
    container.appendChild(this.resetBtn);

    // Add event listeners
    this.incrementBtn.addEventListener("click", () => this.increment());
    this.decrementBtn.addEventListener("click", () => this.decrement());
    this.resetBtn.addEventListener("click", () => this.reset());

    // Initial render
    this.update();
}

    //state methods
    increment() {
        this.count++;
        this.update();
    }

    decrement() {this.count--;
               this.update();}
    reset() {this.count=0;
             this.update();}

    update() {
        //set the initial display content
        this.display.textContent = `Count: ${this.count}`;

        // Disable decrement at zero
    this.decrementBtn.disabled = this.count === 0;

    // Add visual state class
    this.display.classList.toggle("is-zero", this.count === 0);
    }
}

//Counter is super class
//StepCounter is sub class

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        //add step property
        this.step = step;
    }

    increment() {
        this.count += this.step;
        this.update();
    }
    decrement() {
        this.count -= this.step;
        this.update();
    }
}