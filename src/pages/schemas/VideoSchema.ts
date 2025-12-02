import z from "zod";

export const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  videoUrl: z.string().min(1, {
    message: "Videourl is required",
  }),
  imgaeUrl: z.string().min(1, { message: "Imageurl is required" }),
});

export type videoData = z.infer<typeof schema>;
