import UserCard from './UserCard'
import SkillList from './SkillList'
import type {Skill, User} from "./types"
import './App.css'

const user: User = {
  name: "Anna B",
  email: "anna@gmail.com",
  age: 25,
}

const skills: Skill[] = [
  {id: 1, name: "React", level: "Intermediate"},
  {id: 2, name: "TypeScript", level: "Beginner"},
  {id: 3, name: "CSS", level: "Expert"},
]

export default function App(){
  return(
    <div style={{maxWidth: 520, margin: "40px auto", padding: 16}}>
      <UserCard user = {user} isActive>
        <p style={{marginTop: 0}}>
          <strong>Status:</strong>
        </p>
        <p style={{marginTop: 10}}>
          <strong> Bio:</strong>
        </p>

        <h3 style={{margin: "12px 0 8px"}}>Skills</h3>
        <SkillList skills={skills}/>
      </UserCard>

      <UserCard user={{name: "Dima S", email: "dima@gmail.com" , age: 30}} isActive={false}>
        <p style={{margin: 0}}>
          <strong>Status:</strong>
        </p>
      </UserCard>
    </div>
  )
}