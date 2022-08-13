import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox='0 0 280 480'
    backgroundColor='#d8d5d5'
    foregroundColor='#e3e3e3'
    {...props}
  >
    <rect x='10' y='427' rx='3' ry='3' width='120' height='30' />
    <circle cx='135' cy='130' r='120' />
    <rect x='9' y='319' rx='3' ry='3' width='250' height='85' />
    <rect x='144' y='428' rx='15' ry='15' width='120' height='30' />
    <rect x='10' y='267' rx='3' ry='3' width='250' height='25' />
  </ContentLoader>
)
