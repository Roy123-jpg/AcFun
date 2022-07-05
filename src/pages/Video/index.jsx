import React, { useState, useEffect } from 'react'
import Classify from './Classify'
import Search from './Search'


export default function Video() {

  return (
    <div>
      <Search />
      <Classify />
    </div>
  )
}
