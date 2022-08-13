import { useContext, useEffect, useState } from 'react'

import { Categories } from '../Categories'
import { Sort } from '../Sort'
import { PizzaBlock } from '../PizzaBlock'
import { Skeleton } from '../PizzaBlock/Skeleton'
import { Pagination } from '../Pagination'
import { AppContext } from '../../App'

export const Home = () => {
  const { searchValue } = useContext(AppContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' })

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue > 0 ? `&search=${searchValue}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    fetch(
      `https://62a84392943591102b9d9688.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
    )
      .then(res => res.json())
      .then(arr => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [categoryId, sortType, searchValue, currentPage])

  const sceleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
  const pizza = items
    .filter(pizza => {
      if (pizza.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }
      return false
    })
    .map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories value={categoryId} onCategoryClick={id => setCategoryId(id)} />
          <Sort value={sortType} onSelectSort={id => setSortType(id)} />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{isLoading ? sceleton : pizza}</div>
        <Pagination onChangePage={setCurrentPage} />
      </div>
    </div>
  )
}
