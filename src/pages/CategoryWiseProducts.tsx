import { useParams } from "react-router-dom";

const CategoryWiseProducts = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>This is {category} Products</h1>
    </div>
  );
};

export default CategoryWiseProducts;
