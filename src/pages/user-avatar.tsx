import { UserAvatar } from '@/components/shared/user-avatar.tsx';

const UserAvatarPage = () => {{
  return (
    <div className="p-4">
      <UserAvatar user={{
        image: undefined,
        name: ''
      }} />
    </div>
  );
}};

export default UserAvatarPage;
