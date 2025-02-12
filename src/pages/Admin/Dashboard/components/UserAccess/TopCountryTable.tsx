
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { usersAcessList } from './constant';
export default function TopCountryTable() {
  return (
    <Table className="mt-2 border">
      <TableHeader>
        <TableRow className="text-sm">
          <TableHead className="px-4 text-gray-800">Top Countries</TableHead>
          <TableHead className="px-4 text-right text-gray-800">Users</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersAcessList.map((user) => (
          <TableRow className="w-auto" key={user.country}>
            <TableCell className="px-4 text-xs text-gray-600">
              {user.country}
            </TableCell>
            <TableCell className="pr-6 text-right text-xs text-gray-600">
              {user.userCount.toString().padStart(2, '0')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
