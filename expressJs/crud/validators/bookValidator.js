const { z } = require("zod");

const bookSchema = z.object({
  title: z.string().min(2, "Title must be atleast 2 charecters."),
  writer: z.string().min(2, "Writer name must be atleast 2 charecters"),
  year: z.number().min(100, "Year must be atleast 100").int("Year must be an integer"),
});

module.exports = bookSchema;
