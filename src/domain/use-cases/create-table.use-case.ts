export interface CreateTableUseCase {
  execute(options: CreateTableUseCaseOptions): string;
}

export interface CreateTableUseCaseOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /**
     * DI - Dependency Injection
     */
  }

  execute({ base, limit = 10 }: CreateTableUseCaseOptions): string {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
