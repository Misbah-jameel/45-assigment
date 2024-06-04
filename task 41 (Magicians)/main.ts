let magicians :string [] =["misbah","madiha","mariyam"];
function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
      console.log(`${magician} is the magician`);
    });
  }
  show_magicians(magicians);