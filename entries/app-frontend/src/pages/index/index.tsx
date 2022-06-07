import { Button } from '@port/ui/src/components/Button/Button';
import { FC } from 'react';

interface IUser {
  id: string;
}

interface IProps {
  users: IUser[];
}

export const IndexPage: FC<IProps> = ({ users }) => (
  <>
    <h1>Index Page</h1>
    {users.map((user) => (
      <div>{user.id}</div>
    ))}
    <Button>Test Button</Button>
  </>
);
