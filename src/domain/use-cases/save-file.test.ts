import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('SaveFileUseCase', () => {

  const customOptions = {
      fileContent: 'custom content',
      fileName: 'custom-file',
      fileDestination: 'custom-outputs/file-destination'
    }

    const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`

  const removeFile = () => {
    if (fs.existsSync('outputs')) {
      // Check if 'outputs' is a directory
      const stats = fs.statSync('outputs');
      if (stats.isDirectory()) {
        fs.rmSync('outputs', { recursive: true, force: true });
      } else {
        fs.rmSync('outputs', { force: true });
      }
    }

    // remove 'custom-outputs' directory if it exists
     if (fs.existsSync('custom-outputs')) {
      const stats = fs.statSync('custom-outputs');
      if (stats.isDirectory()) {
        fs.rmSync('custom-outputs', { recursive: true, force: true });
      } else {
        fs.rmSync('custom-outputs', { force: true });
      }
    }
     if (fs.existsSync(customOptions.fileDestination)) {
      const stats = fs.statSync(customOptions.fileDestination);
      if (stats.isDirectory()) {
        fs.rmSync(customOptions.fileDestination, { recursive: true, force: true });
      } else {
        fs.rmSync(customOptions.fileDestination, { force: true });
      }
    }
  }

  // beforeEach(() => {
  //   jest.clearAllMocks();

  // })

  afterEach(removeFile)
  

  test('should save file with default values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt'
    const options = {
      fileContent: 'test'
    }
    const result = saveFile.execute(options);

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBe(true);

    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);

  });

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();
    

    const result = saveFile.execute(customOptions);

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile();

    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('This is a custom error from testing');
    });

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
    
  });

  test('should return false if file could not be created', () => {
    const saveFile = new SaveFile();

    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('This is a custom error from testing');
    });

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });

});