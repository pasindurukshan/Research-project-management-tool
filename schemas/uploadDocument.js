const imageSchema = mongoose.Schema({
    imageUrl: {
      type: String,
      required: true,
    },
  });
  const ImageSchema = mongoose.model("imageSchemas", imageSchema);