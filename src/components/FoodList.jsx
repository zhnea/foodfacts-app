import FoodCard from './FoodCard'

function FoodList({ products = [] }) {
  if (!products.length) {
    return <p>No results found</p>
  }

  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard
          key={product.code || product.id || Math.random()} // fallback safety
          product={product}
        />
      ))}
    </div>
  )
}

export default FoodList