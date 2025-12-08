import z from "zod";

export const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  videoUrl: z.string().min(1, {
    message: "Videourl is required",
  }),
  imageUrl: z
    .instanceof(FileList)
    .refine((fl) => fl.length > 0, { message: "Image is required" }),
});

export type videoData = z.infer<typeof schema>;
