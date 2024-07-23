import { Table as MantineTable, TableProps } from '@mantine/core';

export function Table(props: TableProps) {
  return <MantineTable {...props} />;
}

export const TableHeader = MantineTable.Thead;
export const TableBody = MantineTable.Tbody;
export const TableFooter = MantineTable.Tfoot;
export const TableRow = MantineTable.Tr;
export const TableHead = MantineTable.Th;
export const TableCell = MantineTable.Td;
export const TableCaption = MantineTable.Caption;