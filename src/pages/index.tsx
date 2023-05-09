import { useCallback, useState } from 'react';
import Head from 'next/head';
import { Center, Button, Group } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

import CompanyTable from 'components/CompanyTable';
import AddCompanyModal from 'components/AddCompanyModal';

import useStyles from './styles';

const Home = () => {
  const { classes } = useStyles();

  // need this variable to force table rerender after localstorage data change
  const [companyTableKey, setCompanyTableKey] = useState(1);

  const [opened, { open, close }] = useDisclosure(false);

  const onClear = useCallback(() => {
    localStorage.removeItem('companies');

    notifications.show({
      title: 'All companies has been deleted',
      message: 'All companies has been deleted!',
      color: 'red',
    });

    setCompanyTableKey((old) => old + 1);
  }, []);

  return (
    <>
      <Head>
        <title>Form Task</title>
      </Head>

      <AddCompanyModal opened={opened} onClose={close} />

      <Center className={classes.main}>
        <Group className={classes.buttons}>
          <Button
            onClick={onClear}
            color="red"
          >
            Clear
          </Button>

          <Button
            onClick={open}
            leftIcon={<IconPlus size={16} />}
          >
            Add
          </Button>
        </Group>

        <CompanyTable key={companyTableKey} />
      </Center>
    </>
  );
};

export default Home;
