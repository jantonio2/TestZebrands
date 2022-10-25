import { RepositoriesCardResult } from './RepositoriesCardResult';
import { GridRepositorieCard } from '../../styles/repositorieCardStyle';

export const RepositoriesList = () => {

  const repositorie = {
    name: "react-bolivianite-grid",
    html_url: "https://github.com/papasnippy/react-bolivianite-grid",
    description: "React grid component for virtualized rendering large tabular data.",
    topics: [
      "data-table",
      "grid",
      "react",
      "react-component",
      "spreadsheet",
      "table",
      "typescript",
      "ui-component",
      "virtualization"
    ],
    watchers: 96,
    forks: 5,
    stargazers_count: 96,
    owner: {
      login: "papasnippy",
      avatar_url: "https://avatars.githubusercontent.com/u/17431433?v=4",
      html_url: "https://github.com/papasnippy"
    }
  }

  return (
    <GridRepositorieCard>
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
      <RepositoriesCardResult repositorie={ repositorie } />
    </GridRepositorieCard>
  )
}
