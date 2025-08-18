import { CreateTable } from './create-table.use-case';


describe('CreateTableUserCase', () => {
  
  test('should create table with default values', () => {

    const createTable = new CreateTable();

    const table = createTable.execute({ base: 2,  });
    const rows = table.split('\n').length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('1 x 2 = 2')
    expect(table).toContain('10 x 2 = 20')
    expect(rows).toBe(10)

  });

  test ('should create table with custom values', () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 3, limit: 5 });
    const rows = table.split('\n').length;
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain('1 x 3 = 3')
    expect(table).toContain('2 x 3 = 6')
    expect(table).toContain('3 x 3 = 9')
    expect(table).toContain('4 x 3 = 12')
    expect(table).toContain('5 x 3 = 15')
    expect(rows).toBe(5)
  });


});