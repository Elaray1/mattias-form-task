import { FC, memo, useCallback } from 'react';
import { Modal, Box, TextInput, Checkbox, Group, Button, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { Company } from 'resources/company/company.types';

import * as companyApi from 'resources/company/company.api';

interface AddCompanyModalProps {
  opened: boolean;
  onClose: () => void;
}

const AddCompanyModal: FC<AddCompanyModalProps> = ({
  opened,
  onClose,
}) => {
  const form = useForm({
    initialValues: {
      companyName: '',
      organizationNumber: '',
      isFinancialInstitution: false,
      description: '',
    },

    validate: {
      companyName: (value) => (value.length < 3 ? 'Company name must have at least 2 letters' : null),
      organizationNumber: (value) => (!value.length ? 'This field is required' : null),
    },
  });

  const onSubmit = useCallback((data: Company) => {
    companyApi.add(data);

    notifications.show({
      title: 'Company has been added',
      message: 'Company has been added!',
      color: 'green',
    });

    form.reset();
    onClose();
  }, [onClose, form]);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add company"
      centered
    >
      <Box>
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <TextInput
            withAsterisk
            label="Company name"
            placeholder="Paralect"
            {...form.getInputProps('companyName')}
          />

          <TextInput
            withAsterisk
            label="Organization number"
            placeholder="12"
            {...form.getInputProps('organizationNumber')}
            mt={16}
          />

          <Checkbox
            mt="md"
            label="Is it financial institution?"
            {...form.getInputProps('isFinancialInstitution', { type: 'checkbox' })}
          />

          <Textarea
            placeholder="Tell us about your company"
            label="Description"
            {...form.getInputProps('description')}
            mt={16}
          />

          <Group position="right" mt="md">
            <Button type="submit" color="green">Create</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};

export default memo(AddCompanyModal);
