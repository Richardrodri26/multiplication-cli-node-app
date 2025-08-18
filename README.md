# Multiplication Table Generator

A Node.js command-line application built with TypeScript that generates multiplication tables and saves them to text files.

## Features

- Generate multiplication tables for any base number
- Configurable limit for the multiplication range
- Option to display the table in the console
- Save tables to customizable file locations
- Clean Architecture implementation with use cases
- Built with TypeScript for type safety

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd multiplication
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Run the application in development mode using ts-node:

```bash
npm run dev -- --base <number> [options]
```

Or with nodemon for automatic restarts:

```bash
npm run dev:nodemon -- --base <number> [options]
```

### Production Mode

Build and run the application:

```bash
npm run build
npm start -- --base <number> [options]
```

### Command Line Options

| Option | Alias | Type | Required | Default | Description |
|--------|-------|------|----------|---------|-------------|
| `--base` | `-b` | number | Yes | - | The base number for the multiplication table |
| `--limit` | `-l` | number | No | 10 | The upper limit for multiplication (1 to limit) |
| `--show` | `-s` | boolean | No | false | Display the table in the console |
| `--name` | `-n` | string | No | "table" | Name of the output file |
| `--destination` | `-d` | string | No | "./outputs" | Destination directory for the output file |

### Examples

Generate a multiplication table for 5:
```bash
npm run dev -- --base 5
```

Generate a table for 7 up to 15 and display it:
```bash
npm run dev -- --base 7 --limit 15 --show
```

Generate a table with custom filename and destination:
```bash
npm run dev -- --base 3 --name "tabla-3" --destination "./custom-output"
```

Using short aliases:
```bash
npm run dev -- -b 8 -l 12 -s -n "eight-table" -d "./tables"
```

## Output Format

The generated files contain formatted multiplication tables like this:

```
=========================
Tabla del 5
=========================

1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
```

## Project Structure

```
src/
├── config/
│   └── plugins/
│       └── args.plugin.ts      # Command line arguments configuration
├── domain/
│   └── use-cases/
│       ├── create-table.use-case.ts  # Business logic for table generation
│       └── save-file.use-case.ts     # File saving logic
├── presentation/
│   └── server-app.ts           # Application orchestration
├── app.ts                      # Application entry point
└── app.logic.ts               # Legacy logic (for reference)
```

## Architecture

This application follows Clean Architecture principles:

- **Domain Layer**: Contains use cases that encapsulate business logic
- **Presentation Layer**: Handles user interface concerns (CLI in this case)
- **Config Layer**: Manages application configuration and external dependencies

## Scripts

- `npm run dev` - Run in development mode with ts-node
- `npm run dev:nodemon` - Run with nodemon for auto-restart
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Build and run the compiled application
- `npm test` - Run tests (not yet implemented)

## Dependencies

### Production Dependencies
- `yargs` - Command line argument parsing

### Development Dependencies
- `typescript` - TypeScript compiler
- `ts-node` - Run TypeScript directly
- `nodemon` - Auto-restart during development
- `rimraf` - Cross-platform rm -rf
- `@types/node` - Node.js type definitions
- `@types/yargs` - Yargs type definitions

## Error Handling

The application includes validation for:
- Base number must be greater than 0
- Limit must be greater than 0
- File creation errors are caught and logged

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC

## Author

Richard Rodriguez
