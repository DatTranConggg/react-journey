import { StudentModel } from "../../models/student";


export interface StudentProps {
  student: StudentModel
}

export function Student ({ student }: StudentProps) {
  const { name, age, isHero, hobbyList } = student
  return (
    <div>
      <h1>{ age }</h1>
      <h1>{ name }</h1>
      <h1>{ isHero ? "true" : 'false'}</h1>
      <h1>{ hobbyList }</h1>
    </div>
  );
}
