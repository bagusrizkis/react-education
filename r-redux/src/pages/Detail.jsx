import { useParams } from 'react-router-dom'

export default function DetailUser() {
    const { userId } = useParams()

    // fetch detail ke server
    // tampilin ke return

    return (
        <h1>From User {userId} Detail Page</h1>
    )
}