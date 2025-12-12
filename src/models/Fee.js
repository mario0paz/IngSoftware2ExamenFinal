import { Movement } from './Movement'; 

export class Fee extends Movement {
  constructor(data) {
    super(data);
  }

  netAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#c0392b'; 
  }

  getIcon() {
    return '💸'; 
  }

  getTypeName() {
    return 'FEE';
  }
}
