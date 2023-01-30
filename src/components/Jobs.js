import Job from "./Job";

const Jobs = () => {
  return (
    <div className="job-items">
      <Job
        color="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        color="green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        color="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        color="blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        color="pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        color="red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        color="green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        color="yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
      />
      <Job
        color="blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};

export default Jobs;
