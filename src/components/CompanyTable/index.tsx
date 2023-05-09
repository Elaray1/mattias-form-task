import { Table, Badge } from '@mantine/core';
import dynamic from 'next/dynamic';

import * as companyApi from 'resources/company/company.api';

import useStyles from './styles';

const CompanyTable = () => {
  const { classes } = useStyles();

  const companies = companyApi.getAll();

  const rows = companies.map((company) => (
    <tr key={`${company.companyName}-${company.organizationNumber}`}>
      <td>{company.companyName}</td>
      <td>{company.organizationNumber}</td>
      <td>
        <Badge color={company.isFinancialInstitution ? 'green' : 'red'} variant="outline">
          {company.isFinancialInstitution ? 'Yes' : 'No'}
        </Badge>
      </td>
      <td>{company.description}</td>
    </tr>
  ));

  return (
    <Table
      className={classes.table}
      striped
      withBorder
      withColumnBorders
      highlightOnHover
    >
      <thead>
        <tr>
          <th>Company name</th>
          <th>Organisation number</th>
          <th>Financial institution</th>
          <th>Describe your business</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default dynamic(() => Promise.resolve(CompanyTable), {
  ssr: false,
});
