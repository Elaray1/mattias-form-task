import { Company } from './company.types';

export const getAll = (): Company[] => {
  if (typeof window !== 'undefined') {
    const companies = localStorage.getItem('companies');

    return companies ? JSON.parse(companies) : [];
  }

  return [];
};

export const add = (company: Company) => {
  const companies = getAll();

  localStorage.setItem('companies', JSON.stringify([
    ...companies,
    company,
  ]));
};
