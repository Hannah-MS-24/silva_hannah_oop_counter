import { Counter, StepCounter } from './counter.js';

// Standard counters with different initial values
const counter1 = new Counter('#counter-container1', 0);
const counter2 = new Counter('#counter-container2', 5);
const counter3 = new Counter('#counter-container3', 10);

// StepCounter - increments/decrements by custom step
const counter4 = new StepCounter('#counter-container4', 0, 2);
const counter5 = new StepCounter('#counter-container5', 0, 5);
const counter6 = new StepCounter('#counter-container6', 0, 10);
