import React, {useState, useEffect} from 'react'
import categoriesData from '../api/Categories.json';

export default function Categories() {

  const [categories, setCategories] = useState([])

	useEffect(() => {
		setCategories(categoriesData)
	}, [])

  return (
    <div className='bg-white py-4 shadow mb-4'>
      <div className='container mx-auto gap-3'>
        <h6 className='text-sm weight-600'>Kategoriler</h6>
        <div className='row'>
          {categories && categories.map((category, index) => {
            return (<a href='#' className='hover-cat col-lg-1-10 col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4 text-decoration-none d-flex flex-column align-items-center text-center p-2 pb-4 gap-3' key={index}>
                      <img src={category.image} width={48} className="rounded border" />
                      <span className='fs-15 weight-600'>{category.title}</span>
                    </a>
                    )
          })}
        </div>
      </div>
    </div>
  )
}
