import { StudentModel } from "models";


export interface StudentProps {
  student: StudentModel,
  onClick?: (name: string) => void
}

export function Student ({ student, onClick }: StudentProps) {
  const { name, isHero  } = student

  const handlClick = () => {
    onClick?.(name)
  }

  return (
    <div>
      <button onClick={handlClick}>Click Me !!!</button>
      <h1>{ name }</h1>
      <h1>{ isHero ? "true" : 'false'}</h1>
    </div>
  );
}
