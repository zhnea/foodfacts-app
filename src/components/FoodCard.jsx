function FoodCard({ product }) {
  if (!product) return null

  const {
    product_name = "Unknown Product",
    brands = "No brand",
    nutriments = {},
    image_small_url,
  } = product

  const {
    ['energy-kcal_100g']: calories = 0,
    proteins_100g: protein = 0,
    carbohydrates_100g: carbs = 0,
    fat_100g: fat = 0,
  } = nutriments

  return (
    <div className="food-card">
      {image_small_url ? (
        <img src={image_small_url} alt={product_name} />
      ) : (
        <p>No image</p>
      )}
      <h2>{product_name}</h2>
      <p>{brands}</p>
      <p>Calories: {calories}</p>
      <p>Protein: {protein}g</p>
      <p>Carbs: {carbs}g</p>
      <p>Fat: {fat}g</p>
    </div>
  )
}

export default FoodCard