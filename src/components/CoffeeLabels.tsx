interface Props {
  register: any;
  errors: any;
}

function CoffeeLabels({ errors, register }: Props) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label text-light">Title</label>
        <input {...register("title")} className="form-control" />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>

      <div className="mb-3">
        <label className="form-label text-light">Description</label>
        <input {...register("description")} className="form-control" />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label text-light">Ingredients</label>
        <input {...register("ingredients")} className="form-control" />
        {errors.ingredients && (
          <p className="text-danger">{errors.ingredients.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label text-light">Image</label>
        <input {...register("imageUrl")} type="text" className="form-control" />
        {errors.imageUrl && (
          <p className="text-danger">{errors.imageUrl.message}</p>
        )}
      </div>
    </>
  );
}

export default CoffeeLabels;
