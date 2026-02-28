import type {Skill, SkillLevel} from "./types"

interface SkillListProps {
  skills: Skill[];
}

const levelBadge = (level: SkillLevel) => {
    const commonStyle: React.CSSProperties = {
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 999,
        fontSize: 12,
        marginLeft: 8,
        border: "1px solid #ccc"
    }

    if (level === "Beginner") return <span style={commonStyle}>Beginner</span>
    if (level === "Intermediate") return <span style={commonStyle}>Intermediate</span>
    return <span style={commonStyle}>Expert</span>
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} {levelBadge(skill.level)}
        </li>

      ))}
    </ul>
  );
};

export default SkillList
