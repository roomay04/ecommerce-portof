import CategoryItem from "../category-item/category-item.component";
import './category-list.styles.scss';

const CategoryList = ({categories}) => {
    return (
      <div className='categories-container'>
        {
          categories.map( (category) => (
            <CategoryItem key={category.id} item={category} />
          ))
        }
      </div>
    )
}

export default CategoryList;