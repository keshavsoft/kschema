import { kschema } from './src/v11/index.js';

// Just get the table object structure - don't call functions yet
const userTable = kschema.table('users');

// Check what properties exist
console.log('Query object keys:', Object.keys(userTable.query));
console.log('Mutate object keys:', Object.keys(userTable.mutate));

// Verify all methods exist
console.log('✅ query.get exists:', typeof userTable.query.get === 'function');
console.log('✅ query.findByPk exists:', typeof userTable.query.findByPk === 'function');

console.log('✅ mutate.insertAsIs exists:', typeof userTable.mutate.insertAsIs === 'function');
console.log('✅ mutate.insertFlat exists:', typeof userTable.mutate.insertFlat === 'function');
console.log('✅ mutate.insertGenPk exists:', typeof userTable.mutate.insertGenPk === 'function');
console.log('✅ mutate.insertWithChecks exists:', typeof userTable.mutate.insertWithChecks === 'function');
console.log('✅ mutate.deleteWithChecks exists:', typeof userTable.mutate.deleteWithChecks === 'function');
console.log('✅ mutate.updateWithChecks exists:', typeof userTable.mutate.updateWithChecks === 'function');
