import fs from "fs";

interface Options {
  fileDestination?: string;
  fileContent: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute(options: Options): boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() // repository: StorageRepository
  {}

  execute({
    fileDestination = "outputs",
    fileContent,
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      const outputFilePath: string = `${fileDestination}/${fileName}.txt`;

      fs.writeFileSync(outputFilePath, fileContent);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
