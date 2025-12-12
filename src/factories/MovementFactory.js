
const registry = {};

export function registerMovement(typeName, constructorFn) {
  if (!typeName || typeof constructorFn !== 'function') {
    throw new Error('registerMovement requires (typeName, constructorFn)');
  }
  registry[typeName] = constructorFn;
}

export function createMovement(data) {
  if (!data || !data.type) {
    throw new Error('createMovement: data.type is required');
  }
  const ctor = registry[data.type];
  if (!ctor) {
    throw new Error(`Movement type not registered: ${data.type}`);
  }
  return new ctor(data);
}

import { Deposit } from '../models/Deposit';
import { Withdrawal } from '../models/Withdrawal';
import { Transfer } from '../models/Transfer';
import { Payment } from '../models/Payment';


registerMovement('deposit', Deposit);
registerMovement('withdrawal', Withdrawal);
registerMovement('transfer', Transfer);
registerMovement('payment', Payment);


