import "./categories.styles.scss";

type Props = {
  key: number;
  category: {
    title: string;
    imageUrl: string;
  };
};

const CategoryItem = (props: Props) => {
  const { title, imageUrl } = props.category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>

        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
