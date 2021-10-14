export function list(req, res) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  if (!(sort === "asc" || sort === "desc")) {
    return res.status(400).send("Invalid sort param.")
  };
  console.log({ sort })
  res.json([]);
}

export function create(req, res) {
  const { title, body }  = req.body;
  if ( title === undefined || body === undefined) {
    return res.status(400).send("Missing title or body");
  }
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
  if (title === undefined && body === undefined) {
    return res.status(400).send("Missing title and/or body.")
  }
  console.log(`Updating ${id} with ${title} and ${body}`)
  res.send("Note Updated");
}

export function deleteNote(req, res) {
  const { id } = req.params;
  console.log(`Deleting ${id}`)
  res.send("Note Deleted")
}