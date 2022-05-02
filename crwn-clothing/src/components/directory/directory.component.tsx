import CategoryItem from "../category-item/category-item";

import { Category } from "../../interface";

import "./directory.styles.scss";

type Props = {
  categories: Category[];
};

const Directory = ({ categories }: Props) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
