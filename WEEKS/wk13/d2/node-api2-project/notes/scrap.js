router.get("/:id", (req, res) => {
  const id = req.params.id;
  Posts.findById(id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(400).json({ message: `Post: ${id} can not be found.` });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Error retrieving the post." });
    });
});
