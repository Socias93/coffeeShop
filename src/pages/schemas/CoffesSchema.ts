import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  title: z
    .string({ error: "You need to add a title" })
    .min(1, { message: "Title is mandatory" }),
  description: z
    .string({ error: "You need to add a decription" })
    .min(1, { message: "Decription is required" }),
  ingredients: z
    .string({ error: "You need to add a ingredient" })
    .min(1, { message: "Ingredient is required" }),
  imageUrl: z
    .string({ error: "You need to add a image" })
    .min(1, { message: "Image is required" }),
});

export type formData = z.infer<typeof schema>;
