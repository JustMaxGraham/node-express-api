export function list(req, res) {
  res.json([]);
}

export function create(req, res) {
  res.send("Note Created.")
}

export function read(req, res){
  res.json({ 
    title: "A sample Title",
    body: "Sample body"
  });
}

export function update(req, res) {
  res.send("Note Updated");
}

export function deleteNote(req, res) {
  res.send("Note Deleted")
}