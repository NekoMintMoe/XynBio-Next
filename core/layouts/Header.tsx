'use client'
import Link from "next/link"
import { Typography } from '@mui/joy'

const Header = () => {
    return (
      <header>
        <div>
          <Link href="/home" style={{ textDecoration: 'inherit' }}>
            <Typography fontSize="xx-large" textColor="#5BCEFA">XynBio Next</Typography>
          </Link>
          <Typography fontSize="x-large" textColor="#F5A9B8">NextJS!</Typography>
          <br />
        </div>
      </header>
    )
}

export default Header