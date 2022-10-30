import { addNotes, removeNote, listNotes, readNote } from "./notes.js";
import validator from "validator";
import chalk, { colorNames } from "chalk";
import Yargs from "yargs";
const args = Yargs(process.argv).argv;

Yargs(process.argv.slice(2))
  .command({
    command: "add",
    describe: "add a new note",
    builder: {
      title: {
        describe: "title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "body",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      addNotes(argv.title, argv.body);
    },
  })
  .parse();

Yargs(process.argv.slice(2))
  .command({
    command: "remove",
    describe: "remove a note",
    builder: {
      title: {
        describe: "title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      removeNote(argv.title);
    },
  })
  .parse();

Yargs(process.argv.slice(2))
  .command({
    command: "list",
    describe: "list of notes",
    handler: () => {
      console.log(chalk.red("Your Notes..."));
      listNotes();
    },
  })
  .parse();
Yargs(process.argv.slice(2))
  .command({
    command: "read",
    describe: "read a note",
    builder: {
      title: {
        title: "title",
        type: "string",
        demandOption: true,
      },
    },
    handler: (argv) => {
      readNote(argv.title);
    },
  })
  .parse();
console.log("hello ji");
