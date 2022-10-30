import fs from "fs";
import chalk from "chalk";
const getNotesFromFile = () => {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (e) {
    return [];
  }
};
const postNoteToFile = (data) => {
  const datajson = JSON.stringify(data);
  fs.writeFileSync("./notes.json", datajson);
};

export const readNote = (title) => {
  const data = getNotesFromFile();
  const note = data.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

export const addNotes = (title, body) => {
  const notes = getNotesFromFile();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });
  if (duplicateNote.length === undefined) {
    const data = {
      title: title,
      body: body,
    };
    notes.push(data);
    postNoteToFile(notes);
    console.log("addded note successfully");
  } else {
    console.log("title already present");
  }
};

export const removeNote = (title) => {
  const data = getNotesFromFile();
  const newData = data.filter((note) => {
    return note.title != title;
  });
  console.log(data);
  console.log(newData);
  postNoteToFile(newData);
  if (data.length === newData.length) {
    console.log(chalk.bgRed("no note found"));
  } else {
    console.log(chalk.bgGreen("removed successfully"));
  }
};

export const listNotes = () => {
  const data = getNotesFromFile();
  data.forEach((note) => {
    console.log(note.title);
    console.log(note.body);
  });
};
