
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute(params: CreateTableOptions): string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() /*
      DI - Dependency Injection
    */
  {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage: string = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${i} x ${base} = ${i * base}`;
      if (i < limit) outputMessage += '\n';
    }
    return outputMessage;
  }
}
