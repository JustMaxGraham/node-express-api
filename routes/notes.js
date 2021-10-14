export function list(req, res) {
  res.json([]);
}

export function create(req, res) {
  const { title, body }  = req.body;
  console.log(`${title} and ${body} recieved`)
  res.send("Note Created.")
}

export function read(req, res){
  const { id } = req.params;
  res.json({ 
    title: "A sample Title",
    body: "Sample body"
  });
}

export function update(req, res) {
  const { id } = req.params;
  const { title, body } = req.body;
  console.log(`Updating ${id} with ${title} and ${body}`)
  res.send("Note Updated");
}

export function deleteNote(req, res) {
  const { id } = req.params;
  console.log(`Deleting ${id}`)
  res.send("Note Deleted")
}