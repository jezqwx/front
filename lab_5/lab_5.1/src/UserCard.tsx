import type {ReactNode} from "react";
import type {User} from "./types"

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: React.ReactNode;
}

const UserCard = ({ user, isActive = true, children}: UserCardProps) => {
    return (
        <div
            style={{
                opacity: isActive ? 1: 0.5,
                border: "1px solid #ddd",
                padding: 16,
                borderRadius: 12,
                marginBottom: 12,
        }}>
            <h2 style={{margin: 0}}>{user.name}</h2>
            <p style={{margin: 8}}>
                {user.email} | Age: {user.age}
            </p>
            <div style={{margin: 10}}>{children}</div>
        </div>
    )
}

export default UserCard