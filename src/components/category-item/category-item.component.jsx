import './category-item.styles.scss';

const CategoryItem = ({item}) => {
  let {title, imageUrl} = item;

    return (
      <div className='category-container'>
        <div className='background-image' style={{
          backgroundImage:`url(${imageUrl})`
          }} />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Buy Now</p>
        </div>
      </div>
    )
}

export default CategoryItem;