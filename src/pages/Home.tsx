import { useState } from "react"

type productItem = {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    image: string
  }

export function Home () {

    const [products, setProducts] = useState<productItem[]>([])
    
    return(
     <h1></h1>
    )
}