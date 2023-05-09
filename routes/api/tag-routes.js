const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
    include: [
      Product
    ]
  });
  res.json(tagData);
  } catch (error) {
    res.status(500).json({error});
  }
});


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk({
    where: {
      id: req.params.id
    },
    include: [
    Product
    ]
  })
  .then((tag) => {
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tag);
  })
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
const tagData = await Tag.create(req.body);
res.json({tagData})
} catch (err) {
    res.status(500).json(err)    
}}
);

// NEED TO CHECK ABOVE WORK AND COMPLETE BELOW 

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
 try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTag) {
      return res.status(404).json({
        message: "That Tag was not Found",
      });
    }
    res.json({
      message: "Tag Deleted Successfully!",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
