import fs from "fs";

export interface SaveFileUseCase {
  execute({ fileContent, fileDestination, fileName }: Options): boolean;
}

export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFileUse implements SaveFileUseCase {
  constructor() {
    /**
     * Storage DataSource
     */
  }
  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error("Error saving file", error);
      return false;
    }
  }
}
