import { Box } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { useState } from 'react'

const Home = () => {
    const [value, setValue] = useState(0)
    return (
        <Box>
            <Card />
            <div>
                <button onClick={() => setValue(value + 1)}>
                    Add
                </button>
                <h1>{value}</h1>
            </div>
        </Box>

    )
}

export default Home;