import RepositoryItem from "./RepositoryItem";

const repository ={
  name:'teste',
  description:'teste',
  link:'teste'
}

export default function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
